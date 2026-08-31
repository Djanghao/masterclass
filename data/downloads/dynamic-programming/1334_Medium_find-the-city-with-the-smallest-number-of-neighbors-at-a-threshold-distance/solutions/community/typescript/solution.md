# V2 - using Dijkstra's algorithm

**Author:** jairtorres1003
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5539761/](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5539761/)

---

# Intuition
To solve the problem efficiently, we need to determine which city has the fewest number of other cities reachable within a given distance threshold. To achieve this, we should compute shortest paths from each city to all other cities and then count the number of cities reachable within the threshold. The city with the smallest count of reachable cities is the desired result. In case of a tie, we select the city with the highest index.

# Approach
1. **Dijkstra's Algorithm**:
   - Implement Dijkstra's algorithm to compute the shortest path from a given start city to all other cities.
   - Use a priority queue (implemented using a sorted array) to efficiently extract the node with the minimum distance.
   - Update the distances of neighboring nodes if a shorter path is found.

2. **Compute Shortest Paths for Each City**:
   - For each city, apply Dijkstra's algorithm to determine distances to all other cities.
   - Count how many cities are within the given distance threshold from the current city.

3. **Determine the Optimal City**:
   - Track the city with the smallest number of reachable cities within the distance threshold.
   - In case of a tie (multiple cities with the same number of reachable cities), select the city with the highest index.

# Complexity
- **Time complexity**: $$O(n^2 \\log n)$$
  - Dijkstra's algorithm runs in $$O(n \\log n)$$ with a priority queue for each city, resulting in a total complexity of $$O(n^2 \\log n)$$ for processing all cities.

- **Space complexity**: $$O(n^2)$$
  - The space complexity is due to storing the distance matrix and priority queue, which can grow proportionally to the number of cities and edges.

# Code

```
function dijkstra(n: number, edges: number[][], start: number): number[] {
  const dist = Array(n).fill(Infinity)
  const nodeDist: { node: number; dist: number }[] = []

  dist[start] = 0
  nodeDist.push({ node: start, dist: 0 })

  while (nodeDist.length > 0) {
    // Extraer el nodo con la distancia m\xEDnima
    nodeDist.sort((a, b) => a.dist - b.dist)
    const { node, dist: currDist } = nodeDist.shift()!

    if (currDist > dist[node]) continue

    // Actualiza las distancias de los nodos vecinos
    for (const [from, to, weight] of edges) {
      if (from === node || to === node) {
        const neighbor = from === node ? to : from
        const newDist = currDist + weight
        if (newDist < dist[neighbor]) {
          dist[neighbor] = newDist
          nodeDist.push({ node: neighbor, dist: newDist })
        }
      }
    }
  }

  return dist
}

function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  let minCity = -1
  let minVisits = Infinity

  for (let i = 0; i < n; i++) {
    const distances = dijkstra(n, edges, i)
    // Cuenta cu\xE1ntas ciudades est\xE1n dentro del umbral de distancia
    const visitsCount = distances.filter((d) => d <= distanceThreshold).length - 1 // -1 para excluir la ciudad misma

    // Obtiene la ciudad con el menor n\xFAmero de visitas dentro del umbral
    if (visitsCount < minVisits || (visitsCount === minVisits && i > minCity)) {
      minCity = i
      minVisits = visitsCount
    }
  }

  return minCity
}
```