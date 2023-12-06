from rest_framework import serializers
from .models import Basket
from shop.serializers import ProductSerializers
from user.user_serializers import UserSerializers


class BasketSerializers(serializers.ModelSerializer):
    product = ProductSerializers(read_only=True)
    user = UserSerializers()

    class Meta:
        model = Basket
        fields = ['user', 'product']

