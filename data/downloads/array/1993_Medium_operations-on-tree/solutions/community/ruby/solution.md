# 895 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/3236307/](https://leetcode.com/problems/operations-on-tree/solutions/3236307/)

---

```ruby
class LockingTree

    def initialize p
        @p = p
        @l = {}
        @t = Hash.new { _1[_2] = [] }
        p.each_with_index do
            @t[_1] << _2
        end
        @c = false
        @f = -> n do
            if @l[n]
                @c = true
                @l.delete n
            end
            @t[n].each { @f.(_1) }
        end
    end

    def lock n, u
        @l[n] ? false : (@l[n] = u; true)
    end

    def unlock n, u
        @l[n] == u ? (@l.delete n; true) : false
    end

    def upgrade n, u
        return false if @l[n]
        p = n
        while (p = @p[p]) != -1
            return false if @l[p]
        end
        @c = false
        @t[n].each { @f.(_1) }
        return false unless @c
        @l[n] = u
        true
    end

end
```