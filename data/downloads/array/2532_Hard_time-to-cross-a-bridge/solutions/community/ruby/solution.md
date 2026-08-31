# 1700 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/4410151/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/4410151/)

---

```ruby
class PQ

    def initialize array = [], heapify = true, &is_unordered
        raise ArgumentError.new 'PQ init' unless
            array.class == Array &&
            (heapify == true || heapify == false) &&
            block_given?
        @a, @u = array, is_unordered
        return unless heapify
        i = @a.size / 2
        sink i while (i -= 1) >= 0
    end

    def size = @a.size
    def empty? = @a.empty?
    def top = @a.first
    def push_pop(x) = !@a.empty? && @u.(x, @a.first) ? pop_push(x) : x

    def pop_push x
        t, @a[0], = @a.first, x
        sink 0
        t
    end

    def << x
        i = @a.size
        @a << x
        while i > 0
            p = (i - 1) / 2
            break unless @u.call @a[p], @a[i]
            @a[p], @a[i] = @a[i], @a[p]
            i = p
        end
        self
    end

    def pop
        return @a.pop if @a.size < 2
        t, @a[0] = @a.first, @a.pop
        sink 0
        t
    end

    private

    def sink p
        z = @a.size
        while (c = p * 2 + 1) < z
            r = c + 1
            c = r if r < z && @u.(@a[c], @a[r])
            break unless @u.call @a[p], @a[c]
            @a[p], @a[c] = @a[c], @a[p]
            p = c
        end
    end

end

def find_crossing_time n, k, a
   s, d, ln, t = [0] * k, [0] * k, n, 0
   p = a.map.with_index do | v, i |
       (v[0] + v[2] << 20) | i
    end
    bq = PQ.new [*k.times] do
        (x = s[_1]) != (y = s[_2]) ?
            x < y : p[_1] < p[_2]
    end
    dq = PQ.new { d[_1] > d[_2] }
    loop do
        t = d[dq.top] if bq.empty? && d[dq.top] > t
        while (i = dq.top) && d[i] <= t
            bq << dq.pop
        end
        i = bq.pop
        if s[i] == 0
            next if (ln -= 1) < 0
            t += a[i][0]
            d[i] = t + a[i][1]
            s[i] = 1
            dq << i
        else
            t += a[i][2]
            return t if (n -= 1) == 0
            next if ln < 0
            d[i] = t + a[i][3]
            s[i] = 0
            dq << i
        end
    end
end
```