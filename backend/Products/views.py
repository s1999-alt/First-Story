from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Book
from .serializers import BookListSerializer, BookImageSerializer, BookDetailSerializer

class BookListView(APIView):
  permission_classes = [AllowAny]

  def get(self, request):
    queryset = Book.objects.filter(is_active=True)

    search = request.GET.get('search')
    category = request.GET.get('category')

    if search:
      queryset = queryset.filter(title__icontains=search)
    if category:
      queryset = queryset.filter(category__slug=category)

    serializer = BookListSerializer(queryset, many=True)
    return Response(serializer.data)


class BookDetailView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, slug):
      book = get_object_or_404(Book, slug=slug, is_active=True)
      serializer = BookDetailSerializer(book)
      return Response(serializer.data)