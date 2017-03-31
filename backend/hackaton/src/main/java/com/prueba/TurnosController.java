package com.prueba;

import java.util.Date;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TurnosController {

	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/turnos")
	public Turno greeting(@RequestParam(value = "fecha") long fecha) {
		char[] arr = new char[] { 'C', 'E', 'S', 'G', 'J', 'L', 'A', 'R' };
		char elegido = arr[(int) (Math.random() * 8)];
		Date fechaCalculo = new Date(fecha);
		long x = 120000L;
		long y = 300000L;
		Random r = new Random();
		long number = x + ((long) (r.nextDouble() * (y - x)));
		return new Turno(Character.toString(elegido) + counter.incrementAndGet(), fechaCalculo.getTime() + number);
	}
}