# Ruby || Hash, FP approach || O(n)/O(n)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4272224/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4272224/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```ruby
class Hash
    def append_val(k, v) = (self[k] ||= Set[]) << v
    def append_vals(v1, v2) = (append_val(v1, v2); append_val(v2, v1))
end

def restore_array(adjacent_pairs)
    ap = adjacent_pairs.each_with_object({}) {|(v1, v2), res| res.append_vals(v1, v2) }
    ends = ap.filter {|k, v| v.size == 1 }.keys
    ans = [ends.first, ap[ends.first].to_a.first]
    ans << (ap[ans.last] - [ans[-2]]).to_a.first until ans.last == ends.last
    ans
end
```