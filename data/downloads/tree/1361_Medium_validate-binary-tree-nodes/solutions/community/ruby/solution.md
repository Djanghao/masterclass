# Ruby || Tree reconstruction

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4177380/](https://leetcode.com/problems/validate-binary-tree-nodes/solutions/4177380/)

---

# Code
```ruby
def validate_binary_tree_nodes(n, left_child, right_child)
    parents, children = [], Array.new(n) {|_| Array.new }
    [left_child, right_child].each {|childs|
        childs.each_with_index {|c, i|
            next if c.negative?
            parents[c] ||= i
            return false if parents[c] != i
            return false if children[i].include?(c)
            children[i] << c
        }
    }
    return false unless n.times.collect {|p| parents[p].nil? ? 1 : 0 }.sum == 1
    root = n.times.inject(nil) {|r, p| 
        return false if parents[p].nil? && !r.nil?
        parents[p].nil? ? p : r
    }
    visited, cur = Set[root], Set[root]
    until cur.empty? do
        cur = cur.inject(Set[]) {|r, c|
            cc = children[c]
            return false if cc.any? {|ccc| visited.include?(ccc) }
            visited.merge(cc)
            r.merge(cc)
        }
    end
    visited.size == n
end
```