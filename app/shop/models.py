from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    index = models.IntegerField()
    cost = models.IntegerField()
    text = models.CharField(max_length=1000)
    shop_store = models.BooleanField()
    imageUrl = models.ImageField(upload_to="images", default='../../Teashop/image/Rectangle.svg')

    def __str__(self) -> str:
        return self.name

