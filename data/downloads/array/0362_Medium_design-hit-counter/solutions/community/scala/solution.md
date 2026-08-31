# Scala | Runtime and Space = O(1)

**Author:** denisOgr
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/4389964/](https://leetcode.com/problems/design-hit-counter/solutions/4389964/)

---

# Intuition
Using Deque.

# Approach
Solution #1. Deque with Pairs.
The main idea: use indexed sequence, store counters with timestamp, 
increment counter if the timestamp equals to last timestamp. Cut array in the hit and getHit methods. The cur method is a binary search (recursive implementation).

Before: create case class with two fields: timestamp and count

Method init:
- create deque (or othe indexed sequence) with case class as value.


Method hit:
- run trim
- check the last element in array. if it exists and equal to the input timestamp then udate the last one, else add new element.
- increment counter

Method getHit:
- run trim
- return counter.

Method trim:
- iterater from the start of dequeue and remove all timespamps until get timespamp < {cur_timestamp-300}. on each iteration decrement counter.


# Complexity
- Time complexity:
 $$O(1)+O(1)+O(1) = O(1)$$

- Space complexity:
$$O(1)$$, max 300 cells in deque

# Code
```
import scala.collection.mutable.ArrayDeque

class HitCounter() {
    case class Counter(ts: Int, cn: Int)
    val hits: ArrayDeque[Counter] = ArrayDeque()
    val DELTA_IN_TIMESTAMP: Int = 300
    var counter: Int = 0

    def hit(timestamp: Int) {
        trim(timestamp)
        var cn: Option[Int] = None
        if(hits.nonEmpty && hits.last.ts.equals(timestamp)) {
            cn = Some(hits.last.cn + 1)
            hits.removeLast()
        }
         hits.append(Counter(timestamp, cn.getOrElse(1)))
         counter += 1
    }

    def getHits(timestamp: Int): Int = {
        trim(timestamp)
        counter
    }

    def trim(timestamp: Int): Unit = {
        val low_bounder: Int = timestamp - DELTA_IN_TIMESTAMP

        var stop: Boolean = false
        while(hits.nonEmpty && !stop) {
            if(!(hits.head.ts > low_bounder)) {
                counter -= hits.head.cn
                hits.removeHead()
                
            } else stop = true
        }
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
```