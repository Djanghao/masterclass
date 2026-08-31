# 🔥🔥Easy Solution||Beats 100%🚀🚀||Binary Spacing Validator: Ensuring Distance Between Ones! 🧩✨

**Author:** Aashiq_Edavalapati
**Votes:** 10
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/5090516/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/5090516/)

---

# Problem Explanation \uD83E\uDDE9

The task is to determine if all the '1's in a binary array `nums` are at least `k` places away from each other. We need to return `true` if this condition is met and `false` otherwise.

---

![image.png](./images/0.png)

---

![image.png](./images/1.png)

---

# Intuition \uD83D\uDCA1

To solve this problem, we can iterate through the array while keeping track of the last seen index of '1'. If we encounter a '1', we ensure that the current index is at least `k` places away from the last seen '1'. If not, we return `false`.

# Intuition for Solution 2 (Python) \uD83D\uDCA1
In the Python solution, we use a straightforward approach to iterate through the binary array nums and ensure that all '1's are at least k positions apart.

1. We initialize a counter count with the value k. This counter keeps track of the distance to the next allowed '1'.
2. We then traverse through each element in the nums array:
    - If we encounter a 1, we check the value of count.
        - If count is less than k, it means we found a '1' too close to the previous '1', so we return false.
        - Otherwise (if count is greater than or equal to k), we reset count to 0 to start counting distance for the next '1'.
    - If we encounter a 0, we simply increment count to account for the distance.
3. If we finish traversing the entire array without encountering any issues (i.e., all '1's are at least k positions apart), we return true.

# Approach \uD83D\uDE80

### Solution 1 (Java):
1. Iterate through the array using a loop.
2. Whenever encountering a '1' at index `i`, check the next `k` positions to ensure there are no other '1's.
3. If a '1' is found within the next `k` positions, return `false`.
4. If the loop completes without finding any issues, return `true`.

### Solution 2 (Python):
1. Initialize a counter `count` to `k`.
2. Traverse through the array.
3. If encountering a '1', check if `count` is less than `k`. If yes, return `false`.
4. Reset `count` to zero when a '1' is encountered.
5. Increment `count` when encountering a '0'.
6. If the traversal completes without any issues, return `true`.

Both solutions have a time complexity of $$O(n)$$, where n is the length of the array `nums`, as we only traverse the array once. The space complexity is $$O(1)$$ for both solutions, as we use only a few additional variables to keep track of the necessary state.

These approaches efficiently determine whether all '1's in the array `nums` satisfy the distance condition specified by `k`.

---


# Feel free to ask any questions if you'd like more clarification! \uD83D\uDE0A Please do upvote if you like the explanation.


---


# Code
```java []
cclass Solution {
    public boolean kLengthApart(int[] nums, int k) {
        int len = nums.length;
        
        // Iterate through the array
        for(int i = 0; i < len - k; i++) {
            // If we encounter a '1'
            if(nums[i] == 1) {
                // Check the next k positions
                for(int j = i + 1; j <= i + k; j++) {
                    // If another '1' is found within the next k positions, return false
                    if(nums[j] == 1) 
                        return false;
                }
            }
        }
        
        // Check the end of the array if necessary
        if(nums[len - 1] == 1) {
            for(int i = len - k; i < nums.length - 1; i++) {
                // If another '1' is found before reaching the end of the array, return false
                if(nums[i] == 1) 
                    return false;
            }
        }
        
        // If all conditions are met, return true
        return true;
    }
}

```
```python []
class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        # Initialize the counter to k
        count = k
        
        # Traverse through each element in the nums array
        for num in nums:
            # If we encounter a '1'
            if num == 1:
                # Check the current count value
                if count < k:
                    # If count is less than k, it means there are '1's too close together, return False
                    return False
                # Reset count to 0 to start counting distance for the next '1'
                count = 0
            else:
                # If we encounter a '0', increment count to keep track of distance
                count += 1
        
        # If we finish traversal without issues, return True
        return True

```
