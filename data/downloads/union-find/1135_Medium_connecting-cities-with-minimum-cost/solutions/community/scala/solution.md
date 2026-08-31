# Kruskal + Union Find | Scala Video Explanation

**Author:** imran-sarwar
**Votes:** 0
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/787750/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/787750/)

---

Video explanation of below code
https://youtu.be/gvi7h1_lLqE

```
def minimumCost(N: Int, connections: Array[Array[Int]]): Int = {
		// Sort w.r.t Cost
		val sortedConnections = connections.sortWith(_(2) < _(2))
		var noOfMainGate = N
		var totalCost = 0
		
        val mainGate:Array[Int] = (0 until N+1).toArray
        
        def find(x: Int): Int = {
            if(mainGate(x) == x) x
            else {
                mainGate(x) = find(mainGate(x))
                mainGate(x)
            }
        }
        
        def union(x: Int, y: Int) = {
            val mGX = find(x)
            val mGY = find(y)
            
            if(mGX != mGY) {
                mainGate(mGX) = mGY
                noOfMainGate -= 1
            }
        }
        
        for(c <- sortedConnections) {
            val city1 = c(0)
            val city2 = c(1)
            
            if(find(city1) != find(city2)) {
                totalCost += c(2)
                union(city1, city2)
            }
        }
        
        if(noOfMainGate == 1) totalCost else -1
        
    }
```