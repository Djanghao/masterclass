# Ruby solution with Prim's Algo

**Author:** user6861Uk
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/3776441/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/3776441/)

---

# Code
```
# @param {Integer[][]} points
# @return {Integer}
def min_cost_connect_points(points)
    return 0 if points.length == 1
    min_dist = Array.new(points.length, Float::MAX)
    cost = 0
    cur = 0
    connected_edges = 1
    len = points.length
    visited = Array.new(len, false)
    visited[0] = true
    while(connected_edges < points.length)
        min_edge = Float::MAX
        next_edge = -1
        (0..points.length-1).each do |i|
            next if i == cur
            if !visited[i]
                dist = (points[cur][0] - points[i][0]).abs + (points[cur][1] - points[i][1]).abs
                min_dist[i] = [dist, min_dist[i]].min
                if min_edge > min_dist[i]
                    min_edge = min_dist[i]
                    next_edge = i
                end
            end
        end
        cost = cost + min_edge
        cur = next_edge
        visited[cur] = true
        connected_edges = connected_edges + 1
    end
    cost
end
```