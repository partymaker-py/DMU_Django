# Generated by Django 2.2.16 on 2020-11-12 19:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewTitle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('new_title', models.CharField(max_length=150, verbose_name='Title of New')),
            ],
        ),
        migrations.RemoveField(
            model_name='new',
            name='new_title',
        ),
        migrations.AlterField(
            model_name='new',
            name='title',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.NewTitle'),
        ),
        migrations.AlterField(
            model_name='title',
            name='title',
            field=models.CharField(max_length=50, verbose_name='Titile of page'),
        ),
    ]
