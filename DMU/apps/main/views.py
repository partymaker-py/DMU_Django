from django.shortcuts import render


def index(request):
    return render(request, 'base.html')


def contacts(request):
    return render(request, 'main/contacts.html')


def career(request):
    return render(request, 'main/career.html')


def projects(request):
    return render(request, 'main/projects.html')


def about(request):
    return render(request, 'main/aboutCompany.html')
