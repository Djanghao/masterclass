# ✅☑[C++/Java/Python/JavaScript] || Bit Manipulation || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4221346/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4221346/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. The `findKOr` function takes a vector of integers `nums` and an integer `k` as input.

1. It aims to find a number that is formed by performing bitwise OR on the binary representations of the elements in `nums` while considering each bit position individually.

1. The variable `ans` is initialized to 0, which will store the final result.

1. The function iterates through 31 bit positions, from the 0th bit to the 30th bit, as integers are usually represented using 32 bits.

1. For each bit position, it calculates a representation `rep` using left shifting (1 << i), where 'i' is the bit position. This represents a single bit set at the i-th position.

1. It initializes a counter `cnt` to count the number of elements in `nums` that have the i-th bit set.

1. It then iterates through the elements in `nums` using a range-based for loop.

1. For each element, it checks if the i-th bit is set by performing a bitwise AND operation (rep & ele). If the result is non-zero, it increments the counter `cnt`.

1. After processing all elements for the current bit position, it checks if the count `cnt` of set bits at that position is greater than or equal to the given integer `k`. If it is, the corresponding bit is set in the result ans by performing a bitwise OR operation.

1. This process is repeated for all bit positions, and the final result is returned.


# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    int findKOr(vector<int>& nums, int k) {
        int ans = 0; // Initialize the answer to 0.
        
        for (int i = 0; i < 31; i++) {
            // Bit position represented by 2^i.
            int rep = (1 << i); 
            int cnt = 0; // Initialize a counter to count set bits at this position.

            // Iterate through the input vector 'nums'.
            for (auto ele : nums) {
                if (rep & ele) {
                    // If the i-th bit is set in 'ele', increment the count.
                    cnt++;
                }
            }

            // If the count of set bits at this position is greater than or equal to 'k', set the corresponding bit in the answer.
            if (cnt >= k) {
                ans = ans + rep;
            }
        }

        return ans; // Return the final answer, which is the result of the OR operation on selected bits.
    }
};

```

```C []

#include <stdio.h>

int findKOr(int* nums, int size, int k) {
    int ans = 0; // Initialize the answer to 0.

    for (int i = 0; i < 31; i++) {
        // Bit position represented by 2^i.
        int rep = (1 << i);
        int cnt = 0; // Initialize a counter to count set bits at this position.

        // Iterate through the input array 'nums'.
        for (int j = 0; j < size; j++) {
            if (rep & nums[j]) {
                // If the i-th bit is set in 'ele', increment the count.
                cnt++;
            }
        }

        // If the count of set bits at this position is greater than or equal to 'k', set the corresponding bit in the answer.
        if (cnt >= k) {
            ans = ans + rep;
        }
    }

    return ans; // Return the final answer, which is the result of the OR operation on selected bits.
}

int main() {
    int nums[] = {5, 6, 7, 8};
    int size = sizeof(nums) / sizeof(nums[0]);
    int k = 2;

    int result = findKOr(nums, size, k);
    printf("Result of K-OR operation: %d\
", result);

    return 0;
}



```
```Java []

public class Solution {
    public int findKOr(int[] nums, int k) {
        int ans = 0; // Initialize the answer to 0.

        for (int i = 0; i < 31; i++) {
            // Bit position represented by 2^i.
            int rep = (1 << i);
            int cnt = 0; // Initialize a counter to count set bits at this position.

            // Iterate through the input array 'nums'.
            for (int ele : nums) {
                if ((rep & ele) != 0) {
                    // If the i-th bit is set in 'ele', increment the count.
                    cnt++;
                }
            }

            // If the count of set bits at this position is greater than or equal to 'k', set the corresponding bit in the answer.
            if (cnt >= k) {
                ans = ans + rep;
            }
        }

        return ans; // Return the final answer, which is the result of the OR operation on selected bits.
    }
}


```
```python3 []
class Solution:
    def findKOr(self, nums, k):
        ans = 0  # Initialize the answer to 0.

        for i in range(31):
            # Bit position represented by 2^i.
            rep = 1 << i
            cnt = 0  # Initialize a counter to count set bits at this position.

            # Iterate through the input list 'nums'.
            for ele in nums:
                if (rep & ele) != 0:
                    # If the i-th bit is set in 'ele', increment the count.
                    cnt += 1

            # If the count of set bits at this position is greater than or equal to 'k', set the corresponding bit in the answer.
            if cnt >= k:
                ans = ans + rep

        return ans  # Return the final answer, which is the result of the OR operation on selected bits.



```
```javascript []
class Solution {
    findKOr(nums, k) {
        let ans = 0; // Initialize the answer to 0.

        for (let i = 0; i < 31; i++) {
            // Bit position represented by 2^i.
            let rep = 1 << i;
            let cnt = 0; // Initialize a counter to count set bits at this position.

            // Iterate through the input array 'nums'.
            for (let ele of nums) {
                if ((rep & ele) !== 0) {
                    // If the i-th bit is set in 'ele', increment the count.
                    cnt++;
                }
            }

            // If the count of set bits at this position is greater than or equal to 'k', set the corresponding bit in the answer.
            if (cnt >= k) {
                ans = ans + rep;
            }
        }

        return ans; // Return the final answer, which is the result of the OR operation on selected bits.
    }
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---