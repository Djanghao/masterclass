# Ruby DFS - O(N)  - Simple and concise. easy to understand

**Author:** mmson6
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/1718016/](https://leetcode.com/problems/tree-diameter/solutions/1718016/)

---

**This code traverses up from the leaves and check for depths to find the maximum.**

1. The releationship between edge[0] and edge[1] are parent to children. So loop through edges and only save those edges.
2. Save top 2 depths from children and check for max, then move on to next.


```
# @param {Integer[][]} edges
# @return {Integer}
def tree_diameter(edges)
    hash = {}
    edges.each do |edge| # only save edge[0] => edge[1] relationships 
        hash[edge[0]] ? hash[edge[0]] << edge[1] : hash[edge[0]] = [edge[1]]
    end
    
    @max = 0
    dfs(0, hash) # root always starts with 0
    @max
end

def dfs(node, hash)
    children = hash[node] || []

	d1 = d2 = 0
    children.each do |child| # there could be multiple children to a node. loop through and find top 2 depths
        depth = dfs(child, hash)
        if depth > d1
            d2 = d1
            d1 = depth
        elsif depth > d2
            d2 = depth
        end
    end
    
    @max = [@max, d1+d2].max # check for max diameter
    
    d1+1 # return biggest depth + 1. leaves will return value of 1 and build up
end
```