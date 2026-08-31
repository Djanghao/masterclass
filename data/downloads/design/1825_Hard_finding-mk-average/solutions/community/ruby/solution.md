# 348 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/3275752/](https://leetcode.com/problems/finding-mk-average/solutions/3275752/)

---

```ruby
class MKAverage

    def initialize(m, k) = (@a, @z, @k = [], m, k)

    def add_element v
        @a << v
        if @a.size == @z
            @l, @m, @r = *3.times.map { CRBTreeMap.new }
            @mz, b = @z - @k * 2, @a.sort
            @ms = b[@k, @mz].tally.sum do
                @m[_1] = _2; _1 * _2
            end
            [[@l, 0...@k], [@r, -@k...@z]].each do | p |
                t, r = *p
                b[r].tally.each { t[_1] = _2 }
            end
        elsif @a.size > @z
            @l[v] ||= 0; @l[v] += 1
            @l.delete_max if (@l[x = @l.max_key] -= 1).zero?
            @m[x] ||= 0; @m[x] += 1
            @m.delete_max if (@m[y = @m.max_key] -= 1).zero?
            @ms += x - y
            @r[y] ||= 0; @r[y] += 1
            if (x = @a.shift) >= @r.min_key
                @r.delete x if (@r[x] -= 1).zero?
            elsif x >= @m.min_key
                @m.delete x if (@m[x] -= 1).zero?
                @r.delete_min if (@r[y = @r.min_key] -= 1).zero?
                @m[y] ||= 0; @m[y] += 1
                @ms += y - x
            else
                @l.delete x if (@l[x] -= 1).zero?
                x = @m.min_key
                @l[x] ||= 0; @l[x] += 1
                @m.delete x if (@m[x] -= 1).zero?
                @r.delete_min if (@r[y = @r.min_key] -= 1).zero?
                @m[y] ||= 0; @m[y] += 1
                @ms += y - x
            end
        end
    end

    def calculate_mk_average = @ms&./(@mz) || -1

end
```