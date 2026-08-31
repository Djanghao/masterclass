# Short JavaScript Solution Using a Set Object (With Some Explanation)

**Author:** sronin
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1920712/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1920712/)

---

```
const isConsecutive = nums => {
    if (nums.length === 1) return true
    let numSet = new Set(nums)
    if (numSet.size !== nums.length) return false
    let min = Math.min(...nums)

    for (let i = min + 1; i <= min + nums.length - 1; i++) {
        if (!numSet.has(i)) return false
    }

    return true
};
```
Note that there are a few edge cases that need to be addressed.
1) nums can contain duplicate elements.
2) nums can be of length one. Therefore, the solution should return true.
3) Given the nature of Set objects (duplicate elements are not stored), if the size of the set is not equal to the length of nums, then the solution returns false.

Why is a Set object used in the first place you might ask?
In a word, optimization. The time complexity of the .has() set object method is O(1). If an array was used instead,  the .includes() method performs a linear search; which costs O(n) time in the worst case scenerio.