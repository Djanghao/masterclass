# [C++] Buy the Cheapest Item First

**Author:** pepe-the-frog
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4283188/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4283188/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Buy the cheapest item first
- Buy the more expensive items later

# Approach
<!-- Describe your approach to solving the problem. -->
- Push the rightmost available item `j` for each shop `i`
- Buy the cheaper item earlier
- Simulate the buying process

# Complexity
- Time complexity: $$O({mn}\	imes{log(m)})$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    #define ELEMENT tuple<int, int, int>
    // time/space: O(mn * log(m))/O(m)
    long long maxSpending(vector<vector<int>>& values) {
        int m = values.size(), n = values[0].size();
        priority_queue<ELEMENT, vector<ELEMENT>, greater<ELEMENT>> pq;

        // push the rightmost available item `j` for each shop `i`
        for (int i = 0; i < m; i++) pq.push({values[i][n - 1], i, n - 1});
        
        // buy the cheaper item eariler
        long long sum = 0LL;
        long long day = 1LL;
        while (!pq.empty()) {
            auto [value, i, j] = pq.top();
            pq.pop();
            sum += ((long long)(value) * (day++));
            if (j > 0) pq.push({values[i][j - 1], i, j - 1});
        }
        return sum;
    }
};
```