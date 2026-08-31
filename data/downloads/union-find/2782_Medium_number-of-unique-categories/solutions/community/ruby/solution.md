# Simple Union Find Ruby solution

**Author:** mehta7
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/5132289/](https://leetcode.com/problems/number-of-unique-categories/solutions/5132289/)

---

# Intuition
All same categories belong to same group
# Approach
<!-- Describe your approach to solving the problem. -->
Union Find
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2) log(k) N is the number of elements k are the pair having same categories
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
# Definition for a category handler.
# class CategoryHandler
#   def initialize(categories)
#   end
#   def have_same_category(a, b)
#   end
# end
# @param {Integer} n
# @param {CategoryHandler} category_handler
# @return {Integer}
def number_of_categories(n, category_handler)
    # define parent array
    @parent = (0...n).to_a
    (0...n).each do |i|
        (i+1...n).each do |j|
            union(i,j) if category_handler.have_same_category(i,j)
        end
    end
    @parent.uniq.length
end

def find(node)
    while @parent[node] != node
        node = @parent[node]
    end

    return node
end

def union(node1, node2)
    p_n1 = find(node1)
    p_n2 = find(node2)
    p p_n1
    p p_n2
    @parent[p_n2] = p_n1 if p_n1 != p_n2
    # p @parent

end
```