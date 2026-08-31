# Ruby, Binary Search (Using Range#bsearch)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/5338486/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/5338486/)

---

# Code
```
def min_speed_on_time(dist, hour)
  hours_required = ->(target) do
    dist.map.with_index { |d, i| i == dist.length - 1 ? (d.to_f / target) : (d.to_f / target).ceil }.sum
  end

  (1..10**7).bsearch { |target| hours_required.call(target) <= hour } || -1
end
```