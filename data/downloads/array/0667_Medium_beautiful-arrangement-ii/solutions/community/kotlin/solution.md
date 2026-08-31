# Kotlin Solution with explanation(Beats 100%)

**Author:** amianand
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4297303/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4297303/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initial array should have n distinct positive integers, so one of combination for k=1 is increasing order [1,2,3,4,5..n]. Let us generate an array with k=2, we got to swap atleast one integer. Which one to swap?

Lets take n to be 5 -> [1,2,3,4,5]

Try reversing the array from index 1 -> [1,5,4,3,2], this generates 2 distinct integers, why? Since the relative order of elements is same after index 1, so the difference is maintained as 1. Only addition is a[0] - a[1] element after reverse.

Similarly, reverse array from index 2 -> [1,5,2,3,4] this generates 3 distinct integers, why? Since the relative order of elements is same after index 2, so the difference is maintained as 1. Only addition is a[1] - a[2] element after reverse.

and so on..

# Approach
<!-- Describe your approach to solving the problem. -->
Maintain a count variable intialised as 1 to signify the number of times array has been reversed. Increment count on each reversal of array and use the count variable as index from where array needs to be reversed.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Need to reverse the array k times in order to generate k distinct elements. Each reverse operation will take  following steps in order

k/2 comparisons followed by
(k-1)/2 comparisons followed by
(k-2)/3 comparisons
and so forth.. till 1

K/2 + (K-1)/2 + (K-2)/2 + .. 1 = K(K-1)/4

While K can be N, so O(N^2)



- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Constant time, no additional space is required except for returning the answer.

# Code
```
class Solution {
    fun constructArray(n: Int, k: Int): IntArray {
       var count = 1
       var arr = IntArray(n)

       for(i in 0..n-1) {
           arr[i] = i+1
       }

       while(count < k) {
           reverseArray(count, arr)
           count++
       }

       return arr 
        
    }

    fun reverseArray(index: Int, arr: IntArray) {
        var start = index
        var end = arr.size-1

        while(start < end) {
            var temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
}
```