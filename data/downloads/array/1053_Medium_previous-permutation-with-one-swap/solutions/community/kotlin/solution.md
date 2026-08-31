# yet another example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4472166/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4472166/)

---

# Code
```
class Solution {
    fun prevPermOpt1(arr: IntArray): IntArray {
        val i = (arr.size-2 downTo 0).find{ x -> arr[x] > arr[x+1]}?:0
        val q = (i+2..<arr.size).fold(i+1) { x, j -> if (arr[x] < arr[j] && arr[j] < arr[i]) j else x }
        arr[i] = arr[q].also { arr[q] = arr[i] }
        return arr
    }
}
```