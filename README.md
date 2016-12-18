<big><h1 align="center">max-heapsort</h1></big>

<p align="center">
  <a href="http://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly">
  </a>
</p>

<p align="center"><big>
max-heapsort
</big></p>

## Develop

To develop locally, simply clone this repo and install dependencies with yarn:

### Install yarn first

```sh
npm install -g yarn
```

### Usage

#### Install with npm

```sh
npm install max-heapsort
```

#### Install with yarn

```sh
yarn add max-heapsort
```

```javascript
import MaxHeap from 'max-heapsort';

let array = [9,4,7,2,6,1,3];
let sorted = new MaxHeap(array).sort();

//>? returns [9,7,6,4,3,2,1];
```

### Install deps with yarn

```sh
yarn
```

## Author

Sean Larkin <sean.larkin@mutualofomaha.com> ([@TheLarkInn](http://github.com/TheLarkInn))


## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributions are highly welcome! This repo is commitizen friendly — please read about it [here](http://commitizen.github.io/cz-cli/).
