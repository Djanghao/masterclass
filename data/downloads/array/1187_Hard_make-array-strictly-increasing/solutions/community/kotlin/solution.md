# Kotlin + Ordered Set + Memoization

**Author:** ivv135uk
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/3651656/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/3651656/)

---

```

class Solution {
    
    // Ordered set, kotlin
    // Make Array Strictly Increasing
    // https://leetcode.com/problems/make-array-strictly-increasing/
    // time: O(n*n*log(m)) where n is arr1.size and m is arr2.size
    // space: n * n
    fun makeArrayIncreasing(arr1: IntArray, arr2: IntArray): Int {
        
        val treeSet = TreeSet<Int>()
        treeSet.addAll(arr2.toList())
        
        val memo = Array(arr1.size){
            mutableMapOf<Int,Int>()
        }
        
        val res =  find(memo, arr1, treeSet, -1, 0)
        
        return if(res == Int.MAX_VALUE) -1 else res
    }
    
    
    fun find(memo: Array<MutableMap<Int, Int>>, input : IntArray, treeSet: TreeSet<Int>, prev: Int, index : Int): Int{
        
        if(index == input.size){
            return 0
        }
        
        if(memo[index][prev] != null){
            return memo[index][prev]!!
        }
        
        var r1 = Int.MAX_VALUE
        if(input[index] > prev){
            r1 = find(memo, input, treeSet, input[index], index + 1)
        }
        
        var num = treeSet.higher(prev)
        var r2 = Int.MAX_VALUE
        if(num != null){
            r2 = find(memo, input, treeSet, num, index + 1)
            if(r2 != Int.MAX_VALUE){
                r2++
            }
        }
        
        val res =  Math.min(r1, r2)
        
        memo[index][prev] = res
        
        return res
    }
   
}
```