# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/4576087/](https://leetcode.com/problems/first-unique-number/solutions/4576087/)

---

# Code
```
import scala.collection.mutable.HashMap
import scala.collection.mutable.Queue

class FirstUnique(nums: Array[Int]) {
    val h: HashMap[Int, Int] = HashMap()
    val q: Queue[Int] = Queue()

    for (i <- 0 until nums.length) {
        if (!h.contains(nums(i))) {
            h(nums(i)) = 1
            q.enqueue(nums(i))
        } else {
            h(nums(i)) = 2
        }
    }

    def showFirstUnique(): Int = {
        while (q.nonEmpty) {
            if (h(q.front) == 1) {
                return q.front
            } else {
                q.dequeue()
            }
        }
        -1
    }

    def add(value: Int): Unit = {
        if (h.contains(value)) {
            h(value) = 2
        } else {
            q.enqueue(value)
            h(value) = 1
        }
    }
}


```