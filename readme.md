# Seed Prep

Prepares random fake data and exports it to json files. So you can generate and export as many files as you want with the data you need to finish and test your projects faster. Take a look at all the available data you can get below (wants).

## Example

```javascript
import seedPrep from "seed-prep";

// This will generate the data and save the result to a json file in the root directory
// if you don't pass the absolute path

// Options Object
const options = {
  total: 10, // The number of objects or times to generate
  fields: [
    {
      want: "phoneNumber", // What type of data do you want
      as: "phone" // What do you want to name the field if you leave this empty
      // it will be the same as the 'want' field by default
    },
    {
      want: "alphaNumeric", // The type of data you want
      as: "password", // What do you want to name the field
      arg: 8 // Some of the functions take argument in this scenario the alphaNumeric function takes an argument for the length of the characters you want. To pass arguments you put the argument in the "arg" property
    },
    {
      want: "userName",
      as: "username"
     }
  ], // The fields you want in each object
  exportData: true, // Set exportData to true if you want the data to be saved to disk
  path: "C://users/demo/desktion/_data", // The path to the folder you want the data to be saved in.
  // If you don't pass a path the data will be saved to the current directory the script was executed in.
  fileName: "users.json" // Here you can put the name of the file when the data is exported
};

// Here's the default options
{
    locale: "en_US",
    total: 1,
    fields: ["fullName", "email", "password"],
    exportData: false,
    fileName: "no-name__.json",
    path: __dirname
}

// Options with custom properties
const options = {
  locale: "en_US",
  fields: [
    {want: "userName", as: "username"},
    "email",
    { want: "phoneNumber", as: "phone" },
    { want: "words", as: "description", arg: 10 },
    { want: "boolean", as: "active" },
    { want: "alphaNumeric", as: "password", arg: 8 }
  ],
  total: 1
};

seedPrep(options);
// Result
[
  {
    email: 'Llewellyn.Harber71@gmail.com',
    phone: '(826) 351-5877',
    description: 'facilis ipsa eos consequuntur distinctio odio et perferendis laudantium tenetur',
    active: true,
    password: 'c0oroo8z'
  }
]

// Options without custom properties
const options = {
  locale: "en_US",
  fields: [
    "userName",
    "email",
    "phoneNumber",
    "words",
    "boolean",
    ,
    "alphaNumeric"
  ],
  total: 1
};

seedPrep(options);
// Result
[
  {
    userName: "jack3923",
    email: 'Addie_Lindgren24@hotmail.com',
    phoneNumber: '(272) 831-1293',
    words: 'et tempora dolor',
    boolean: true,
    alphaNumeric: '4'
  }
]

```

### Available Wants

- Address

  - zipCode
  - zipCodeByState
  - city
  - cityPrefix
  - citySuffix
  - cityName
  - streetName
  - streetAddress
  - streetSuffix
  - streetPrefix
  - secondaryAddress
  - county
  - country
  - countryCode
  - state
  - stateAbbr
  - latitude
  - longitude
  - direction
  - cardinalDirection
  - ordinalDirection
  - nearbyGPSCoordinate
  - timeZone

- Internet

  - avatar
  - email
  - exampleEmail
  - userName
  - protocol
  - httpMethod
  - url
  - domainName
  - domainSuffix
  - domainWord
  - ip
  - ipv6: faker.internet.ipv6,
  - port
  - userAgent
  - color
  - mac
  - password

- lorem

  - word
  - words
  - sentence
  - slug
  - sentences
  - paragraph
  - paragraphs
  - text
  - lines

- name

  - firstName
  - lastName
  - middleName
  - fullName
  - jobTitle
  - gender
  - prefix
  - suffix
  - title
  - jobDescriptor
  - jobArea
  - jobType

- phone

  - phoneNumber

- random
  - number
  - float
  - uuid
  - boolean
  - image
  - locale
  - alpha
  - alphaNumeric
  - hexaDecimal
