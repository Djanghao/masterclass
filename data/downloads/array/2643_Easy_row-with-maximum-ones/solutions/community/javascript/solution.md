# 🐰 JavaScript solution || 🥕Easy to Understand || 🥕Short & Simple || 🥕

**Author:** GG8w7
**Votes:** 3
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3425916/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3425916/)

---



# Code
```
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    const ans = [0, 0]
    mat.forEach((row, i) => {
        const count = row.reduce((a, b) => a + b, 0)
        if (count > ans[1]) {
            ans[0] = i
            ans[1] = count
        }
    })
    return ans
};
```