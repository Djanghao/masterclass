# Scala using bfs and graph

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/2902761/](https://leetcode.com/problems/ip-to-cidr/solutions/2902761/)

---

# Intuition
We can represent CIDR as a range of [minIp, maxIp]. Keeping this in mind, we can continue our search at a point maxIp + 1. Our end goal is to reach a point maxIp = startIp + n. It turns out that it is a graph problem, which can be solved using BFS. Each vertex is a maxIp of a some cidr range (at least /32) and each edge one of 32 different cidrs which can be build starting from the vertex.

# Approach
Build a graph. Explore the graph using BFS. Return the first answer.

# Complexity
- Time complexity:
O(n), maximum we will need to explore N ranges of size 1

- Space complexity:
O(n)

# Code
```
import scala.collection.mutable

object Solution {
    case class Cidr(minIp: Long, maxIp: Long, cidr: String)
    def ipToCIDR(ip: String, n: Int): List[String] = {
        val ipLong = ipToLong(ip)
        // build graph of possible choices
        val graph = mutable.Map.empty[Long, Set[Cidr]].withDefaultValue(Set())
        populateCidrOptions(ipLong, graph, ipLong + n.toLong)
        val queue = mutable.Queue.empty[(Long, List[String])]
        queue.enqueue((ipLong, List()))
        val cache = mutable.Set.empty[Long]
        // bfs with cache
        while(queue.nonEmpty) {
            queue.dequeue() match {
                case (prevIp, path) if !cache.contains(prevIp) =>
                    cache += prevIp
                    if(prevIp - ipLong == n) {
                        return path.reverse
                    }
                    // pick next, our next turn will always be maxIp + 1
                    graph(prevIp).foreach {
                        case Cidr(minIp, maxIp, cidr) if !cache.contains(maxIp + 1) =>
                            queue.enqueue((maxIp + 1, cidr :: path))
                        case _ =>
                    }
                case _ =>
            }
        }
        List()
    }
    def populateCidrOptions(ipLong: Long, graph: mutable.Map[Long, Set[Cidr]], target: Long): Unit = {
        // do not explore same paths twice
        if(graph.contains(ipLong)) {
            return
        }
        var maxIp = ipLong
        var minIp = ipLong
        var mask = 0
        var counter = 32
        // ignore paths to bigger ips
        while(maxIp <= target) {
            maxIp = (ipLong | mask)
            minIp = ipLong & ~mask
            // ignore paths to smaller ips
            if(minIp == ipLong) {
                graph(ipLong) = graph(ipLong) + Cidr(minIp, maxIp, ipLongToCidr(minIp, counter))
                // build sub paths
                populateCidrOptions(maxIp + 1, graph, target)
            }
            if (mask == 0) {
                mask = 1
            } else {
                mask = (mask << 1) + 1
            }
            counter -= 1
        }
    }
    def ipLongToCidr(ip: Long, maskLen: Int): String = {
        (3 to 0 by -1).map {
            case a => ((ip >> (a*8)) & 0xff).toString
        }.mkString(".") + "/" + maskLen
    }
    def ipToLong(ip: String): Long = {
        ip.split('.').foldLeft(0L) {
            case (total, number) => total * 256 + number.toLong
        }
    }
}
```