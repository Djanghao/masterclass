# Kotlin Fenwick Tree (Binary Indexed Tree)

**Author:** aliam
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4833149/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4833149/)

---

# Intuition
This is a perfect usecase for a Fenwick Tree,  since we need to have the algorithm run in $$O(nlogn)$$ and we need to query a range for a sum. 

We could also a Segment Tree, or some kind of "Multi Set/Tree Set/Ordered Set" (Like an ordered_set in C++) that allows duplicates, or keeping a list and running binary search over it. But of all the four options, Fenwick Tree is the simplest to implement in terms of code complexity.

We will be using our Fenwick Tree to keep track of count of items  instead in a range, instead of some kind of range sum value. In other words, sum range method should return number of elements in that range. 

Other than using a Fenwick Tree, the solution is straighforward. At each `num` in `nums`, from `i == 2 up to n (non-inclusive)`, we count the size of each tree, and update the trees (and result arrays) accordingly to our constraints.

# Complexity
- Time complexity: $$O(nlogn)$$
- Space complexity: $$O(m)$$ where `m` is the max number in `nums`. 

**Some notes on complexity:**

Running some kind of Ordered Set should get us a space complexity of $$O(nlogn)$$ instead of $$O(m)$$. We have `3 <= n <= 10^5`and `1 <= m <= 10^9` so Fenwick tree solution gives us a slightly worse space complexity. However, Fenwick Tree should give us a better time complexity over the other solutions I tried to implement, where time complexity was $$O(n^2)$$ (In Kotlin / Java) according to my own analysis. Please do correct me if I am wrong.


# Code
```
class Solution {
    fun resultArray(nums: IntArray): IntArray {
        val arr1 = mutableListOf<Int> ()
        val arr2 = mutableListOf<Int> ()

        val max = nums.max() ?: 0

        val f1 = FenwickTree (max + 1)
        val f2 = FenwickTree (max + 1)

        arr1.add(nums[0])
        f1.update(nums[0])
        arr2.add(nums[1])
        f2.update(nums[1])

        for (j in 2 until nums.size) {
            val i = nums[j]
            val count1 = f1.range(nums[j] + 1, max)
            val count2 = f2.range(nums[j] + 1, max)

            if (count1 > count2) {
                arr1.add(nums[j])
                f1.update(nums[j])
            } else if (count2 > count1) {
                arr2.add(nums[j])
                f2.update(nums[j])
            } else if (arr1.size > arr2.size) {
                arr2.add(nums[j])
                f2.update(nums[j])
            } else {
                arr1.add(nums[j])
                f1.update(nums[j])
            }
        }

        return (arr1 + arr2).toIntArray()
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
}
```