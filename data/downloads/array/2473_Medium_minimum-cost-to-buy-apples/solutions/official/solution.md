# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solution/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solution/)

---

[TOC]

## Solution

---

### Overview

For each city, we need to find the minimum cost to buy one apple starting from that city.

We are given:
- An integer `n` representing the cities `1` to `n`.
- A **2D** array `roads` where <code class="">roads[i] = [a<sub>i</sub>, b<sub>i</sub>, cost<sub>i</sub>]</code> gives the cost of traveling from city <code class="">a<sub>i</sub></code> to <code class="">b<sub>i</sub></code>.
- An array `appleCost` where `appleCost[i]` is the cost of buying one apple in city `i`.
- An integer `k`, which is the factor the road cost will be multiplied by each time the road is used.

We buy an apple by starting at a given city, traversing through roads, and then buying an apple at another city. After buying the apple, we return to the starting city.

**Key Observations**
1. Buying an apple starting from a given city is an isolated event. You can later use the same roads at their original cost to buy an apple starting from a different city.
2. On the way back from buying an apple, you must take the same path that you took to get there, even if there are multiple paths between the cities.

**Key Constraints**
1. The length of `appleCost` is `n`, which means each city will have a cost for apples.
2. All of the given values are positive.
3. There are no repeated edges, i.e., multiple direct paths between the same two cities.
4. There are no roads that lead from a city directly back to the same city.

You may wonder why we would travel to another city to buy an apple when we can purchase apples in our city, and travel is expensive. If apples are significantly cheaper in another city, such that an apple is still cheaper including the travel cost, it makes sense to travel to another city.

---

### Approach 1: Shortest Path

#### Intuition

We can represent this problem using a graph, where the vertices are cities, and the roads are edges. The edges and vertices are weighted, with their weight being their cost.

We need to find the minimum cost to buy one apple starting from each city. The subtask is to find the minimum cost to buy one apple starting from a given city.

The minimum cost can be considered the shortest path in a weighted graph. Therefore, we can apply a modified Dijkstra’s algorithm to solve this problem. Dijkstra’s algorithm is used to find the shortest path from a source vertex to each of the other vertices in a weighted graph. It uses a priority queue (min-heap) to greedily determine which edges to take to find the shortest path to the other vertices. 

> If you are not familiar with Dijkstra’s algorithm, we suggest you read our relevant [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/622/single-source-shortest-path-algorithm/3862/).

We begin by adding the cities and roads to a graph. The graph is a list of lists storing cities that each have an adjacency list containing neighboring `(city, cost)` pairs.

> Example:
> **Input:** n = 4, roads = [[1,2,4],[2,3,2],[2,4,5],[3,4,1],[1,3,4]], appleCost = [56,42,102,301], k = 2
> **Graph:** 
> [[(1, 4), (2, 4)],
>  [(0, 4), (2, 2), (3, 5)],
>  [(1, 2), (3, 1), (0, 4)],
>  [(1, 5), (2, 1)]]


Then, we define a function `shortestPath` that finds the minimum cost to buy an apple starting from a given city.

Dijkstra's algorithm generally uses a data structure to store the shortest path to each vertex found so far. We can use an array `travelCosts` to store the cost of traveling to each city. We only need to visit a neighoring city if doing reduces the travel cost to that city. 

We use a min-heap to store the travel cost of visiting a given city. We start by adding the start city to the heap, with the initial travel cost of `0`, because we do not need to travel to buy apples.

Then, we enter a loop while the heap is not empty. 

We remove the element with the lowest cost from the heap and store its city as `currCity` and its travel cost as `travelCost`. We update the `minCost` if the total cost to buy an apple in the current city is less than the current `minCost`. The total cost is the sum of the cost of buying apples in the current city and the roundtrip travel cost.

For each of the neighboring cities, we calculate the cost of traveling there next. If the cost of traveling to that neighbor is less than `travelCosts[neighbor]`, we add it to the heap.

The `shortestPath` function returns the `minCost` after visiting all of the cities.

We can calculate the minimum cost of buying an apple from each of the starting cities by iterating through the starting cities, calling `shortestPath` for each one, and saving the result in an array.

Finally, we return the `result`.

The process of finding the minimum cost to buy an apple from one starting city is shown below:

!?!../Documents/2473/2473_slideshow1.json:960,540!?!

#### Algorithm

1. Initialize a graph as a list of lists. Each row stores a city (vertex), and each column stores an adjacency list of road and cost (edge, weight) pairs.
2. Add each road from `roads` to the graph as a bidirectional edge. The cities are numbered `1` through `n`, but arrays are 0-indexed, so store each city at `graph[city - 1]`. For the road at <code class="">roads[i] = [a<sub>i</sub>, b<sub>i</sub>, cost<sub>i</sub>]</code>:
    - Add the edge from city $A$ to city $B$ to city $A$'s adjacency list. 
    - Add the edge from city $B$ to city $A$ to city $B$'s adjacency list.
3. Declare a function, `shortestPath`, that finds the minimum cost to buy an apple from a given start city within the graph.
    - Declare an array `travelCosts` that stores the travel cost to reach each city starting from the start city. Initialize each index of this array to the largest integer, to represent that the cost is unknown before traversal. Set `travelCosts[startCity]` to `0`, because we do not need to travel to reach the start city.
    - Initialize a heap (priority queue) that stores pairs consisting of the travel cost and the city. Add the first pair, with an initial travel cost of `0` and the starting city.
    - Initialize a variable `minCost` to the largest integer so it can be later updated to the first cost found.
    - While the `heap` is not empty:
        - Remove the city `currCity` with the minimum travel cost from the top of the heap.
        - Update the `minCost` if the current city has a lower total cost. The total cost is the sum of the cost of buying apples in that city and the roundtrip travel cost, which is calculated with `(k + 1) * travel_cost`.
        - Add each neighboring city to the heap if the path through `currCity` is cheaper than the current path to the neighbor. For each `neighbor` city of the current city:
        - Set a variable `nextCost` to `travelCost + cost`. This is the travel cost of traveling one way to the next city from the start city.
            - If `nextCost` is less than `travelCosts[neighbor]`, update `travelCosts[neighbor]` to `nextCost` and add this `nextCost, neighbor` pair to the heap.
    - Return `minCost`.
4. Initialize an array `result` of size `n`.
5. For each city, calculate the minimum cost to buy an apple using the `shortestPath` function and add it to the `result`.
6. Return the `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/iPmEzA4t/shared" frameBorder="0" width="100%" height="500" name="iPmEzA4t"></iframe>

#### Complexity Analysis

Let $n$ be the number of cities and $r$ be the number of roads.

* Time complexity: $O(n \cdot (n + r) \log n )$

    Adding each of the $r$ edges from the `road` array to the graph takes $O(r)$.

    We push and pop up to $n + r$ vertices from the heap. Pushing and popping vertices takes $ \log n$ time. So for $n$ vertices, the `shortestPath` function takes $O( (n + r) \log n)$.

    In the main program, we call `shortestPath` $n$ times, once for each city, so the time complexity of calculating the minimum cost to buy an apple for each city is $O(n \cdot (n + r) \log n)$. 

    Therefore, the total time complexity is $O(r + n \cdot (n + r) \log n )$, which we can simplify to $O( n \cdot (n + r) \log n )$.

* Space complexity: $O(n + r)$

    The list of lists of size $(n + 2r)$ stores the graph representation, the `travelCost` array of size $n$ stores the travel costs, and the heap can grow up to size $n$.

    Therefore, the overall space complexity is $O(n + r)$.

---

### Approach 2: One Pass Shortest Path

#### Intuition

The above solution calls the `shortestPath` function once for each starting city. While finding the shortest path for each city, we visit all of the nodes in the graph and find the travel cost to each city. We can develop a more efficient solution by saving information about all the cities when calculating the shortest path for a given city.

Additionally, we can make the following key observation: For at least one city, `minCity`, it is cheapest to buy apples in that `minCity` without traveling to other cities. This `minCity` has the lowest apple cost. Since all of the roads add positive costs, traveling would increase the cost of buying one apple. Note that there may be multiple cities where it is optimal to buy an apple without traveling, such as in Example 2 in the problem description.

Moreover, if neighboring cities have higher apple costs, the minimum cost to buy an apple starting in those cities may involve visiting `minCity`.

We can calculate the minimum cost to buy an apple from cities with the smallest `appleCost` first. We could achieve this by sorting the cities. However, since the shortest path algorithm uses a min-heap, we can instead add all of the cities to a min-heap with their local apple cost.

We need a way to store information about any city visited during the shortest path algorithm, not just the starting city. We need to modify Dijkstra’s algorithm because we don't just need the shortest path, we need the minimum cost. The shortest path, just considering the roads, may not lead to the correct minimum cost to buy an apple. We can use the result array to do this. We initialize this array with the local cost to buy apples in each city, which is the cost before travel. As we complete the minimum cost search, we update the result array with the minimum cost to buy an apple starting from each city, including the cost of the apple and the travel cost.

Similar to the first solution, we create a graph from `roads`.

To find the minimum cost to buy an apple from each starting city, we use a `while` loop, removing one city from the heap with each iteration. Then, we repeat the following until the heap is empty. 

We remove the element with the minimum cost from the heap and store the current city and total cost, which is the sum of the apple cost and roundtrip travel cost to that city from the start city. 

If the previously calculated `result` for the current city is less than the total cost to visit that city, we skip the city.

Then, we add each neighboring city to the heap if it is cheaper to travel to the current city to buy an apple than it is to buy an apple in the neighboring city. We also update the `result` array with the lower cost of buying an apple starting at the neighboring city.

Finally, we return the result.

This allows us to find the minimum cost to buy an apple starting from each city using the shortest path algorithm once instead of $n$ times.

#### Algorithm

1. Initialize a graph using a list of lists. Each row stores a city (vertex), and each column stores an adjacency list of road and cost (edge, weight) pairs.
2. Add each road from `roads` to the graph as a bidirectional edge. The cities are numbered `1` through `n`, but arrays are 0-indexed, so store each city at `graph[city - 1]`. For the road at <code class="">roads[i] = [a<sub>i</sub>, b<sub>i</sub>, cost<sub>i</sub>]</code>:
    - Add the edge from city $A$ to city $B$ to city $A$'s adjacency list. 
    - Add the edge from city $B$ to city $A$ to city $B$'s adjacency list.
3. Store the cost to buy an apple in each city without traveling in the result. Initialize an array `result` with `result[startCity]` and `applecost[startCity]`.
4. Initialize a heap (priority queue) with the local apple cost for each starting city. Each element of the heap is a pair with the cost and city.
5. Find the minimum cost to buy an apple starting in each city. While the `heap` is not empty:
    - Remove the city with the minimum total cost from the top of the heap.
    - If we have already found a path to buy an apple for cheaper than the local apple cost, skip this city. If `result[currCity]` is less than `totalCost`, continue.
    - Add each neighboring city to the heap if it is cheaper to travel to the current city and buy an apple than buy one in the neighboring city. For each `neighbor` city of the current city:
         - If `result[neighbor]` is greater than the total cost to travel to the current city and buy an apple, update `result[neighbor]` to `nextCost`. Then, add this `nextCost, neighbor` pair to the heap. The total cost is the sum of the cost of traveling to and buying apples in the current city and the roundtrip travel cost of traveling to the neighboring city. The roundtrip travel cost is calculated as `(k + 1) * cost`.
6. Return the `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/MYTr42QB/shared" frameBorder="0" width="100%" height="500" name="MYTr42QB"></iframe>

#### Complexity Analysis

Let $n$ be the number of cities and $r$ be the number of roads. 

* Time complexity: $O((n + r) \log (n + r))$

    Adding each of the $r$ edges from the `road` array to the graph takes $O(r)$.

    Adding the local cost to buy an apple in each city to the result array takes $O(n)$.

    To initialize the heap, we insert $n$ cities into the heap. Pushing vertices to the heap takes $\log n$ time, so this step takes $O(n \log n)$

    In the main loop, we push and pop up to $n + r$ pairs from the heap. Pushing and popping vertices from the heap takes $\log n$ time where $n$ is the size of the heap. So for $n + r$ pairs, the `shortestPath` function takes $O((n + r) \log (n + r))$.

    Therefore, the total time complexity is $O(r + n + n \log n + (n + r) \log (n + r) )$, which we can simplify to $O((n + r) \log (n + r) )$.

* Space complexity: $O(n + r)$

    We use a list of lists of size $n + 2r$ to store the graph.

    The `result` array, which stores the minimum cost to buy an apple from each city, is of size $n$.

    The heap, which stores the cities to be explored during the shortest path algorithm, can grow up to size $n + r$.

    Therefore, the overall space complexity is $O(n + r)$.

---