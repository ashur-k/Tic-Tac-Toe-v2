from django.shortcuts import render


'Importing Django Rest Framework'
from rest_framework.decorators import api_view
from rest_framework.response import Response

ticTacToe = [
    {
        'id': '1',
        'name': 'Tic Tac Toe',
        'description': 'Tic Tac Toe API'
    }
]


@api_view(['GET'])
def getTicTacToe(request):
    return Response(ticTacToe)
