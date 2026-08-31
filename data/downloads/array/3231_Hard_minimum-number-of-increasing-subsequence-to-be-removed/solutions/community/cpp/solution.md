# std::multiset based solution

**Author:** antoniodeblasi
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5776121/](https://leetcode.com/problems/minimum-number-of-increasing-subsequence-to-be-removed/solutions/5776121/)

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
#include <set>
#include <algorithm>


class Solution {
public:

    int minOperations(vector<int>& nums) {        
        std::multiset<int, std::greater<int>> subsequences_pivots;

        for(auto value: nums)
        {
            auto it = subsequences_pivots.upper_bound(value);
            if(it == subsequences_pivots.end()) // a new subsequence is found
                subsequences_pivots.insert(value); 
            else
            {
                // update pivot for existing subsequence
                subsequences_pivots.insert(it, value);
                subsequences_pivots.erase(it);
            }
        }
        
        return subsequences_pivots.size();
    }
};
```