function uppercase(str) {
  return str.toUpperCase();
}

function lowercase(str) {
  return str.toLowerCase();
}

function palindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

module.exports = { uppercase, lowercase, palindrome, countWords };
