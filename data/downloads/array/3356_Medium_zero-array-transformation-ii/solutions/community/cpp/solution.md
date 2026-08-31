# [C++]  Line Sweep Without Binary Search, O(n + m) time

**Author:** Jason0704
**Votes:** 43
**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solutions/6053366/](https://leetcode.com/problems/zero-array-transformation-ii/solutions/6053366/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This question is Q3 in [Weekly Contest 424](https://leetcode.com/contest/weekly-contest-424/).

Before this, we have Q2, which is a classic sweeping line problem.
We use `cnt[l]++` and `cnt[r + 1]--` to record all numbers in the range [l, r] adding by one.
For each index `i`, we use `sum` to indicate the total increase at that moment.
If `sum >= nums[i]`, then we know we can subtract `nums[i]` to 0. 
```cpp []
class Solution {
public:
    bool isZeroArray(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size(), sum = 0;
        vector<int> cnt(n + 1, 0);
        for (auto &q : queries) {
            int l = q[0], r = q[1];
            cnt[l]++;       // Add at i = l
            cnt[r + 1]--;   // Recover at i = r + 1
        }
        for (int i = 0; i < n; i++) {
            sum += cnt[i];
            if (sum < nums[i]) return false;
        }
        return true;
    }
};
``` 
In this question, we want to find the minimum k such that all numbers become 0 after first k queries.
Similarly, let `sum` be the maximum total increase at each index i.
For each `nums[i]`, We greedily expand k until `sum >= nums[i]`.
If we exhaust all queries but there're still some numbers bigger than 0, return -1.

Consider an index `i` and a query in the form `[l, r, val]`, there're 3 scenarios:
(1) `i < l`, the query may be helpful later.
(2) `l <= i <= r`, the query can be used right now.
(3) `r < i`, the query is useless afterwards.

# Approach
<!-- Describe your approach to solving the problem. -->
For each index i, we calculate `sum` first.
Use a while loop dynamically checking if `sum >= nums[i]`.
If it doesn't, we consume queries one by one.

For a query `[l, r, val]`, We do nothing if `r < i`.
When `l <= i <= r`, to **make the change effective immediately**, we record `cnt[i] += val` instead of `cnt[l] += val`.

# Complexity
- Time complexity: $$O(n + m)$$, $$n$$ is the length of `nums`, $$m$$ is the length of `queries`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int minZeroArray(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size(), sum = 0, k = 0;
        vector<int> cnt(n + 1, 0);
        for (int i = 0; i < n; i++) {
            while (sum + cnt[i] < nums[i]) {
                if (k == queries.size()) return -1;
                int l = queries[k][0];
                int r = queries[k][1];
                int val = queries[k][2];
                k++;
                
                if (r < i) continue;
                cnt[max(l, i)] += val;
                cnt[r + 1] -= val;
            }
            sum += cnt[i];
        }
        return k;
    }
};
```