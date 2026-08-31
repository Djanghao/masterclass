# Easy to understand | C++ | Sets

**Author:** amaan2510
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520835/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520835/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate the number of unique elements in nums1 and nums2 by storing their elements in sets s1 and s2.
2. Also calculate total unique elements in both arrays in set s.
3. The answer is minimum of:
        a. size of s
        b. sum of number of unique elements provided by both arrays, which is min(n/2, s1.size) + min(n/2, s2.size)

# Code
```
class Solution {
public:
    int maximumSetSize(vector<int>& nums1, vector<int>& nums2) {
        set<int> s1, s2, s;
        int n = nums1.size();
        for (int x : nums1) {
            s1.insert(x);
            s.insert(x);
        }
        for (int x : nums2) {
            s2.insert(x);
            s.insert(x);
        }
        int ans = min(min(n/2, (int)s1.size()) + min(n/2, (int)s2.size()),(int) s.size());
         
        return ans;
    }
};
```