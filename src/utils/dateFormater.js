/**
 * [exports function that creates a YYYY-MM-DD compliant Date string]
 * @param  {number} addDays [if addDays is present generate a Date for today + addDays]
 * @return {[String]}         [returns YYYY-MM-DD]
 */
module.exports = (addDays = 0) => {
  const nowDate = addDays
    ? new Date(new Date().getTime() + addDays * 24 * 60 * 60 * 1000)
    : new Date();

  const day =
    nowDate.getDate() < 10 ? `0${nowDate.getDate()}` : `${nowDate.getDate()}`;

  const month =
    nowDate.getMonth() < 10
      ? `0${nowDate.getMonth() + 1}`
      : `${nowDate.getMonth() + 1}`;

  const year = `${nowDate.getFullYear()}`;

  return `${year}-${month}-${day}`;
};
