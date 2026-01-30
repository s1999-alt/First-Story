from rest_framework import serializers

from .models import Book, BookImage


class BookImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = BookImage
    fields = ["image", "is_main"]


class BookListSerializer(serializers.ModelSerializer):
  main_image = serializers.SerializerMethodField()

  class Meta:
    model = Book
    fields = ['id', 'title', 'slug', 'price', 'main_image']

  def get_main_image(self, obj):
    img = obj.images.filter(is_main=True).first()
    return img.image.url if img else None


class BookDetailSerializer(serializers.ModelSerializer):
  images = BookImageSerializer(many=True, read_only=True)
  category = serializers.StringRelatedField()
  
  class Meta:
    model = Book
    fields = ['id', 'title', 'slug', 'description', 'price', 'stock', 'category', 'images']