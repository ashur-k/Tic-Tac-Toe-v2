import imp
from django.contrib import admin
from django.urls import path, include

# imports to setup image and static urls
from django.conf import settings

# function import allow us to connect to URLS
from django.conf.urls.static import static

from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/', include('base.urls'))
]

# adding static and media urls paths
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT )
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT )

# Changing Admin Panel Headings And Site Title:
admin.site.site_header = 'Tic Tac Toe'
admin.site.site_title = 'Tic Tac Toe Admin'
admin.site.index_title = 'Tic Tac Toe Admin'