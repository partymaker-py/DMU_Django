FROM python:3

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get autoremove && \
    apt-get autoclean && \
    mkdir /site

COPY . /site/
WORKDIR /site

RUN pip install -r requirements.txt

ENTRYPOINT ["python3", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]
