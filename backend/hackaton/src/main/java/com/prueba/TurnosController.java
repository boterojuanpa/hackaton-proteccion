package com.prueba;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.elibom.client.ElibomRestClient;

@RestController
public class TurnosController {


	@CrossOrigin
	@RequestMapping(method = RequestMethod.POST)
	public void sendmail(@RequestBody Turno input) {
		System.out.println("llego "+ input.getEmail());
		GmailEmailService emailService = new GmailEmailService();
		emailService.sendEmail(input.getUrlTurno(), input.getEmail());
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public String finalizarServicio(@RequestParam("nroCelular") String celular) {
        ElibomRestClient elibom = new ElibomRestClient("anarco0917@gmail.com", "0917Android");
        return elibom.sendMessage(celular, "Esto es una prueba");
	}
} 