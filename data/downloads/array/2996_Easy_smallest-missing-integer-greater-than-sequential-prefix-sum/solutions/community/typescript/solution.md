# O(n) Solution with explanations

**Author:** youssefsoua
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4519497/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4519497/)

---

# Finding the Smallest Missing Integer in an Array

The function `missingInteger` is designed to find the smallest missing integer in a given array of numbers. Here's how it works:

1. **Longest Sequential Prefix:**
   - The function first calculates the sum of the longest sequential prefix in the array. It starts from the first element and continues adding subsequent elements to the sum as long as they are one greater than the previous element.

2. **Smallest Missing Integer:**
   - The function then finds the smallest missing integer that is greater than or equal to the sum of the longest sequential prefix. It does this by creating a set from the array (to allow for constant time lookups), and then incrementing the sum until it finds a number that is not in the set.

## Time Complexity

The time complexity of this function is O(n), where n is the length of the input array. This is because the function iterates over the array twice: once to calculate the longest sequential prefix, and once to create the set.

## Space Complexity

The space complexity of this function is also O(n), where n is the length of the input array. This is because the function creates a set from the array, which requires additional space. The amount of space required is proportional to the size of the input array. Therefore, the space complexity is linear.


# Code
```
// This function takes an array of numbers as input
function missingInteger(nums: number[]): number {   
    // The purpose of this function is to find the smallest missing integer in the array

    // The first part of the function finds the longest sequential prefix
    let prefix_sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            // If the current number is one more than the previous number, add it to the prefix sum
            prefix_sum += nums[i];
        } else {
            // If the current number is not one more than the previous number, break the loop
            break;
        }
    }

    // The second part of the function finds the smallest missing integer greater than or equal to prefix_sum
    // It first creates a set from the array of numbers
    const set = new Set<number>(nums)
    // It initializes the missing number as the prefix sum
    let missing = prefix_sum ;
    // It then increments the missing number until it finds a number that is not in the set
    while (set.has(missing)) {
        missing += 1;
    }

    // The function returns the smallest missing integer
    return missing;
};

```