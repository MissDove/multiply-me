## JavaScript exercise

**Goal**: Production of a client-side Web application to help a child understand multiplication.

**Description**: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking on a second number removes the highlighting of the previous selection, then highlights the multiples of the newly selected number.

**Constraints**: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

### Understanding the problem

#### What is a `multiple of a number` ?

The multiples of a number are all the numbers that are products of the number and any other integer.\
For example, the multiples of 2 are 2, 4, 6, 8, 10, 12, 14, 16, and so on.\
The multiples of 10 are 10, 20, 30, 40, 50, 60 ,and so on.

### How to run this app

* Run `yarn install` or `npm install` to install all the dependencies
* Run `npx webpack serve --https` to run app on `https://localhost:8080`.\
  If you are running the app in Google Chrome and localhost gives you this error: `NET::ERR_CERT_AUTHORITY_INVALID`,\
  go to `chrome://flags/#allow-insecure-localhost`\
  and set `Allow invalid certificates for resources loaded from localhost.` to `Enabled` setting.