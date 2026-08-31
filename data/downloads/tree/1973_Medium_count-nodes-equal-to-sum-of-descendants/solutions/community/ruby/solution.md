# Ruby - Linear

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1786683/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1786683/)

---

```
def fun(root)
    return 0 unless root
    sum = fun(root.left) + fun(root.right)
    @res += 1 if root.val == sum
    sum + root.val
end
def equal_to_descendants(root)
    @res = 0
    fun(root)
    @res
end
```