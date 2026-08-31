# Dijkstra Algo, BFS, Priority Queue

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/3943042/](https://leetcode.com/problems/network-delay-time/solutions/3943042/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(elogv)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[][]} times
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def network_delay_time(times, n, k)
    # times[i] = (ui, vi, wi)
    # u = source
    # v = target
    # w = time to travel from source to target.

    # When sending a signal from node k... 
    # how long does it take for all of n nodes to receive the signal.
    # If impossible return -1.
    # ESSENTIALLY K is our starting node.
    # Requirements:
    # 1. We start from k nodes.
    # 2. We much get the signal to N nodes.
    # 3. We must return the minimum.

    # Edge case, ensure we can get through all nodes.
    adjaceny_list = {}
    times.each do |time|
        if !adjaceny_list[time[0]]
            adjaceny_list[time[0]] = []
        end

        adjaceny_list[time[0]] << [time[1], time[2]]
    end

    
    if adjaceny_list[k] == nil
        return -1
    end

    ndt = BfsShortestPath.new(adjaceny_list, n, k)
    ndt.bfs
    if ndt.visited.keys.size == n
        return ndt.weight
    else
        return -1
    end
    
end

class BfsShortestPath
    attr_accessor :weight, :visited

    def initialize(adjaceny_list, n, k)
        @adjaceny_list = adjaceny_list
        @n = n
        @k = k
        @weight = 0
        @priority_queue = @adjaceny_list[k].sort!{|a,b| a[1] <=> b[1]}
        @visited = {}
        @visited[k] = true
    end

    def bfs
        while @priority_queue.size > 0 and @visited.keys.size < @n
            
            node_transfer_path = @priority_queue.shift
            node_location = node_transfer_path[0]
            if !@visited[node_location]
                if @weight >= node_transfer_path[1]
                    # do nothing.
                else
                    @weight = node_transfer_path[1]
                end

                @visited[node_location] = true
                if @adjaceny_list[node_location]
                    @adjaceny_list[node_location].each do |node_transfer_path|
                        add_to_queue node_transfer_path
                    end
                end
            end
        end
    end

    def add_to_queue node_transfer_path
        node_transfer_path[1] = node_transfer_path[1] + @weight
        index = @priority_queue.bsearch_index{|n| node_transfer_path[1] < n[1] }
        if index == nil
            @priority_queue << node_transfer_path
        else
            @priority_queue.insert(index, node_transfer_path)
        end
    end
end
```