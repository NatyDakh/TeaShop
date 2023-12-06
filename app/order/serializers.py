from rest_framework import serializers
from .models import Order
from shop.serializers import ProductSerializers
from user.user_serializers import UserSerializers


class OrderSerializers(serializers.ModelSerializer):
    product = ProductSerializers()
    user = UserSerializers(read_only=True)

    class Meta:
        model = Order
        fields = ['address', 'user',  'time', 'product']

