# 10 line solution

**Author:** su1im69n
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive/solutions/3682874/](https://leetcode.com/problems/moving-stones-until-consecutive/solutions/3682874/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When approaching this problem, my initial thought was to find the empty spaces between the numbers. To accomplish this, I decided to sort the numbers first. Initially, I attempted to improve the sorting algorithm using conditional statements, but I eventually abandoned that approach and focused on solving the main goal instead.

# Approach
Some may attempt to find all possible combinations, but the maximum number of moves is achieved by performing one move at a time. Therefore, the maximum number of moves is equal to the number of empty spaces. The number of empty spaces is calculated by subtracting 2 from the difference between the last and first elements in the sorted array:  ``max = array.last() - array.first() - 2``.

To determine the minimum number of moves, we need to consider some exceptions. 
- If the maximum number of moves is zero, it means there are no empty spaces, and the minimum number of moves is 0.
- If any of the spaces between the numbers is 0, it means that two stones are already adjacent to each other. In this case, only one move is needed to make all the stones consecutive.
- If any of the spaces between the numbers is 1, it implies that there is one empty space between two stones. In this scenario, we can move the last stone to occupy this empty space, resulting in all the stones being consecutive.
- Or vice versa.

# Code
```kotlin
class Solution {
    fun numMovesStones(a: Int, b: Int, c: Int): IntArray {
        val array = arrayOf(a, b, c).sortedArray()

        val max = array.last() - array.first() - 2
        val min = when {
            max == 0 -> 0
            array[1] - array[0] >2 && array[2] - array[1] >2 -> 2
            else -> 1
        }
        return intArrayOf(min, max)
    }
}
```