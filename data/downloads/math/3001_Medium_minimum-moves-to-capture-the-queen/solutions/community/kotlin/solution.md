# Kotlin BFS  - Simple - include comments

**Author:** user7112sQ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/5095630/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/5095630/)

---

# Intuition
just go through the code 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import java.util.*

class Solution {
      fun minMovesToCaptureTheQueen(a: Int, b: Int, c: Int, d: Int, e: Int, f: Int): Int {
        val q: Queue<List<Int>> = LinkedList()
        // Model the state using {a, b, c, d, hops} and do BFS
        q.offer(listOf(a, b, c, d, 0))
        // Model the rook's movement
        val rookMoves = listOf(listOf(0, -1), listOf(0, 1), listOf(-1, 0), listOf(1, 0))
        // Model the bishop's movement
        val bishopMoves = listOf(listOf(-1, 1), listOf(-1, -1), listOf(1, -1), listOf(1, 1))
        while(q.isNotEmpty()) {
            val currentNode = q.poll()
            val steps = currentNode[4]
            val curr_a = currentNode[0]
            val curr_b = currentNode[1]
            val curr_c = currentNode[2]
            val curr_d = currentNode[3]
         // check for if rook or bishop are in the quene position   
         if((curr_a == e && curr_b == f) || (curr_c == e && curr_d == f)) {
            return steps
         }
            for(mov in rookMoves) {
                for(i in 1..7) {
                    val next_a = curr_a + i * mov[0]
                    val next_b = curr_b + i * mov[1]
                    //ckech if the bishop is the blocking or out of range
                    if((next_a == curr_c && next_b == curr_d) || next_a < 1 || next_b < 1 || next_a > 8 || next_b > 8 ) {
                        break
                    }
                    q.offer(listOf(next_a, next_b, curr_c, curr_d, steps + 1))
                }
            }
            // check for if rook or bishop are in the quene position   
            for(mov in bishopMoves) {
                for(i in 1..7) {
                    val next_c = curr_c + i * mov[0]
                    val next_d = curr_d + i * mov[1]
                    //ckech if the bishop is the blocking or out of range
                    if((next_c == curr_a && next_d == curr_b) || next_c < 1 || next_d < 1 || next_c > 8 || next_d > 8 ) {
                        break
                    }
                    q.offer(listOf(curr_a, curr_b, next_c, next_d, steps + 1))
                }
            }
        }
        return -1
    }
}
```