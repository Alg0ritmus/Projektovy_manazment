## Django imports
from django.contrib.auth.models import User, Group

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