from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  confirm_password = serializers.CharField(write_only=True)

  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'password', 'confirm_password']
  
  def validate(self, attrs):
    if attrs['password'] != attrs['confirm_password']:
      raise serializers.ValidationError({'password': "Password do not match"})
  
  def create(self, validated_data):
    user = User(
      username = validated_data['username'],
      email = validated_data['email']
    )
    user.set_password(validated_data['password'])
    user.save()
    return user