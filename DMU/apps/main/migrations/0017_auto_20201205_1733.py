# Generated by Django 2.2.16 on 2020-12-05 14:33

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_auto_20201204_1911'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='Title of project')),
                ('text', models.TextField(verbose_name='Text')),
                ('image', models.ImageField(blank=True, upload_to='images/', verbose_name='MAIN PHOTO')),
                ('video', models.FileField(blank=True, null=True, upload_to='videos/', verbose_name='VIDEO 3')),
                ('text2', models.TextField(blank=True, verbose_name='Text 2')),
                ('image2', models.ImageField(blank=True, upload_to='images/', verbose_name='ADDITIOANL PHOTO')),
                ('video2', models.FileField(blank=True, null=True, upload_to='videos/', verbose_name='VIDEO 2')),
                ('text3', models.TextField(blank=True, verbose_name='Text 3')),
                ('image3', models.ImageField(blank=True, upload_to='images/', verbose_name='ADDITIOANL PHOTO 2')),
                ('video3', models.FileField(blank=True, null=True, upload_to='videos/', verbose_name='VIDEO 3')),
                ('text4', models.TextField(blank=True, verbose_name='Text 4')),
                ('pub_date', models.DateTimeField(default=datetime.datetime(2020, 12, 5, 14, 33, 57, 380918, tzinfo=utc), verbose_name='Date of publish')),
            ],
        ),
        migrations.AlterField(
            model_name='new',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/', verbose_name='MAIN PHOTO'),
        ),
        migrations.AlterField(
            model_name='new',
            name='image2',
            field=models.ImageField(blank=True, upload_to='images/', verbose_name='ADDITIOANL PHOTO'),
        ),
        migrations.AlterField(
            model_name='new',
            name='image3',
            field=models.ImageField(blank=True, upload_to='images/', verbose_name='ADDITIOANL PHOTO 2'),
        ),
        migrations.AlterField(
            model_name='new',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 5, 14, 33, 57, 344338, tzinfo=utc), verbose_name='Date of publish'),
        ),
        migrations.AlterField(
            model_name='new',
            name='text2',
            field=models.TextField(blank=True, verbose_name='Text 2'),
        ),
        migrations.AlterField(
            model_name='new',
            name='text3',
            field=models.TextField(blank=True, verbose_name='Text 3'),
        ),
        migrations.AlterField(
            model_name='new',
            name='text4',
            field=models.TextField(blank=True, verbose_name='Text 4'),
        ),
        migrations.AlterField(
            model_name='new',
            name='video',
            field=models.FileField(blank=True, null=True, upload_to='videos/', verbose_name='VIDEO 3'),
        ),
        migrations.AlterField(
            model_name='new',
            name='video2',
            field=models.FileField(blank=True, null=True, upload_to='videos/', verbose_name='VIDEO 2'),
        ),
        migrations.AlterField(
            model_name='new',
            name='video3',
            field=models.FileField(blank=True, null=True, upload_to='videos/', verbose_name='VIDEO 3'),
        ),
        migrations.AlterField(
            model_name='postcareer',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 5, 17, 33, 57, 383002)),
        ),
        migrations.AlterField(
            model_name='postcontact',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 5, 17, 33, 57, 382345)),
        ),
    ]
