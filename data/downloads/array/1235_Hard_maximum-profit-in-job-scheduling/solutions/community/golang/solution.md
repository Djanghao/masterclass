# [Golang] Top-down DP solution with comments

**Author:** vergil0327
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2705328/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2705328/)

---

O(nlogn)

1. first I think I can take one and skip one approach to try all the possibilities
2. then, I found that every time I want to find next candidate job, I always do linear search to find next. therefore, I replace linear search with sorting & binary search
3. cache previous work and early return the result

##### go
```go
func jobScheduling(startTime []int, endTime []int, profit []int) int {
    N := len(startTime)
    jobs := [][3]int{}
    for i:=0; i<N; i++ {
        jobs = append(jobs, [3]int{startTime[i], endTime[i], profit[i]})
    }
    
    sort.Slice(jobs, func(i, j int) bool {
        return jobs[i][0] < jobs[j][0]
    })
    
    memo := map[int]int{}
    
    var dfs func(i int) int
    dfs = func(i int) int {        
        if i == N {
            return 0
        }
        
        if v, ok := memo[i]; ok {
            return v
        }
        
        // skip current profit
        profit1 := dfs(i+1)
        
        // take current profit and find next
        l, r := i+1, N
        for l < r {
            mid := l + (r-l)/2
            if jobs[mid][0] < jobs[i][1] {
                l = mid + 1
            } else {
                r = mid
            }
        }
        profit2 := jobs[i][2] + dfs(l)   
        
        // return max(profit1, profit2)
        memo[i] = max(profit1, profit2)
        return memo[i]
    }
    return dfs(0)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}
```

##### python
```python
class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        time = sorted([(start, end, p) for start, end, p in zip(startTime, endTime, profit)])
        inf= float("inf")
        n = len(time)
        
        def bisect_right(i):
            l, r = i+1, n
            while l < r:
                mid = l + (r-l)//2
                if time[mid][0] < time[i][1]:
                    l = mid+1
                else:
                    r = mid
            return l
        
        @functools.lru_cache(None)
        def dfs(i):
            if i == n: return 0
            
            profit = dfs(i+1)
            j = bisect_right(i)
            profit = max(profit, dfs(j) + time[i][2])
            
            return profit
        
        return dfs(0)
```