# ✅☑Beats 100% || [C++/Java/Python/JavaScript] || Easiest Approach|| EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 28
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4447376/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/4447376/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)
1. **Outer Loop (i):** Iterates through each possible start index of the subarray.
1. **Inner Loop (j): **Iterates through each possible end index of the subarray, considering all subarrays starting from index `i`.
1. **Third Loop (k):** Checks each element in the array, skipping elements within the current subarray range (defined by indices i and j). For each element, it verifies if it's strictly greater than the last element seen outside the current subarray.
1. **'ok' Flag:**Tracks whether the current subarray (defined by indices i and j) is strictly increasing.
1. **'lst' Variable:** Keeps track of the last element seen outside the current subarray range.



# Complexity
- Time complexity:
   $$O(n^3)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    int incremovableSubarrayCount(vector<int>& nums) {
        int ans = 0;
        int n = nums.size();
        
        // Outer loop for the start index of the subarray
        for (int i = 0; i < n; i++) {
            // Inner loop for the end index of the subarray
            for (int j = i; j < n; j++) {
                bool ok = true; // Flag to check if subarray is increasing
                int lst = -1;   // Variable to keep track of the last element
                
                // Loop to check each element within or outside the subarray
                for (int k = 0; k < n; k++) {
                    if (k >= i && k <= j) {
                        // Elements within the subarray are skipped
                    } else {
                        ok &= (lst < nums[k]); // Check if the current element is greater than the last one
                        lst = nums[k];         // Update the last element
                    }
                }
                
                ans += ok; // Increment count if the subarray is "incremovable"
            }
        }
        return ans; // Return the total count of "incremovable" subarrays
    }
};




```

```Java []
class Solution {
    public int incremovableSubarrayCount(int[] nums) {
        int ans = 0;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                boolean ok = true;
                int lst = -1;

                for (int k = 0; k < n; k++) {
                    if (k >= i && k <= j) {
                        continue;
                    } else {
                        ok &= (lst < nums[k]);
                        lst = nums[k];
                    }
                }

                ans += ok ? 1 : 0;
            }
        }
        return ans;
    }
}



```
```python3 []
class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        ans = 0
        n = len(nums)

        for i in range(n):
            for j in range(i, n):
                ok = True
                lst = -1

                for k in range(n):
                    if i <= k <= j:
                        continue
                    else:
                        ok &= lst < nums[k]
                        lst = nums[k]

                ans += int(ok)
        return ans



```
```javascript []
var incremovableSubarrayCount = function(nums) {
    let ans = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let ok = true;
            let lst = -1;

            for (let k = 0; k < n; k++) {
                if (k >= i && k <= j) {
                    continue;
                } else {
                    ok &= lst < nums[k];
                    lst = nums[k];
                }
            }

            ans += ok ? 1 : 0;
        }
    }
    return ans;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---