# Explain the algorithm

**Author:** yang_bo
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-permutation/solutions/267375/](https://leetcode.com/problems/next-permutation/solutions/267375/)

---

The required return value is the next greater number of the current number. In order to increase the current number, we want to increase one digit `X`, and keep all the left hand side digits of `X` unchanged, and sort the right hand side digits of `X` in ascending order. The number of the right hand side digits should be as less as possible, in order to minimize the return value.

So, we can find the digit `X`, which is less than its right neighbor. The searching should go from right to left to minimize the number of digits at the right of `X`.

After we find out `X`, we should swap `X` with another larger digit `Y` from its right hand side. Note that `Y` is not neccesarily the right neighbor of `X`, because there may be other digits at right hand side of `X`, which are greater than `X` and less than the right neighbor of `X`. We can perform a right-to-left linear search or a binary search on all digits at the right hand side of `X`, to find out the digit `Y`, which is just greater than `X`. Binary search is possible because `X` is the rightmost digit that is less than its right neighbor. In other words, all the right hand side digits of `X` is not less than their right neighbors, or, they are descending ordered.

After we find out `Y`, we can swap `X` with `Y`. Since `Y` is just greater than `X`, the right neighbor of `Y` (if any) is not greater than `X`, so swapping `X` with `Y` still keeps the original descending order of the right hand side digits. Therefore, we can simply reverse them to make them in ascending order.

There are some more corner cases to handle. For example, if we cannot find `X` because the entire number is in descending order, we should reverse the entire number.

The following code is the solution written in Scala
``` scala
object Solution {
    def nextPermutation(nums: Array[Int]): Unit = {
        @annotation.tailrec
        def reverse(i: Int, j: Int): Unit = {
            if (i < j) {
                val tmp = nums(i)
                nums(i) = nums(j)
                nums(j) = tmp
                reverse(i + 1, j - 1)
            }
        }
        
        def swap(i: Int, j: Int): Unit= {
            val tmp = nums(i)
            nums(i) = nums(j)
            nums(j) = tmp
        }
        
        nums.indices.drop(1).reverse.find { rightNeighborOfX =>
            // Iterate though right to left to find out X,
            // which is less than its right neighbor
            val x = rightNeighborOfX - 1
            nums(x) < nums(rightNeighborOfX)                 
        } match {
            case None =>
                // X is not found because the entire number is descending ordered
                reverse(0, nums.indices.last)
            case Some(rightNeighborOfX) =>
                val x = rightNeighborOfX - 1
                
                // Perform a right-to-left linear search to find the digit Y,
                // which is just greater than X
                val Some(y) = (rightNeighborOfX until nums.length).reverse.find { y =>
                    nums(y) > nums(x)
                }
            
                swap(x, y)
            
                // Reverse right hand side digits of X to turn them from descending order to ascending order
                reverse(rightNeighborOfX, nums.indices.last)
        }
    }
}
```