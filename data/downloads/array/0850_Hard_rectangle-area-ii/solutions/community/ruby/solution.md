# 109 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area-ii/solutions/3454045/](https://leetcode.com/problems/rectangle-area-ii/solutions/3454045/)

---

```ruby
def rectangle_area a
    a = a.filter do | x1, y1, x2, y2 |
        x1 < x2 && y1 < y2
    end
    return 0 if a.empty?
    b = a.map { _1[1] } .uniq.sort!
    h = Array.new b.size do
        Hash.new { _1[_2] = Hash.new 0 }
    end
    b << 2e9.to_i
    for (x1, y1, x2, y2) in a
        for i in 0..b.size - 2
            h1, h2 = b[i], b[i + 1]
            break if y2 <= h1
            next if y1 > h1
            m = [h2, y2].min - h1
            h[i][x1][m] += 1
            h[i][x2][m] -= 1
        end
    end
    r, t = 0, CRBTreeMap.new
    t[0] = 1
    for x in h
        p = 0
        x.sort_by(&:first).each do | x, c |
            r += (x - p) * t.max_key
            c.each do | k, v |
                t[k] ||= 0
                t.delete k if (t[k] += v) == 0
            end
            p = x
        end
    end
    r % 1_000_000_007
end
```