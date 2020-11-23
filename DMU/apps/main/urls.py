from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contacts', views.contacts, name='contacts'),
    path('career', views.career, name='career'),
    path('projects', views.projects, name='projects'),
    path('about', views.about, name='about'),
    path('news', views.news, name='news'),
    path('services', views.services, name='services'),
    path('services/buildings', views.servicesBuildings, name='buildings'),
    path('services/buildingSurvey', views.servicesBuildingsSurvey, name='buildingSurvey'),
    path('services/funcTD', views.servicesFuncTD, name='funcTD'),
    path('services/roads', views.servicesRoads, name='roads')
]
