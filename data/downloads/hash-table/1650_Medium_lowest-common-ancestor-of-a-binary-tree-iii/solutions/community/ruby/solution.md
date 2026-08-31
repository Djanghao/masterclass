# Short and simple Ruby, no need to find root

**Author:** glacials
**Votes:** 2
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4782030/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/4782030/)

---

# Intuition
To find the lowest common ancestor we need to traverse upwards and discover each node's ancestors. We could do this by going all the way to the root from `p`, then go until we find one we've seen before from `q`.

However, we can beat that if we travel up in both paths simultaneously, because we don't have to travel all the way up to the root. This means `p` and `q` could be tens of billions of levels away from the root in the tree and our performance wouldn't be impacted beyond the distance to their common ancestor.

# Approach
We'll use two pointers to iterate upwards from `p` and `q` at the same time, remembering each node we see on the way. If we ever iterate over a node in one's path that we've already seen in the other's, that is our lowest common ancestor.

# Complexity
- Time complexity: $$O(log(n))$$ where $$n$$ = number of nodes in the subgraph rooted at the common ancestor

- Space complexity: $$O(log(n))$$ where $$n$$ = number of nodes in the subgraph rooted at the common ancestor

# Code
```ruby
# Definition for a Node.
# class Node
#     attr_accessor :val, :left, :right, :parent
#     def initialize(val=0)
#         @val = val
#         @left, @right, parent = nil, nil, nil
#     end
# end

# @param {Node} root
# @return {Node}
def lowest_common_ancestor(p, q)
	p_ancestors, q_ancestors = Set.new, Set.new

    loop do
        p_ancestors << p if p
        q_ancestors << q if q
        return q if p_ancestors.include? q
        return p if q_ancestors.include? p
        p = p.parent if p
        q = q.parent if q
    end
end
```