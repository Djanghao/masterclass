# Simple Solution its Beats 92.86%

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/5794927/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/5794927/)

---

# Intuition
The problem involves calculating the XOR of elements in an array where each element is generated using the formula nums[i] = start + 2 * i. 
# Approach
1. First, generate the array nums based on the given formula nums[i] = start + 2 * i.

2. Initialize a variable result to store the cumulative XOR.
3. Loop through each element of the array nums:
        1. Compute the XOR of the current element with result.
        2.Store the result of the XOR operation back into result.
4. Return the final result after all elements have been XORed.

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function xorOperation(n: number, start: number): number {
    
    let result = 0;  
    for (let i = 0; i < n; i++) {
        const num = start + 2 * i;  
        result ^= num;  // Apply XOR operation
    }
    return result; 
}

```