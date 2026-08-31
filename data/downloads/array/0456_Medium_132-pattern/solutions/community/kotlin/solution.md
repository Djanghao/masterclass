# My kotlin solutions with time O(N) and space O(N)

**Author:** hj-core
**Votes:** 0
**Link:** [https://leetcode.com/problems/132-pattern/solutions/4109762/](https://leetcode.com/problems/132-pattern/solutions/4109762/)

---

Both methods are tricky, and I cannot come up with them myself.

Method 1 varies element three, uses prefixMin as element one, keeps possible element twos in a stack, and tries to lower its minimum value as much as possible. Note that prefixMin is also monotonically decreasing.

Method 2 varies element one, tries to raise the value of element two as large as possible, and keeps potential element threes (including the one corresponding to the current element 2 as well) in a stack. I suggest running a dry run on the array [6, 9, 7, 5, 4, 6, 8, 10] to get a feel for what the code is doing.

Below are my solutions in kotlin,
1. Method 1
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the size of nums;
     */
    fun find132pattern(nums: IntArray): Boolean {
        val prefixMin = nums.runningReduce { acc, i -> minOf(acc, i) }
        val twoStack = mutableListOf<Int>() // monotonically decreasing

        for (index in nums.lastIndex downTo 1) {
            val potentialThree = nums[index]
            val one = prefixMin[index - 1]

            if (potentialThree <= one) {
                continue
            }

            while (twoStack.isNotEmpty() && twoStack.last() <= one) {
                twoStack.removeAt(twoStack.lastIndex)
            }

            if (twoStack.isNotEmpty() && twoStack.last() < potentialThree) {
                return true
            }
            twoStack.add(potentialThree)
        }
        return false
    }
}
```

2. Method 2
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the size of nums;
     */
    fun find132pattern(nums: IntArray): Boolean {
        val threeStack = mutableListOf<Int>() // monotonically decreasing
        var two = Int.MIN_VALUE

        for (index in nums.indices.reversed()) {
            val potentialOne = nums[index]

            /* It is guaranteed that there is a three in the stack which is
             * greater than two, so if potentialOne is less than two, we find
             * a valid one-three-two pattern.
             */
            if (potentialOne < two) {
                return true
            }

            // Raise the value of two whenever possible
            while (threeStack.isNotEmpty() && threeStack.last() < potentialOne) {
                two = threeStack.removeAt(threeStack.lastIndex)
            }
            threeStack.add(potentialOne)
        }
        return false
    }
}
```