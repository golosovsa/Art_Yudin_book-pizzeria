from django.urls import path

from . import views


urlpatterns = [
    path('', views.PizzeriaListApiView.as_view(), name='pizzeria_list'),
    path('<int:id>/', views.PizzeriaRetrieveApiView.as_view(), name='pizzeria_detail'),
    path('create/', views.PizzeriaCreateApiView.as_view(), name='pizzeria_create'),
    path('update/<int:id>/', views.PizzeriaRetrieveUpdateApiView.as_view(), name='pizzeria_update'),
    path('delete/<int:id>/', views.PizzeriaDestroyApiView.as_view(), name='pizzeria_delete'),
]
