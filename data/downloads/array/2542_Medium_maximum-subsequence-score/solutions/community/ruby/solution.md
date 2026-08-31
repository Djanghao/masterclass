# Medium level of readability

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3559040/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3559040/)

---

```ruby
def max_score a, b, k
    b, t = b.each_with_index.sort_by(&:first), CRBTreeMap.new
    s = ((z = b.size) - k...z).sum do
        t[((x = a[i = b[_1].last]) << 20) | i] = x
    end
    (0...z - k).reverse_each.reduce s * b[-k].first do
        t[((m, i = *b[_2]; x = a[i]) << 20) | i] = x
        [_1, (s += x - t.delete_min) * m].max
    end
end
```