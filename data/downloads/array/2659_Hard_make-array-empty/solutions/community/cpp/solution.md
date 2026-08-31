# Just sort without any other tricky data structures.

**Author:** cpcs
**Votes:** 41
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3466731/](https://leetcode.com/problems/make-array-empty/solutions/3466731/)

---

# Intuition
If we just find the smallest, 2nd smallest\u2026until the m-th smallest number and they are just from left to right, then after n operations (n - m movings and m deletions) all the other (n - m) numbers go back to the \u201Ccorrect\u201D/original positions. We just have a shorter array to restart.

# Approach
Sort by index and process all the numbers from left to right and then restart.

# Complexity
- Time complexity:
O(nlogn) because of sorting.

- Space complexity:
O(n)

# Code
```
class Solution {
public:
    long long countOperationsToEmptyArray(vector<int>& nums) {
        const int n = nums.size();
        vector<int> ind(n);
        for (int i = 0; i < n; ++i) {
            ind[i] = i;
        }
        sort(ind.begin(), ind.end(), [&](const int x, const int y) {
            return nums[x] < nums[y];
        });
        int m = n;
        long long r = 0;
        for (int i = 1; i < n; ++i) {
            if (ind[i] < ind[i - 1]) {
                r += m;
                m = n - i;
            }
        }
        r += m;
        return r;
        
    }
};
```