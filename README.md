# node-portfolio

Node.js sample code that downloads price info and displays financial portfolio information.

Author: [Sean Lavine](mailto:lavis88@gmail.com?subject=Let\'s%20discuss%20terms)

## Design Considerations
I decided to use streams where possible in this challenge. Streams can be
challenging to debug when things go wrong. Also, error checking is more
challenging. While not quite necessary for such a small dataset, streams make
it possible to scale to large datasets, without increasing the memory footprint
of the executing program.

## External Dependencies
* Node@^5.9.1
* npm@^3.7.3

## Install and Run

Install dependencies and run all steps in order:

```
$ cd node-portfolio # (this directory)
$ npm install
$ npm start
```

## Clean generated data files
* `prices/fund_prices.json` (regenerate by running ./step1)
* `prices/historical_prices.json` (regenerate by running ./step4)

```
npm run clean
```
