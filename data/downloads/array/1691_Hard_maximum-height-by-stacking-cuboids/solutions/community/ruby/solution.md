# Ruby - First solution, hence best

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/1745959/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/1745959/)

---

```
def max_height(arr)
    arr = arr.map{|a| a.sort}.sort
    dp = arr.map{|a| a.last}
    res = dp[0]
    for i in 1...arr.size
        for j in 0...i
            dp[i] = [dp[i], dp[j]+arr[i][2]].max if arr[j][0]<=arr[i][0] && arr[j][1]<=arr[i][1] && arr[j][2]<=arr[i][2]
        end
        res = [dp[i], res].max
    end
    res
end
```