from django.db import models
from django.contrib.auth.models import User
from shop.models import Product


class Comment(models.Model):
    text = models.CharField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.text
