# ❇ substring-maximum-cost👌 🏆O(1)❤️ Javascript❤️ Memory👀95.45%🕕 Meaningful Vars✍️ 🔴🔥 ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/4073330/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/4073330/)

---

Time Complexity: O(N)
Space Complexity: O(26) ~= O(1)
```
var maximumCostSubstring = function(s, chars, vals) {
    const charValues = {};
    for (let index = 0; index < chars.length; index++) {
        charValues[chars[index]] = vals[index];
    }

    for (let index = 97; index <= 122; index++) {
        if (charValues[String.fromCharCode(index)] === undefined) {
            charValues[String.fromCharCode(index)] = index - 96;
        }
    }
    let sum = 0;
    let tempSum = 0;
    for (let index = 0; index < s.length; index++) {
        tempSum += charValues[s[index]];
        //Min Sum is 0, so if temp sum has gone below zero then adding prefixed sub string wont benefit
        if (tempSum < 0) {
            tempSum = 0;
        }
        if (sum < tempSum) {
            sum = tempSum;
        }
    }
    return sum;
};
```