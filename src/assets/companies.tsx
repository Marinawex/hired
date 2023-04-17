const companies = [
  {
    id: 1,
    name: "Facebook",
    applicationDate: "2023-03-18",
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 2,
    name: "Tesla",
    applicationDate: "2023-03-15",
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
  },
  {
    id: 3,
    name: "Netflix",
    applicationDate: "2023-03-05",
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 4,
    name: "IBM",
    applicationDate: "2023-03-01",
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 5,
    name: "Twitter",
    applicationDate: "2023-02-28",
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 6,
    name: "Salesforce",
    applicationDate: "2023-03-12",
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 7,
    name: "Intel",
    applicationDate: "2023-02-12",
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: true,
    },
  },
  {
    id: 8,
    name: "Uber",
    applicationDate: "2023-03-18",
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
  },
  {
    id: 9,
    name: "Airbnb",
    applicationDate: "2023-03-14",
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 10,
    name: "Snapchat",
    applicationDate: "2023-03-05",
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 11,
    name: "Dropbox",
    applicationDate: "2023-03-11",
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 12,
    name: "Zoom",
    applicationDate: "2023-03-17",
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: true,
      rejected: false,
    },
  },
  {
    id: 13,
    name: "Square",
    applicationDate: "2023-03-07",
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 14,
    name: "PayPal",
    applicationDate: "2023-03-25",
    status: {
      inProcess: false,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: true,
    },
  },
  {
    id: 15,
    name: "Github",
    applicationDate: "2023-03-26",
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 16,
    name: "Reddit",
    applicationDate: "2023-03-10",
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 17,
    name: "OpenAI",
    applicationDate: "2023-03-05",
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 18,
    name: "Google",
    applicationDate: "2023-03-02",
    status: {
      inProcess: true,
      applied: false,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 19,
    name: "Apple",
    applicationDate: "2023-03-19",
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },

  {
    id: 20,
    name: "Microsoft",
    applicationDate: "2023-03-17",
    status: {
      inProcess: false,
      applied: false,
      followUp: true,
      noReply: false,
      rejected: false,
    },
  },
  {
    id: 21,
    name: "Amazon",
    applicationDate: "2023-03-07",
    status: {
      inProcess: false,
      applied: true,
      followUp: false,
      noReply: false,
      rejected: false,
    },
  },
];

const titles = [
  "Applied",
  "Follow Up",
  "rejected",
  "No Reply",
  "All Companies",
];

// const getStatus = () => {
//   let trueKey;

//   for (const key in status) {
//     if (status.hasOwnProperty(key) && status[key] === true) {
//       trueKey = key;

//     }
//   }
//   return trueKey;
// }

// const getStatus = () => {
//   for (const company of companies) {
//     let trueKey;
//     for (const key in company.status) {
//       if (company.status.hasOwnProperty(key) && company.status[key] === true) {
//         trueKey = key;
//         break;
//       }
//     }
//   }
// };
// getStatus();

// const updatedCompanies = companies.map((company) => {
//   return {
//     ...company,
//     applicationDate: new Date(company.applicationDate).getTime(),
//   };
// });  not needed right now

// const today = new Date().getTime();
// const oneDayInMs = 1000 * 60 * 60 * 24; // milliseconds in one day

// const daysPassedSinceApplication = updatedCompanies.map((company) => {
//   const daysPassed = Math.round((today - company.applicationDate) / oneDayInMs);
//   return {
//     ...company,

//     applicationDate: daysPassed,
//   };
// });

const daysPassedSinceDate = (dateToCheck: number | string | Date) => {
  const today = new Date().getTime();
  const oneDayInMs = 1000 * 60 * 60 * 24; // milliseconds in one day
  const dateInMs = new Date(dateToCheck).getTime();
  const daysPassed = Math.round((today - dateInMs) / oneDayInMs);

  return daysPassed;
};

const daysPassedSinceApplication = companies.map((company) => {
  return {
    ...company,
    daysPassedSinceApplication: daysPassedSinceDate(company.applicationDate),
  };
});

// const daysPassedSinceFollowUp = daysPassedSinceApplication.map((company) => {
//   return {
//     ...company,
//     daysPassedSinceFollowUp: daysPassedSinceDate(company.daysPassedSinceApplication),
//   };
// }); bad logiccccc

// console.log(companies);
// console.log(daysPassedSinceApplication);
// console.log(daysPassedSinceFollowUp);

// const a = 'Title hiii'

// console.log(a.split(" ").join("").toLowerCase());

export { companies, daysPassedSinceApplication, titles };
