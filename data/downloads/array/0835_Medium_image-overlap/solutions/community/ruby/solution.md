# 162 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/image-overlap/solutions/3321502/](https://leetcode.com/problems/image-overlap/solutions/3321502/)

---

Proof: https://leetcode.com/submissions/detail/919047977/
```ruby
class Integer

    @@m = 256.times.map { _1.to_s(2).count(?1) } .freeze

    def popcount
        r, x = 0, self
        while x > 0
            r += @@m[x & 255]
            x >>= 8
        end
        r
    end

end

def largest_overlap a, b
    n, a, b = a.size, *[a, b].each do | g |
        g.map! { _1.join.to_i(2) }
    end
    return a.sum(&:popcount) if a == b
    r = 0
    for y in -(nd = n - 1)...n
        yt = n - y.abs
        ay, by = y < 0 ? [-y, 0] : [0, y]
        for x in -nd...n
           s, sh = 0, x.abs
           x < 0 ?
               yt.times do
                   s += ((a[ay + _1] << sh) & b[by + _1]).popcount
               end :
               yt.times do
                   s += ((a[ay + _1] >> sh) & b[by + _1]).popcount
               end
           r = s if s > r
        end
    end
    r
end
```