# Very simple Javascript and typescript solution. Do check it out👍

**Author:** meathirarosejohn
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/5940418/](https://leetcode.com/problems/maximum-product-of-three-numbers/solutions/5940418/)

---

# Intuition
The maximum product can either come from the three largest numbers or from two smallest negative numbers and the largest positive number.

# Approach
Track the three largest and two smallest numbers while iterating through the array. The result is the maximum product of either the three largest numbers or two smallest with the largest.

# Complexity
- Time complexity:
O(n) - Single pass through the array

- Space complexity:
O(1) - Only constant space is used.

# Code
```typescript []
function maximumProduct(nums: number[]): number {
    let largest: number = -Infinity, second: number = -Infinity, third: number = -Infinity;
    let smallest: number = Infinity, secondSmallest: number = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            third = second;
            second = largest;
            largest = nums[i];
        } else if (nums[i] > second) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third) {
            third = nums[i];
        }

        if (nums[i] < smallest) {
            secondSmallest = smallest;
            smallest = nums[i];
        } else if (nums[i] < secondSmallest) {
            secondSmallest = nums[i];
        }
    }

    return Math.max(largest * second * third, largest * smallest * secondSmallest);
};
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let largest = -Infinity, second = -Infinity, third = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            third = second;
            second = largest;
            largest = nums[i];
        } else if (nums[i] > second) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third) {
            third = nums[i];
        }

        if (nums[i] < smallest) {
            secondSmallest = smallest;
            smallest = nums[i];
        } else if (nums[i] < secondSmallest) {
            secondSmallest = nums[i];
        }
    }

    return Math.max(largest * second * third, largest * smallest * secondSmallest);
};
```
