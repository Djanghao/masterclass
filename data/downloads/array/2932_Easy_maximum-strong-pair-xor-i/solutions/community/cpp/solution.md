# ✅☑[C++/Java/Python/JavaScript] || Easy Solution || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4278645/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4278645/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Brute-Force Approach:**

    - The code uses a brute-force approach to find the maximum XOR of strong pairs within the given vector.
1. **Nested Loop:**

    - It uses two nested loops to iterate through all pairs of numbers in the vector.
1. **Strong Pair Check:**

    - For each pair (x, y), it checks if it forms a strong pair. A pair (x, y) is considered strong if the absolute difference between x and y is less than or equal to the minimum of x and y.
1. **XOR Operation:**

    - If the pair is a strong pair, it calculates the XOR of x and y and updates the maximum XOR value (`ans`) if the calculated XOR is greater.


# Complexity
- *Time complexity:*
   $$O(n^2)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []

#include <vector>

class Solution {
public:
    // Function to calculate the maximum XOR of strong pairs in a vector.
    int maximumStrongPairXor(std::vector<int>& nums) {
        int ans = 0;

        // Iterate through each pair of numbers in the vector.
        for (auto x : nums) {
            for (auto y : nums) {
                // Check if the pair (x, y) is a strong pair.
                if (abs(x - y) <= std::min(x, y)) {
                    // Update the maximum XOR value.
                    ans = std::max(ans, x ^ y);
                }
            }
        }

        // Return the maximum XOR value of strong pairs.
        return ans;
    }
};


```
```C []

int maximumStrongPairXor(int* nums, int size) {
    int ans = 0;

    // Iterate through each pair of numbers in the array.
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            // Check if the pair (nums[i], nums[j]) is a strong pair.
            if (abs(nums[i] - nums[j]) <= (nums[i] < nums[j] ? nums[i] : nums[j])) {
                // Update the maximum XOR value.
                ans = ans > (nums[i] ^ nums[j]) ? ans : (nums[i] ^ nums[j]);
            }
        }
    }

    // Return the maximum XOR value of strong pairs.
    return ans;
}


  


```
```Java []


public class Solution {
    // Function to calculate the maximum XOR of strong pairs in a list.
    public int maximumStrongPairXor(List<Integer> nums) {
        int ans = 0;

        // Iterate through each pair of numbers in the list.
        for (int x : nums) {
            for (int y : nums) {
                // Check if the pair (x, y) is a strong pair.
                if (Math.abs(x - y) <= Math.min(x, y)) {
                    // Update the maximum XOR value.
                    ans = Math.max(ans, x ^ y);
                }
            }
        }

        // Return the maximum XOR value of strong pairs.
        return ans;
    }
}



```
```python3 []


class Solution:
    # Function to calculate the maximum XOR of strong pairs in a list.
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        ans = 0

        # Iterate through each pair of numbers in the list.
        for x in nums:
            for y in nums:
                # Check if the pair (x, y) is a strong pair.
                if abs(x - y) <= min(x, y):
                    # Update the maximum XOR value.
                    ans = max(ans, x ^ y)

        # Return the maximum XOR value of strong pairs.
        return ans



```
```javascript []
class Solution {
    // Function to calculate the maximum XOR of strong pairs in an array.
    maximumStrongPairXor(nums) {
        let ans = 0;

        // Iterate through each pair of numbers in the array.
        for (let x of nums) {
            for (let y of nums) {
                // Check if the pair (x, y) is a strong pair.
                if (Math.abs(x - y) <= Math.min(x, y)) {
                    // Update the maximum XOR value.
                    ans = Math.max(ans, x ^ y);
                }
            }
        }

        // Return the maximum XOR value of strong pairs.
        return ans;
    }
}

```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---