# Ruby Solution

**Author:** Purandhar999
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4323639/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4323639/)

---


# Code
```
class NilClass
    def >(v) = false
    def ==(v) = false
    def +(v) = nil
end

class TreeNode
    def TreeNode.set_kv(k, target)
        @@k, @@target = k, target
    end

    def find(ans, d = nil)
        if val == @@target then
            [left, right].compact.each {|n| n.find(ans, 1) }
            return 1
        end
        return d if d > @@k
        (ans << val; return d - 1) if d == @@k
        childs = [left, right].compact
        childs.each_with_index {|n, idx|
            dd = n.find(ans, d + 1)
            if d.nil? && !dd.nil? then
                if dd == @@k then
                    ans << val
                elsif dd < @@k && childs.size > 1 then
                    childs[1-idx].find(ans, dd + 1)
                end
                return dd + 1
            end
        }
        nil
    end
end

def distance_k(root, target, k)
    return [target.val] if k.zero?
    TreeNode.set_kv(k, target.val)
    root.find(ans = [])
    ans
end
```