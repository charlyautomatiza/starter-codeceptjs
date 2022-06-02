<p align="center">
  <a href="https://www.twitch.tv/charlyautomatiza"><img alt="Twitch" src="https://img.shields.io/badge/CharlyAutomatiza-Twitch-9146FF.svg" style="max-height: 300px;"></a>
  <a href="https://discord.gg/wwM9GwxmRZ"><img alt="Discord" src="https://img.shields.io/discord/944608800361570315" style="max-height: 300px;"></a>
  <a href="http://twitter.com/char_automatiza"><img src="https://img.shields.io/badge/@char__automatiza-Twitter-1DA1F2.svg?style=flat" style="max-height: 300px;"></a>
  <a href="https://www.youtube.com/channel/UCwEb6xrQtQCEuN_gNgi_Xfg?sub_confirmation=1"><img src="https://img.shields.io/badge/Charly%20Automatiza-Youtube-FF0000.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
  <a href="https://www.linkedin.com/in/gautocarlos/"><img src="https://img.shields.io/badge/Carlos%20 Gauto-LinkedIn-0077B5.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
</p>

# CodeceptJS 3 ‐ Supercharged End 2 End Testing

## Boilerplate project created live on [Twitch.tv/CharlyAutomatiza](https://www.twitch.tv/charlyautomatiza) based on [CodeceptJS](https://codecept.io/)

### Overview

Esta documentación está disponible también en [**Castellano**](LEEME.md).

### General requirements

- Install a git client such as [git bash](https://git-scm.com/downloads)

Download and install

- Latest version of [Node.js](https://nodejs.org/es/download/)

### Requirements Mobile

Descargar e instalar

- Java Development Kit [(JDK)](https://www.oracle.com/java/technologies/downloads/)
  - Make sure you have the environment variable **JAVA_HOME** set to the path of the respective JDK.
- [Appium](https://appium.io/downloads/) Desktop.
- [Android Studio](https://developer.android.com/studio/index.html) and inside the app install.
  - **SDK Platform**: Android 10 or the required version.
  - **SDK tools**:
    - Android SDK Build Tools.
    - Andorid SDK Command Line Tools.
    - Android Emulator.
    - Android SDK Platform-tools.
    - Intel x86 Emulator accelerator.
  - Configure at least one emulator from **Android Virtual Device Manager**.
  - Make sure to add the following environment variables:
    - **ANDROID_HOME**: Add the directory where the Android SDK is located, for example: **C:\Users\USERNAME\AppData\Local\Android\Sdk**.
    - Then respecting the order add these environment variables:
      - **%ANDROID_HOME%**\emulator
      - **%ANDROID_HOME%**\platform-tools
      - **%ANDROID_HOME%**\tools
      - **%ANDROID_HOME%**\tools\bin
  - Starting the emulator from the command line:
    - List installed emulators:
      - emulator -list-avds
    - Iniciar el emulador:
      - emulator @emulator_name
    - As an alternative to any error it can be started with the following command: **%ANDROID_HOME%**\emulator\emulator.exe -avd <emulator_name>
- **Appium Doctor**: To validate that we have everything necessary to carry out our mobile tests, we must install and execute.

  - npm install -g appium-doctor
    - This will install the utility that will allow us to validate that everything is correctly configured.
  - appium-doctor --android
    - If we have correctly carried out all the steps above with this command, a success message and some warnings will be displayed.
    - In case of a blocking error, it will be displayed on the screen, it must be corrected and re-executed until everything is ok.

- APK to test.
  - We use for the example [the apk](https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk) provided by WebdriverIO.
  - You can run the following from the command line as an alternative:
    - curl <https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk> --output Android-NativeDemoApp-0.4.0.apk
  - For the example to work, the apk must be inside the folder **/app** in the base of our project with the name configured in the capability **app** of the file [*codecept.conf.js*](codecept.conf.js).

### Installation of the testing framework

#### **Clone the repository:**

```bash
git clone https://github.com/charlyautomatiza/starter-codeceptjs.git
```

#### **Install dependencies.**

```bash
npm install
```

#### **To run the test go to the root of the project and run**

```bash
npm run codeceptjs
```

#### **To create and open Allure-Report with test results**

```bash
npm run open-report
```
