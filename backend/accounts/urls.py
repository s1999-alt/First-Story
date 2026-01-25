from django.urls import path, include
from .views import RegisterView, LoginView, RefreshView, LogoutView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='Register'),
    path('login/', LoginView.as_view(), name='login'),
    path('refresh/', RefreshView.as_view(), name='Refresh'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
