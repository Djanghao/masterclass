# [Ruby] DFS

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/778351/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/778351/)

---

```
def vertical_traversal(root)
  @dict = Hash.new{|h, k| h[k] = []}

  dfs(root)
  
  @dict.to_a.sort.map do |k, v|
    v.sort.map{|x| x[1]}
  end
end

def dfs(node, x = 0, y = 0)
  return nil if !node
  
  @dict[x] << [y, node.val]
  
  dfs(node.left, x - 1, y + 1)
  dfs(node.right, x + 1, y + 1)
end
```