# Binary search with comments

**Author:** vanajag
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2322362/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2322362/)

---

```kotlin
    fun shortestSequence(rolls: IntArray, k: Int): Int {
        val indexs = TreeSet<Int>() {a, b -> b - a}
        val numberIndex = HashMap<Int, Int>()
        val smallestIndexs = IntArray(rolls.size) { -1 }
        
        for(i in rolls.size - 1 downTo 0) {
            // smallest index after current index that consists of all k numbers
            // if we dont have all numbers after current number, then we cannot do next batch so mark it as -1
            //
            // Ex:
            // indexs:     0 1 2 3 4 5 6 7 8
            // rolls:      1,2,3,4,1,3,2,1,4
            // smallindex: 4 6 6 8 8 - - - - 
            smallestIndexs[i] = if(indexs.size == k) indexs.first() else -1
            
            // update current number index
            val prev = numberIndex[rolls[i]]
            if(prev != null) {
                indexs.remove(prev)
            }
            numberIndex[rolls[i]] = i
            indexs.add(i)
        }
        
        val starts = IntArray(k + 1) { -1 }
        // mark start indexs of all numbers
        for(i in 0 until rolls.size) {
            if(starts[rolls[i]] == -1) starts[rolls[i]] = i
        }
        
        var ans = Int.MAX_VALUE
        for(i in 1 until starts.size) {
            if(starts[i] == -1) return 1
            var temp = 1
            var curr = starts[i]
            // start with starting index for each number and count number of batches it can make
            while(curr != -1) {
                temp++                
                curr = smallestIndexs[curr]
            }
            // find the minimum batch count
            ans = Math.min(ans, temp)
        }
        return ans
    }