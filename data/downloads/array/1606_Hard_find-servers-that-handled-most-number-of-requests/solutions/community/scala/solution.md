# scala using TreeSet, and TreeMap

**Author:** user7076F
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/1875744/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/1875744/)

---

```
object Solution {
    def busiestServers(k: Int, arrival: Array[Int], load: Array[Int]): List[Int] = {
        import scala.collection.mutable._
        val availableServers = TreeSet[Int](Range(0,k).toList: _*)
        val busyServers = TreeMap[Int ,ListBuffer[Int]]().withDefaultValue(ListBuffer.empty[Int])
        val count = Array.fill[Int](k)(0)
        var maxRequest = 0
        
        arrival.zipWithIndex.foreach { case (arrivalTime, requestIdx) =>
            busyServers.rangeTo(arrivalTime).foreach { case (endTime, servers) =>
                servers.foreach { server =>
                    availableServers.add(server)
                }
                busyServers.remove(endTime)
            }
            
            val fromNatural = availableServers.rangeFrom(requestIdx % k).headOption
            val fromStart = availableServers.rangeUntil(requestIdx % k).headOption
            
            val headOpt = (fromNatural, fromStart) match {
                case (Some(_), _) => fromNatural
                case (_, Some(_)) => fromStart
                case (_, _) => None
            }
            
            headOpt.map { server => 
                availableServers.remove(server) 
                busyServers.put(arrivalTime + load(requestIdx), busyServers(arrivalTime + load(requestIdx)) :+ server)
                count(server) += 1
                maxRequest = maxRequest max count(server)
            }
        }
        
        count.zipWithIndex.filter(_._1 == maxRequest).map(_._2).toList
    }                           
}
```