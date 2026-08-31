# Scala Functional Programming & Some Extension

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2849229/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2849229/)

---

## 1. Mono-stack: O(N)
The idea is, if an element `a` is removed in the `x`th step, then the first element in the right side of `a` which is no less than `a` will only be removed after the `x`th step. 
```scala
import scala.annotation.tailrec
object Solution {
    def totalSteps(nums: Array[Int]): Int = {
        val huge = Int.MaxValue / 2    // step >= huge means an element will never be removed
        
		@tailrec
        def helper(nums: List[Int], stack: List[(Int, Int)], res: Int): Int = nums match {
            case Nil => res
            case x::xs => {
                val (left, right) = stack.span(_._1 <= x)
			    // elements in @left is less or equal to x, delaying the removal of x like some 'blockers'.
				// We find out which blocker caused the longest delay and update the removal time of x by adding 1
                val step = if (left == Nil) 1 else left.map(_._2).max + 1
                helper(xs, (x, step)::right, res max (if (step >= huge) 0 else step))
            }
        }
        
		// the first element will never be removed
        helper(nums.drop(1).toList, List((nums.head, huge)), 0)
    }
}
```

## 2. Simulating the Removal Process: O(N^2)
The brute force method takes n-squared time complexity. It would exceed time or memory limit.
```Scala
import scala.annotation.tailrec
object Solution {
    def totalSteps(nums: Array[Int]): Int = {
        @tailrec
        def doSteps(nums: Array[Int], accumu: Int): Int = if (nums sameElements nums.sorted) accumu else {
            doSteps((Int.MinValue +: nums).sliding(2).filter(x => x(0) <= x(1)).map(_(1)).toArray, 1 + accumu)
        }
        doSteps(nums, 0)
    }
}
```
## 3. Find the Result Array
We can find the resulted array after all the removals by simply modifying the first Mono-stack method. All the elements with `step >= huge` will be remained in the final result. The time complexity is `O(N)`.

There's also an interesting divide-and-conquer method to do that. we can obtain an `O(N Log(N))` time complexity to get the resulted array by doing so.
```Scala
def doSteps(nums: Array[Int]): Array[Int] = if (nums.size <= 1) nums else {
	val mid = nums.size / 2;
	val (left, right) = (doSteps(nums.take(mid)), doSteps(nums.drop(mid)))
	left ++ right.filter(_ >= left.last)
}
```