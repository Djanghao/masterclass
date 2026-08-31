# Kotlin Lovers | O(N) Solution

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/4165677/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/4165677/)

---

# Intuition
So I am sure we all would have found the O(nlogn) solution but finding O(N) was bit tricky. Inspired by @Lee solution. 

# Approach
Lets explain the Next array a bit
Lets take example: 
Input = (1, 2, 0, 0, 2, 1)
Next =  (1, 2, 2, 3, 5, 6, 6)

Few points to note: 
- The size of Next array is Input size + 1, because we are marking + 1 for all the raining days / occupied sunny days. But we assume this extra index as sunny day to terminate the search, otherwise it will keep looking for + 1 index. Check the condition in 'find' func
- If the value in input array is not 0 -> we add index + 1 as the initial value
- If the value in input array is 0 -> We add the same value as index

Now lets understand how these array changes for each iteration of index 

Bold - Current iteration index
Italic - Values changed / added in current iteration

Input - (1, 2, 0, 0, 2, 1)
Next =  (1, 2, 2, 3, 5, 6, 6)
Map - ()
Output- (1, 1, 1, 1, 1, 1)

i = 0
Input - (**1**, 2, 0, 0, 2, 1)
Next =  (1, 2, 2, 3, 5, 6, 6)
Map - (`{1->0}`)
Output- ($$-1$$, 1, 1, 1, 1, 1)

i = 1
Input - (1, **2**, 0, 0, 2, 1)
Next =  (1, 2, 2, 3, 5, 6, 6)
Map - ({1->0},`{2->1}`)
Output- (-1, `-1`, 1, 1, 1, 1)

i = 2 
Input - (1, 2, **0**, 0, 2, 1)
Next =  (1, 2, 2, 3, 5, 6, 6)
Map - ({1->0},{2->1})
Output- (-1, -1, 1, 1, 1, 1)

i = 3
Input - (1, 2, 0, **0**, 2, 1)
Next =  (1, 2, 2, 3, 5, 6, 6)
Map - ({1->0},{2->1})
Output- (-1, -1, 1, 1, 1, 1)

i = 4
Input - (1, 2, 0, 0, **2**, 1)
Next =  (1, `3`, `3`, 3, 5, 6, 6)  // find(1) -> find(2)
Map - ({1->0},`{2->4}`)
Output- (-1, -1, `2`, 1, `-1`, 1)

i = 5
Input - (1, 2, 0, 0, 2, **1**)
Next =  (`4`, `4`, 3, `4`, 5, 6, 6)  // find(0) -> find(1) -> find(3)
Map - (`{1->5}`,{2->4})
Output- (-1, -1, 2, `1`, -1, `-1`)   // 1 is actually replacing the default 1 value


# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
class Solution {
    fun avoidFlood(rains: IntArray): IntArray {
        val map = mutableMapOf<Int, Int>()
        val next = IntArray(rains.size + 1){if(it < rains.size && rains[it] != 0) it+1 else it}
        val op = IntArray(rains.size){1}
        for((i,r) in rains.withIndex()){
            if(r != 0){
                op[i] = -1
                if(map[r] != null){
                    val node = find(map[r]!!, next)
                    if(node > i) return intArrayOf()
                    else {
                        op[node!!] = r
                    }
                }
                map[r] = i
            }
        }
        return op
    }


    fun find(i: Int, next: IntArray): Int{
        var j = if(next[i] == i) i else find(next[i], next)
        next[i] = j + 1
        return j
    }
}
```