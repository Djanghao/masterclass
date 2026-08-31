# Ruby Solution

**Author:** woahlag
**Votes:** 2
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/612245/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/612245/)

---

```
def balance_bst(root)
    return nil if root.nil?
    
    @sorted_array = []
    build_sorted_array(root)
    balance_tree(0, @sorted_array.length-1)
end

def build_sorted_array(root)
    return if root.nil?
    
    build_sorted_array(root.left)
    
    @sorted_array << root
    
    build_sorted_array(root.right)
end

def balance_tree(left, right)
    return if left > right

    middle = (left+right)/2
    
    node = @sorted_array[middle]
    node.left = balance_tree(left, middle-1)
    node.right = balance_tree(middle+1, right)
    node
end
```