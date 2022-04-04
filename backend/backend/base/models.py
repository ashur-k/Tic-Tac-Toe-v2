from django.db import models

class GameInfo(models.Model):

    class Meta:
        verbose_name_plural = 'GameInfo'

    name = models.CharField(max_length=254)
    description = models.TextField()

    def __str__(self):
        return self.name