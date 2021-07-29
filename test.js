import seedPrep from "./index.js";

const options = {
  locale: "en_US",
  fields: [
    "username",
    "email",
    { want: "phoneNumber", as: "phone" },
    { want: "words", as: "description", arg: 10 },
    { want: "boolean", as: "active" },
    { want: "alphaNumeric", as: "password", arg: 8 }
  ],
  total: 5,
  exportData: true,
  fileName: "users.json"
};

seedPrep(options);
