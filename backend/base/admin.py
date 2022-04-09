from django.contrib import admin
from .models import Header


class HeaderAdmin(admin.ModelAdmin):
  site_header = 'Header Information'
  list_display = (
    'name',
    'image'
  )
  
  ''' To make sure frontend not break adding admin setting for header API data not 
      able to accidental delete or accidental add new information, 
      only edit information on header data is allowed, so client can easily updata header 
      content 
  '''
  
  def has_add_permission(self, request, obj=None):
    return False

  def has_delete_permission(self, request, obj=None):
    return False
  
  
admin.site.register(Header, HeaderAdmin)
