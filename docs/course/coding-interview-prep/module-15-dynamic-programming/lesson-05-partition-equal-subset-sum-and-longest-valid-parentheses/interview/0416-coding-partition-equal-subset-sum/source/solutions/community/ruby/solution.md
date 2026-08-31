# [Ruby] DP

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/950970/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/950970/)

---

```
# @param {Integer[]} nums
# @return {Boolean}
def can_partition(nums)
  sum = nums.sum
  half = sum/2
  
  return false if sum.odd?
  return true if nums.include?(half)

  dp = [0]*(sum + 1)
  dp[0] = 1
  
  nums.each do |num|
    sum.downto(0) do |i|
      dp[i + num] = 1 if dp[i]>0
    end
    
    return true if dp[half]>0
  end
          
  false
end
```