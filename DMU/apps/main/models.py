from django.db import models

# Create your models here.

class New(models.Model):
	title = models.CharField('Title of New', max_length = 150)
	text = models.TextField('New text')
	pub_date = models.DateTimeField('Date of publish')
	image = models.ImageField('Image of new')