# Scala easy

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5246989/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5246989/)

---

# Intuition
To determine if the sum of the digits of the smallest number in an array is even or odd, the initial thought is to first find the minimum number in the array. Once we have the minimum number, we can sum its digits and check the parity of the sum. This approach is straightforward and involves basic operations like comparison, modulus, and division.

# Approach
1. **Find the Minimum Number**: Iterate through the array to identify the smallest number. This requires a single pass through the array, ensuring we find the minimum efficiently.
2. **Sum the Digits of the Minimum Number**: Using a while loop, repeatedly extract the last digit of the minimum number (using modulus operation) and add it to a sum variable, then remove the last digit (using integer division).
3. **Check Parity**: Finally, check if the sum of the digits is even or odd using the modulus operation. If the sum is even, return 1; otherwise, return 0.

# Complexity
- Time complexity:
  The time complexity of this approach is $O(n + \\log m)$, where $n$ is the length of the array and $m$ is the value of the minimum number. The $O(n)$ arises from the need to iterate through the array to find the minimum number, and $O(\\log m)$ arises from summing the digits of the minimum number (as the number of digits in a number $m$ is proportional to $\\log m$.

- Space complexity:
  The space complexity is $O(1)$ since we are using a constant amount of extra space regardless of the input size. We only need a few variables to store the minimum number and the sum of its digits.


# Code
```
object Solution {
  def sumOfDigits(nums: Array[Int]): Int = {
    var min = Int.MaxValue

    for (num <- nums) {
      if (min > num) {
        min = num
      }
    }

    var sum = 0
    while (min != 0) {
      sum += min % 10
      min /= 10
    }

    if (sum % 2 == 0) 1 else 0
  }
}

```