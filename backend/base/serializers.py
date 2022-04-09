from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Header


class HeaderSerializer(serializers.ModelSerializer):
  class Meta:
    model = Header
    fields = '__all__'

