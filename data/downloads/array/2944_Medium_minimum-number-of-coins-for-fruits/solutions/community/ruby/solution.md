# O(n)

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4346224/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4346224/)

---

```ruby
class SQ
    M = 1e9.to_i
    def initialize
        @l, @lm, @r, @rm = [], [M], [], M
    end
    def size = @l.size + @r.size
    def back = @r.last || @l.first
    def << x
        @r << x
        @rm = x if x < @rm
    end
    def min = [@lm.last, @rm].min
    def pop_front
        if @l.empty?
            until @r.empty?
                @l << (x = @r.pop)
                @lm << x if x <= @lm.last
            end
            @rm = M
        end
        @lm.pop if @lm.last == @l.pop
    end
end

def minimum_coins a
    q = SQ.new
    q << a.pop
    for i in (0...a.size).reverse_each
        t = i + 2
        q.pop_front while q.size > t
        q << a[i] + (q.size < t ? 0 : q.min)
    end
    q.back
end
```