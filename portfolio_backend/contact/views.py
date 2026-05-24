from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer

# Create your views here.

@api_view(['POST'])

def contact_view(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "Message sent successfully"
        })
    
    return Response(serializer.errors)