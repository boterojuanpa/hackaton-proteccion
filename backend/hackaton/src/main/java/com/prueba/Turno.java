package com.prueba;

public class Turno {

	private  String email;
	
	private String urlTurno;
	
	public Turno() {
		// TODO Auto-generated constructor stub
	}

	public Turno(String email, String urlTurno) {
		this.email = email;
		this.urlTurno = urlTurno;
	}

	public String getEmail() {
		return email;
	}
	
	public void setUrlTurno(String urlTurno) {
		this.urlTurno = urlTurno;
	}
	
	public String getUrlTurno() {
		return urlTurno;
	}



}
