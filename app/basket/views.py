from django.shortcuts import render
from .serializer import BasketSerializers
from rest_framework import viewsets
from .models import Basket


class BasketViewsets(viewsets.ModelViewSet):
    serializer_class = BasketSerializers
    queryset = Basket.objects.all()