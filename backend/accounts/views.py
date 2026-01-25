from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from .serializers import RegisterSerializer


User = get_user_model()

class RegisterView(APIView):
  permission_classes = [permissions.AllowAny]

  def post(self, request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response({'message': 'User Registered Successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

class LoginView(APIView):
  def post(self, request):
    email = request.data.get("email")
    password = request.data.get("password")

    user = authenticate(request, email=email, password=password)

    if not user:
      return Response({"error":"Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    
    refresh = RefreshToken.for_user(user)

    response = Response({'access': str(refresh.access_token)})

    response.set_cookie(
      key='refresh_token',
      value=str(refresh),
      httponly=True,
      secure=False,
      samesite='Lax'
    )
    return response
  

class RefreshView(APIView):
  def post(self, request):
    refresh_token = request.COOKIES.get('refresh_token')
    if not refresh_token:
      return Response({'error': 'No refresh Token'}, status=status.HTTP_401_UNAUTHORIZED)
    
    refresh = RefreshToken(refresh_token)
    return Response({
      'access': str(refresh.access_token)
    })
  

class LogoutView(APIView):
  permission_classes = [permissions.IsAuthenticated]

  def post(self, request):
    try:
      refresh_token = request.COOKIES.get("refresh_token")
      if refresh_token:
        token = RefreshToken(refresh_token)
        token.blacklist()

      response = Response(
        {"message":"Logout Successfully"},
        status=status.HTTP_200_OK
      )

      response.delete_cookie("refresh_token")
      return response
    except Exception:
      return Response(
        {"error": "Invalid Token"},
        status=status.HTTP_400_BAD_REQUEST
      )




    
  


