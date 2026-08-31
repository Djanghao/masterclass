# Accepted Explained and Commented Kotlin Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3107071/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3107071/)

---


```
class Solution {
    fun countGood(A: IntArray, k: Int): Long {
        var res = 0L
        val count = HashMap<Int, Int>() // Hashmap to store the count of each element in the array
        var i = 0
        var j = 0
        var k = k
        while (j < A.size) {
            k -= count.getOrDefault(A[j], 0) // subtract the count of current element from k
            count[A[j]] = count.getOrDefault(A[j], 0) + 1 // increment the count of current element in the hashmap
            while (k <= 0) {
                count[A[i]] = count[A[i]]!! - 1 // decrement the count of the first element in the window
                k += count[A[i++]]!! // add the count of the first element to k
            }
            res += i // add the index of the first element to the result
            j++
        }
        return res
    }
}


```