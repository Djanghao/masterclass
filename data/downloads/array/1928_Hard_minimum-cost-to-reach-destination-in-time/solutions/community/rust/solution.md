# Dijkstra's algorithm,Minimum Cost to Reach Destination in Time

**Author:** tzrac119
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/4321071/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/4321071/)

---

# Intuition
The problem involves finding the minimum cost to reach the destination within a given time limit. This scenario resembles a weighted graph traversal problem, and Dijkstra's algorithm comes to mind as a suitable approach.
# Approach
1. Build the Graph:
- Create an adjacency list to represent the graph using the given edges.
- Each node in the graph represents a city, and the edges represent the roads between cities with their corresponding travel times.
2. Dijkstra's Algorithm:
- Start with the source node (city 0).
- Maintain a priority queue (min heap) to store the cities based on the minimum cost to reach them.
- Initialize an array to store the minimum cost to reach each city within the given time.
- While the priority queue is not empty:
    - Extract the city with the minimum cost from the priority queue.
    - Relax all the neighbors of the current city, updating their costs if a shorter path is found.
    - If the destination city (city n - 1) is reached, return the minimum cost.
Passing Fees:

3. While performing Dijkstra's algorithm, keep track of passing fees for each visited city.
4. Return Result:
- If the destination city is reached within the given maxTime, return the minimum cost.
- If the destination city is not reached, return -1.

# Complexity
- Time complexity:
The dominant factor is the sorting operation, which has a time complexity of O(nlogn), where n is the size of the satisfaction vector.
- Space complexity:
The algorithm uses a constant amount of extra space for variables, resulting in a space complexity of O(1).
# Code
```
use std::cmp::Ordering;
use std::collections::{BinaryHeap, HashMap, HashSet};


#[derive(Eq,PartialEq)]
struct State {
    time: i32,
    city: usize,
    cost: i32,
}


// \u5B9E\u73B0 PartialOrd \u548C Ord \u7528\u4E8E\u6BD4\u8F83
impl PartialOrd for State {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Ord for State {
    fn cmp(&self, other: &Self) -> Ordering {
        // \u4E3A\u4E86\u5B9E\u73B0\u964D\u5E8F\uFF0C\u8FD9\u91CC\u6211\u4EEC\u98A0\u5012\u4E86\u6BD4\u8F83\u7684\u987A\u5E8F
        other.cost.cmp(&self.cost)
    }
}

impl Solution {
    // Dijkstra's Algorithm
    pub fn min_cost(max_time: i32, edges: Vec<Vec<i32>>, passing_fees: Vec<i32>) -> i32 {
        let mut graph: HashMap<usize, Vec<(usize, i32)>> = HashMap::new();
        for edge in edges {
            let x = edge[0] as usize;
            let y = edge[1] as usize;
            let time = edge[2];
            graph.entry(x).or_insert(vec![]).push((y, time));
            graph.entry(y).or_insert(vec![]).push((x, time));
        }
        let mut pq: BinaryHeap<State> = BinaryHeap::new();
        pq.push(State {time: 0, cost: passing_fees[0], city:0});

        let mut visited:HashSet<(usize,i32)> = HashSet::new();
        let size = passing_fees.len();
        while let Some(State{time,cost, city}) = pq.pop() {
            if city == size - 1 {
                return cost;
            }
            if visited.contains(&(city,time)) {
                continue;
            }
            visited.insert((city,time));
            for &(neighbor,travel_time) in graph.get(&city).unwrap_or(&vec![]) {
                let cur_time = time + travel_time;
                if cur_time  <= max_time {
                    pq.push(State{ time: cur_time, city: neighbor, cost: cost + passing_fees[neighbor]});
                }
            }
        }
        -1
    }
}
```