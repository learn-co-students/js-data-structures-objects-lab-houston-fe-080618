// Write your solution in this file!
const driver = {
  sad: "Ole Yeller" ,
  happy: "The Sunshine Boys" ,
  mean:  "The Unforgiven" ,
  musical: "The King and I" ,
  financial: "The Directors"
};

function updateDriverWithKeyAndValue(object2, key, value) {
const   newDriver  = { ...object2 };
  newDriver[key] = value ;
  return newDriver;
}
updateDriverWithKeyAndValue(driver, 'ragtime', "The Sting");


function  deleteFromDriverByKey(object2, key) {
  const newDriver =  {...object2 };
  delete  newDriver[key];
  return  newDriver;
}
  deleteFromDriverByKey(driver, 'mean');

function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver ;
  
}
destructivelyUpdateDriverWithKeyAndValue;

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
//   return driver;
}
destructivelyDeleteFromDriverByKey(driver, 'sad');
