from django.shortcuts import render
from .serializers import ProductSerializers
from rest_framework import viewsets
from .models import Product


class ProductViewsets(viewsets.ModelViewSet):
    serializer_class = ProductSerializers
    queryset = Product.objects.all()
