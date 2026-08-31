# :: Kotlin :: Fenwick Tree

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5443790/](https://leetcode.com/problems/peaks-in-array/solutions/5443790/)

---

# Code
```
class Solution {
    fun countOfPeaks(nums: IntArray, queries: Array<IntArray>): List<Int> {
        val n = nums.size
        val ft = FenwickTree(n)

        for (i in 1 until n - 1) {
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                ft.update(i)
            }

            // println("${ft.range(i, i)}")
        }

        val result = mutableListOf<Int>()
        for (query in queries) {
            val type = query[0]

            if (type == 1) {
                val l = query[1]
                val r = query[2]
                if (r == l) result.add(0)
                else result.add(ft.range(l + 1, r - 1))
            } else if (type == 2) {
                val i = query[1]
                val v = query[2]

                for (j in maxOf(1, i - 1) .. minOf(n - 2, i + 1)) {
                    if (nums[j] > nums[j - 1] && nums[j] > nums[j + 1]) {
                        ft.substract(j)
                    }
                }

                nums[i] = v

                for (j in maxOf(1, i - 1) .. minOf(n - 2, i + 1)) {
                    if (nums[j] > nums[j - 1] && nums[j] > nums[j + 1]) {
                        ft.update(j)
                    }
                }
            }
        }

        return result
    }
}

class FenwickTree(val size: Int) {
    val arr = mutableMapOf<Int, Int> ()

    fun range(a: Int, b: Int): Int {
        return range(b) - range(a - 1)
    }

    fun range(i: Int): Int {
        var sum = 0
        var i = i

        while (i > 0) {
            sum += arr[i] ?: 0
            i -= i and (-i)
        }

        return sum
    }

    fun update(i: Int) {
        var i = i
        while (i <= size) {
            arr[i] = (arr[i] ?: 0) + 1
            i += i and (-i)
        }
    }

    fun substract(i: Int) {
        var i = i
        while (i <= size) {
            arr[i] = maxOf(0, (arr[i] ?: 0) - 1)
            i += i and (-i)
        }
    }
}
```