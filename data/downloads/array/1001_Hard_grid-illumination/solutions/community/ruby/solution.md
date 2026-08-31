# 353 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/grid-illumination/solutions/3304908/](https://leetcode.com/problems/grid-illumination/solutions/3304908/)

---

```ruby
def grid_illumination _, a, q
    return [0] * q.size if a.empty? || q.empty?
    s, r, c, dl, dr = Set.new, *4.times.map { Hash.new 0 }
    a.each do | (i, j) |
        unless s === [i, j]
            s << [i, j]
            r[i] += 1; c[j] += 1
            dl[i - j] += 1
            dr[i + j] += 1
        end
    end
    a = (a = [*(-1..1)]).product a
    q.map! do | i, j |
        next 0 if s.empty?
        if s === [i, j] || r[i] > 0 || c[j] > 0 ||
           dl[i - j] > 0 || dr[i + j] > 0
            a.each do | (y, x) |
                if s === [y += i, x += j]
                    s.delete [y, x]
                    r[y] -= 1; c[x] -= 1
                    dl[y - x] -= 1
                    dr[y + x] -= 1
                end
            end
            1
        end || 0
    end
end
```