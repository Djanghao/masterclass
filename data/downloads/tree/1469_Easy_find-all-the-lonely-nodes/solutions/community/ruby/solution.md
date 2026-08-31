# Ruby Recursive Beats 100%

**Author:** flyptk
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/673943/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/673943/)

---

```
def get_lonely_nodes(root)
    @lonely = []
    def find_lns(node)
        if !node.nil?
            if [node.left, node.right].compact.size == 1
                val = node.left.nil? ? node.right.val : node.left.val
                @lonely.push(val)
            end 
            find_lns(node.left) if node.left
            find_lns(node.right) if node.right
        end 
    end 
    find_lns(root)
    @lonely 
end
```
