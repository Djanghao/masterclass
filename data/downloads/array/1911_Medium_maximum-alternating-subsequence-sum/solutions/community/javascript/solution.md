# JavaScript solution | Easy to understand

**Author:** iCherya
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298605/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/1298605/)

---

```
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAlternatingSum = (nums) => {
    let oddSum = 0;
    let evenSum = 0;

    for (const number of nums) {
        oddSum = Math.max(oddSum, evenSum + number);
        evenSum = Math.max(evenSum, oddSum - number);
    }

    return Math.max(oddSum, evenSum);
};
```