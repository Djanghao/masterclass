# Ruby || OOP approach, simple 3(almost)-liner

**Author:** alecn2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5951219/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/5951219/)

---


# Code
```ruby []
class TreeNode
    include Enumerable

    def each
        cur = [self]
        (yield(cur); cur = cur.collect_concat {|n| [n.left, n.right].compact }) until cur.empty?
    end
end

def kth_largest_level_sum(root, k) = (root.collect {|lvl| lvl.sum(&:val) }.sort[-k] || -1)
```