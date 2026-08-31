# Ruby Solution O(n) with DP

**Author:** nischay_dhiman
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/1405868/](https://leetcode.com/problems/jump-game-v/solutions/1405868/)

---

```

def reachable_indices(i, arr, d)
  return @dp[i] if @dp[i]                         # RETURN IF ALREADY VISITED
  
  max = 0
  
  # CHECKING IN LOWER LIMIT RANGE
  j = i - 1
  while(j >= (i - d))
    break if j < 0 || arr[j] >= arr[i]            # BREAK IF elem >= cur
    max = [max, reachable_indices(j, arr, d)].max
    j -= 1
  end
  
  # CHECKING IN HIGHER LIMIT RANGE
  j = i + 1
  while(j <= (i + d))
    break if j > arr.length-1 || arr[j] >= arr[i] # BREAK IF elem >= cur
    max = [max, reachable_indices(j, arr, d)].max
    j += 1
  end
  
  @dp[i] = max + 1                        # RETURN MAX INDICES REACHED INCLUDING SELF
end

def max_jumps(arr, d)
  @dp = []
  max = 1
  for i in 0..arr.length-1
    max = [max, reachable_indices(i, arr, d)].max
  end
  max
end


# COMPLEXITY - Time O(nd) | Space - O(n)
```