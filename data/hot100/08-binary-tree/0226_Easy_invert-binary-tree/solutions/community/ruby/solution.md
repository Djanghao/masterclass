# Ruby - iterative and recursive solution

**Author:** piyushsawaria
**Votes:** 5
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/1001564/](https://leetcode.com/problems/invert-binary-tree/solutions/1001564/)

---

```
# bfs
def invert_tree(root)
  return unless root
  queue = [root]
  until queue.empty?
    queue.size.times do
      current = queue.shift
      current.left, current.right = current.right, current.left
      queue.push(current.left) if current.left
      queue.push(current.right) if current.right
    end
  end
  root
end

# dfs
def invert_tree(root)
  return unless root
  root.left, root.right = invert_tree(root.right), invert_tree(root.left)
  root
end