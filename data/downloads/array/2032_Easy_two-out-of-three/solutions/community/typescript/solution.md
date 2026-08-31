# Simple Solution | Beginner Friendly | Easy Approach with Explanation✅

**Author:** Jithinp96
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/6088894/](https://leetcode.com/problems/two-out-of-three/solutions/6088894/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find all numbers that appear in at least two of the three arrays. By iterating through the possible range of numbers (1 to 100), we can check their presence in each array and count their occurrences.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate through all numbers from `1` to `100` (as the values are constrained to this range).
2. For each number:
   - Check its presence in the first two arrays (`nums1` and `nums2`).
   - Check its presence in the second and third arrays (`nums2` and `nums3`).
   - Check its presence in the first and third arrays (`nums1` and `nums3`).
3. If the number appears in at least two arrays, add it to the result.
4. Return the result.

# Code
```javascript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let number=[]
    for(let i=1; i<=100; i++){
        if(nums1.includes(i) && nums2.includes(i)){
            number.push(i);
        }   
        else if(nums2.includes(i) && nums3.includes(i)){
            number.push(i);
        }
        else if(nums1.includes(i) && nums3.includes(i)){
            number.push(i);
        }
    }
    return number;
};
```

```typescript []
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    const result: number[] = [];

    for (let i = 1; i <= 100; i++) {
        if ((nums1.includes(i) && nums2.includes(i)) ||
            (nums2.includes(i) && nums3.includes(i)) ||
            (nums1.includes(i) && nums3.includes(i))) {
            result.push(i);
        }
    }

    return result;
}