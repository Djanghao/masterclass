# ✅Beat's 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 296
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3719568/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3719568/)

---

# Intuition:
The Intuition is to use a sliding window approach to find the length of the longest subarray of 1's after removing at most one element (0 or 1) from the original array. It adjusts the window to have at most one zero, calculates the subarray length, and returns the maximum length found.

# Explanation:

1. The code aims to find the length of the longest subarray consisting of only 1's after deleting at most one element (0 or 1) from the original array.
2. The variable `left` represents the left pointer of the sliding window, which defines the subarray.
3. The variable `zeros` keeps track of the number of zeroes encountered in the current subarray.
4. The variable `ans` stores the maximum length of the subarray found so far.
5. The code iterates over the array using the right pointer `right`.
6. If `nums[right]` is 0, it means we encountered a zero in the array. We increment `zeros` by 1.
7. The while loop is used to adjust the window by moving the left pointer `left` to the right until we have at most one zero in the subarray.
8. If `nums[left]` is 0, it means we are excluding a zero from the subarray, so we decrement `zeros` by 1.
9. We update the `left` pointer by moving it to the right.
10. After adjusting the window, we calculate the length of the current subarray by subtracting the number of zeroes from the total length `right - left + 1`. We update `ans` if necessary.
11. Finally, we check if the entire array is the longest subarray. If it is, we subtract 1 from the maximum length to account for the one element we are allowed to delete. We return the resulting length.

# Complexity:
**Time complexity**: $$ O(N) $$
- Each element in the array will be iterated over twice at max. Each element will be iterated over for the first time in the for loop; then, it might be possible to re-iterate while shrinking the window in the while loop. No element can be iterated more than twice.

**Space complexity**: $$ O(1) $$

# Code
```C++ []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int n = nums.size();

        int left = 0;
        int zeros = 0;
        int ans = 0;

        for (int right = 0; right < n; right++) {
            if (nums[right] == 0) {
                zeros++;
            }
            while (zeros > 1) {
                if (nums[left] == 0) {
                    zeros--;
                }
                left++;
            }
            ans = max(ans, right - left + 1 - zeros);
        }
        return (ans == n) ? ans - 1 : ans;
    }
};
```
```Java []
class Solution {
    public int longestSubarray(int[] nums) {
        int n = nums.length;

        int left = 0;
        int zeros = 0;
        int ans = 0;

        for (int right = 0; right < n; right++) {
            if (nums[right] == 0) {
                zeros++;
            }
            while (zeros > 1) {
                if (nums[left] == 0) {
                    zeros--;
                }
                left++;
            }
            ans = Math.max(ans, right - left + 1 - zeros);
        }
        return (ans == n) ? ans - 1 : ans;
    }
}
```
```Python3 []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)

        left = 0
        zeros = 0
        ans = 0

        for right in range(n):
            if nums[right] == 0:
                zeros += 1

            while zeros > 1:
                if nums[left] == 0:
                    zeros -= 1
                left += 1

            ans = max(ans, right - left + 1 - zeros)

        return ans - 1 if ans == n else ans
```

# Code With Comments
```C++ []
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int n = nums.size(); // The size of the input array

        int left = 0; // The left pointer of the sliding window
        int zeros = 0; // Number of zeroes encountered
        int ans = 0; // Maximum length of the subarray

        for (int right = 0; right < n; right++) {
            if (nums[right] == 0) {
                zeros++; // Increment the count of zeroes
            }

            // Adjust the window to maintain at most one zero in the subarray
            while (zeros > 1) {
                if (nums[left] == 0) {
                    zeros--; // Decrement the count of zeroes
                }
                left++; // Move the left pointer to the right
            }

            // Calculate the length of the current subarray and update the maximum length
            ans = max(ans, right - left + 1 - zeros);
        }

        // If the entire array is the subarray, return the size minus one; otherwise, return the maximum length
        return (ans == n) ? ans - 1 : ans;
    }
};
```
```Java []
class Solution {
    public int longestSubarray(int[] nums) {
        int n = nums.length; // The size of the input array

        int left = 0; // The left pointer of the sliding window
        int zeros = 0; // Number of zeroes encountered
        int ans = 0; // Maximum length of the subarray

        for (int right = 0; right < n; right++) {
            if (nums[right] == 0) {
                zeros++; // Increment the count of zeroes
            }

            // Adjust the window to maintain at most one zero in the subarray
            while (zeros > 1) {
                if (nums[left] == 0) {
                    zeros--; // Decrement the count of zeroes
                }
                left++; // Move the left pointer to the right
            }

            // Calculate the length of the current subarray and update the maximum length
            ans = Math.max(ans, right - left + 1 - zeros);
        }

        // If the entire array is the subarray, return the size minus one; otherwise, return the maximum length
        return (ans == n) ? ans - 1 : ans;
    }
}
```
```Python3 []
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)  # The size of the input array

        left = 0  # The left pointer of the sliding window
        zeros = 0  # Number of zeroes encountered
        ans = 0  # Maximum length of the subarray

        for right in range(n):
            if nums[right] == 0:
                zeros += 1  # Increment the count of zeroes

            # Adjust the window to maintain at most one zero in the subarray
            while zeros > 1:
                if nums[left] == 0:
                    zeros -= 1  # Decrement the count of zeroes
                left += 1  # Move the left pointer to the right

            # Calculate the length of the current subarray and update the maximum length
            ans = max(ans, right - left + 1 - zeros)

        # If the entire array is the subarray, return the size minus one; otherwise, return the maximum length
        return ans - 1 if ans == n else ans
```

![CUTE_CAT.png](./images/0.png)


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**