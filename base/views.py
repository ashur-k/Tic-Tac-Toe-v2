from django.shortcuts import render


# Importing Django Rest Framework
from rest_framework.decorators import api_view
from rest_framework.response import Response

# importing DB and DB serialisers
from .models import Header
from .serializers import HeaderSerializer


@api_view(['GET'])
def getTicTacToe(request):
    headers = Header.objects.all()
    serializer = HeaderSerializer(headers, many=True)
    return Response(serializer.data)
