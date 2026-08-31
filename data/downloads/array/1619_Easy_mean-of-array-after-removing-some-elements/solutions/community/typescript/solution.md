# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/5897357/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/5897357/)

---

We first sort the array then we remove the five percent from both end of the array and then then we add the decimal parts with to fixed and use The parseFloat() function to parses the string argument and returns a floating point number.

# Complexity
- Time complexity: 66ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52.09mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function trimMean(arr: number[]): number {
    let sortedArr = arr.sort((a, b) => a - b)
    let fivePercentLength = (sortedArr.length * 5) / 100
    sortedArr = sortedArr.slice(fivePercentLength, sortedArr.length - fivePercentLength)
    return parseFloat((sortedArr.reduce((sum, e) => sum + e, 0) / sortedArr.length).toFixed(5))
};

```