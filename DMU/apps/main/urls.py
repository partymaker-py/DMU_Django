from django.urls import path, include

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('contacts', views.contacts, name='contacts'),
    path('career', views.career, name='career'),
    path('projects', views.projects, name='projects'),
    path('projects/<int:project_id>/', views.detail_project, name='detail_project'),
    path('about', views.about, name='about'),
    path('news', views.news, name='news'),
    path('news/<int:new_id>/', views.detail_new, name='detail_new'),
    path('services', views.services, name='services'),
    path('services/funcTD', views.servicesFuncTD, name='funcTD'),
    path('services/roads', views.servicesRoads, name='roads')
]
