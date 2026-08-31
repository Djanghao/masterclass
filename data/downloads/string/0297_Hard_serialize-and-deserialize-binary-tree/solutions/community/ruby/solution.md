# Ruby, Preorder, Serialize / Deserialize JSON

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/4911867/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/4911867/)

---

# Code
```
def serialize(root)
  preorder = ->(node) do
    return [nil] unless node

    [node.val] + preorder.call(node.left) + preorder.call(node.right)
  end

  preorder.call(root).to_json
end

def deserialize(data)
  return if data.empty?

  helper = ->(preorder) do
    return nil if preorder.empty?

    current = preorder.shift
    return nil unless current
    
    root = TreeNode.new(current)

    root.left = helper.call(preorder)
    root.right = helper.call(preorder)

    root
  end

  helper.call(JSON.parse(data))
end
```