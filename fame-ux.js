const array = [
  {
    id: 13,
    client_name: "firstname-100 firstname-100",
    assessment_name: "Test Assessment",
    status: "Waiting For Evidence",
  },
  {
    id: 14,
    client_name: "firstname-100 firstname-100",
    assessment_name: "DSM 5",
    status: "Assessment Complete",
  },
  {
    id: 15,
    client_name: "firstname-93 firstname-93",
    assessment_name: "Assessment 3",
    status: "Waiting For Evidence",
  },
  {
    id: 17,
    client_name: "firstname-93 firstname-93",
    assessment_name: "DSM 5",
    status: null,
  },
];

const res = array.filter((obj) =>
  Object.values(obj).toString().includes("DSM 5")
);

console.log(res);
