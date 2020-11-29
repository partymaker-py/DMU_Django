from django.shortcuts import render
from .models import New, Context, PostContact, PostCareer
from django.db.models import Q
from django.http import Http404
from urllib.parse import unquote
import json
import requests


API_TOKEN = '1415059752:AAGzQtLrO-l7qLDPoCbbubVTX8gyXmTWau4'
CHAT_ID = '-444340839'


	


# Поиск + отображение главной страницы
def index(request):
	search_query = unquote(request.GET.get('search', ''))
	# Условие чтобы понимать человек на главную зайти хочет или использует поиск
	if search_query:
		posts_news = New.objects.filter(Q(title__icontains=search_query) | Q(text__icontains=search_query))
		posts_context = Context.objects.filter(text__icontains=search_query)

		if posts_news:
			for a in posts_news:
				a.text = a.text[:300] + '...'

		if posts_context:
			for a in posts_context:
				a.text = a.text[:300] + '...'

		if posts_news or posts_context:
			print('posts_news:' + str(posts_news) + ' ,' + 'posts_context: ' + str(posts_context))
			return render(request, 'main/searchResult.html', {'posts_news': posts_news, 'posts_context': posts_context, "search_query": search_query})
		else:
			return render(request, 'main/notFound.html', {'search_query': search_query})

	else:
		latest_news_list = New.objects.order_by('-pub_date')[:3]
		for new in latest_news_list:
			new.text = new.text[:150] + '...'
		return render(request, 'index.html', {'latest_news_list': latest_news_list})

def contacts(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		PostContact.objects.create(
				name = data.get('name', None),
				phone = data.get('phone', None),
				email = data.get('email', None),
				message = data.get('message', None)
			)
		return render(request, 'main/contacts.html')

	elif request.method == 'GET':
		return render(request, 'main/contacts.html')

def career(request):
	if request.method == 'POST':
		data = json.loads(request.body)

		dic = {
			'Имя': data.get('name', None),
			'Отчество': data.get('patronymic', None),
			'Фамилия': data.get('surname', None),
			'Телефон': data.get('phone', None),
			'Сообщение': data.get('message', None)
		}

		PostCareer.objects.create(
			name = dic['Имя'],
			patronymic = dic['Отчество'],
			surname = dic['Фамилия'],
			phone = dic['Телефон'],
			message = dic['Сообщение']
		)

		DATA = 'Форма: Карьера\n \n'
		for key in dic:
			DATA += key + ": " + dic[key] + '\n'

		url = 'https://api.telegram.org/bot{}/sendMessage?chat_id={}&parse_mode=html&text={}'.format(API_TOKEN, CHAT_ID, DATA)

		r = requests.get(url)

		if r:
			print('TELEGRAM SUCCESS')
		else:
			print('TELEGRAM ERROR')

		return render(request, 'main/contacts.html')

	elif request.method == 'GET':
		latest_news_list = New.objects.order_by('-pub_date')[:5]
		return render(request, 'main/career.html', {'latest_news_list': latest_news_list})


def projects(request):
    return render(request, 'main/projects.html')


def about(request):
	latest_news_list = New.objects.order_by('-pub_date')[:3]
	return render(request, 'main/aboutCompany.html', {'latest_news_list': latest_news_list})


def news(request):
	latest_news_list = New.objects.order_by('-pub_date')[:5]
	for new in latest_news_list:
		counter = 0
		for a in new.text:
			counter = counter + 1
			if a == '...' or a == '.' or a == '!' or a == '?':
				new.text = new.text[:counter]

	return render(request, 'main/news.html', {'latest_news_list': latest_news_list})

def detail(request, new_id):
	try:
		a = New.objects.get(id = new_id)
	except:
		raise Http404("Not found :(")
	return render(request, 'main/currentNew.html', {'new': a})


def services(request):
	return render(request, 'main/services.html')

def servicesBuildings(request):
	return render(request, 'main/ServisesSubPages/buildings.html')

def servicesFuncTD(request):
	return render(request, 'main/ServisesSubPages/funcTD.html')

def servicesBuildingsSurvey(request):
	return render(request, 'main/ServisesSubPages/buildingSurvey.html')

def servicesRoads(request):
	return render(request, 'main/ServisesSubPages/roads.html')