# scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/4395220/](https://leetcode.com/problems/perform-string-shifts/solutions/4395220/)

---

# Approach
The foldLeft operation aggregates the shifts. If the direction is 0 (left shift), we subtract the amount from the accumulator; if 1 (right shift), we add it.

We normalize effectiveShift to ensure it's a non-negative value less than the length of the string, which handles cases where the total shift exceeds the string length or is negative.

The final string is formed by concatenating two substrings: the end portion of the string that moves to the front, and the remaining front portion.

This solution efficiently computes the result in linear time relative to the number of shifts, independent of the string's length.

# Code
```
object Solution {
  def stringShift(s: String, shift: Array[Array[Int]]): String = {
    // Calculate the net shift amount
    val netShift = shift.foldLeft(0) {
      case (acc, Array(direction, amount)) =>
        acc + (if (direction == 0) -amount else amount)
    }

    // Normalize the net shift to be within the string's length
    val effectiveShift = (netShift % s.length + s.length) % s.length

    // Perform the shift
    s.substring(s.length - effectiveShift) + s.substring(0, s.length - effectiveShift)
  }
}

```