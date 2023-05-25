// responsabilidad única

class UserAuth {
  constructor(user) {
    this.user = user
  }
  verifyCredentials() {
    // code de verificacion
    return true
  }
}

class UserSetting extends UserAuth {
  constructor(user, settings) {
    super(user)
    this.settings = settings
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      console.log('puede modficiar su confing')
    } else {
      console.log("NO Tiene acesso")
    }
  }
}

const newAccess = new UserSetting('juan', 'Darl mode')
newAccess.changeSettings()

/* Reglas para trabajar en equipo

Para tener un formato coherente es recomendable:

Problemas similares, soluciones similares: seguir patrones.
Densidad, apertura y distancia vertical: todo lo que esté relacionado, manterlo junto en las líneas de código.
Lo más importante va primero: de la funcionalidad principal se van a llamar otras funciones o métodos y se desglosarán a partir de ahí, es más intuitivo.
Indentación: respetar mismos espacios de tabulación (2 o 4). */