# Ruby (Editorial Approach)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/5056961/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/5056961/)

---

# Code
```
def longest_consecutive(root)
  result = 0

  longest_path = ->(node) do
    return [0, 0] unless root

    longest_increasing, longest_decreasing = 1, 1
    if node.left
      increasing, decreasing = longest_path.call(node.left)
      if node.val == node.left.val + 1
        longest_decreasing = decreasing + 1
      elsif node.val == node.left.val - 1
        longest_increasing = increasing + 1
      end
    end

    if node.right
      increasing, decreasing = longest_path.call(node.right)
      if node.val == node.right.val + 1
        longest_decreasing = [longest_decreasing, decreasing + 1].max
      elsif node.val == node.right.val - 1
        longest_increasing = [longest_increasing, increasing + 1].max
      end
    end

    result = [result, longest_decreasing + longest_increasing - 1].max
    return [longest_increasing, longest_decreasing]
  end

  longest_path.call(root)
  result
end
```