# Ruby || OOP

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/2679971/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/2679971/)

---

```ruby
class NilClass
    def each(&block)
    end
end

class TreeNode
    include Enumerable
    
    def each(&block)
        left.each(&block)
        block.call(self)
        right.each(&block)
    end
    
    def include?(v)
        cur = self
        until cur.nil? do
            return true if cur.val == v
            cur = (v < cur.val) ? cur.left : cur.right
        end
        false
    end
end

def find_target(root, k)
    root.any? {|v|
        kv = k - v.val
        return false if kv <= v.val
        root.include?(kv)
    }
end
```