# Optimized and cleaned Swift conversion of the most popular C++ solution

**Author:** lucasvandongen
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5018784/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5018784/)

---

# Intuition

I had trouble figuring out how to store the most optimal route while at the same time ensuring we're not timing out. Normal Dijkstra applications have only one score.

# Approach

Since I tanked this one myself I tried to find a Swift solution first, which didn't exist, then in different langauges. There were actually a few that didn't make it to the end either, so I guess I was not the only one struggling.

I used the following (currently most popular) answer written in C++ and converted it automatically to Swift:
https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/1328953/c-solution-dijkstra-s-algorithm/

This passed the test, and judging by the numbers, also as the first Swift user.

However the solution was not super readable and it also seemed to take some unnecessary steps. I cleaned it up and it performed about 10% faster than the original conversion I had before

# Complexity

Time complexity:
O(V*Vlog V) according to the author

# Code
```
struct PathInfo {
    let cost: Int
    let time: Int
    let city: Int
}

struct Edge {
    let destination: Int
    let travelTime: Int
    let fee: Int
}

class Solution {
    var adjacencyList = [[Edge]](repeating: [], count: 1001)
    var cost = [Int](repeating: Int.max, count: 1001)
    var time = [Int](repeating: Int.max, count: 1001)

    func dijkstra(source: Int, destination: Int, maxTime: Int) -> Int {
        var priorityQueue = [PathInfo]()
        priorityQueue.append(PathInfo(cost: cost[source], time: 0, city: source))

        while !priorityQueue.isEmpty {
            let currentPath = priorityQueue.removeFirst()

            for edge in adjacencyList[currentPath.city] {
                let newTime = currentPath.time + edge.travelTime

                if newTime <= maxTime {
                    let totalCost = currentPath.cost + edge.fee

                    if cost[edge.destination] > totalCost {
                        cost[edge.destination] = totalCost
                    } else if time[edge.destination] <= newTime {
                        continue
                    }

                    time[edge.destination] = newTime

                    priorityQueue.append(PathInfo(cost: totalCost, time: newTime, city: edge.destination))
                }
            }
            
            priorityQueue.sort { $0.cost < $1.cost }
        }

        return cost[destination]
    }

    func minCost(_ maxTime: Int, _ edges: [[Int]], _ passingFees: [Int]) -> Int {
        for edge in edges {
            let city1 = edge[0]
            let city2 = edge[1]
            let travelTime = edge[2]

            adjacencyList[city1].append(Edge(destination: city2, travelTime: travelTime, fee: passingFees[city2]))
            adjacencyList[city2].append(Edge(destination: city1, travelTime: travelTime, fee: passingFees[city1]))
        }

        cost[0] = passingFees[0]
        time[0] = 0

        let answer = dijkstra(source: 0, destination: passingFees.count - 1, maxTime: maxTime)
        return answer == Int.max ? -1 : answer
    }
}
```