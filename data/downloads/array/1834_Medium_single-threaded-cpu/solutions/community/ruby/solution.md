# [Ruby] 1280 ms using CRBTreeMap

**Author:** 0x81
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2966206/](https://leetcode.com/problems/single-threaded-cpu/solutions/2966206/)

---

```ruby
def get_order a
    a = a.each_with_index.map { _1 << _2 } .sort_by { _1.first } .reverse
    r = []
    c = a.last.first
    t = CRBTreeMap.new
    loop do
        while (l = a.last) && l.first <= c
            a.pop
            t.push [l[1], l[2]], 0
        end
        if t.empty?
            break if a.empty?
            c = a.last.first
            next
        end
        k = t.min_key
        c += k.first
        r << k.last
        t.delete_min
    end
    r
end
```