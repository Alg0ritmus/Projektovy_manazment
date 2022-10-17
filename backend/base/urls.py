from django.urls import path
from . import views

## add JWT imports
# https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html#installation

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('',views.home,name="home"),
    path('register/',views.registration_view,name="register"),
    
    # JWT urls
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
