# Binary Search O(mlogm)

**Author:** ArthxrPendragon
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/3142857/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/3142857/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary search to find the biggest k such that 
k * (k + 1) / 2 <= (maxSum + ($$\\sum$$ banned[i] s.t banned[i] <= k))
<=> k * (k + 1) <= 2 * (maxSum + ($$\\sum$$ banned[i] s.t banned[i] <= k))
<=> k * (k + 1) - 2 * ($$\\sum$$ banned[i] s.t banned[i] <= k) <= 2 * maxSum (*)

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the banned array in increasing order
2. Create prefix sum array pre s.t. each entry pre[i] denotes sum of all banned numbers <= banned[i]
3. Binary search in range of [1, n] to find the biggest k that satisfies (*)

# Complexity
    m := length of banned array
- Time complexity: O(mlog(m) + log(m)log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    mlog(m) : Sorting of the input vector
    log(n) * log(m) : binary search in range of n nested with 
        binary search in banned vector for biggest k that satisfies (*)

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    Uses a vector to store all distinctive values of input banned vector.

# Code
```
class Solution {
public:
    int maxCount(vector<int>& b, int n, long long maxSum) {
        sort(b.begin(), b.end());
        vector<int> banned;

        // avoid repeated elements in the input "banned (b)" array
        for (int i = 0; i < b.size(); ++ i) {
            if (i == 0 || b[i] != banned.back())
                banned.push_back(b[i]);
        }

        int m = banned.size();
        long long pre[m];
        pre[0] = banned[0];

        for (int i = 1; i < m; ++ i)
            pre[i] = banned[i] + pre[i - 1];
        
        long long low = 1, high = n;

        while (low < high) {
            long long mid = low + (high - low) / 2 + 1;
            long long curr = mid * (mid + 1);
            int index = upper_bound(banned.begin(), banned.end(), mid) - banned.begin();

            if (index > 0)
                curr -= 2 * pre[index - 1];
            
            if (curr == maxSum * 2)
                return mid - index;
            else if (curr > maxSum * 2)
                high = mid - 1;
            else 
                low = mid;
        }

        int index = upper_bound(banned.begin(), banned.end(), low) - banned.begin();
        return low - index;
    }
};
```