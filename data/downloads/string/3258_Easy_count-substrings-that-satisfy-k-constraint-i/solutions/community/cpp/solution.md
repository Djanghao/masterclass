# O(n) | Sliding window | most optimized | C++

**Author:** gavnish_kumar
**Votes:** 18
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5653819/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5653819/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int countKConstraintSubstrings(string s, int k) {
        int l = 0, r = 0;
        int one = 0, zero = 0;
        int ans = 0;

        while (r < s.size()) {
            if (s[r] == '0') zero++;
            else one++;
            
            while (zero > k && one > k) { // Both exceed k, so we need to shrink the window
                if (s[l] == '0') zero--;
                else one--;
                l++;
            }

            ans += (r - l + 1); // All substrings ending at r and starting from l to r are valid
            r++;
        }

        return ans;
    }
};

```