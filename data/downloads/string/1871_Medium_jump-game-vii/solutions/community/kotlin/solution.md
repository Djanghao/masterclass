# :: Kotlin :: Binary Search + BFS

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/3279414/](https://leetcode.com/problems/jump-game-vii/solutions/3279414/)

---


# Code
```
class Solution {
    fun canReach(s: String, minJump: Int, maxJump: Int): Boolean {
        if (s[0] != '0' || s[s.length - 1] != '0') return false

        val q = LinkedList<Int>()
        val visit = BooleanArray(s.length){ false }
        val list = ArrayList<Int>()

        for (i in 0 until s.length) {
            val ch = s[i]
            if(ch == '0') {
                list.add(i)
            }
        }

        q.offer(0)

        while(!q.isEmpty()) {
            val cur = q.poll()
            val removeList = mutableListOf<Int>()
            for (i in lower_bound(list, 0, list.size, cur + maxJump) downTo lower_bound(list, 0, list.size, cur + minJump)) {
                if (i >= list.size) continue
                val idx = list.get(i)
                if (idx < cur + minJump || idx > cur + maxJump) continue

                visit[idx] = true
                removeList += i
                q.offer(idx)
            }

            for (ri in removeList) {
                list.removeAt(ri)
            }
        }

        return visit[s.length - 1]
    }

    fun lower_bound(elements: ArrayList<Int>,
		low: Int, high: Int, value: Int) : Int {
    	var lo = low
    	var hi = high

    	while(lo < hi) {
    		val mid = lo + (hi - lo) / 2
    		if(elements[mid] >= value) { 
    			hi = mid          
    		} else {                    
    			lo = mid + 1               
    		}
    	}
    	return lo                     
    }
}
```