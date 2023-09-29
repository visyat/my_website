from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home (request): 
    #return HttpResponse ('Hello. Welcome to my very first VERY UGLY website using Django LMAO - Vishal :D')
    return render(request, 'home.html')