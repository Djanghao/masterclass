# Scala BFS

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/5208594/](https://leetcode.com/problems/stepping-numbers/solutions/5208594/)

---

# Intuition
The problem of finding stepping numbers between a given range can be efficiently solved using a Breadth-First Search (BFS) approach. Stepping numbers are those where the difference between every two consecutive digits is exactly 1. By starting with each digit from 1 to 9 and generating numbers by adding or subtracting 1 from the last digit, we can explore all possible stepping numbers within the given range.

# Approach
- Use a Queue to implement BFS. Initialize the queue with numbers from 1 to 9 (since single-digit numbers are trivially stepping numbers).
- If the lower bound (low) is 0, add it directly to the result list since 0 is also a stepping number.
- While the queue is not empty, dequeue an element (curr).
- If curr is within the range [low, high], add it to the result list.
- If curr is less than or equal to high / 10, generate potential next 
- Append lastDigit + 1 to curr (if lastDigit is not 9) to form a new stepping number and enqueue it.
- Append lastDigit - 1 to curr (if lastDigit is not 0) to form another stepping number and enqueue it.
- After the BFS traversal, sort the result list to ensure the stepping numbers are in ascending order.

# Complexity
- Time complexity:
$$O(nlogn)$$ due to sorting step 

- Space complexity:
 $$O(n)$$  due to the storage required for the queue and the result list. 
# Code
```
import scala.collection.mutable.{Queue, ArrayBuffer}

object Solution {
  def countSteppingNumbers(low: Int, high: Int): List[Int] = {
    val queue = Queue[Int]()
    val result = ArrayBuffer[Int]()
    
    if (low == 0) result += 0
    for (i <- 1 to 9) queue.enqueue(i)
    
    while (queue.nonEmpty) {
      val curr = queue.dequeue()
      if (curr >= low && curr <= high) result += curr
      if (curr <= high / 10) {
        val lastDigit = curr % 10
        
        if (lastDigit != 9 && curr * 10 + lastDigit + 1 <= high) {
          queue.enqueue(curr * 10 + lastDigit + 1)
        }
        
        if (lastDigit != 0 && curr * 10 + lastDigit - 1 <= high) {
          queue.enqueue(curr * 10 + lastDigit - 1)
        }
      }
    }
    
    result.sorted.toList
  }
}
```