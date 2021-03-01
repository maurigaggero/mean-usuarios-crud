import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_API = 'http://localhost:4000/api/usuarios';

  usuarioSeleccionado: Usuario = {
    nombre: '',
    sexo: '',
    direccion: '',
    ciudad: '',
    correo: '',
    activo: true
  };

  usuarios: Usuario[];

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.URL_API);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario);
  }

  updateUsuario(usuario:Usuario){
    return this.http.put(`${this.URL_API}/${usuario._id}`, usuario);
  }
  
  deleteUsuario(_id : string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
