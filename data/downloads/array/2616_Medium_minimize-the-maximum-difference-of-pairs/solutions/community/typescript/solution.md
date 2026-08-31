# Using Binary Search TypeScript Solution 100% beats all

**Author:** Yodawgz0
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3884320/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3884320/)

---

# Code
```
function minimizeMax(nums: number[], p: number): number {
    if(p === 0) return 0
    const sortedArray: number[] = nums.sort((n1, n2) => n1 - n2);
    const checkValue = (value: number): boolean => {
        let i = 0
        let count = 0
        while (i < nums.length - 1) {
            if (Math.floor(sortedArray[i + 1] - sortedArray[i]) <= value) {
                count++
                i = i + 2
            } else {
                i = i + 1
            }
            if (count === p) return true
        }
        return false
    }
    let left: number = 0
    let right: number = 10 ** 9 - 1
    let ans: number = 10 ** 9
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (checkValue(mid)) {
            right = mid - 1
            ans = mid
        } else {
            left = mid + 1
        }
    }
    return ans
};
```