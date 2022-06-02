<p align="center">
  <a href="https://www.twitch.tv/charlyautomatiza"><img alt="Twitch" src="https://img.shields.io/badge/CharlyAutomatiza-Twitch-9146FF.svg" style="max-height: 300px;"></a>
  <a href="https://discord.gg/wwM9GwxmRZ"><img alt="Discord" src="https://img.shields.io/discord/944608800361570315" style="max-height: 300px;"></a>
  <a href="http://twitter.com/char_automatiza"><img src="https://img.shields.io/badge/@char__automatiza-Twitter-1DA1F2.svg?style=flat" style="max-height: 300px;"></a>
  <a href="https://www.youtube.com/c/CharlyAutomatiza?sub_confirmation=1"><img src="https://img.shields.io/badge/CharlyAutomatiza-Youtube-FF0000.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
  <a href="https://www.linkedin.com/in/gautocarlos/"><img src="https://img.shields.io/badge/Carlos%20 Gauto-LinkedIn-0077B5.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
</p>

# CodeceptJS 3 ‐ Supercharged End 2 End Testing

## Boilerplate project creado en vivo en stream de [Twitch.tv/CharlyAutomatiza](https://www.twitch.tv/charlyautomatiza) basado en [CodeceptJS](https://codecept.io/)

### Overview

This documentation is also available in [**English**](README.md).

### Requerimientos generales

- Instalar algún cliente git como por ejemplo [git bash](https://git-scm.com/downloads)

Descargar e instalar

- Instalar última versión de [Node.js](https://nodejs.org/es/download/)

### Requerimientos mobile

Descargar e instalar

- Java Development Kit [(JDK)](https://www.oracle.com/java/technologies/downloads/)
  - Asegurarse de tener configurada la variable de entorno **JAVA_HOME** con la ruta de la JDK respectiva.
- [Appium](https://appium.io/downloads/) Desktop.
- [Android Studio](https://developer.android.com/studio/index.html) y dentro de la aplicación instalar.
  - **SDK Platform**: Android 10 o la versión necesaria.
  - **SDK tools**:
    - Android SDK Build Tools.
    - Andorid SDK Command Line Tools.
    - Android Emulator.
    - Android SDK Platform-tools.
    - Intel x86 Emulator accelerator.
  - Configurar al menos un emulador desde **Android Virtual Device Manager**.
  - Asegurarse de agregar las siguientes variables de entorno:
    - **ANDROID_HOME**: Agregar el directorio donde se aloja la SDK de Android, por ejemplo: *C:\Users\USERNAME\AppData\Local\Android\Sdk*.
    - Luego respetando el orden agregar estas variables de entorno:
      - **%ANDROID_HOME%**\emulator
      - **%ANDROID_HOME%**\platform-tools
      - **%ANDROID_HOME%**\tools
      - **%ANDROID_HOME%**\tools\bin
  - Iniciando el emulador desde la línea de comandos:
    - Listar los emuladores instalados:
      - emulator -list-avds
    - Iniciar el emulador:
      - emulator @nombre_emulador
    - Como alternativa a algún error se puede iniciar con el siguiente comando: **%ANDROID_HOME%**\emulator\emulator.exe -avd <nombre_emulador>
- **Appium Doctor**: Para validar que contamos con todo lo necesario para realizar nuestros Test de mobile debemos instalar y ejecutar.

  - npm install -g appium-doctor
    - Esto instalará el utilitario que nos permitirá validar que todo esté correctamente configurado.
  - appium-doctor --android
    - Si hemos realizado correctamente todos los pasos de arriba con este comando se mostrará un mensaje de éxito ya algunos warning.
    - En caso de algún error bloqueante, el mismo se mostrará en pantalla, se deberá corregir y volver a ejecutar hasta que esté todo ok.

- APK a probar.
  - Usamos para el ejemplo [la apk](https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk) provista por WebdriverIO.
  - Pueden ejecutar desde la línea de comandos lo siguiente como alternativa:
    - curl <https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk> --output Android-NativeDemoApp-0.4.0.apk
  - Para que el ejemplo funcione la apk debe estar dentro de la carpeta **/app** en la base de nuestro proyecto con el nombre configurado en la capability **app** del archivo [*codecept.conf.js*](codecept.conf.js).

### Instalación del framework de pruebas

#### **Clonar el repositorio:**

```bash
git clone https://github.com/charlyautomatiza/starter-codeceptjs.git
```

#### **Instalar las dependencias.**

```bash
npm install
```

#### **Para la ejecución de los test situarse en la raíz del proyecto y ejecutar**

```bash
npm run codeceptjs
```

#### **Para crear y abrir Allure-Report con de los resultados de los test**

```bash
npm run open-report
```
