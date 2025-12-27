from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
  email = models.EmailField(unique=True)
  username = models.CharField(max_length=100, unique=True)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []

  def __str__(self):
    return self.username
  

class Item(models.Model):
  name = models.CharField(max_length=100)
  owner = models.ForeignKey(User, on_delete=models.CASCADE)