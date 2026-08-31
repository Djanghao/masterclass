# Clear 100% Ruby Solution

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/605825/](https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/605825/)

---

```
def flip_equiv(root1, root2)
    return false if root2.nil? && root1
    
    @map =  {}
    @valid = true
    
    map_tree(root1)
    check_flip(root2)
    
    @valid
end

def map_tree(root)
    return if root.nil?
    
    @map[root.val] = children(root)
    
    map_tree(root.left)
    map_tree(root.right)
end

def check_flip(root)
    return if root.nil?
    return unless @valid
    
    if @map[root.val] != children(root)
        @valid = false 
        return 
    end
    
    check_flip(root.left)
    check_flip(root.right)
end

def children(root)
    values = []
    values << root.left.val if root.left
    values << root.right.val if root.right
    
    values.sort
end
```