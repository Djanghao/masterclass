# Three Equal Parts Sum Checker Function

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/5605564/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/5605564/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I approached the problem by first calculating the total sum of the array elements. Then, I checked if the total sum can be divided into three equal parts by verifying if it's divisible by 3. If it is, I iterated through the array, adding elements to a current sum until it equals the target sum, and counted how many times this occurs. If I found at least three equal parts, I returned true. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function canThreePartsEqualSum(arr: number[]): boolean {
    const totalSum = arr.reduce((a, b) => a + b, 0);
    if (totalSum % 3 !== 0) return false;

    const targetSum = totalSum / 3;
    let currentSum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum === targetSum) {
            count++;
            currentSum = 0; 
        }
    }

    return count >= 3;
};
```