# [Ruby]

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2977728/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2977728/)

---

```ruby
require 'prime'

def closest_primes(l, r) =
    (a = Prime.each(r).filter { _1 >= l }).each_with_index
        .reduce([[-1, -1], 1e5]) do | (r, m), (y, i) |
            i > 0 && (d = y - a[i - 1]) < m ? [[a[i - 1], y], d] : [r, m]
        end .first
```