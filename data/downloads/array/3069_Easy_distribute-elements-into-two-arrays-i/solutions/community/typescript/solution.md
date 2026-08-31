# ✅ Beats 100% TypeScript Simple Solution

**Author:** saavy1
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5870980/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5870980/)

---

# Intuition
Loop through array a single time and distribute the items

# Approach
Since we know lengths and indices we can be more performant by doing direct index assignment as opposed to `arr.push()` and we can also use length counters instead of `arr.length` which is also slightly more performant

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```typescript []
function resultArray(nums: number[]): number[] {
    const firstArr: number[] = [nums[0]]
    const secondArr: number[] = [nums[1]]
    let firstArrLength = 1
    let secondArrLength = 1

    for (let i = 2; i < nums.length; i++) {
      if (firstArr[firstArr.length - 1] > secondArr[secondArr.length - 1]) {
        firstArr[firstArrLength++] = nums[i]
      } else {
        secondArr[secondArrLength++] = nums[i]
      }
    }

    firstArr.length = firstArrLength
    secondArr.length = secondArrLength

    return firstArr.concat(secondArr)
};
```