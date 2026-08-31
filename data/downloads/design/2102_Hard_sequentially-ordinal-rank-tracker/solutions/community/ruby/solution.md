# 1270 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/3270912/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/3270912/)

---

```ruby
class SORTracker

    def initialize
        @i, @t = *2.times.map { CRBTreeMap.new }
    end

    def add n, s
        k = [-s, n]
        @i[k] = k
        k = @i.delete_max
        @t[k] = k
    end

    def get
        k = @t.delete_min
        @i[k] = k
        k.last
    end

end
```