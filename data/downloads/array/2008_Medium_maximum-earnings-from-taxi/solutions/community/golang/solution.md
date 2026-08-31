# C++ | GO | Java | Python Intuitive solution

**Author:** kamalkish0r
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/5176524/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/5176524/)

---

`max_profit[i]` represents maximum profit we can achieve till point `i` is equivalent to max profit which can be earned from rides completing on or before point `i`.
 
 
 GO 
 ```
 func maxTaxiEarnings(n int, rides [][]int) int64 {
    max := func(a, b int64) int64 {
		if a > b {
			return a
		}
		return b
	}

    sort.Slice(rides, func(i, j int) bool {
        if rides[i][0] != rides[j][0] {
            return rides[i][0] < rides[j][0]
        } else if rides[i][1] != rides[j][1] {
            return rides[i][1] < rides[j][1]
        } else {
            return rides[i][2] < rides[j][2]
        }
    })
    
    maxProfit := make([]int64, n + 1)
    res := int64(0)
    i := 0
    for point := 1; point <= n; point++ {
		   // max profit till current point is maximum of profit till previous point and current point
        maxProfit[point] = max(maxProfit[point], maxProfit[point - 1])
        
		   // process rides which start before current point
        for i < len(rides) && rides[i][0] <= point {
            start, end, tip := rides[i][0], rides[i][1], rides[i][2]
            dollars := int64(end - start + tip)
			   // profit of a ride is included only when its completed 
            maxProfit[end] = max(maxProfit[end], maxProfit[start] + dollars)
            i++
        }
        
        res = max(res, maxProfit[point])
    }
    
    return res
}
 ```
 
 Python
 ```
class Solution:
    def maxTaxiEarnings(self, n: int, rides: List[List[int]]) -> int:
        rides.sort(key = lambda x : (x[0], x[1], x[2]))
        
        i, point = 0, 1
        max_profit = [0] * (n + 1)
        res = 0
        while point <= n:
			   # max profit till current point is maximum of profit till previous point and current point
            max_profit[point] = max(max_profit[point], max_profit[point - 1])
            while i < len(rides) and rides[i][0] <= point:
                start, end, tip = rides[i]
                dollars = end - start + tip
                max_profit[end] = max(max_profit[end], max_profit[start] + dollars)
                i += 1
            
            res = max(res, max_profit[point])
            point += 1
        
        return res
```

C++
```
class Solution {
public:
    long long maxTaxiEarnings(int n, vector<vector<int>>& rides) {
        sort(rides.begin(), rides.end());
        
        vector<long long> max_profit(n + 1, 0);
        long long res = 0;
        for (int point = 1, i = 0; point <= n; point++) {
            max_profit[point] = max(max_profit[point], max_profit[point - 1]);
            while (i < rides.size() and rides[i][0] <= point) {
                int start = rides[i][0], end = rides[i][1], tip = rides[i][2];
                int dollars = end - start + tip;
                max_profit[end] = max(max_profit[end], max_profit[start] + dollars);
                i++;
            }
            res = max(res, max_profit[point]);
        }
        return res;
    }
};
```

Java
```
class Solution {
    public long maxTaxiEarnings(int n, int[][] rides) {
        Arrays.sort(rides, (a, b) -> {
            if (a[0] != b[0]) {
                return Integer.compare(a[0], b[0]);
            } else if (a[1] != b[1]) {
                return Integer.compare(a[1], b[1]);
            } else {
                return Integer.compare(a[2], b[2]);
            }
        });
        
        long[] max_profit = new long[n + 1];
        long res = 0;
        for (int point = 1, i = 0; point <= n; point++) {
            max_profit[point] = Math.max(max_profit[point], max_profit[point - 1]);
            while (i < rides.length && rides[i][0] <= point) {
                int start = rides[i][0], end = rides[i][1], tip = rides[i][2];
                int dollars = end - start + tip;
                max_profit[end] = Math.max(max_profit[end], max_profit[start] + dollars);
                i++;
            }
            res = Math.max(res, max_profit[point]);
        }
        
        return res;
    }
}
```