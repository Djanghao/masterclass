# Kotlin - Two Pointers, Sorting, and Monotonic Stack approaches

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-width-ramp/solutions/882567/](https://leetcode.com/problems/maximum-width-ramp/solutions/882567/)

---

Two Pointers
```
/**
 * https://leetcode.com/problems/maximum-width-ramp/
 *
 * Time Complexity:     O(`totalNums`)
 * Space Complexity:    O(`totalNums`)
 *
 * References:
 *  https://leetcode.com/problems/maximum-width-ramp/discuss/265765/Detailed-Explaination-of-all-the-three-approaches
 */
class Solution {
    fun maxWidthRamp(nums: IntArray): Int {
        val totalNums = nums.size
        
        val rightMax = IntArray(totalNums)
        for(idx in totalNums - 1 downTo 0){
            rightMax[idx] = if(idx == totalNums - 1){
                nums[totalNums - 1]
            }else{
                maxOf(rightMax[idx + 1], nums[idx])
            }
        }
        
        var lo = 0
        var hi = 0
        var widest = 0
        
        while(hi < totalNums){
            while(lo < hi && nums[lo] > rightMax[hi]){
                ++lo
            }
            
            widest = maxOf(widest, hi - lo)
            ++hi
        }
        
        return widest
    }
}
```

Monotonic Stack - strictly decreasing
```
/**
 * https://leetcode.com/problems/maximum-width-ramp/
 *
 * Time Complexity:     O(`totalNums`)
 * Space Complexity:    O(`totalNums`)
 *
 * References:
 *  https://leetcode.com/problems/maximum-width-ramp/discuss/208348/JavaC%2B%2BPython-O(N)-Using-Stack
 *  https://leetcode.com/problems/maximum-width-ramp/discuss/265765/Detailed-Explaination-of-all-the-three-approaches
 */
class Solution {
    fun maxWidthRamp(nums: IntArray): Int {
        val totalNums = nums.size
        val stack = LinkedList<Int>()
        var widest = 0

        for (i in 0 until totalNums) {
            if (stack.isEmpty() || nums[stack.peek()] > nums[i]) {
                stack.push(i)
            }
        }

        for (i in totalNums - 1 downTo widest + 1) {
            while (stack.isNotEmpty() && nums[stack.peek()] <= nums[i]) {
                widest = maxOf(widest, i - stack.pop())
            }
        }

        return widest
    }
}
```

Sorting based on values, with indexes
```
/**
 * https://leetcode.com/problems/maximum-width-ramp/
 *
 * Time Complexity:     O(`totalNums` * lg(`totalNums`))
 * Space Complexity:    O(`totalNums`)
 *
 * References:
 *  https://leetcode.com/problems/maximum-width-ramp/discuss/208348/JavaC%2B%2BPython-O(N)-Using-Stack
 */
class Solution {
    fun maxWidthRamp(nums: IntArray): Int {
        val totalNums = nums.size
        
        val pairs = Array(totalNums){ idx -> intArrayOf(nums[idx], idx)}
        pairs.sortBy{it[0]}
        
        var shortest = totalNums
        var widest = 0
        
        for (pair in pairs) {
            widest = maxOf(widest, pair[1] - shortest)
            shortest = minOf(shortest, pair[1])
        }
        
        return widest
    }
}
```

or a little more verbose:
```
class Solution {
    fun maxWidthRamp(nums: IntArray): Int {
        val totalNums = nums.size
        
        val nodes = Array(totalNums){ idx -> Node(nums[idx], idx) }
        nodes.sortBy{ it.value }
        
        var widest = 0
        var shortest = totalNums
        
        for(node in nodes){
            widest = maxOf(widest, node.idx - shortest)
            shortest = minOf(shortest, node.idx)
        }
        
        return widest
    }
    
    private data class Node(val value: Int, val idx: Int)
}
```



[solutions - github](https://github.com/zea7ot/leetcode-solutions-kotlin-zea7ot/tree/master/src/main/kotlin/com/zea7ot/leetcode/lvl3/lc0962)

[problems related to the monotonic stack](https://github.com/zea7ot/leetcode-solutions-java-zea7ot/blob/master/src/main/java/com/zea7ot/leetcode/tags/by_data_structure/stack/stack_monotonic.txt)

[problems related to the monotonic queue](https://github.com/zea7ot/leetcode-solutions-java-zea7ot/blob/master/src/main/java/com/zea7ot/leetcode/tags/by_data_structure/queue/queue_monotonic.txt)