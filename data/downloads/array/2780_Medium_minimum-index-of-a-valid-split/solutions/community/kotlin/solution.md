# Boyer-Moore O(3n) //  O(2n)

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4714594/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/4714594/)

---

# Intuition
First, in a linear loop, we find the dominant element in the entire list.
Next, in a linear cycle, we find the frequency of this element.
And in the third linear cycle we find an index where it dominates both on the right and on the left.

First, in a linear loop, we find the dominant element in the entire list.
Next, in a linear loop, we find the frequency of this element and the possible minimum section index.

# Approach
# Complexity
- Time complexity:
O(3n) || O(2n)
- Space complexity:
O(1)

# Code
*Three cycles*
```
class Solution {
    fun minimumIndex(nums: List<Int>): Int {
        val len = nums.size
        var count = 0
        var candidate = 0
        nums.forEach { num ->
            if (count == 0) {
                candidate = num
                count = 1 
            }
            else if (candidate == num) {
                count++
            } 
            else {
                count--
            }
        }
        count = 0
        nums.forEach { num ->
            if (candidate == num) {
                count++
            } 
        }
        // println("count=$count,candidate=$candidate")
        if (count*2-len<2) return -1
        var count1 = 0
        for (i in 0 until len) {
            if (candidate == nums[i]) {
                count1++
                if ((count1*2>i+1) && ((count-count1)*2>len - i - 1))
                return i
            } 
        }
        return -1        
    }
}
```
*Two cycles*
```
class Solution {
    fun minimumIndex(nums: List<Int>): Int {
        val len = nums.size
        var count = 0
        var candidate = 0
        nums.forEach { num ->
            if (count == 0) {
                candidate = num
                count = 1 
            }
            else if (candidate == num) {
                count++
            } 
            else {
                count--
            }
        }
        count = 0
        var rez = -1
        for (i in 0 until len) {
            if (candidate == nums[i]) {
                count++
                if (count*2>i+1 && rez == -1)
                rez = i
            } 
        }
        if (count*2-len<2) return -1 else return rez
    }
}
```