# Scala Top-Down and Bottom-Up Solution With Explanation + Examples

**Author:** imagiraffe123
**Votes:** 2
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/484108/](https://leetcode.com/problems/combination-sum-iv/solutions/484108/)

---

Top-down solution.
```scala
import scala.collection.mutable

object Solution {
    def combinationSum4(nums: Array[Int], target: Int): Int = {
        val memo: mutable.Map[Int, Int] = mutable.Map.empty
        
        def recurse(nums: Array[Int], target: Int): Int = {
            if (target == 0) 1
            else if (target < 0) 0
            else if (memo.contains(target)) memo(target)
            else {
                val result = nums.map { num =>
                    recurse(nums, target - num)
                }.sum
                
                memo += (target -> result)
                result
            }
        }
        
        // Potentially reduces stack depth
        val descNums = nums.sortWith(_ > _)
        recurse(descNums, target)
    }
}

```
Bottom-up solution. Messier than I'd like. Hopefully, someone comes up with a cleaner version!
```scala
object Solution {
    def combinationSum4(nums: Array[Int], target: Int): Int = {
        // maps integers to the number of combinations that can reach it
        val combos: Array[Int] = Array.fill(target + 1)(0)
        combos(0) = 1
        
        for (i <- 1 to target) {
            combos(i) = 
                nums
                    .map(i - _)
                    .filter(_ >= 0)
                    .map(combos(_))
                    .sum
        }
        combos(target)
    }
}
```

Both will run in `O(n*4)` time, where `n == target` and `4` is the length of the `nums` array

**Explanations**
These examples have arrays of length three, so the runtime will be `O(n*3)` instead.

**Top-Down Explanation**

Take the example:
* `nums = [1, 2, 3]`
* `target = 4`

A sequence for `4` exists for every sequence that leads to `4 - 1`, `4 - 2` or `4 - 3` (aka  `3`, `2`, or `1`).

* We have 4 sequences that lead to `3`:
	* `(1, 1, 1)`
	* `(1, 2)`
	* `(2, 1)`
	* `(3)`
* We have 2 sequences that lead to `2`:
	* `(1, 1)`
	* `(2)`
* We have 1 sequence that leads to `1`:
	* `(1)`

We can append a `1` to the sequences that lead to `3`, a `2` to the sequences that lead to `2`, and a `1` to the sequences that lead to `3`. Since we have 7 total sequences across these three numbers, we have 7 total sequences that can lead to `4`.

This forms the basis for our top-down algorithm. Imagine a tree branching out from a `4` parent node into child nodes `3`, `2`, and `1`. Each of those nodes will branch out into more child nodes. Each time, you will subtract either `1`, `2`, or `3`. You have a successful sequence if you've reach `0`, and an unsuccessful sequence if you reach a negative number.

Let's follow the `2` node:
* **Branch 1:** `2 - 1` or `1`. Go deeper.
	* **Branch 1a:** `1 - 1` or `0`. Success!
	* **Branch 1b:** `1 - 2` or `-1` Failure.
	* **Branch 1c:** `1 - 3` or `-2` Failure.
* **Branch 2:** `2 - 2` or `0` Success!
* **Branch 3:** `2 - 3` or `-1` Failure.

**Branch 2** leads to zero, so you count that as 1 sequence. **Branch 3** leads to a negative integer, so you count that as 0 sequence. **Branch 1** leads to a positive integer, so you recurse, and repeat with its children. **Branch 1** has 1 successful path among its children, so you count **Branch 1** as having 1 sequence.

Thus **Branch 1** and **Branch 2** have 1 sequence each, while **Branch 3** has 0 sequences. That is a total of 2 sequences for the `2` node.

You can repeat that algorithm for the `1` node and `3` node.

**Bottom-Up Explanation**

Take the example:
* `nums = [2, 3, 6]`
* `target = 14`

Imagine we have a `combos` array. The `combos` array will tell you how many sequences can reach a given number. We want our final answer to be at `combos(target)`.

Note that the `combos` array will have a length of `target + 1`, since we'll need an index for both `0` and `14`.

The idea is to iterate for every number from 1 to 14, and count the sequences based on the numbers that came before. Say we're trying to find the sequences that can reach `8`. The answer will be the sum of sequences that can reach `8-2`, `8-3`, and `8-6`. 

Going from the very start, intialize your `combos` array, and set `combos(0) = 1`. This is an important base case.
* Iterate from `1 to 14`
	* For integer `1`, we look at sequences that can reach `1 - 2`, `1 - 3`, and `1- 6`. 
		* There are no sequences that can reach `-1`, `-2`, or `-5`, since those are negative numbers. 
		* We set `combos(1) = 0`
	* For integer `2`, we look at sequences that  can reach `2-2`, `2-3` and `2-6`.
		* These evaluate to `0`, `-1`, and `-4`. 
		* `combos(0) = 1` as our base case. So we have at least on sequence.
		* There are zero sequences that can reach `-1` and `-4`.
		* We set `combos(2) = 1`
	* For integer `3`, we look at sequences that can reach `3-2`, `3-3`, and `3-6`
		* These evaluate to `1`, `0`, and `-3`.
		* `combos(1) == 0` from our first step
		* `combos(0) == 1` from our base case
		* `-3` is out of bounds, so that's zero sequence
		* We set `combos(3) = 1`
	* Let's skip ahead to 5. For integer `5`, we look at sequences that can reach `5-2`, `5-3`, and `5-6`.
		* These evaluate to `3`, `2`, and `-1`.
		* `combos(3) = 1`
		* `combos(2) = 1`
		* `-1` is out of bounds, so that's zero sequences.
		* We set `combos(5) = 2`

Repeat until you get to integer `14`, and you have your result
