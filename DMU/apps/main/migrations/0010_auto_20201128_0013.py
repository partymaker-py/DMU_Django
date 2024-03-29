# Generated by Django 2.2.16 on 2020-11-27 21:13

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20201127_2233'),
    ]

    operations = [
        migrations.AlterField(
            model_name='new',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 27, 21, 13, 35, 935948, tzinfo=utc), verbose_name='Date of publish'),
        ),
        migrations.AlterField(
            model_name='postcareer',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 27, 21, 13, 35, 973810, tzinfo=utc), verbose_name='Date of publish'),
        ),
        migrations.AlterField(
            model_name='postcontact',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 27, 21, 13, 35, 971643, tzinfo=utc), verbose_name='Date of publish'),
        ),
    ]
