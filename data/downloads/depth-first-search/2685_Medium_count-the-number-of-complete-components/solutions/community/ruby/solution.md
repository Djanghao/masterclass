# Union Find + Adjacency list, comments included.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5690845/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5690845/)

---


# Code
```ruby []
# @param {Integer} n
# @param {Integer[][]} edges
# @return {Integer}
def count_complete_components(n, edges)
    # Connect all components via union find.
    uf = UnionFind.new(n)
    edges.each do |x, y|
        uf.union(x, y)
    end
    
    # Get the max rank node of components and place these nodes as hash keys with
    # value being all their connections.
    max_rank_node_connections = {}
    (0..n-1).each do |node|
        if !max_rank_node_connections[uf.find(node)]
            max_rank_node_connections[uf.find(node)] = [node]
        else
            max_rank_node_connections[uf.find(node)] << node
        end
    end

    # Build a simple adj list.
    adj_list = {}
    edges.each do |a,b|
        if !adj_list[a]
            adj_list[a] = {}
        end

        adj_list[a][b] = true

        if !adj_list[b]
            adj_list[b] = {}
        end

        adj_list[b][a] = true

    end

    # Check if all nodes within a component can connect directly to
    # each other and if all nodes do connect to each other directly
    # increment answer by 1.
    answer = 0
    max_rank_node_connections.keys.each do |key|
        failed = false
        connections = max_rank_node_connections[key].size - 1
        max_rank_node_connections[key].each do |con|
            if connections == 0
                break
            end

            if adj_list[con].size != connections
                failed = true
                break
            end
        end

        if failed == false
            answer += 1
        end

    end

    answer
end

class UnionFind
    attr_accessor :root, :rank
    def initialize(count)
        @root = Array.new(count) {|i| i }
        @rank = Array.new(count) { 1 }
    end

    def find x
        if @root[x] == x
            return @root[x]
        end

        self.find @root[x]
    end

    def union x, y
        x = self.find(x)
        y = self.find(y)
        if !connected?(x, y)
            if @rank[x] >= @rank[y]
                @rank[x] += 1
                @root[y] = x
            else
                @rank[y] += 1
                @root[x] = y
            end
        end
    end

    def connected? x, y
        self.find(x) == self.find(y)
    end

end
```