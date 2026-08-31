# Ruby - Greedy, sort.

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/1125849/](https://leetcode.com/problems/advantage-shuffle/solutions/1125849/)

---

Sort array `b`. 
Take largest element from `b`, and compare with the largest in `a`.
If element from `a` is greater, match them. 
Else keep the largest from `a` to the next time and use the smallest from `a` to match with current largest from `b`.

```ruby
def advantage_count(a, b)
  n = a.sort!.size
  res = Array.new(n, 0)
  for x, i in b.zip(0...n).sort_by { |x,| -x }
    res[i] = a.last > x ? a.pop : a.shift
  end
  res
end
```

Time complexity: `O(N * log N)`

<details>
<summary>Without modification of array <i>a</i> (click to expand).</summary>

```ruby
def advantage_count(a, b)
  n = a.size
  res = Array.new(n, 0)
  a = a.sort
  lhs = -1; rhs = n
  for x, i in b.each_with_index.sort_by { |x,| -x }
    res[i] = a[rhs - 1] > x ? a[rhs -= 1] : a[lhs += 1]
  end
  res
end
```
</details>