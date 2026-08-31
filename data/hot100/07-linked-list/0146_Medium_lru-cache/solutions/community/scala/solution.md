# It is like swallowing a red-hot iron ball. You try to vomit it out, but you can't - Scala

**Author:** garbagecan
**Votes:** 3
**Link:** [https://leetcode.com/problems/lru-cache/solutions/763041/](https://leetcode.com/problems/lru-cache/solutions/763041/)

---

```
import scala.collection.mutable

/**
 * LRU Cache
 * An LRU cache is basically a Linked Hash Map - Maintains order of insertion and also uniqueness of keys
 *
 * For every get of an item, we remove it and put it back at the tail (puts always go to the tail)
 *
 * For ever put, we check two conditions:
 *   Is the item in the LHM, if it is we remove it
 *   Is the list at capacity? If so we remove the head (least recently used) item
 *   Finally, we put the new item in the LHM at the tail
 *
 */

class LRUCache(_capacity: Int) {

  case class Value(value: Int)

  val cache = new mutable.LinkedHashMap[Int, Value]()

  def get(key: Int): Int = {
    cache.get(key) match {
      case Some(value) =>
        cache.remove(key)
        cache.put(key, value)
        value.value
      case None => -1
    }
  }

  def put(key: Int, value: Int) {
    if(cache.contains(key)) {
      cache.remove(key)
    } else if(cache.size == _capacity) {
      cache.remove(cache.head._1)
    }
    cache.put(key, Value(value))
  }
}

```