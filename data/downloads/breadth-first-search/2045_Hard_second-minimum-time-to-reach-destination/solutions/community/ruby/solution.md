# Runtime 375ms Beats 100.00% Memory 222.03MB Beats100.00%

**Author:** amnesia10
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5546046/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5546046/)

---

```
# @param {Integer} n
# @param {Integer[][]} edges
# @param {Integer} time
# @param {Integer} change
# @return {Integer}
def second_minimum(n, edges, time, change)
    graph = Hash.new { |h, k| h[k] = [] }
    visited = Array.new(n + 1) { [0, 0] }
    queue = [[1, 0]]
    edges.each { |e| graph[e[0]] << e[1]; graph[e[1]] << e[0] }
    while !queue.empty?
        node, arrive = queue.pop
        wait_time = [(arrive / change).odd? ? ((arrive / change) + 1) * change - arrive : 0, 0].max
        next_time = arrive + wait_time + time
        graph[node].each { |nxt|
            if visited[nxt][0] < 2 && visited[nxt][1] != next_time
                queue.unshift([nxt, arrive + wait_time + time])
                visited[nxt][0] += 1
                visited[nxt][1] = next_time
                return next_time if nxt == n && visited[nxt][0] == 2
            end
        }
    end
end

```