# [Python/C++] O(n) space, Easy DP with explanation

**Author:** yanrucheng
**Votes:** 61
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/546442/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/546442/)

---

**Idea**
We first divide the problem into 2 sub-problem. (since we cannot have slice 0 and slice n at the same time)
1. we choose from pizza [0, ..., n-1] as a linear pizza instead of a circular pizza
2. we choose from pizza [1, ..., n] as a linear pizza instead of a circular pizza

We then track the maximum amount we ate after eating the ith pizza we have in `eat`. There are only 2 possibilities as follows.
1. largest value when encountering the previous slice
2. current slice + largest value when encountering last second slice

**Similar Questoins**
- [188. Best Time to Buy and Sell Stock IV](http://https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
- [213. House Robber II](http://https://leetcode.com/problems/house-robber-ii/)

**Complexity**
Time: `O(n^2)`
Space: `O(n)`

**Python 3, O(n^2) space and time**
```
class Solution:
    def maxSizeSlices(self, slices: List[int]) -> int:
        n = len(slices) // 3
        def linear(arr):
            eat = [[0] + [-math.inf]*n] * 2
            for x in arr:
                eat.append([i and max(eat[-1][i], eat[-2][i-1]+x) for i in range(n+1)])
            return max(l[n] for l in eat)
        return max(linear(slices[1:]), linear(slices[:-1]))
```

**Python 3, O(n) space**
```
class Solution:
    def maxSizeSlices(self, slices: List[int]) -> int:
        n = len(slices) // 3
        def linear(arr):
            eat = collections.deque([[0] + [-math.inf]*n] * 2)
            res = 0
            for x in arr:
                eat += [i and max(eat[-1][i], eat[-2][i-1]+x) for i in range(n+1)],
                eat.popleft()
                res = max(res, eat[-1][n])
            return res
        return max(linear(slices[1:]), linear(slices[:-1]))
```

**C++**
```
class Solution {
public:
    int maxSizeSlices(vector<int>& slices) {
        int n = (int)slices.size() / 3;
        auto l1 = vector<int>(slices.begin(), slices.end()-1);
        auto l2 = vector<int>(slices.begin()+1, slices.end());
        return max(linear(l1, n), linear(l2, n));
    }
    
private:
    int linear(vector<int>& slices, int n) {
        vector<vector<int>> eat((int)slices.size()+2, vector<int>(n+1, INT_MIN));
        int res = INT_MIN;
        for (int i=0; i<eat.size(); ++i) eat[i][0] = 0;
        for (int i=2; i<eat.size(); ++i) {
            for (int j=1; j<n+1; ++j)
                eat[i][j] = max(eat[i-1][j], eat[i-2][j-1] + slices[i-2]);
            res = max(eat[i][n], res);
        }
        return res;
    }
};
```
