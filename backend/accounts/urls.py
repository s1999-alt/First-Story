from django.urls import path, include
from .views import RegisterView, LoginView, ItemListCreateView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='Register'),
    path('login/', LoginView.as_view(), name='login'),
    path('items/', ItemListCreateView.as_view(), name='Item-list-create'),
]
