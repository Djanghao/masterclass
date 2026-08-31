# Efficient Distinct Difference Array Solution in Scala

**Author:** mpractice
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/5837970/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/5837970/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key insight for this problem is to recognize that we need to track the count of distinct elements from both ends of the array simultaneously. By building two hash sets in opposite directions, we can efficiently compute the required differences.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two mutable sets: one for the prefix and one for the suffix.
2. Create two arrays to store the count of distinct elements at each step.
3. Iterate through the array once, updating both sets and count arrays.
4. Calculate the final result by subtracting suffix counts from prefix counts.

The most important aspects of this solution are:
* Building two hash sets from both directions.
* Storing the lengths of these sets as we progress.
* Working with mutable objects for efficiency.
* Balancing between compute efficiency and space usage.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n), where n is the length of the input array. We perform a single pass through the array, and set operations (add and size) are O(1) on average.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n). We use two sets that can grow up to size n in the worst case, and three arrays of length n or n+1. While this is efficient, we could potentially optimize further by building the result in two steps, eliminating the need for one of the count arrays.

# Code
```scala []
object Solution {
    def distinctDifferenceArray(nums: Array[Int]): Array[Int] = {
        val setStart = scala.collection.mutable.Set[Int]()
        val setEnd = scala.collection.mutable.Set[Int]()
        val listStart = Array.fill(nums.length)(0)
        val listEnd = Array.fill(nums.length + 1)(0)

        for (i <- nums.indices) {
            setStart.add(nums(i))
            setEnd.add(nums(nums.length - i - 1))
            listStart(i) = setStart.size
            listEnd(nums.length - i - 1) = setEnd.size
        }

        val result = Array.fill(nums.length)(0)

        for (i <- nums.indices) {
            result(i) = listStart(i) - listEnd(i + 1)
        }

        return result
    }
}
```