# [Ruby] - Binary Search, O(n * log(k))

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/978542/](https://leetcode.com/problems/jump-game-vi/solutions/978542/)

---

# First version. Brute force
`dp[i]` means max sum that can be achieved jumping till `i`-th element. 
There are at max `k`possible points to get to index `i`.

```ruby
def max_result(a, k)
  n = a.size
  dp = Array.new(n, 0)
  dp[0] = a[0]
  prv = [dp[0]]
  for j in 1...n
    start = [j - k, 0].max
    dp[j] = dp[start...j].max + a[j]
  end
  dp.last
end
# Time: O(n * k)
# Runtime: TLE
```

Here `~k` operations are performed for each array element.

### Optimization with Binary Search

Keep previous points achieved sums in a sorted array.

```ruby
def add_into_sorted(arr, x)
  i = arr.bsearch_index { |n| n >= x } || arr.size
  arr.insert(i, x)
end

def delete_from_sorted(arr, x)
  i = arr.bsearch_index { |n| n >= x }
  arr.delete_at(i)
end

def max_result(a, k)
  n = a.size
  dp = Array.new(n, 0)
  dp[0] = a[0]
  prv = [dp[0]]
  for j in 1...n
    dp[j] = prv.last + a[j]
    add_into_sorted(prv, dp[j])
    if prv.size > k
      delete_from_sorted(prv, dp[j - k])
    end
  end
  dp.last
end
# Time: O(n * log(k))
# Runtime: 736 ms
```