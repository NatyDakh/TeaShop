from django.shortcuts import render
from .serializer import CommentSerializers
from rest_framework import viewsets
from .models import Comment


class CommenttViewsets(viewsets.ModelViewSet):
    serializer_class = CommentSerializers
    queryset = Comment.objects.all()