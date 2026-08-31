# Kotlin - Typical Sliding Window Approach with a HashSet

**Author:** idiotleon
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/978553/](https://leetcode.com/problems/maximum-erasure-value/solutions/978553/)

---

Solution - [github](https://github.com/An7One/leetcode-solutions-kotlin-an7one/tree/main/src/main/kotlin/com/an7one/leetcode/lvl3/lc1695)

<b>Problem List</b>
#SlidingWindow - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_technique/n_pointers/by_pointer_amount/2_pointers/sliding_window)
#Subarray - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/array/by_data_structure/subarray.txt)

```
/**
 * @author: Leon
 * https://leetcode.com/problems/maximum-erasure-value/
 *
 * Time Complexity:     O(`nNums`)
 * Space Complexity:    O(`nNums`)
 */
class Solution {
    fun maximumUniqueSubarray(nums: IntArray): Int {
        val nNums = nums.size
        
        var lo = 0
        var hi = 0
        var largest = 0
        var sum = 0
        
        val seen = HashSet<Int>()
        
        while(hi < nNums){
		    // to accumulate the running sum
            sum += nums[hi]
			
            // to narrow the sliding window,
			// once any previously visited element has been found,
			// till it has been removed in the current (sliding) window.
            while(seen.contains(nums[hi])){
                sum -= nums[lo]
                seen.remove(nums[lo])
                ++lo
            }
            
			// to mark the element as visited
            seen.add(nums[hi])
            
			// to keep track of the largest running sum ever showing up
            largest = maxOf(largest, sum)
			
			// to enlarge the window
            ++hi
        }
        
        return largest
    }
}
```