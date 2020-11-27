import datetime

from django.db import models
from django.utils import timezone
# Create your models here.


# Модель для новостей
class New(models.Model):
	title = models.CharField('Title of New', max_length = 150)
	text = models.TextField('New text')
	pub_date = models.DateTimeField('Date of publish')
	image = models.ImageField('Image of new')

	# Не обращай внимания)
	def __str__(self):
		return self.title

	# Если статья опубликована раньше чем неделю назад, возвращает True
	def was_published_recently(self):
		return self.pub_date >= (timezone.now() - datetime.timedelta(days=7))

	def get_absolute_url(self):
		return '/news/' + str(self.id)

# Модель для наполнения сайта
class Context(models.Model):
	title = models.CharField('Title of page', max_length=50)
	text = models.TextField('Text')
	
	# Не обращай внимания)
	def __str__(self):
		return self.title + ': ' + self.text[:150] + '...'

	def get_absolute_url(self):
		if self.title == 'Главная':
			return '/'
		elif self.title == '':
			return ''
		elif self.title == '':
			return ''
		elif self.title == '':
			return ''
		elif self.title == '':
			return ''
		elif self.title == '':
			return ''

class Postcontacts(models.Model):
	name = models.CharField('Name', max_length = 30)
	phone = models.CharField('Phone', max_length = 15)
	email = models.CharField('Email', max_length = 30)
	message = models.TextField('Message')