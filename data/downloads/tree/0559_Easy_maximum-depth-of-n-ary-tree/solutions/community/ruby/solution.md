# Ruby simple solution, but faster and less memory

**Author:** yang-hong-xin
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/581015/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/581015/)

---

using `map` and `flatten`

```ruby
def maxDepth(root, depth = 1)
  return 0 unless root
  children = root.children
  while !children.empty?
    children = children.map(&:children).flatten
    depth += 1
  end
  depth
end
```