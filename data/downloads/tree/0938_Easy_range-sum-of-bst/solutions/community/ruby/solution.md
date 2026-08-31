# Simple, straight forward 3 lines ruby solution

**Author:** divyad25
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/396905/](https://leetcode.com/problems/range-sum-of-bst/solutions/396905/)

---

```
def range_sum_bst(root, l, r)
  value = 0
  return value if root.nil?
  value = root.val if root.val >= l && root.val <= r
  range_sum_bst(root.left, l, r) + range_sum_bst(root.right, l, r) + value
end
```

You can also use the below methods to find whether a number is in range
```
value = root.val if root.val.between?(l,r)
value = root.val if (l..r).include?(root.val)
value = root.val if (l..r).member?(root.val)
```