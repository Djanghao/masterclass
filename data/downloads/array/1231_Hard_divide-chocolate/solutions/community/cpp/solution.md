# C++ binary serach

**Author:** andrkv
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/5892258/](https://leetcode.com/problems/divide-chocolate/solutions/5892258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
    bool exist(const vector<int>& sweetness, int k, int total) {
        int curr = 0;
        for (size_t i = 0; i < sweetness.size(); ++i) {
            curr += sweetness[i];
            if (curr >= total) {
                --k;
                curr = 0;
            }
        }
        
        return k < 0;
    }
public:
    int maximizeSweetness(vector<int>& sweetness, int k) {
        int l = 1;
        int r = *max_element(sweetness.begin(), sweetness.end()) * (sweetness.size() / (k + 1));
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (exist(sweetness, k, m)) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        
        return r;
    }
};
```