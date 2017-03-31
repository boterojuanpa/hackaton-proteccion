package com.prueba;

public class Turno {

	private final String turno;
	private final long tiempoAproximado;

	public Turno(String turno, long tiempoAproximado) {
		this.turno = turno;
		this.tiempoAproximado = tiempoAproximado;
	}

	public String getTurno() {
		return turno;
	}

	public long getTiempoAproximado() {
		return tiempoAproximado;
	}

}
