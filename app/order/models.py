from django.db import models
from django.contrib.auth.models import User
from ..shop.models import Product


class Order(models.Model):
    address = models.CharField(max_length=100)
    time = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
