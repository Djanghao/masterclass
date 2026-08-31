# [Ruby] Recursion, DP, Time complexity O(n * k)

**Author:** stanislav_sydorenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/4614870/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/4614870/)

---

#### Recursive approach:

```
def rearrange_sticks(n, k)
  cache = {}

  dfs = lambda do |nums, count|
    return 1 if nums == count
    return 0 if nums == 0 || count == 0
    return cache[[nums, count]] if cache[[nums, count]]

    cache[[nums, count]] = dfs.call(nums - 1, count - 1) + (nums - 1) * dfs.call(nums - 1, count)
    cache[[nums, count]]
  end

  dfs.call(n, k) % (10**9 + 7)
end
```

#### Dynamic programming, Time O(n * k), Space O(n * k)

```
def rearrange_sticks(n, k)
  dp = { [1, 1] => 1 }

  2.upto(n) do |nums|
    1.upto(k) do |count|
      dp[[nums, count]] = dp[[nums - 1, count - 1]].to_i + (nums - 1) * dp[[nums - 1, count]].to_i
    end
  end

  dp[[n, k]] % (10**9 + 7)
end
```

#### Dynamic programming, Time O(n * k), Space O(k)
```
def rearrange_sticks(n, k)
  mod = 10**9 + 7
  dp = [1] + [0] * k
  
  (1..n).each do |nums|
    k.downto(1) do |count|
      dp[count] = (dp[count] * (nums - 1) + dp[count - 1]) % mod
    end
    
    dp[0] = 0
  end

  dp[k]
end
```
