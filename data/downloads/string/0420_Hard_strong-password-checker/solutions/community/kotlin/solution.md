# [Kotlin] [Not Copied/Ported] [Easy] My 100th LeetCode solve

**Author:** fan87
**Votes:** 1
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/3553362/](https://leetcode.com/problems/strong-password-checker/solutions/3553362/)

---

You found this question, probably by sorting questions with accept rate. Yes, this being the least accept rate old question, I decided to give it a try in my primary programming language, Kotlin.

This is also the 100th questions I've solved on Leetcode, and I'm so glad I did this, this is such a fun one!

(NOT PORTED DIRECTLY FROM ANOTHER LANGUAGE/SOLUTION)

It may not be the fastest tho, but hey, at least it got accepted and works!

# Tips and tricks
1. It's easier to debug in your IDE, you don't really want to debug by keep running & submitting. You can either write testcases or use some hacky stuff to extract all the questions, and create assertions. I'll probably create a post on that in ther future explaining the internel leetcode stuff


# Approach
1. Check if it contains digits, lowercase and uppercase
2. Count repeated chars
3. Check how many char type requirements it's missing (Digits/Lower/Upper)
4. If password is shorter than 3, missing requirements count can be met by adding 6 - n extra letters (and reach 6)
5. If password is in range of (`4 .. 5`/`4 until 6`), it will consider the requirements count and calculate the operations count
6. If it's 6 or longer, it will do the following things:

- Remove repeatings to make it at most 20 chars
  - Using an medium-level algorithm (Will mention later) to decide what to remove
- Remove repeatings
  - We can think of it as splitting strings by editing the middle char
  - So `aaaaaa` will become `aa0aa0` or some sort
  - In other words, if it's repeated `n` times at this point, we do `n / 3` char edits operation
  - We store edited chars count for next step's use
- Check requirements
  - If we have edited more than 3 chars, we can meet the requirements by changing what those chars are
  - If we have edited 0 ~ 2 chars, then we may need extra edits to make it meets the requirements


For the algorithm I mentioned for `Remove repeatings to make it at most 20 chars` step:
 - Let's say `n` is chars we need to edit to not repeat over 3 times
 - We implement a function that uses minimal steps to reduce the `n`

Here's an example (Not an example of "repeatings", but the algorithm input and output):
```kt
  63927897 // Let's say we start with this
- 11100010 // First, we check if it's possible to reduce n by doing only 1 operation
           // (num % 3 == 0)
= 52827887 // We are now left with this
- 00002002 // We check if it's possible to reduce n by doing only 2 operations
           // (num % 3 == 1)
= 52825885 // We are now left with this
- 30303333 // Same here, except it's three
= 22522552 // We are not going for 4 this time, we stay in 3
- 00300330 // same here, we substract 3 from numbers that (num % 3 == 2)
= 22222222
```

The final code is
```kt
fun findMinimizedSumOfDivision(operationsLimitation: Int, nums: IntArray) {
    var operationsLeft = operationsLimitation
    var currentSubValue = 1
    var doneOperation: Boolean
    while (operationsLeft > 0) {
        doneOperation = false
        for ((i, num) in nums.withIndex()) {
            if (num >= 3) {
               if (num % 3 == currentSubValue - 1) {
                    doneOperation = true
                    var sub = currentSubValue
                    while (operationsLeft > 0 && sub > 0) {
                        operationsLeft--
                        nums[i] -= 1
                        sub--
                    }
                }
            }
            if (operationsLeft == 0) return
        }
        if (currentSubValue == 3 && !doneOperation) break
        if (currentSubValue != 3) currentSubValue++
    }

}
```

(Please take it easy on me lol I'm bad at DSA)


# Final Code
```kt
class Solution {

    fun strongPasswordChecker(password: String): Int {
        var operations = 0
        var lower = 0
        var upper = 0
        var digits = 0

        val repeating = IntArray(password.length)

        var currentCheckIndex = 0
        while (currentCheckIndex < password.length) {
            val targetCheckIndex = currentCheckIndex // For later repeating check use
            val targetChar = password[currentCheckIndex]

            while (currentCheckIndex < password.length && password[currentCheckIndex] == targetChar) {
                repeating[targetCheckIndex]++
                currentCheckIndex++
            }
        }
        println("Repeating: ${repeating.joinToString(", ")}")
        for (targetChar in password) {
            if (targetChar.isUpperCase()) upper+= 1
            if (targetChar.isLowerCase()) lower+= 1
            if (targetChar.isDigit()) digits += 1
        }
        val charTypeRequirementMetCount = lower.coerceAtMost(1) + upper.coerceAtMost(1) + digits.coerceAtMost(1)
        val missingRequirements = 3 - charTypeRequirementMetCount

        if (password.length <= 3) { // If length is less than 3, it will be able to fix the missing requirements no matter what
            return 6 - password.length
        } else if (password.length < 6) { // If the length is 4, 5, or 6, it will be maximum value of insertion count and missing requirements count
            // We don't need to worry about repeating chars since we can easily fix it by inserting char in a different location
            val insertionCount = 6 - password.length
            return maxOf(insertionCount, missingRequirements)
        } else {
            println("Lowercase: $lower")
            println("Uppercase: $upper")
            println("Digits: $digits")

            var extraLength = password.length - 20

            if (extraLength > 0) {
                findMinimizedSumOfDivision(extraLength, repeating)
                operations += extraLength
            }

            println("After operation: " + repeating.joinToString(", "))

            // After reducing the length, we want to now replace all the repeating stuff.
            // Replaced "random char amount" will be stored inside a variable (For later use)
            var modifiedCharAmount = 0
            for ((index, i) in repeating.withIndex()) {
                if (i >= 3) {
                    operations += i / 3
                    modifiedCharAmount += i / 3
                    println("Modified ${i / 3} char(s) to eliminate repeating chars")
                }
            }

            // At this point, "repeating" is trashed as it's in-accurate, and we don't need it in our last bit of code

            // Now we use the "random char amount" to decide if we have to do extra patch for char type requirements
            // If we don't need those (AKA we added enough random chars that will just fit those requirements), we ignore them
            // Otherwise, we add (requirements - random char amount) to operations count

            println("We are missing $missingRequirements requirements ($operations)")
            if (modifiedCharAmount < missingRequirements) {
                operations += (missingRequirements - modifiedCharAmount)
            }

        }

        return operations
    }


    //   63927897
    // - 11100010
    //   52827887
    // - 00002002
    //   52825885
    // - 30303333
    // - 22522552
    // - 00300330
=
    fun findMinimizedSumOfDivision(operationsLimitation: Int, nums: IntArray) {
        var operationsLeft = operationsLimitation
        var currentSubValue = 1
        var doneOperation: Boolean
        while (operationsLeft > 0) {
            doneOperation = false
            for ((i, num) in nums.withIndex()) {
                if (num >= 3) {
                   if (num % 3 == currentSubValue - 1) {
                        doneOperation = true
                        var sub = currentSubValue
                        while (operationsLeft > 0 && sub > 0) {
                            operationsLeft--
                            nums[i] -= 1
                            sub--
                        }
                    }
                }
                if (operationsLeft == 0) return
            }
            if (currentSubValue == 3 && !doneOperation) break
            if (currentSubValue != 3) currentSubValue++
        }

    }
}
```