# ppblog
Pipe Pipe blog Web Static Site


# Yarn Installation

## Install via npm

It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system.

Once you have npm installed you can run the following both to install and upgrade Yarn:

``` npm install --global yarn ```

## Check installation

``` yarn --version ```

REFERENCE: [Yarn Official Documentation](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)


## Start the Project

``` yarn run dev ```

## Fix for PowerShell Script Not Digitally Signed
When you run a .ps1 PowerShell script you might get the message saying “.ps1 is not digitally signed. The script will not execute on the system.”

To fix it you have to run the command below to run Set-ExecutionPolicy and change the Execution Policy setting.


``` Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass ```


# Versiones

## 1.1.0

* Post Que es un Framework en Programacion.
* New FavIcon image
