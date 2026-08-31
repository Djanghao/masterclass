# C++ || don't trash your cache || fast

**Author:** heder
**Votes:** 9
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3521285/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3521285/)

---

# Approach 1: sort and traverse row wise (112ms, 100%?)

For a large matrix traversing it column wise would be really bad for cache locality and work against all CPU memory prefetching. We can avoid this be just keep a vector for the max values in each column and process row by row.

```cpp
    static int matrixSum(vector<vector<int>>& nums) {
        const int cols = size(nums[0]);
        vector<int> maxs(cols);
        for (vector<int>& row : nums) {
            sort(begin(row), end(row));
            for (int c = 0; c < cols; ++c)
                maxs[c] = max(maxs[c], row[c]);
        }
        return reduce(begin(maxs), end(maxs));
    }
```

**Complexity Analysis**
With a matrix of $$r$$ rows and $$c$$ columns the

* Time complexity is $$O(r * c \\log c)$$ as we need to sort each row and sorting is the dominating factor and the

* Space complexity is $$O(c)$$ as we need to keep the max for each column.

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
