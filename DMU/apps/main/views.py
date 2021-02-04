from django.shortcuts import render
from .models import New, Context, PostContact, PostCareer, Project
from django.db.models import Q
from django.http import Http404
from urllib.parse import unquote
from . import additional

import json


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

		projects = Project.objects.order_by('-pub_date')

		return render(request, 'index.html', {'latest_news_list': latest_news_list, 'projects': projects})

def contacts(request):
	if request.method == 'POST':
		data = json.loads(request.body)

		dic = {
			'Форма' : 'Контакты',
			'Имя': data.get('name', None),
			'Телефон': data.get('phone', None),
			'Email': data.get('email', None),
			'Сообщение': data.get('message', None)
		}

		NOT_DANGER = True

		for key in dic:
			if ">" in key or "<" in key or "WHERE" in key or "UNION" in key:
				NOT_DANGER = False

		if NOT_DANGER:
			PostContact.objects.create(
					name = dic['Имя'],
					phone = dic['Телефон'],
					email = dic['Email'],
					message = dic['Сообщение']
				)
			
			additional.telegram(dic)
			additional.send_mail(dic)

			return render(request, 'main/contacts.html')
		else:
			# Исход попытки внедрения зловредного кода в БД
			pass

	elif request.method == 'GET':
		return render(request, 'main/contacts.html')

def career(request):
	if request.method == 'POST':
		data = json.loads(request.body)

		dic = {
			'Форма': 'Резюме',
			'Имя': data.get('name', None),
			'Отчество': data.get('patronymic', None),
			'Фамилия': data.get('surname', None),
			'Телефон': data.get('phone', None),
			'Желаемая должность': data.get('careerObjective', None)
		}

		NOT_DANGER = True

		for key in dic:
			if ">" in key or "<" in key or "WHERE" in key or "UNION" in key:
				NOT_DANGER = False

		if NOT_DANGER:
			
			PostCareer.objects.create(
				name = dic['Имя'],
				patronymic = dic['Отчество'],
				surname = dic['Фамилия'],
				phone = dic['Телефон'],
				message = dic['Желаемая должность']
			)

			additional.telegram(dic)
			additional.send_mail(dic)

		else:
			# Исход попытки внедрения зловредного кода в БД
			pass

		return render(request, 'main/contacts.html')

	elif request.method == 'GET':
		latest_news_list = New.objects.order_by('-pub_date')[:5]
		return render(request, 'main/career.html', {'latest_news_list': latest_news_list})


def projects(request):
	projects = Project.objects.order_by('-pub_date')
	return render(request, 'main/projects.html', {'projects': projects})

def detail_project(request, project_id):
	try:
		a = Project.objects.get(id = project_id)
	except:
		raise Http404("Not found :(")
	return render(request, 'main/currentProject.html', {'project': a})


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

def detail_new(request, new_id):
	try:
		a = New.objects.get(id = new_id)
	except:
		raise Http404("Not found :(")
	return render(request, 'main/currentNew.html', {'new': a})


def services(request):
	return render(request, 'main/services.html')

def servicesFuncTD(request):
	return render(request, 'main/ServisesSubPages/funcTD.html')

def servicesRoads(request):
	return render(request, 'main/ServisesSubPages/roads.html')