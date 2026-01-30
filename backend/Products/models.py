from django.db import models


class Category(models.Model):
  name = models.CharField(max_length=100, unique=True)
  slug = models.SlugField(unique=True)
  is_active = models.BooleanField(default=True)

  def __str__(self):
    return self.name
  

class Book(models.Model):
  title = models.CharField(max_length=200)
  slug = models.SlugField(unique=True)
  description = models.TextField()
  price = models.DecimalField(max_digits=10, decimal_places=2)
  stock = models.PositiveIntegerField()
  category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="books")
  is_active = models.BooleanField(default=True)

  def __str__(self):
    return self.title
  

class BookImage(models.Model):
  book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="images")
  image = models.ImageField(upload_to="books/")
  is_main = models.BooleanField(default=False)



