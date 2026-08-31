# Ruby solution with DFS, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4129096/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4129096/)

---

# Intuition
Choose one of the leaf nodes to be the root of the tree and iterate outwards from that node, finding the sums of each subtree.  Then just return the number of subtrees with sums divisible by k.

# Approach
1. Turn the edges into an adjacency list and make it a class variable, @connections.  (Store adjacent nodes in a set so they can be removed: we're going to choose a root and make this a directed tree.)
2. Find a node with exactly one connection -- this will be the root of our tree.  (We need a node with only one connection so there's only one way to split it into subtrees.)
3. Create a memo and store values as a class variable, then find the sum from each subtree using a helper function.
4. Return the number of nodes that have subtrees with sums divisible by *k*.

**Helper function**: sum_from_node
This finds the sum of the values in a subtree with node as root.
1. initialize total to be the value of the root node.
2. Find all adjacent nodes (these are child nodes).
3. For each node:
    - Delete the connection in the opposite direction (this turns it into a directed graph that works as a tree).
    - Call the function on that node and add its value to total.
4. Memoize and return total.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
# turn edges into adjacency list
# find a leaf node
# iterate from leaf outwards, finding the sum of values in each subtree
# return the number of sums divisible by k

def max_k_divisible_components(n, edges, values, k)
    @connections = Hash.new { |h,k| h[k] = Set[] }
    edges.each do |edge|
        a,b = edge
        @connections[a].add(b)
        @connections[b].add(a)
    end
    
    leaf = 0
    @connections.each do |node,adjacents|
        if adjacents.size == 1
            leaf = node
            break
        end
    end

    @values = values        
    @memo = Array.new(n,nil)
    sum_from_node(leaf)

    @memo.count { |v| v % k == 0 }
end


def sum_from_node(node)
    total = @values[node]
    adjacents = @connections[node]
    
    adjacents.each do |connecting_node|
        @connections[connecting_node].delete(node)
        total += sum_from_node(connecting_node)
    end
    
    @memo[node] = total
end
```