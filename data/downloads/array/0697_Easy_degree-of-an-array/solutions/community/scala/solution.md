# Scala map, starting and end index

**Author:** vermasuraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/5833493/](https://leetcode.com/problems/degree-of-an-array/solutions/5833493/)

---

# Intuition
To find the shortest subarray with the same degree as the input array, we need to track the frequency of each element and the first and last occurrence of each element. The degree of the array is the maximum frequency of any element.

# Approach
1. Use a mutable map to store the count, start index, and end index for each element.
2. Iterate through the array and update the map with the count and indices.
3. Determine the degree of the array by finding the maximum count in the map.
4. Iterate through the map to find the shortest subarray length for elements with the maximum count.

# Complexity
- Time complexity:
$$O(n)$$, where \\(n\\) is the length of the input array. We iterate through the array twice.

- Space complexity:
$$O(n)$$, for storing the map with the count and indices of each element.

# Code
```scala
object Solution {
    import scala.collection.mutable

    def findShortestSubArray(nums: Array[Int]): Int = {
        case class Value(count: Int, start: Int, end: Int)
        var map = mutable.Map[Int, Value]()
        nums.zipWithIndex.foreach { case (num, i) =>
            if (map.contains(num)) {
                val value = map(num)
                map.put(num, Value(value.count + 1, value.start, i))
            } else {
                map.put(num, Value(1, i, i))
            }
        }

        var max = 0
        var count = 0
        map.foreach { case (_, value) => 
            if (count < value.count) {
                count = value.count
                max = value.end - value.start + 1
            } else if (count == value.count) {
                max = Math.min(max, value.end - value.start + 1)
            }
        }
        max
    }
}
```