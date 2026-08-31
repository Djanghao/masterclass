# 633 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/3272785/](https://leetcode.com/problems/throne-inheritance/solutions/3272785/)

---

```ruby
class ThroneInheritance

    def initialize k
        @n = { k => {} }
        @t = { k => @n[k] }
        @d = Set.new
    end

    def birth p, c
        @n[p][c] = @n[c] = {}
    end

    def death n
        @d << n
    end

    def get_inheritance_order
        r = []
        f = -> c do
            c.each do
                r << _1 unless @d === _1
                f.call _2
            end
        end
        f.call @t
        r
    end

end
```