# Kotlin - help if you're stuck, a naive solution that you can optimize

**Author:** drawers
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4673191/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4673191/)

---

# Intuition
There's quite a lot going on in this problem and the solutions jump to memoization and efficiently solving the problem of working out the max for the subarry.

If you're stuck, it might be better to start by writing an inefficient solution and optimizing it.


# Code
```
class Solution {

    fun maxSumAfterPartitioning(arr: IntArray, k: Int): Int {
        return recurse(arr, k, 0, 0)
    }

    private fun recurse(arr: IntArray, k: Int, start: Int, level: Int): Int {
        // inefficient - no memoization
        if (start == arr.lastIndex) {
            return 0
        }

        var ans = 0
        for (newEnd in start until start + k) {
            if (newEnd > arr.lastIndex) continue

            // inefficient - recalculate subarray each time
            val sub = arr.slice(start..newEnd)

            repeat(level) {
                print(" ")
            }
            println(sub.toList())

            // inefficient - no running max we can use
            val subMax = sub.max()

            // replace elements in subarray with max
            val subContribution = subMax * sub.size

            ans = maxOf(ans, subContribution + recurse(arr, k, newEnd + 1, level + 1))
        }

        return ans
    }
}
```

Note the `level` is just so we can get some pretty printing. Given the input of:

```
[1,15,7,9,2,5,10]
```

We get the following recursion tree:

```
[1]
 [15]
  [7]
   [9]
    [2]
     [5]
     [5, 10]
    [2, 5]
    [2, 5, 10]
   [9, 2]
    [5]
    [5, 10]
   [9, 2, 5]
  [7, 9]
   [2]
    [5]
    [5, 10]
   [2, 5]
   [2, 5, 10]
  [7, 9, 2]
   [5]
   [5, 10]
 [15, 7]
  [9]
   [2]
    [5]
    [5, 10]
   [2, 5]
   [2, 5, 10]
  [9, 2]
   [5]
   [5, 10]
  [9, 2, 5]
 [15, 7, 9]
  [2]
   [5]
   [5, 10]
  [2, 5]
  [2, 5, 10]
[1, 15]
 [7]
  [9]
   [2]
    [5]
    [5, 10]
   [2, 5]
   [2, 5, 10]
  [9, 2]
   [5]
   [5, 10]
  [9, 2, 5]
 [7, 9]
  [2]
   [5]
   [5, 10]
  [2, 5]
  [2, 5, 10]
 [7, 9, 2]
  [5]
  [5, 10]
[1, 15, 7]
 [9]
  [2]
   [5]
   [5, 10]
  [2, 5]
  [2, 5, 10]
 [9, 2]
  [5]
  [5, 10]
 [9, 2, 5]

Output: 84
```

See that the program explores first the solution where each subarray has size 1 and then slowly increases the size of the subarrays starting from the last subarray.

Once you've grasped the problem in this way, you can try:
1. Avoiding the recalculation of the max of the subarray in every step
2. Memoizing the solution

There are lots of other solutions, including the editorial, that show this approach.