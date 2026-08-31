# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 13
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4481235/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4481235/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)

1. It utilizes two nested loops to iterate through the array and checks each pair of elements.
1. For each pair of elements `nums[i]` and `nums[j]` (where `i != j`), it calculates their bitwise OR using the `|` operator and checks if the result is an even number (`% 2 == 0`).
1. If such a pair is found, the function returns `true`; otherwise, it returns `false`.


# Complexity
- Time complexity:
   $$O(n^2)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to check if there exist two numbers in the given array `nums`
    // such that their bitwise OR operation results in a number with trailing zeros.
    bool hasTrailingZeros(vector<int>& nums) {
        int n = nums.size(); // Number of elements in the array `nums`
        int i = 0; // Index variable for the outer loop
        
        // Iterate through the array with the outer loop
        while (i < n) {
            int j = 0; // Index variable for the inner loop
            
            // Iterate through the array with the inner loop
            while (j < n) {
                // Check if the indices are different and the bitwise OR of the elements
                // at these indices results in a number with trailing zeros (even number)
                if (i != j && (nums[i] | nums[j]) % 2 == 0) {
                    return true; // Return true if such a pair is found
                }
                j++; // Move to the next element in the inner loop
            }
            i++; // Move to the next element in the outer loop
        }
        
        return false; // Return false if no such pair is found
    }
};





```
```Java []
class Solution {
    // Function to check if there exist two numbers in the given array `nums`
    // such that their bitwise OR operation results in a number with trailing zeros.
    public boolean hasTrailingZeros(int[] nums) {
        int n = nums.length; // Number of elements in the array `nums`
        
        // Iterate through the array
        for (int i = 0; i < n; i++) {
            // Check if any pair of elements' bitwise OR results in a number with trailing zeros (even number)
            for (int j = 0; j < n; j++) {
                if (i != j && (nums[i] | nums[j]) % 2 == 0) {
                    return true; // Return true if such a pair is found
                }
            }
        }
        
        return false; // Return false if no such pair is found
    }
}



```
```python3 []
class Solution:
    # Function to check if there exist two numbers in the given array `nums`
    # such that their bitwise OR operation results in a number with trailing zeros.
    def hasTrailingZeros(self, nums: List[int]) -> bool:
        n = len(nums) # Number of elements in the list `nums`
        
        # Iterate through the list
        for i in range(n):
            # Check if any pair of elements' bitwise OR results in a number with trailing zeros (even number)
            for j in range(n):
                if i != j and (nums[i] | nums[j]) % 2 == 0:
                    return True # Return True if such a pair is found
        
        return False # Return False if no such pair is found



```
```javascript []
class Solution {
    // Function to check if there exist two numbers in the given array `nums`
    // such that their bitwise OR operation results in a number with trailing zeros.
    hasTrailingZeros(nums) {
        const n = nums.length; // Number of elements in the array `nums`
        
        // Iterate through the array
        for (let i = 0; i < n; i++) {
            // Check if any pair of elements' bitwise OR results in a number with trailing zeros (even number)
            for (let j = 0; j < n; j++) {
                if (i !== j && (nums[i] | nums[j]) % 2 === 0) {
                    return true; // Return true if such a pair is found
                }
            }
        }
        
        return false; // Return false if no such pair is found
    }
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---