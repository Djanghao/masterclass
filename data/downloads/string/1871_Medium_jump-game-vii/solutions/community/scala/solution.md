# O(n) single pass, no DP

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/2186631/](https://leetcode.com/problems/jump-game-vii/solutions/2186631/)

---

The solution is based on this: start from the last character. If that's 1, then there's no solution, otherwise the solution will have to end there: put its index in a queue.
Now scan left and search for zeros within reach (their index is in [minJump, maxJump]). Add this zero index to the queue.
Then repeat the process moving left: whenever a zero is encountered, remove from the head of the queue any zero that has gone beyond reach (index > maxJump). If the head of the queue contains a zero that is within reach, then this zero also reaches the end of the sequence.

Here's the implementation:
```
def canReach(s: String, minJump: Int, maxJump: Int): Boolean = {
        if (s.isEmpty || s.last != '0') {
            false
        } else {
            var dp = Array.ofDim[Boolean](s.length)
            val queue = collection.mutable.Queue[Int](s.length - 1)
            var j = s.length - 2
            while (j > 0) {
                while(queue.headOption.exists(_ - j > maxJump)) {
                    queue.dequeue
                }
                if (s(j) == '0') {
                    if (queue.headOption.exists(_ - j >= minJump)) {
                        queue.enqueue(j)
                    }
                }
                j -= 1
            }
            while(queue.headOption.exists(_ - j > maxJump)) {
                queue.dequeue
            }
            queue.headOption.exists(_ - j >= minJump)
        }
    }
```