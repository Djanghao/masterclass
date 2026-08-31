# Simple count O(n) solution

**Author:** bylazy
**Votes:** 0
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/6084792/](https://leetcode.com/problems/couples-holding-hands/solutions/6084792/)

---

# Intuition
The greedy algorithm with simple counting will work, since the formed pair will not need to be changed for the next pairs.

# Approach
We form an array with the initial position where index/2 is the ordinal number of the first person's pair, and the value is the number of the second person's pair. Then we count the number of people not sitting in a pair and reseat them.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```kotlin []
class Solution {
    fun minSwapsCouples(row: IntArray): Int {
        val m = IntArray(row.size) {-1} //Array with initial pairs
        
        for (i in 0..row.lastIndex-1 step 2) { //two persons at a time
            val p1 = row[i]/2 //nubmer of first person's pair
            val p2 = row[i+1]/2 //nubmer of second person's pair
            // Storing initial pairs in array so m[first pair number] = second pair number and m[second pair number] = first pair number
            if (m[p1*2] == -1) m[p1*2] = p2 else m[p1*2+1] = p2
            if (m[p2*2] == -1) m[p2*2] = p1 else m[p2*2+1] = p1
        }        
        
        var r = 0 //Answer 
        for (i in 0..m.lastIndex-1 step 2) 
            if (m[i] != i/2) { //Someone is in wrong place
                r++
                val p = i/2 // Correct pair number
                val p1 = m[i] // First person's to swap current pair number
                val p2 = m[i+1] //Second person's to swap current pair number
                //Swap
                if (m[p1*2] == p) m[p1*2] = p2 else m[p1*2+1] = p2
                if (m[p2*2] == p) m[p2*2] = p1 else m[p2*2+1] = p1
            }
        
        return r
    }
}
```