# Ruby solution with memo & BFS, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052368/](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/4052368/)

---

Note: this solution TLEs about half the time.  It's right on the edge of being fast enough, but apparently there aren't other Ruby solutions that are faster?

# Intuition
The key to solving this problem is realizing that any two adjacent nodes have scores that are one off from each other.  Find the score for one node with BFS, then find the scores of the rest of the nodes using memoization and BFS again.

# Approach
1. Create a hash in which each node is a key and the set of nodes it points to is the value.
2. Create another hash in which each node is a key and the set of nodes pointing to it is the value.
3. Populate these hashes by iterating through edges.
4. Create a memo of scores for each node.  This will be the result we return.
5. Use BFS to find the score of node 0.  Specifically:
    - For each node, add the nodes it points to to the queue, and to checked.
    - Add the nodes it doesn't point to to the queue and to checked also.  Increment score for each of these nodes; these are edges you have to reverse.
6. Store score in memo for node 0.
7. Create a new queue and a new checked set.  Populate the queue with all nodes adjacent to 0 in either direction (stored as [0, new_node]) and checked with 0.
8. BFS through queue.  For each element:
    - Decompose into the previous node and the current node.
    - Add the current node to checked.
    - Look at the score of the previous node.  Add or subtract 1 from that score, depending on which way the edge points, and add to memo.
    - Add all adjacent nodes to the queue in the form [curr_node, adjacent_node]
9.  When you've gotten to the end of the queue, you'll have hit every node (since they're all connected) and populated everything into memo.  Return memo.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def min_edge_reversals(n, edges)
    direct = Hash.new { |h,k| h[k] = Set[] }
    reverse = Hash.new { |h,k| h[k] = Set[] }
    edges.each do |edge|
        a,b = edge
        direct[a].add(b)
        reverse[b].add(a)
    end
    
    memo = Array.new(n,nil)
    
    queue = [0]
    checked = Set[0]
    score = 0
    until queue.empty?
        node = queue.shift
        direct[node].each do |next_node|
            queue << next_node unless checked.include?(next_node)
            checked.add(next_node)
        end
        reverse[node].each do |next_node|
            queue << next_node unless checked.include?(next_node)
            score += 1 unless checked.include?(next_node)
            checked.add(next_node)
        end
    end
    
    memo[0] = score
    
    queue = []
    checked = Set[0]
    direct[0].each { |node| queue << [0,node] }
    reverse[0].each { |node| queue << [0,node] }
    
    until queue.empty?
        prev,node = queue.shift
        checked.add(node)
        memo[node] = direct[prev].include?(node) ? memo[prev] + 1 : memo[prev] - 1
        direct[node].each { |next_node| queue << [node,next_node] unless checked.include?(next_node) }
        reverse[node].each { |next_node| queue << [node,next_node] unless checked.include?(next_node) }
    end
    
    memo
end
```