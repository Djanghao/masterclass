# Simple Ruby solution using dynamic programming (Memoization)

**Author:** divyad25
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/622578/](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/622578/)

---

```
def num_rolls_to_target(d, f, target)
  @dp = Array.new(d+1)
  ways(d, f, target)
end

def ways(d, f, target)
  return 1 if d == 0 && target == 0
  return 0 if d < 0 || target < 0
  return @dp[d][target] if @dp[d] && @dp[d][target]
  count = 0
  (1..f).each { |val|
    count += ways(d-1, f, target-val)
  }
  @dp[d] ||= []
  @dp[d][target] = count % ((10**9)+7)
end
```