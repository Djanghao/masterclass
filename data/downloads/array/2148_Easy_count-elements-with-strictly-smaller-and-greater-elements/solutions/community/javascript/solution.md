# Short JavaScript Solution

**Author:** sronin
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/1719859/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/1719859/)

---

Time: O(n)
Space: O(1)
```
var countElements = function (nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    let count = 0;

    nums.forEach(ele => {
        if (ele < max && ele > min) count++
    })
    return count;
};
```