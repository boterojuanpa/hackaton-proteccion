package com.prueba;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.log4j.Logger;


public class GmailEmailService  {
	
	private static final Logger LOGGER = Logger.getLogger(GmailEmailService.class);
	
	private final Properties properties = new Properties();

	private Session session;

	private void init() {

		properties.put("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.starttls.enable", "true");
		properties.put("mail.smtp.port",25);
		properties.put("mail.smtp.mail.sender","juan.botero@ceiba.com.co");
		properties.put("mail.smtp.user", "juan.botero@ceiba.com.co");
		properties.put("mail.smtp.password", "peba3415+");
		properties.put("mail.smtp.auth", "true");

		session = Session.getDefaultInstance(properties);
	}

		public void sendEmail(String urlTurno, String correo){

		init();
		try{
			System.out.println("Url " + urlTurno);
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress((String)properties.get("mail.smtp.mail.sender")));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(correo));
			message.setSubject("Turno agendado");
			message.setContent("<div _ngcontent-rig-15=\"\" style=\"color: #1d9ee1; font-size: 20px; font-weight: bold;\">Haz separado tu turno!<br _ngcontent-rig-15=\"\"><span _ngcontent-rig-15=\"\" style=\"font-size: 18px;  color: #737373;\">Da clic <a href = '" + urlTurno + "'>aqu&iacute;</a>  y enterate en tiempo real del estado de tu turno</span></div>", "text/html; charset=utf-8");
			Transport t = session.getTransport("smtp");
			t.connect((String)properties.get("mail.smtp.user"), (String) properties.get("mail.smtp.password"));
			t.sendMessage(message, message.getAllRecipients());
			t.close();
		}catch (MessagingException e){
			LOGGER.error(e.getMessage(), e);
		}
		
	}

}
