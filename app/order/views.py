from django.shortcuts import render
from .serializers import OrderSerializers
from rest_framework import viewsets
from .models import Order


class OrderViewsets(viewsets.ModelViewSet):
    serializer_class = OrderSerializers
    queryset = Order.objects.all()
