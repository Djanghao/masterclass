# Simple Solution | Beats 100% | TypeScript & JavaScript

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/4891721/](https://leetcode.com/problems/wiggle-sort-ii/solutions/4891721/)

---

# Intuition
Sort the array. Divide it into 2 parts. Change the nums array by picking the last elements of the divided arrays.
# Approach
```
nums = [1,2,3,4,5,6]
//divide it into 2 parts
//do this by delcaring 2 pointers
//          k     j
//          |     |
nums = [1,2,3,4,5,6]
//do a loop, it the loop counter is even, change it nums[i] to the 
//lower pointer value (k), else change nums[i] to the higher 
//pointer value (j). Reduce the pointers by 1.

//after the first loop
//        k     j
//        |     |
nums = [1,2,3,4,5,6]
finalNums = [6,3]

//after second loop
//      k     j
//      |     |
nums = [1,2,3,4,5,6]
finalNums = [6,3,5,2]

//after last loop
finalNums = [6,3,5,2,1,4]
```

# Complexity
- Time complexity: $O(n)$ where **n** is the length of nums.

- Space complexity: $O(N)$ where **N** is the length of nums.

# Code
```TypeScript []
function wiggleSort(nums: number[]): void {
    const tmp: number[] = [...nums].sort((a, b) => a - b),
        n = nums.length;
    let k: number = Math.floor((n + 1) / 2), 
        j: number = n;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            k--;
            nums[i] = tmp[k];
        }
        else {
            j--;
            nums[i] = tmp[j];
        }
    }
};
```
```JavaScript []
function wiggleSort(nums) {
    const tmp = [...nums].sort((a, b) => a - b),
        n = nums.length;
    let k = Math.floor((n + 1) / 2), 
        j = n;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            k--;
            nums[i] = tmp[k];
        }
        else {
            j--;
            nums[i] = tmp[j];
        }
    }
};
```

