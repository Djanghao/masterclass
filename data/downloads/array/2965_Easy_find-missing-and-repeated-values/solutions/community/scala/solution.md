# Scala  Solution using flatten and Set

**Author:** hariprasath1436
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4415843/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4415843/)

---

# Explanation:

**Find the repeated value:**

1. grid.flatten is used to flatten the 2D array into a 1D array.
2. groupBy(identity) groups elements by their values.
3. filter(_._2.size == 2) filters out groups with exactly 2 occurrences (i.e., the repeated value).
4. keys.headOption.getOrElse(-1) retrieves the key (the repeated value) of the first group or -1 if none is found. The result is stored in result(0).

**Find the missing value:**

1. Calculate the expected sum of numbers from 1 to len using the formula (len * (len + 1)) / 2, where len is the length of one side of the square grid.
2. grid.flatten.toSet.sum calculates the sum of unique elements in the flattened grid.
3. The difference between the expected sum and the actual sum gives the missing value, which is stored in result(1).


**The final result is the array containing the repeated value at index 0 and the missing value at index 1.**

# Code
```
object Solution {
  def findMissingAndRepeatedValues(grid: Array[Array[Int]]): Array[Int] = {
    // Create an array to store the result
    val result = Array.ofDim[Int](2)

    // Step 1: Find the repeated value
    result(0) = grid.flatten.groupBy(identity).filter(_._2.size == 2).keys.headOption.getOrElse(-1)

    // Step 2: Find the missing value
    val len = grid.length * grid.length
    val sum = (len * (len + 1)) / 2
    result(1) = sum - grid.flatten.toSet.sum

    // Return the result array
    result
  }
}

```