# CC + BIT

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4834459/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4834459/)

---

```ruby
class BIT
    def initialize(z) = (@b = [0] * z)
    def add i
        while i < @b.size
            @b[i] += 1
            i |= i.next
        end
    end
    def pref i
        r = 0
        while i >= 0
            r += @b[i]
            i = (i & i.next).pred
        end
        r
    end
end

def result_array a
    h = a.clone.uniq.sort!.each_with_index.to_h
    b1, b2 = 2.times.map do
        b = BIT.new h.size
        b.add h[a[_1]]
        b
    end
    a1, a2 = [a.shift], [a.shift]
    ab1, ab2 = [a1, b1], [a2, b2]
    for x in a
        t = h[x]
        case a1.size - b1.pref(t) <=> a2.size - b2.pref(t)
        when  1; ab1
        when -1; ab2
        else
            a1.size <= a2.size ? ab1 : ab2
        end .tap { _1 << x; _2.add t }
    end
    a1 + a2
end
```