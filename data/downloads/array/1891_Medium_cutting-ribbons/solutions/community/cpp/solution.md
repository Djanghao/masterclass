# CPP || Binary Search + For Loop || O(nlog(n))

**Author:** praful99
**Votes:** 1
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/3291148/](https://leetcode.com/problems/cutting-ribbons/solutions/3291148/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Aim is to find max/ min length k ribbons. Therefore we can think in direction of binary search, two pointers, sliding window of size k etc.
2. In O(N) or in one for loop we can determine if its possible or not. 
3. Therefore we can use binary search to determine the max / min length. 

# Approach
<!-- Describe your approach to solving the problem. -->
1. Binary search to find the length in O(log(n)) and loop through the ribbons to determine true or false in O(n).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlog(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(nlog(1))$$ no extra space
 
# Code
```
class Solution {
public:
    bool isPossible(vector<int>& ribbons, int k, int m) {
        if (m == 0) return false;
        for (auto ribbon : ribbons) {
            k -= (ribbon/ m);
        }
        return k <= 0;
    }
    int maxLength(vector<int>& ribbons, int k) {
        int i, j, l, r, m;
        l = 0;
        r = INT_MAX;

        while (l < r) {
            m = (r - l) / 2 + l;
            if (isPossible(ribbons, k, m)) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        if (isPossible(ribbons, k, l)) {
            return l;
        }
        return isPossible(ribbons, k, l-1) ? l - 1 : 0;
    }
};
```