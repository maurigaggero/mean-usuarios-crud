import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarioService.usuarios = res
      },
      err => console.error(err)
    )
  }

  addUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuarioService.updateUsuario(form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
    else {
      this.usuarioService.createUsuario(form.value).subscribe(
        res => {
          this.getUsuarios();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }

  editUsuario(usuario : Usuario){
    this.usuarioService.usuarioSeleccionado = usuario;
  }

  deleteUsuario(id: string) {
    if (confirm('Seguro desea eliminar usuario?')) {
      this.usuarioService.deleteUsuario(id).subscribe(
        (res) => {
          this.getUsuarios();
        },
        (err) => console.error(err)
      );
    }
  }
}