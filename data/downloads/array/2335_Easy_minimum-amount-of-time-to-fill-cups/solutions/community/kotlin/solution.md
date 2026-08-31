# Priority Queue Implementation

**Author:** dexterdede
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5415705/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/5415705/)

---


```
class Solution {
    fun fillCups(amount: IntArray): Int {
        val pq = PriorityQueue<Int>(Comparator { a, b -> b - a})
        amount.forEach {
            pq.add(it)
        }
        var moves = 0
        var firstVal = 0
        var secondVal = 0
        while(pq.peek() != 0) {
            firstVal = pq.poll()
            secondVal = pq.poll()
            pq.add(firstVal - 1)
            pq.add(secondVal - 1)
            moves += 1
        }

        return moves
    }
}
```