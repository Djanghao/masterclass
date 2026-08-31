# Straightforward Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/3639535/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/3639535/)

---

# Intuition
Any vertices with an odd number of connections must connect to each, or each connect to the same vertex.  Check these possibilities.

# Approach
1. Turn edges into a hash that gives a set of all connections to a given vertex.  This makes lookup much quicker.
2. Find the vertices with an odd number of connections.
3. If zero, return true.  If more than four, you won't be able to connect them, so return false.  Note that there will always be an even number of vertices with odd connecitons.

We now have two cases left: either two or four vertices with an odd number of connections.  Let's start with 2.

4. If the two vertices aren't currently connected, we can connect them and return true.
5. If they *are* already connected, we can still connect them through another vertex that isn't connect to either one.  Return true if any vertex is not connected to either, false otherwise.

6. If there are four vertices with odd connections, we have to connect them to each other.  Check if any of the combinations are possible.  Return false if no.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def is_possible(n, edges)
    connections = Hash.new { |h,k| h[k] = Set[] }
    edges.each do |edge|
        a,b = edge
        connections[a].add(b)
        connections[b].add(a)
    end

    odds = connections.keys.select { |k| connections[k].size % 2 != 0 }

    return true if odds.length == 0
    return false if odds.length > 4

    if odds.length == 2
        a,b = odds
        return true unless connections[a].include?(b)

        cons = connections[a] + connections[b]
        return (1..n).any? { |i| !cons.include?(i)}
    end

    a,b,c,d = odds
    return true unless connections[a].include?(b) || connections[c].include?(d)
    return true unless connections[a].include?(c) || connections[b].include?(d)
    return true unless connections[a].include?(d) || connections[b].include?(c)

    false
end
```