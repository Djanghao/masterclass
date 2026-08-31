# Ruby - Greedy, Priority Queue.

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1108592/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1108592/)

---

### Observation

If there is a class with pass equeals `p` and total students equals `t` then pass ration equals `p / t`.
Adding an extra student who passed exam increases ration by:

```
p + 1     p     (p + 1) * t - p * (t + 1)     t - p
-----  -  - =  -------------------------- = -----------
t + 1     t           t * (t + 1)           t * (t + 1) 
```

### Solution

Ignore classed where all students pass the exam (pass ration `1` cannot be increased).
All other store in a priority queue. Sort the queue by the increase ratio we can obtain by adding one extra student.

```ruby
def max_average_ratio(classes, extra_students)
  pq = classes.select { |p, t| p < t }.map { |p, t| [(t - p).to_f / (t * (t + 1)), p, t] }.sort
  while pq.any? && (extra_students -= 1) >= 0
    dr, p, t = pq.pop
    ndr = dr * t / (t + 2) # new ratio increase. Same as (t - p) / ((t + 1) * (t + 2))

    idx = pq.bsearch_index { |dr, _, _| dr >= ndr } || pq.size
    pq.insert(idx, [ndr, p + 1, t + 1])
  end
  (pq.sum { |_, p, t| p.fdiv t } + classes.size - pq.size) / classes.size
end
```