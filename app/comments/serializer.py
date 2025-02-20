from rest_framework import serializers
from .models import Comment
from shop.serializers import ProductSerializers
from user.user_serializers import UserSerializers


class CommentSerializers(serializers.ModelSerializer):
    product = ProductSerializers(read_only=True)
    user = UserSerializers()

    class Meta:
        model = Comment
        fields = ['user', 'product', 'text']