# Dijkstra + Math

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/5817622/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/5817622/)

---


# Code
```ruby []
# @param {Integer[][]} edges
# @param {Integer[]} patience
# @return {Integer}
def network_becomes_idle(edges, patience)
    # Build adjacency list.
    @adj_list = {}
    edges.each do |a,b|
        if !@adj_list[a]
            @adj_list[a] = []
        end

        if !@adj_list[b]
            @adj_list[b] = []
        end

        @adj_list[a] << b
        @adj_list[b] << a
    end
    @dist_to_master = {}


    # Use Dijkstra to get the shortest time for each node to travel to 0
    # by starting from 0 and branching out. 
    visited = {}
    dist = 0
    q = [0]
    while q.size > 0
        next_level = []
        q.each do |node|
            @dist_to_master[node] = dist
            if @adj_list[node]
                @adj_list[node].each do |neighbor|
                    if !visited[neighbor]
                        visited[neighbor] = true
                        next_level << neighbor
                    end
                end
            end
            
        end
        dist += 1
        q = next_level
        next_level = []
    end

    @answer = 0
    @dist_to_master.delete(0)
    
    # Determine answer.
    @dist_to_master.each do |key, value|
        # Cost is double due to value being the time it takes from 
        # a node's signal to get to 0, we double value because it also
        # has to travel back to the node after it reaches 0.
        cost = (value * 2) 

        # Subtract one due to the previous signal sent from said node
        # would have traveled by 1 node at the time of the signal
        # returning back to the node from 0.
        last_signal_cost = cost - 1

        # Find how many seconds have past since the last signal was sent.  
        while last_signal_cost >= 1
            # We break out the loop when have a remainder of 0 
            # as this would be the last time we sent a signal.
            if last_signal_cost % patience[key] == 0
                break
            end
            last_signal_cost -= 1
        end

        cost += last_signal_cost 

        @answer = [cost, @answer].max
    end
    
    # We add one here as our previous calculations detects the last network activity and we want
    # to determine when the server is idle(a second after the last network activity).
    @answer + 1
end




```