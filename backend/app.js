const { readFileJson, writeFileJson } = require("./FileAccessor");
const { getOptimalSchedule } = require("./Schedule");

const arguments = process.argv;

if (arguments.length < 3) {
  throw new Error("Please provide the path to input JSON file.")
}

const inputFilePath = arguments[2];
const outputFilePath = inputFilePath.substring(0, inputFilePath.indexOf(".json")) + ".optimal.json";

const fileJson = readFileJson(inputFilePath);
const optimalSchedule = getOptimalSchedule(fileJson);

writeFileJson(outputFilePath, JSON.stringify(optimalSchedule, null, 2))

