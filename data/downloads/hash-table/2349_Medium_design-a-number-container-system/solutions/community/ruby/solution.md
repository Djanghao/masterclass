# [Ruby] 398 ms using CRBTreeMap

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/2965003/](https://leetcode.com/problems/design-a-number-container-system/solutions/2965003/)

---

```ruby
class NumberContainers

    def initialize = (@c, @t = {}, {})

    def change i, n
        p = @c[i]
        if p != n
            @t[p].delete i if p
            @c[i] = n
            @t[n] ||= CRBTreeMap.new
            @t[n][i] = true
        end
    end

    def find(n) = @t[n]&.min_key || -1

end
```