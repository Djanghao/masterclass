# 17 lines

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/3586078/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/3586078/)

---

```ruby
require 'prime'

@m = {}

def largest_component_size a
    p, c = Hash.new { _1[_2] = _2 }, Hash.new(0)
    f = -> x { p[x] == x ? x : (p[x] = f.(p[x])) }
    a.each { c[_1] = 1 }
    a.each do | a |
        (@m[a] ||= a.prime_division).each do | b, _ |
            next if (ra = f.(a)) == (rb = f.(b))
            ra, rb = rb, ra if c[ra] < c[rb]
            p[rb] = ra; c[ra] += c[rb]
        end
    end
    c.each_value.max
end
```