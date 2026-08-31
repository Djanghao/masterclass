# Kotlin | O(n) | Queue | Explained

**Author:** lemmingby
**Votes:** 6
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3483483/](https://leetcode.com/problems/dota2-senate/solutions/3483483/)

---

# Approach
The detailed approach is described in the comments. The general logic is to simply simulate the voting with the optimal strategy for each party, which is always to ban the next active voter from the opposing side. 

# Complexity
- Time complexity: $$O(n)$$ for creating the queues + $$O(n)$$ for voting (at each iteration one voter is out) = $$O(2n)$$

- Space complexity: $$O(n)$$ as we copy all the indexes of the string elements to the queues


# Code
```
class Solution {
    fun predictPartyVictory(senate: String): String {
        val rQ = LinkedList<Int>()
        val dQ = LinkedList<Int>()

        for (i in 0 until senate.length) {
            (if (senate[i] == 'R') rQ else dQ).addLast(i)
        }

        //The voting goes on until voters from one party are all gone
        while (!dQ.isEmpty() && !rQ.isEmpty()) {
            //Next voter is the one with the lowest index at the beginning
            //of both queues (retaining the initial order of voters)
            //The strategy for each voter is to ban the next voter of the 
            //opposing faction (the one who is next to vote)
            //After having voted, the current voter (who still retains the
            //right to vote) is moved to the end of its party queue and
            //their index is recalculated
            val voterQ = if (dQ.getFirst() < rQ.getFirst()) dQ else rQ
            voterQ.addLast(maxOf(dQ.getLast(), rQ.getLast()) + 1)
            //Finally removing the banned voter of the opposing faction
            //and the now-obsolete instance of the current voter
            dQ.removeFirst()
            rQ.removeFirst()
        }

        //The party with the remaining active voters is the winner
        return if (rQ.isEmpty()) "Dire" else "Radiant"
    }
}
```