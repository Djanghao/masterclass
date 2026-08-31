# [C++] Super easy to understand

**Author:** axdx
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/795905/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/795905/)

---

Explanation: 
There are three choices one can make each day depending on n.
We want to minimize the days. Most of the code is straighforward
only thing that need some explanation is line 
```
if (n % 3 != 0 || n% 2 != 0) result = min(result, inner(n-1));
```
This is just an optimization that avoids some calls. Rationale is really
simple. If we can devide oranges with both 3 and 2 then any of the
two calls above will reduce number of oranges more than 1.


```
class Solution {
private:
    int inner(int n) {
        if (dp.find(n) != dp.end()) {
            return dp[n];
        }
        int result = INT_MAX;
		// from large partitions to small
        if (n % 3 == 0) result = min(result, inner(n/3));
        if (n % 2 == 0) result = min(result, inner(n/2));
		// we don't want to do this step as this is the most expensive 
		// we don't need to do this if number was divisible by both
        if (n % 3 != 0 || n% 2 != 0) result = min(result, inner(n-1));
        dp[n] = result + 1;
        return dp[n];
    }
public: 
    unordered_map<int, int> dp;
    int minDays(int n) {
        dp[0] = 0;
        dp[1] = 1;
        return inner(n);
    }
};
```