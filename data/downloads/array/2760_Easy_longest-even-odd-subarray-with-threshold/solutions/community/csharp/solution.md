# Solution in Java, C#  | Sliding Window, Two Pointers

**Author:** yeuhoahuuco
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5738633/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5738633/)

---

# Approach
Two pointers l and r. 

   We find the first nums[l] that satisfies all requirements.

   Then, for each element nums[r] to the right of l, we check if it's valid, meaning the subarray from nums[l] to nums[r] satisfies the alternating parity condition.

   If nums[r] is valid, we increment r; otherwise, we "break" at nums[r] and start searching for the first element of the next subarray. 

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```java []
class Solution {
    public int longestAlternatingSubarray(int[] nums, int threshold) {
        int n = nums.length, l = 0;

        // Find the first nums[l] that satisfies all conditions
        while ((l < n) && ((nums[l] % 2 == 1) || (nums[l] > threshold))) {
            l++;
        }
        
        // Case when nums.length == 1 and nums[0] is odd
        if (l == n)     
            return 0;

        int maxLen = 1, r = l + 1, mod = 0;
        while (r < n) {
            mod = (r - l) % 2;
            if (nums[r] > threshold 
            || (mod == 1 && nums[r] % 2 == nums[l] % 2)   // Two consecutive elements have the same parity
            || (mod == 0 && nums[r] % 2 != nums[l] % 2))  // Two consecutive elements have different parity
            {
                // Find the next nums[l] that satisfies all conditions
                // because nums[r] does not satisfy
                l = r;
                while (l < n && (nums[l] > threshold || nums[l] % 2 == 1)) {
                    l++;
                }
                r = l + 1;
            } else {
                maxLen = Math.max(maxLen, r - l + 1);
                r++;
            }
        }

        return maxLen;
    }
}
```
```csharp []
public int LongestAlternatingSubarray(int[] nums, int threshold) {
    int n = nums.Length, l = 0;

    // Find the first nums[l] that satisfies all conditions
    while ((l < n) && ((nums[l] % 2 == 1) || (nums[l] > threshold))) {
        l++;
    }
    
    // Case when nums.length == 1 and nums[0] is odd
    if (l == n)     
        return 0;

    int maxLen = 1, r = l + 1, mod = 0;
    while (r < n) {
        mod = (r - l) % 2;
        if (nums[r] > threshold 
        || (mod == 1 && nums[r] % 2 == nums[l] % 2)   // Two consecutive elements have the same parity
        || (mod == 0 && nums[r] % 2 != nums[l] % 2))  // Two consecutive elements have different parity
        {
            // Find the next nums[l] that satisfies all conditions
            // because nums[r] does not satisfy
            l = r;
            while (l < n && (nums[l] > threshold || nums[l] % 2 == 1)) {
                l++;
            }
            r = l + 1;
        } else {
            maxLen = Math.Max(maxLen, r - l + 1);
            r++;
        }
    }

    return maxLen;
}
```
