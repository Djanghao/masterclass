# Ruby solution with detailed explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/4020182/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/4020182/)

---

# Intuition
Map the trips, find how often each node gets hit in total, and use dynamic programming to find the minimum total price from halving nodes.

# Approach
1. Convert edges to connections hash
    - Create a hash to hold connections.
    - Iterate through the edge.  For each edge, add the two endpoints to each other's connections hash.
2. Convert each trip into a list of nodes I will hit (using DFS)
    - Map the trips to a sequence of nodes they hit using a DFS helper function.  (Since this is a tree and has no cycles, there's only one possible path between any two nodes.)
3. Combine all paths into array and count frequency of each node
    - Create a hash to keep track of the frequency of each node.
    - Iterate through all the trips and increment the node count for each node.
4. Change each node's price to its price times its frequency
    - The effective price of a node is the starting price times the number of trips it's a part of.  It's easier to work with if we change the prices array.
5. Delete backwards adjacencies so path only goes forward from 0
    - Iterate through nodes using BFS, starting at 0.  For each node, remove the path from next_node to current node.  (This is basically making 0 the root of the tree.  Any node could be the root -- 0 is arbitrary -- but it's helpful to have a root.)
6. Starting from zero, find minimum sum with memoization
    - Create a memo and turn prices and connections into class variables so they can be accessed in a helper function.
    - Call a helper function starting at index 0 and 2 choices.

**Helper function (min_price)**:
This function finds the minimum price of a branch, taking in the node and the number of options.  (One option means that node's price can't be cut in half because an adjacent node's was; two options means it could be.)
1. Return a stored value in memo if it exists
2. Create an options array.
3. Create option 1 (do not half this node)
    - Start option 1 as the price at node.
    - Iterate through each branch from node and add the min prices of each branch to option 1 (with two options, because we could half that node).
    - Push into options array.
4. Create option 2 if num_options = 2
    - Initialize option 2 as *half* the price of node (DO half this node).
    - Iterate through each branch from node and add the min prices of each branch to option 2 (with one option, because we *can't* half these nodes).
    - Push into options array.
5. Choose the minimum option, memoize, and return

# Complexity
- Time complexity:
$$O(n * t)$$, where *t* is the number of trips.

- Space complexity:
$$O(n * t)$$

# Code
```
def minimum_total_price(n, edges, prices, trips)
    connections = Hash.new { |h,k| h[k] = Set[] }
    edges.each do |edge|
        a,b = edge
        connections[a].add(b)
        connections[b].add(a)
    end

    trips.map! { |trip| path(trip[0], trip[1], connections, Set[]) }

    node_count = Hash.new(0)
    trips.flatten.each { |node| node_count[node] += 1 }

    prices.each_with_index do |price,i|
        prices[i] = price * node_count[i]
    end

    queue = [0]
    until queue.empty?
        node = queue.shift
        adjacent_nodes = connections[node]
        adjacent_nodes.each do |next_node|
            connections[next_node].delete(node)
            queue << next_node
        end
    end

    @memo = Array.new(n) { [nil,nil] }
    @prices = prices
    @connections = connections
    min_price(0,2)
end


def min_price(node,num_choices)
    return @memo[node][num_choices] if @memo[node][num_choices]

    options = []

    option1 = @prices[node]
    next_nodes = @connections[node]
    next_nodes.each do |branch|
        option1 += min_price(branch,2)
    end
    options << option1

    if num_choices == 2
        option2 = @prices[node] / 2
        next_nodes.each do |branch|
            option2 += min_price(branch,1)
        end
        options << option2
    end

    @memo[node][num_choices] = options.min
end


def path(start, finish, connections, checked)
    return [start] if start == finish
    checked.add(start)

    next_nodes = connections[start]
    next_nodes.each do |node|
        next if checked.include?(node)

        res = path(node, finish, connections, checked)
        return [start] + res if res
    end

    nil
end
```