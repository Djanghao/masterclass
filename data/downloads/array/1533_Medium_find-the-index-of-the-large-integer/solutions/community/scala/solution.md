# Short and easy solution Scala

**Author:** krishna_lm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3069585/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3069585/)

---

# Intuition
Binary search

# Approach
Divide the array in two equal half. Compare both the sum and eliminate the subarray with shorter sum.

# Complexity
- Time complexity:
O(log n) 

- Space complexity:
O(log n) If you use recursive approach otherwise constant.

# Code
```
/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface ArrayReader {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     def compareSub(l: Int, r: Int, x: Int, y: Int): Int {}
 *
 *     // Returns the length of the array
 *     def length(): Int {}
 * }
 */

object Solution {
    def getIndex(reader: ArrayReader): Int = {
        val len = reader.length
        compareArraySum(0,len-1,reader)
	}

    def compareArraySum(start:Int,end:Int,reader:ArrayReader):Int = {
        if(start == end){
             start
        }
        else{

            val isEven = (end-start+1)%2 == 0
            val mid = start+ ((end-start)/2)
            val nextStart = if(isEven) mid+1 else mid

            reader.compareSub(start,mid, nextStart,end) match {
                case 1 => compareArraySum(start,mid,reader)
                case -1 => compareArraySum(nextStart,end,reader)
                case 0 => mid
            }
        }
    } 
}
```