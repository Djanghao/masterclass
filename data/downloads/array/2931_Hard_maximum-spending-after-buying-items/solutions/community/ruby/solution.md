# O(m * n * max(1, log2(m)))

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4285680/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4285680/)

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

def max_spending a
    z, q = a.size * a.first.size, PQ.new(a) { _1.last > _2.last }
    z.times.sum do
        v = q.pop
        r = _1.succ * v.pop
        q << v unless v.empty?
        r
    end
end
```