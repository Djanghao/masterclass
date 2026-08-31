# short functional scala sweepline approach

**Author:** ui_beam
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134719/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6134719/)

---

# Intuition
- we know we can make any two numbers $$x,y$$ the same if $$abs(x-y) \\leq k$$
- it then follows for some n, you can make all [$$n-k,n+k]$$ into $$n$$
- so we have this notion of an "interval" around $$n$$
- now consider for some $$i$$ where $$min(a)-k \\leq i \\leq max(a) + k$$, where $$a$$ is our arrray.
- we want to then find some $$i$$ such that $$||[j : i-k \\leq j \\leq i+k \\land j \\in a]||$$ is maximised (i.e how many intervals intersect our imaginary "window line" $$i$$)

# Approach
- this can be done with a sweepline approach, and is pretty much the same as the first problem covered in chapter 30 of laaksonen's competitive programmer's handbook

# Complexity
- Time complexity: O(nlogn) for sorting, maps and folds are O(n)

- Space complexity: O(n)

# Code
```scala []
object Solution {
    def maximumBeauty(nums: Array[Int], k: Int): Int = {
        nums
        .flatMap{ x => List((x-k,-1),(x+k,+1)) } // point -> interval w/ low/up bound deltas flipped to handle start priority
        .sorted // sort by interval start e.g (1,-1) (5,+1) (6,+1), (7,-1) etc
        .map(_._2) // only need relative order of deltas +1+1-1+1-1-1-1 etc
        .foldLeft((0,1)) { // fold left, keep track of min(max) at each delta, min 1 beauty
            (acc, delta) => (acc._1 + delta, math.min(acc._1 + delta, acc._2))
        }
        ._2 * -1 // get the max by flipping again
    }
}
```