# Scala code with explanation

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/4446941/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/4446941/)

---

# Approach

def missingNumber(arr: Array[Int]): Int defines a method named missingNumber. It takes one parameter arr, which is an array of integers (Array[Int]), and returns an integer (Int).
Length Calculation:

val len = arr.length + 1: This line calculates the length of the sequence including the missing number. Since one number is missing from the array, the length is calculated as the current array length plus one.
Total Sum Calculation:

val totalSum = (len * (arr(0) + arr(len - 2))) / 2: This line calculates the sum of all numbers in the sequence if no number were missing. It uses the formula for the sum of an arithmetic sequence: 
(number of terms)\xD7(first term+last term)/2.
- arr(0) is the first number in the array.
- arr(len - 2) is used to get the last number in the sequence. Since the array is missing one element, the last element is at the index len - 2 rather than len - 1.
Sum of Existing Numbers:

val sum = arr.sum: This calculates the sum of the numbers currently in the array using the built-in sum method.
Calculate and Return Missing Number:

totalSum - sum: This calculates the missing number by subtracting the sum of the existing numbers in the array from the total sum of the sequence. The result is the missing number, which is then returned.

# Complexity

- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ 


# Code
```
object Solution {
  def missingNumber(arr: Array[Int]): Int = {
    val len = arr.length + 1
    val totalSum = (len * (arr(0) + arr(len - 2))) / 2
    val sum = arr.sum
    totalSum - sum
  }
}

```