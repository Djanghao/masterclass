# 969 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/3573149/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/3573149/)

---

```ruby
class BookMyShow

    def initialize n, m
        @m, s, tz = m, 0, 1
        tz <<= 1 while tz < n
        @t = t = Array.new(tz * 2, 0)
        t[tz, n] = [m] * n
        (1...tz).reverse_each do
            t[_1] = t[_1 << 1, 2].max
        end
        @b = b = n.times.map { s += m }
        n.times.reverse_each do
            b[_1] -= (i = _1 &_1.succ) > 0 ? b[i.pred] : 0
        end
        @tz = tz
    end

    def get_r k
        return @t.size if @t[i = 1] < k
        while (i <<= 1) < @t.size
            i += 1 if @t[i] < k
        end
        (i >> 1) - @tz
    end

    def update _i, d
        @t[i = _i + @tz] -= d
        while (i >>= 1) > 0
            @t[i] = @t[i << 1, 2].max
        end
        @b[i = _i] -= d
        @b[i] -= d while (i |= i.succ) < @b.size
    end

    def pref_sum i
        r = @b[i]
        while (i &= i.succ) > 0
            r += @b[i -= 1]
        end
        r
    end

    private :get_r, :update, :pref_sum

    def gather k, mr
        return [] if (r = get_r k) > mr
        c = @m - @t[r + @tz]
        update r, k
        [r, c]
    end

    def scatter k, mr
        return false if pref_sum(mr) < k
        i = get_r 1
        while k > 0
            next i += 1 if (x = @t[i + @tz]) == 0
            k -= d = [x, k].min
            update i, d
            i += 1
        end
        true
    end

end
```