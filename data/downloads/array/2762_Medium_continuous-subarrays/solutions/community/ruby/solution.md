# 312 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/3714451/](https://leetcode.com/problems/continuous-subarrays/solutions/3714451/)

---

~~"\u0428\u043E\u0439\u0433\u0443, \u0413\u0435\u0440\u0430\u0441\u0438\u043C\u043E\u0432, \u0433\u0434\u0435 ordered multiset \u0432 standard library?"~~
```ruby
class OMSet
    def initialize = (@t = CRBTreeMap.new)
    def <<(k) = (@t[k] = (@t[k] || 0) + 1)
    def delete(k) = (@t.delete k if (@t[k] -= 1) == 0)
    def min = @t.min_key
    def max = @t.max_key
end

def continuous_subarrays(a) =
    (i, s = -1, OMSet.new; 0...a.size).sum do | j |
        s << a[j]
        s.delete a[i += 1] while s.max - s.min > 2
        j - i
    end
```