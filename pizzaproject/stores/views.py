from rest_framework import generics

from .serializers import PizzeriaListSerializer, PizzeriaDetailSerializer
from .models import Pizzeria


class PizzeriaListApiView(generics.ListAPIView):
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaListSerializer


class PizzeriaRetrieveApiView(generics.RetrieveAPIView):
    lookup_field = 'id'
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaCreateApiView(generics.CreateAPIView):
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaRetrieveUpdateApiView(generics.RetrieveUpdateAPIView):
    lookup_field = 'id'
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaDetailSerializer


class PizzeriaDestroyApiView(generics.DestroyAPIView):
    lookup_field = 'id'
    queryset = Pizzeria.objects.all()
