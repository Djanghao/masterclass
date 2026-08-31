# Concise Scala Solution: Single Map

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/955198/](https://leetcode.com/problems/lfu-cache/solutions/955198/)

---

1. Use LinkedHashMap, that keeps the order of insertion as Map(key, (value, count))
2. In get if key already exists, remove and put it again so that when we get same count so the later could be removed in case capacity is reached
3. In put and it would keep it in order
4. If capacity reached, minBy(count) remove the respective key
5. For put operation, minBy would take O(n) to find min, that could be optimized
```
import scala.collection.mutable._
class LFUCache(_capacity: Int) {
    val cache = LinkedHashMap[Int, (Int, Int)]().withDefaultValue((-1, 0))
    val capacity = _capacity
    
    def get(key: Int): Int = {
        if(cache.contains(key)) {
            val (v, count) = cache(key)
            cache.remove(key)
            cache.put(key, (v, count + 1))
        }
        cache(key)._1
    }

    def put(key: Int, value: Int) {
        if(capacity != 0) {
            if(cache.contains(key)) cache.put(key, (value, cache(key)._2 + 1))
            else if(cache.size == capacity) {
                cache.remove(cache.minBy(_._2._2)._1)
                cache.put(key, (value, 1))
            }
            else cache.put(key, (value, 1))
        }
    }

}

```