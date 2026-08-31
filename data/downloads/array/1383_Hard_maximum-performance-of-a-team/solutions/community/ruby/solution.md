# Ruby - Quasi Priority Queue

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/1253125/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/1253125/)

---

Sort engineers by efficiency and iterate by efficiency descending.
Keep all possible speeds in a descending sorted array. And consider sum of k largest values as a result candidate.
Optimization1. Cache speed sum in a variable `ssum`.
Optimization2. Do not sort speeds while there are not more than `k` elements.

```ruby
def max_performance(n, speed, efficiency, k)
  engineers = efficiency.zip(speed).sort!
  res = 0
  speeds = []
  ssum = 0
  engineers.reverse_each do |e, s|
    if speeds.size < k
      ssum += s
      speeds << s
    else
      speeds.sort!.reverse! if speeds.size == k
      i = speeds.bsearch_index { |y| s >= y } || speeds.size
      speeds.insert(i, s)
      if i < k # if added speed is one of the first k fastest
        ssum += s - speeds[k]
      end
    end
    res = [res, ssum * e].max
  end
  res % 1000000007
end
```

Time complexity: `O(N * N)`