# ✅☑[C++/Java/Python/JavaScript] || Easiest Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4447475/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4447475/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)

1. **Finding the First Increasing Sequence:**
    - Move the pointer 'r' until the elements are in increasing order.
    - If the entire array is in increasing order, return the count of all possible subarrays.
1. **Iterating Backward:**
    - Traverse the array backward and find the count of "incremovable" subarrays.
    - Use binary search to find the position of the current element in the increasing sequence.
    - Increment the count based on the position found.
1. **Return the Total Count:** Return the total count of "incremovable" subarrays.


# Complexity
- Time complexity:
   $$O(nlogr)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    long long incremovableSubarrayCount(vector<int>& nums) {
        long long ans = 1;  // Initialize the count with 1 (single element is always "incremovable")
        int r = 1;          // Initialize a pointer r to 1
        int n = nums.size(); // Get the size of the input vector

        // Move the pointer r until elements are in increasing order
        while (r < n && nums[r] > nums[r - 1]) {
            r++;
        }

        // If the entire array is in increasing order, return the count of all possible subarrays
        if (r == n) {
            return 1LL * n * (n + 1) / 2;
        }

        int lst = 1e9 + 1; // Set a large initial value for 'lst' (to ensure comparison with first element)
        ans += r;          // Increment the count by the current value of pointer r

        // Iterate through the array from the end to count "incremovable" subarrays
        for (int i = n - 1; i >= 0; i--) {
            if (nums[i] >= lst) { // If the current element is greater than or equal to 'lst', break the loop
                break;
            }
            int low = 0, high = r - 1; // Initialize pointers for binary search
            int left = -1; // Initialize 'left' to -1

            // Binary search to find the position of the current element in the increasing sequence
            while (low <= high) {
                int mid = (low + high) >> 1; // Calculate mid index
                if (nums[mid] < nums[i]) {
                    left = mid; // Update 'left' if the current element is greater
                    low = mid + 1; // Adjust the search range
                } else {
                    high = mid - 1; // Adjust the search range
                }
            }

            ans += (left + 2); // Increment the count by (left + 2)
            lst = nums[i]; // Update 'lst' with the current element
        }
        return ans; // Return the total count of "incremovable" subarrays
    }
};





```
```Java []
class Solution {
    public long incremovableSubarrayCount(int[] nums) {
        long ans = 1;
        int r = 1;
        int n = nums.length;

        while (r < n && nums[r] > nums[r - 1]) {
            r++;
        }

        if (r == n) {
            return (long) n * (n + 1) / 2;
        }

        int lst = Integer.MAX_VALUE;
        ans += r;

        for (int i = n - 1; i >= 0; i--) {
            if (nums[i] >= lst) {
                break;
            }
            int low = 0, high = r - 1;
            int left = -1;

            while (low <= high) {
                int mid = (low + high) >> 1;
                if (nums[mid] < nums[i]) {
                    left = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }

            ans += (left + 2);
            lst = nums[i];
        }

        return ans;
    }
}



```
```python3 []
class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        ans = 1
        r = 1
        n = len(nums)

        while r < n and nums[r] > nums[r - 1]:
            r += 1

        if r == n:
            return n * (n + 1) // 2

        lst = float('inf')
        ans += r

        for i in range(n - 1, -1, -1):
            if nums[i] >= lst:
                break
            low, high = 0, r - 1
            left = -1

            while low <= high:
                mid = (low + high) // 2
                if nums[mid] < nums[i]:
                    left = mid
                    low = mid + 1
                else:
                    high = mid - 1

            ans += (left + 2)
            lst = nums[i]

        return ans



```
```javascript []
var incremovableSubarrayCount = function(nums) {
    let ans = 1;
    let r = 1;
    const n = nums.length;

    while (r < n && nums[r] > nums[r - 1]) {
        r++;
    }

    if (r === n) {
        return (n * (n + 1)) / 2;
    }

    let lst = Number.MAX_SAFE_INTEGER;
    ans += r;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] >= lst) {
            break;
        }
        let low = 0, high = r - 1;
        let left = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] < nums[i]) {
                left = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        ans += (left + 2);
        lst = nums[i];
    }

    return ans;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---