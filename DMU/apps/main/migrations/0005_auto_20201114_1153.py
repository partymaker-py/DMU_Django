# Generated by Django 2.2.16 on 2020-11-14 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20201114_1126'),
    ]

    operations = [
        migrations.RenameField(
            model_name='new',
            old_name='new_image',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='new',
            old_name='new_pub_date',
            new_name='pub_date',
        ),
        migrations.RenameField(
            model_name='new',
            old_name='new_text',
            new_name='text',
        ),
        migrations.AlterField(
            model_name='new',
            name='title',
            field=models.CharField(max_length=150, verbose_name='Title of New'),
        ),
        migrations.DeleteModel(
            name='NewTitle',
        ),
    ]
