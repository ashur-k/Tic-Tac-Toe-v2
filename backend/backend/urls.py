import imp
from django.contrib import admin
from django.urls import path, include

# imports to setup image and static urls
from django.conf import settings

# function import allow us to connect to URLS
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.urls'))
]

# adding static and media urls paths
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT )