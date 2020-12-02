from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
import smtplib
import requests

def send_mail(dic):
	smtp_host = "smtp.gmail.com"
	smtp_port = "587"
	smtp_login = "dmu.feedback@gmail.com"
	smtp_password = "Str0ytr@nsg@z"
	message = ''

	for key in dic:
		if key != 'Форма':
			if key == 'Сообщение':
				message += '\n' + key + ': ' + '\n' + dic[key]
			else:
				message += key + ': ' + dic[key] + '\n'

	msg = MIMEMultipart()
	msg['Subject'] = 'Обратная связь ООО "ДМУ": ' + dic['Форма']
	msg.attach(MIMEText(message, 'plain'))

	server = smtplib.SMTP('smtp.gmail.com: 587')
	server.starttls()
	server.login(smtp_login, smtp_password)
	server.sendmail(smtp_login, 'lil.kirill1488228@gmail.com', msg.as_string())
	server.quit()

def telegram(dic):

	API_TOKEN = '1415059752:AAGzQtLrO-l7qLDPoCbbubVTX8gyXmTWau4'
	CHAT_ID = '-444340839'
		
	DATA = dic['Форма'] + '\n\n'
	for key in dic:
		if key != 'Форма':
			DATA += key + ": " + dic[key] + '\n'

	url = 'https://api.telegram.org/bot{}/sendMessage?chat_id={}&parse_mode=html&text={}'.format(API_TOKEN, CHAT_ID, DATA)
	#r = requests.get(url)