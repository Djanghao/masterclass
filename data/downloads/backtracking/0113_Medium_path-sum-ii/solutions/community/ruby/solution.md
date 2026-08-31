# Ruby || recursion || 95% faster

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/2617354/](https://leetcode.com/problems/path-sum-ii/solutions/2617354/)

---

```ruby
class NilClass
    def populate
        []
    end
end

class TreeNode
    def populate(path = [], sum = 0)
        children = [left, right].compact
        children.empty? ? 
            [[path + [val], sum + val]] : 
            children.collect {|child| 
                child.populate(path + [val], sum + val)
            }.sum([])
    end
end

def path_sum(root, target_sum)
    root.populate.filter {|(path, sum)| sum == target_sum }.collect(&:first)
end
```