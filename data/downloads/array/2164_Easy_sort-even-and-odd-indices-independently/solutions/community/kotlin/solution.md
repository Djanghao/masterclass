# In-place, Quick sort

**Author:** rrrrrr111
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/5746063/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/5746063/)

---

# Approach
Make a quick sort separately for odd and even indices.
# Complexity time $$O(n*log(n))$$, space $$O(1)$$
# Code
```kotlin []
class Solution {
    fun sortEvenOdd(nums: IntArray): IntArray {
        val last = nums.lastIndex
        nums.quickSortAsc(0, if (last % 2 == 0) last else last - 1)
        nums.quickSortDesc(1, if (last % 2 == 0) last - 1 else last)
        return nums
    }
}

fun IntArray.quickSortAsc(fr: Int, to: Int) {
    if (fr >= to)
        return
    else if (to - fr == 2) {
        if (this[fr] > this[to])
            this.swap(fr, to)
        return
    }
    var p1 = fr
    var p2 = fr
    val pv = this[to]
    while (p2 < to) {
        if (this[p2] < pv) {
            this.swap(p2, p1)
            p1 += 2
        }
        p2 += 2
    }
    this.swap(p1, to)
    quickSortAsc(fr, p1 - 2)
    quickSortAsc(p1 + 2, to)
}

fun IntArray.quickSortDesc(fr: Int, to: Int) {
    if (fr >= to)
        return
    else if (to - fr == 2) {
        if (this[fr] < this[to])
            this.swap(fr, to)
        return
    }
    var p1 = fr
    var p2 = fr
    val pv = this[to]
    while (p2 < to) {
        if (this[p2] > pv) {
            this.swap(p2, p1)
            p1 += 2
        }
        p2 += 2
    }
    this.swap(p1, to)
    quickSortDesc(fr, p1 - 2)
    quickSortDesc(p1 + 2, to)
}

fun IntArray.swap(i: Int, j: Int) {
    val t = this[i]
    this[i] = this[j]
    this[j] = t
}
```