# 146 ms

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/4608674/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/4608674/)

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

def mincost_to_hire_workers e, w, k
    n = e.size
    n.times { w[_1] = w[_1] .fdiv e[_1] }
    a = n.times.sort_by { w[_1] }
    f, a = a[0, k], a[k..]
    s = f.sum { e[_1] }
    m = s * w[f.last]
    q = PQ.new(f) { e[_1] < e[_2] }
    for i in a
        s += e[i]
        s -= e[q.pop_push i]
        x = s * w[i]
        m = x if m > x
    end
    m
end
```