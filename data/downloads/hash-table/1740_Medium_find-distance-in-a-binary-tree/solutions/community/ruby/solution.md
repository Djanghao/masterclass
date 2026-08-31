# Ruby, BFS

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5482594/](https://leetcode.com/problems/find-distance-in-a-binary-tree/solutions/5482594/)

---

# Code
```
def find_distance(root, p, q)
  target_path = lambda do |current, target|
    queue = [[current, [current]]]
    until queue.empty?
      current, path = queue.shift

      next unless current
      return path if target == current.val

      queue.append([current.left, path + [current.left]]) if current.left
      queue.append([current.right, path + [current.right]]) if current.right
    end
  end

  level_order = lambda do |current, target|
    queue = [[current, 0]]
    until queue.empty?
      current, level = queue.shift

      next unless current
      return level if current.val == target

      queue.append([current.left, level + 1]) if current.left
      queue.append([current.right, level + 1]) if current.right
    end
  end

  lowest_common_ancestor = (target_path.call(root, p) & target_path.call(root, q))[-1]
  level_order.call(lowest_common_ancestor, p) + level_order.call(lowest_common_ancestor, q)
end
```