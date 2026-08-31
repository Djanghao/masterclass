# JavaScript - JS

**Author:** mlienhart
**Votes:** 5
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/1524012/](https://leetcode.com/problems/break-a-palindrome/solutions/1524012/)

---

```
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  let result = palindrome.split("");

  for (let i = 0; i < Math.floor(result.length / 2); i++) {
    if (result[i] !== "a") {
      result[i] = "a";
      return result.join("");
    }
  }

  if (result.length === 1) {
    return "";
  } else {
    result[result.length - 1] = "b";
    return result.join("");
  }
};
```