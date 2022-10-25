## Django imports
from django.contrib.auth.models import User, Group
import pyrebase


import json

import uuid



## DRF imports
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET','POST'])
def home(request):
    data = request.body
    return Response({"skuska":"working..","data":data})


@api_view(['POST'])
def registration_view(request):
      
    if request:
        user = User.objects.create_user(username=request.data['username'],
        password = request.data['password'],email=request.data['email'])
        user.save()
    else:
        return Response({"Error":"Something goes wrong..."})
  
        


    return Response({"Success":"User is sucessfully registrated!"})


###############################################################





@api_view(['POST'])
def fb_registration_view(request):
    firebaseConfig = {
    "apiKey": "AIzaSyAqYEbX3wP8cMWpp3LYrJnmlnoiUoAhzbc",
    "authDomain": "st-project-62715.firebaseapp.com",
    "projectId": "st-project-62715",
    "storageBucket": "st-project-62715.appspot.com",
    "messagingSenderId": "771921370520",
    "appId": "1:771921370520:web:6fda1cd80a2785b7fe5fed",
    "measurementId": "G-1G83VXG6Z5",
    "databaseURL": ""
    }
    firebase=pyrebase.initialize_app(firebaseConfig)
    authe = firebase.auth()
    #database=firebase.database()    

    """
    [{
        "pass":"skuska",
        "email":"skuska@skuska.com"
    }]
    """

    email=json.loads(request.body.decode())[0]["email"] or request.POST.get("email") 
    pasw=json.loads(request.body.decode())[0]["pass"] or request.POST.get("pass") 

    print(email,pasw)


    try:
        # if there is no error then signin the user with given email and password
        user=authe.sign_in_with_email_and_password(email,pasw)
    except:
        message="Invalid Credentials!!Please ChecK your Data"
        return Response({"message":message})

    session_id=user['idToken']
    request.session['uid']=str(session_id)

    return Response({"user":user['idToken'],"email":email,"user_info":user})




"""
def postsignUp(request):
     email = request.POST.get('email')
     passs = request.POST.get('pass')
     name = request.POST.get('name')
     try:
        # creating a user with the given email and password
        user=authe.create_user_with_email_and_password(email,passs)
        uid = user['localId']
        idtoken = request.session['uid']
        print(uid)
     except:
        return render(request, "Registration.html")
     return render(request,"Login.html")

"""

@api_view(['POST'])
def pure_fb_registration_view(request):
    pass

"""

# https://firebase.google.com/docs/auth/admin/create-custom-tokens#python

    #import os
    #os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="creds.json"

    firebaseConfig = {
    "apiKey": "AIzaSyAqYEbX3wP8cMWpp3LYrJnmlnoiUoAhzbc",
    "authDomain": "st-project-62715.firebaseapp.com",
    "projectId": "st-project-62715",
    "storageBucket": "st-project-62715.appspot.com",
    "messagingSenderId": "771921370520",
    "appId": "1:771921370520:web:6fda1cd80a2785b7fe5fed",
    "measurementId": "G-1G83VXG6Z5",
    "databaseURL": ""
    }
    

    options = {
        'serviceAccountId': 'tPerULojkdSWNFVSJvQtnv9BcXh2@st-project-62715.iam.gserviceaccount.com',
    }
    
   

    fb=firebase_admin.initialize_app(options=firebaseConfig)
    fb.get_credentials()
    
    
    uid = str(uuid.uuid4())
    additional_claims = {
        "premiumAccount": True,
        "name":"skuska"
    }


    
    custom_token = auth.create_custom_token(uid, additional_claims,app=fb)
     
    return Response({"custom_token":"asc"})
"""