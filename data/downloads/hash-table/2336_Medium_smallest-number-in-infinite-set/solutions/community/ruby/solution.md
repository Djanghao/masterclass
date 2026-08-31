# 127 ms

**Author:** 0x81
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452093/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452093/)

---

```ruby
class SmallestInfiniteSet

    def initialize
        @t = CRBTreeMap.new
        @c = 0
    end

    def pop_smallest
        @t.empty? ? @c += 1 : @t.delete_min
    end

    def add_back x
        @t[x] = x if x <= @c
    end

end
```