# Ruby || DP || O(n)/O(n)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983561/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983561/)

---


# Code
```ruby
class Numeric
    def max(v) = (self < v ? v : self)
end

def min_taps(n, ranges)
    dp = ranges.each_with_index.each_with_object(Array.new(n + 1, 0)) {|(v, idx), res|
        unless v.zero? then
            l = 0.max(idx - v)
            res[l] = res[l].max(idx + v)
        end
    }
    e, f, cnt = dp.each_with_index.inject([0, 0, 0]) {|(e, f, cnt), (v, idx)|
        if idx > e then
            return -1 if f <= e
            [f, f.max(v), cnt + 1]
        else
            [e, f.max(v), cnt]
        end
    }
    cnt + (e < n ? 1 : 0)
end
```