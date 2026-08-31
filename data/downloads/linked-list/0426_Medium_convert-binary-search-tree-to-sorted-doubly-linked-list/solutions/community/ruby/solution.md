# Ruby Solution with Array

**Author:** woahlag
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/619280/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/619280/)

---

```
def treeToDoublyList(root)
	@sorted = []

    sort_tree(root)
    build_list
    
    @sorted[0]
end

def sort_tree(root)
    return if root.nil?
    
    sort_tree(root.left)
    @sorted << root
    sort_tree(root.right)
end

def build_list
    @sorted.each_with_index do |node, index|
        node.left = @sorted[index-1]
        node.right = @sorted[index == @sorted.length-1 ? 0 : index+1]
    end
end
```