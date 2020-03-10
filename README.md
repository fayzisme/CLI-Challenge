## NPM
Node Package Manaher (NPM) adalah tools yang terdapat didalam node js yang digunakan untuk mengelola pacakage yang akan digunakan nantinya untuk project yang dikerjakan. Biasanya NPM sudah otomatis tersintall ketika menginstall [NodeJS](https://nodejs.org/en/)

### Inisialisai NPM
Pada tahap ini saya akan melakukan inisialisai NPM pada sebuah project, dengan membuat sebuah folder baru untuk project yang akan dilakukan dan masuk kedalam folder tersebut. 

````sh
ipaypeak@ipaypeak-laptop:~/Challenge/Challenge2$ cd ..
ipaypeak@ipaypeak-laptop:~/Challenge$ mkdir testing
ipaypeak@ipaypeak-laptop:~/Challenge$ cd testing/
ipaypeak@ipaypeak-laptop:~/Challenge/testing$ touch 01.js
ipaypeak@ipaypeak-laptop:~/Challenge/testing$ npm init -y
Wrote to /home/ipaypeak/Challenge/testing/package.json:

{
  "name": "testing",
  "version": "1.0.0",
  "description": "",
  "main": "01.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


ipaypeak@ipaypeak-laptop:~/Challenge/testing$ 
````

Sebenarnya untuk menginisialisasi NPM bisa juga dengan hanya perinta ini:
````sh
$ npm init
````
Namun harus mengisi manual semua konfigurasi seperti name, version, description, main, script dll. Untuk menghemat waktu agar semua konfigurasi dibuat otomatis tambahkan saja -y pada akhir inisialisasi NPM, seperti ini: 
````sh
$ npm init -y
````
Maka akan menghasilkan file 'Package.JSON'seperti ini : 
````sh
{
  "name": "testing",
  "version": "1.0.0",
  "description": "",
  "main": "01.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
````

### Package.JSON
Merupakan file yang dihasilkan otomatis ketika menginisialisasi NPM. File ini berisi informasi pada project NodeJS seperti nama, author, lisensi dll.

### Install Library Pihak ketiga
- Untuk menginstall library dari luar package manager / Pihak ketiga, bisa dengan menggunakan perintah :
````sh
$ npm i nama_package
````

- Instalasi library untuk ruang lingkup development bisa menggunakan perintah ini :
````sh
$ npm i nama_package --save-dev
````

- Dan untuk instalasi pada ruang lingkup global bisa menggunakan perintah :
````sh
$ npm i packge_name -g
````

### Node Modules
> Sebuah folder yang berisikan file - file library ketika menginstall NPM. Biasanya file ini tidak perlu di upload kedalam remote, untuk itu folder ini bisa dimasukkan ke dalam file .gitignore.

### Implementasi Library pihak ketiga
````sh
$ const Motor = require('Honda CG 125')
console.log(Motor().toISOString())
````

### Remove Library Pihak ketiga
> Untuk menghapus libarary pihak ketiga cukup melakukan perintah seperti ini : 
````sh
$ npm un nama_package
````

> Untuk libarary yang sifatnya global, cukup tambahkan saja -g dibelakangnya sperti ini :
````sh
npm un package_name -g
````

### Perintah umum pada NPM
````sh 
$ npm i nama_package
````
````sh
$ npm i package_name1 package_name2
````

````sh
$ npm un package_name
```` 

````sh
$ npm un nama_package1 nama_package2
````

````sh 
$ npm up
````

````sh
$ npm up package_name
````

````sh
$ npm up -g
````

````sh
$ npm list
````

````sh 
$ npm help
````
