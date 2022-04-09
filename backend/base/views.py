from django.shortcuts import render


'Importing Django Rest Framework'
from rest_framework.decorators import api_view
from rest_framework.response import Response

ticTacToe = [
    {
        'id': '1',
        'name': 'Tic Tac Toe',
        'description': 'Tic-Tac-Toe is a long beloved classic pen and paper or board game for two players. Variations of Tic Tac Toe have been played since the Roman Empire and 3 in a row games can be traced all the way back to ancient Egypt!'
    }
]


@api_view(['GET'])
def getTicTacToe(request):
    return Response(ticTacToe)
