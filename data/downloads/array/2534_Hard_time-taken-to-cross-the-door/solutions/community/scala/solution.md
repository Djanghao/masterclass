# Scala simulation

**Author:** hongjian3
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4591173/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4591173/)

---

# Intuition
Maintain two separate queues for `entering` and `exiting`.

At each timestamp, first enqueue as many users as possible, and then only dequeue one person if there's any.

# Code
```
object Solution {
    def timeTaken(arrival: Array[Int], state: Array[Int]): Array[Int] = {
        val enter = collection.mutable.Queue[Int]()
        val exit = collection.mutable.Queue[Int]()
        val n = arrival.size

        val ans = Array.ofDim[Int](n)
        var i = 0
        var t = 0
        // 0 is entering, 1 is exiting or not used
        var doorState: Int = 1

        while (i < n || !enter.isEmpty || !exit.isEmpty) {
            // enque at t
            while (i < n && arrival(i) <= t) {
                if (state(i) == 0) {
                    enter.enqueue(i)
                } else {
                    exit.enqueue(i)
                }
                i += 1
            }

            // deque 1 user at t
            if (doorState == 0) {
                if (!enter.isEmpty) {
                    val x = enter.dequeue
                    ans(x) = t
                } else if (!exit.isEmpty) {
                    val x = exit.dequeue
                    ans(x) = t
                    doorState = 1
                } else {
                    doorState = 1
                }
            } else {
                if (!exit.isEmpty) {
                    val x = exit.dequeue
                    ans(x) = t
                } else if (!enter.isEmpty) {
                    val x = enter.dequeue
                    ans(x) = t
                    doorState = 0
                }
            }
            t += 1
        }

        ans
    }
}
```