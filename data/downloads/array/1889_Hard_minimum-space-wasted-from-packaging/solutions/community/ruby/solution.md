# Ruby - Sort and binary search to compare making the optimal use of boxes for each supplier

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1299491/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1299491/)

---

Sort `packages` and  sort `box_sizes` for each supplier. 
Use a box for all packages that not greater than the box.
Use binary search to optimize search.

```ruby
def min_wasted_space(packages, boxes)
  n = packages.size
  packages.sort!
  max_package = packages.last
  pre = packages.reduce([0]) { |pr, x| pr << pr.last + x } # sum = ->(i, j) { pre[j + 1] - pre[i] }
  res = Float::INFINITY
  for box_sizes in boxes
    box_sizes.sort!
    next if box_sizes.last < max_package
    wasted = 0
    i = 0
    for box in box_sizes
      j = (i...n).bsearch { |j| box < packages[j] } || n
      wasted += (j - i) * box - pre[j] + pre[i]
      i = j
      break if i == n
    end
    res = [res, wasted].min
  end
  res == Float::INFINITY ? -1 : (res % 1000000007)
end
```

Index `i` indicates the first package that is greater than the current box.

Time complexity: `O(m * max(n * log(n), m * log(m)))` if I'm not mistaken.

Please post any comments or remarks. Thank you.