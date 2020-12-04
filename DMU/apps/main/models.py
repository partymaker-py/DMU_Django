import datetime

from django.db import models
from django.utils import timezone
from datetime import timedelta
# Create your models here.


# Модель для новостей
class New(models.Model):
	title = models.CharField('Title of New', max_length = 150)
	text = models.TextField('Text')

	image = models.ImageField('MAIN PHOTO', blank=True, upload_to="images/")
	video = models.FileField('VIDEO 3', upload_to='videos/', null=True, blank=True)
	text2 = models.TextField('Text 2', blank=True)

	image2 = models.ImageField('ADDITIOANL PHOTO', blank=True, upload_to="images/")
	video2 = models.FileField('VIDEO 2', upload_to='videos/', null=True, blank=True)
	text3 = models.TextField('Text 3', blank=True)

	image3 = models.ImageField('ADDITIOANL PHOTO 2', blank=True, upload_to="images/")
	video3 = models.FileField('VIDEO 3', upload_to='videos/', null=True, blank=True)
	text4 = models.TextField('Text 4', blank=True)

	pub_date = models.DateTimeField('Date of publish', default=timezone.now())

	# Не обращай внимания)
	def __str__(self):
		return self.title

	@property
	def photo_url(self):
		if self.image and hasattr(self.image, 'url'):
			return self.image.url

	@property
	def photo_url2(self):
		if self.image2 and hasattr(self.image2, 'url'):
			return self.image2.url

	@property
	def photo_url3(self):
		if self.image3 and hasattr(self.image3, 'url'):
			return self.image3.url

	@property
	def video_url(self):
		if self.video and hasattr(self.video, 'url'):
			return self.video.url

	@property
	def video_url2(self):
		if self.video and hasattr(self.video2, 'url'):
			return self.video2.url

	@property
	def video_url3(self):
		if self.video3 and hasattr(self.video3, 'url'):
			return self.video3.url


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

class PostContact(models.Model):
	name = models.CharField('Name', max_length = 30)
	phone = models.CharField('Phone', max_length = 15)
	email = models.CharField('Email', max_length = 30)
	message = models.TextField('Message')
	pub_date = models.DateTimeField(default=datetime.datetime.now())

	def __str__(self):
		return str(self.pub_date + timedelta(hours=3)) + ' ' + self.name


class PostCareer(models.Model):
	name = models.CharField('Name', max_length = 30)
	patronymic = models.CharField('Patronymic', max_length = 30)
	surname = models.CharField('Surname', max_length = 30)
	phone = models.CharField('Phone', max_length = 15)
	message = models.TextField('Message')
	pub_date = models.DateTimeField(default=datetime.datetime.now())

	def __str__(self):
		return str(self.pub_date + timedelta(hours=3)) + ' ' + self.name + ' ' + self.patronymic + ' ' + self.surname