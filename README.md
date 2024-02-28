# utilitalia
Italian localized utilities library. Since the package is localized, by choice some of the code and documentation are also localized.

- [utilitalia](#utilitalia)
  - [Installation](#installation)
    - [Package check](#package-check)
  - [Usage](#usage)
    - [numeroInParole](#numeroinparole)
  - [License](#license)

## Installation

You can install this package via npm.

```bash
npm i utilitalia
```

### Package check

Just to check the success of the installation, also returns basic package information.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
|  |  |  | No parameters are required |

```bash
const utilita = require('utilitalia');
console.log(utilita.itWorks());

#output : { json } > {
#    "itWorks": "Yes, it works!",
#    "package": "utilitalia",
#    "version": "1.0.1"
#}
```

## Usage

### numeroInParole

Converts a number into words in the Italian language. Supports numbers up to 15 digits long.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| numero | integer | true | Number to convert into words |

```bash
const utilita = require('utilitalia');
console.log(utilita.numeroInParole(<numero>));

#output : string

#sample
return utilita.numeroInParole(174356641777971);

#output : string = 'centosettantaquattrobilionitrecentocinquantaseimiliardiseicentoquarantunomilionisettecentosettantasettemilanovecentosettantuno'
```

## License

[MIT](https://opensource.org/blog/license/mit)
