# javaScript, Simple Solution

**Author:** Petr12332
**Votes:** 3
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/2880159/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/2880159/)

---

var modifyString = function (s) {
  let arr = s.split("");
  for (let i = 0; i <= arr.length; i++) {
    let res = ["a", "b", "c"];
    if (arr[i] === "?") {
      if (arr[i - 1] === "a" || arr[i + 1] === "a") {
        res.splice(res.indexOf("a"), 1);
      }
      if (arr[i - 1] === "b" || arr[i + 1] === "b") {
        res.splice(res.indexOf("b"), 1);
      }
      arr[i] = res[0];
    }
  }
  return arr.join("");
};