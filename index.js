import checkNode from "cli-check-node";

checkNode(14);

import faker from "faker";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import alert from "cli-alert";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const data = {
  // Address
  zipCode: faker.address.zipCode,
  zipCodeByState: faker.address.zipCodeByState,
  city: faker.address.city,
  cityPrefix: faker.address.cityPrefix,
  citySuffix: faker.address.citySuffix,
  cityName: faker.address.cityName,
  streetName: faker.address.streetName,
  streetAddress: faker.address.streetAddress,
  streetSuffix: faker.address.streetSuffix,
  streetPrefix: faker.address.streetPrefix,
  secondaryAddress: faker.address.secondaryAddress,
  county: faker.address.county,
  country: faker.address.country,
  countryCode: faker.address.countryCode,
  state: faker.address.state,
  stateAbbr: faker.address.stateAbbr,
  latitude: faker.address.latitude,
  longitude: faker.address.longitude,
  direction: faker.address.direction,
  cardinalDirection: faker.address.cardinalDirection,
  ordinalDirection: faker.address.ordinalDirection,
  nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate,
  timeZone: faker.address.timeZone,

  // Internet
  avatar: faker.internet.avatar,
  email: faker.internet.email,
  exampleEmail: faker.internet.exampleEmail,
  userName: faker.internet.userName,
  protocol: faker.internet.protocol,
  httpMethod: faker.internet.httpMethod,
  url: faker.internet.url,
  domainName: faker.internet.domainName,
  domainSuffix: faker.internet.domainSuffix,
  domainWord: faker.internet.domainWord,
  ip: faker.internet.ip,
  ipv6: faker.internet.ipv6,
  port: faker.internet.port,
  userAgent: faker.internet.userAgent,
  color: faker.internet.color,
  mac: faker.internet.mac,
  password: faker.internet.password,

  // lorem
  word: faker.lorem.word,
  words: faker.lorem.words,
  sentence: faker.lorem.sentence,
  slug: faker.lorem.slug,
  sentences: faker.lorem.sentences,
  paragraph: faker.lorem.paragraph,
  paragraphs: faker.lorem.paragraphs,
  text: faker.lorem.text,
  lines: faker.lorem.lines,

  // name
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  middleName: faker.name.middleName,
  fullName: faker.name.findName,
  jobTitle: faker.name.jobTitle,
  gender: faker.name.gender,
  prefix: faker.name.prefix,
  suffix: faker.name.suffix,
  title: faker.name.title,
  jobDescriptor: faker.name.jobDescriptor,
  jobArea: faker.name.jobArea,
  jobType: faker.name.jobType,

  // phone
  phoneNumber: faker.phone.phoneNumber,

  // random
  number: faker.datatype.number,
  float: faker.datatype.float,
  uuid: faker.datatype.uuid,
  boolean: faker.datatype.boolean,
  image: faker.random.image,
  locale: faker.random.locale,
  alpha: faker.random.alpha,
  alphaNumeric: faker.random.alphaNumeric,
  hexaDecimal: faker.datatype.hexaDecimal
};

const users = [];

function generateUsers(options) {
  const defaultOptions = {
    locale: "en_US",
    total: 1,
    fields: ["fullName", "email", "password"],
    exportData: false,
    fileName: "no-name__.json",
    path: join(__dirname, "../")
  };

  const opts = { ...defaultOptions, ...options };

  const { locale, total, fields, exportData, fileName, path } = opts;

  faker.locale = locale;

  for (let i = 0; i < total; i++) {
    const user = {};
    // 1. check if fields is an array
    if (fields instanceof Array) {
      // Loop over fields
      fields.forEach((field) => {
        // check if the field is an object
        if (typeof field === "object") {
          // take arg, want, and as
          const { arg, want, as = want } = field;
          // check if what user want is available
          if (data[want]) {
            user[as] = data[want](arg);
            return;
          } else {
            return;
          }
        }
        // if its not an object get data directly
        if (data[field]) {
          user[field] = data[field]();
        }
        return;
      });

      // push user to users array
      if (Object.keys(user).length) {
        users.push(user);
      }
    }
  }

  if (exportData) {
    exportDataJSON(path, fileName);
  } else {
    return users;
  }
}

function exportDataJSON(path, fileName) {
  path = join(path, fileName);

  try {
    fs.writeFileSync(path, JSON.stringify(users, null, 4));
    alert({
      type: "success",
      msg: `Generated and exported data to: ${path}`,
      name: fileName
    });
  } catch (err) {
    console.log(err);
    alert({
      type: "error",
      msg: "Could not export data.",
      name: err.name || "EXPORT ERROR"
    });
  }
}

export const generate = generateUsers;

export default generateUsers;
