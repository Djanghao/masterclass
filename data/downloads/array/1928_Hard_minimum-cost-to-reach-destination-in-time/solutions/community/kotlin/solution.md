# [Kotlin] Dijkstra’s Algorithm with comments

**Author:** AlexanderPrendota
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/2245731/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/2245731/)

---



```kotlin
fun minCost(maxTime: Int, edges: Array<IntArray>, passingFees: IntArray): Int {

  val times = IntArray(passingFees.size) { Int.MAX_VALUE } // set max time for every city
  val graph = mutableMapOf<Int, List<CityPoint>>()
  for ((from, to, time) in edges) { // fill the graph
    graph[from] = graph.getOrDefault(from, mutableListOf()) + CityPoint(to, time)
    graph[to] = graph.getOrDefault(to, mutableListOf()) + CityPoint(from, time)
  }
  val queue = PriorityQueue<CityTrip> { o1, o2 -> o1.price - o2.price }
  queue.add(CityTrip(0, 0, passingFees.first())) // start from first city
  while (queue.isNotEmpty()) {
    val (time, to, price) = queue.poll()
    if (time >= times[to]) continue // skip out of time
    times[to] = time
    if (passingFees.lastIndex == to) { // if we reached the last station
      return price
    }
    for (point in graph.getOrDefault(to, mutableListOf())) {
      val currTime = time + point.time
      val currPrice = price + passingFees[point.to]
      if (currTime > maxTime) continue // skip max time
      if (currTime > times[point.to]) continue // we need only min time
      queue.add(CityTrip(currTime, point.to, currPrice))
    }
  }
  return -1
}

private data class CityPoint(val to: Int, var time: Int)
private data class CityTrip(val time: Int, val to: Int, var price: Int)
```