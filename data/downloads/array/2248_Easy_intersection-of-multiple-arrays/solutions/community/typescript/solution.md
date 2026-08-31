# TypeScript - Beats  95.45% - O(m⋅(n+logm)) - HashMap

**Author:** vitorbrangioni
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/5946935/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/5946935/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->

Put all numbers into HashMap and save their index into an array in the HashMap. If we have an array with the same size as the `nums`, we have this number in all subarrays. So get these numbers and later return them sorted. 


# Complexity
- Time complexity: O(m\u22C5(n+logm))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m * n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function intersection(nums: number[][]): number[] {
    const hashMap = new Map<number, number[]>();
    const sameNums = [];

    for (let i = 0; i < nums.length; i++) {
        const subarray = nums[i];

        subarray.forEach((num, index) => {
            const arrIndex: number[] = hashMap.get(num);

            if (arrIndex) {
                arrIndex.push(index)
            } else {
                hashMap.set(num, [index]);
            }

        });
    }

    for (const [key, value] of hashMap) {
        if (value.length === nums.length) {
            sameNums.push(key);
        }
    }

    return sameNums.sort((a, b) => a - b);
};
```