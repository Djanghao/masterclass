# Kotin — O(n), 100% Time, 100% Space, Explanation provided

**Author:** Karn
**Votes:** 0
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/558353/](https://leetcode.com/problems/clumsy-factorial/solutions/558353/)

---

```kotlin
class Solution {
    fun clumsy(N: Int): Int {
        // Taking the example we have:
        // 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1, which becomes:
        // (10 * 9 / 8) + 7 - (6 * 5 / 4) + 3 - (2 * 1) when we
        // visualize the order of operations. Note here that the
        // negative values can be distributed into the groups to
        // further simplify the result. We then have:
        // (10 * 9 / 8) + 7 + ((-1)(6 * 5 / 4)) + 3 + ((-1)(2 * 1))
        // Which we can further simplify to:
        // (10 * 9 / 8) + 7 + (-6 * 5 / 4) + 3 + (-2 * 1). Note
        // That the first number is a special case, it is positive!
        // We can use this information to now construct an algorithm
        // that simply iterates through the values.
        
        // Define a variable to indicate what operation is to be
        // performed on our element.
        // We start at one because we are initializing our values
        // in a way that ignores the first item in our iterator.
        var op = 1
        
        // Create a variable to hold the final result.
        var total = 0
        // Create a variable to hold the value of the grouped
        // elements. I.e the value of the inner values of a
        // set of brackets.
        // We initialize this value to N because it is a special
        // case of our algorithm. In particular, when we distribute
        // the subtraction to the subsequent expression (which is
        // enclosed in brackets), the first number becomes negative.
        // More on that below.
        var runningTotal = N
        
        // Start iterating through the elements from N-1 to 1.
        for (element in (N-1) downTo 1) {
            when (op % 4) {
                0 -> {
                    // Set the running total to this element and prep
                    // it for subsequent operations.
                    runningTotal = (-1) * element
                }
                1 -> {
                    // Now that runningTotal has accounted for the
                    // first element in the grouped expression, we can
                    // multiply it with the second element
                    runningTotal *= element
                }
                2 -> {
                    // As above we apply the division operation using
                    // the third element in the grouped expression.
                    // At this point we also reset the runningTotal so
                    // as not to interfere with our exit case.
                    total += runningTotal / element
                    runningTotal = 0
                }
                3 -> {
                    // Handle the lone addition step
                    total += element
                }
            }
            
            // Don't forget to increment the counter
            op++
        }
        
        // Finally we combine the total and the running total to handle
        // any stragglers in the runningTotal counter.
        return total + runningTotal
    }
}
```