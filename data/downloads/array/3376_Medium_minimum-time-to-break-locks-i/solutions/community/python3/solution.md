# Python3 || 8 lines, mask and recursion  || T/S: 91 ms / 18 MB

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6124000/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6124000/)

---


```python3 []
class Solution:
    def findMinimumTime(self, strength: List[int], k: int, x = 1) -> int:

        @lru_cache(None)
        def minTime(x: int, mask: int, mn = inf)-> int:

            if mask.bit_count() == n: return 0

            time = []

            for i, s in enumerate(strength):
                if mask & (1 << i): continue

                time.append(ceil(s / x) + minTime(x + k, mask | (1 << i)))

            return min(time)


        n = len(strength)

        return minTime(x, 0)
```
```cpp []
class Solution {
public:
    int findMinimumTime(std::vector<int>& strength, int k, int x = 1) {

        int n = strength.size();
        std::unordered_map<int, int> memo;

        return minTime(strength, k, x, 0, memo, n); }

private:
    int minTime(std::vector<int>& strength, int k, int x, int mask, std::unordered_map<int, int>& memo, int n) {
        if (__builtin_popcount(mask) == n) return 0;

        if (memo.count(mask)) return memo[mask];

        int minTimeResult = std::numeric_limits<int>::max();

        for (int i = 0; i < n; ++i) {
            if (mask & (1 << i)) continue;

            int currentTime = std::ceil(static_cast<double>(strength[i]) / x) +
                              minTime(strength, k, x + k, mask | (1 << i), memo, n);
            
            minTimeResult = std::min(minTimeResult, currentTime);  }

        memo[mask] = minTimeResult;
        return minTimeResult; }
};
```
[https://leetcode.com/problems/minimum-time-to-break-locks-i/submissions/1472949315/](https://leetcode.com/problems/minimum-time-to-break-locks-i/submissions/1472949315/)



I could be wrong, but I think that time complexity is *O*(*N* * 2^ *N*)) and space complexity is *O*(*N* * 2^ *N*)), in which *N* ~ `len(nums)`.