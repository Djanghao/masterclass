# [Ruby] Post-order Traversal

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/3050634/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/3050634/)

---

```ruby
def count_highest_score_nodes a
    h = Hash.new do _1[_2] = [] end
    a.each_with_index { h[_1] << _2 }
    r, n = [], a.size
    f = -> t do
        c = h[t].map! { f.(_1) }
        s = c.sum
        r << c.reduce((n - 1 - s).clamp(1, n), &:*)
        1 + s
    end
    f.call 0
    r.tally.max_by(&:first).last
end
```