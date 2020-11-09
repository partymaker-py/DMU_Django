from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contacts', views.contacts, name='contacts'),
    path('career', views.career, name='career'),
    path('projects', views.projects, name='projects'),
    path('about', views.about, name='about')
]
