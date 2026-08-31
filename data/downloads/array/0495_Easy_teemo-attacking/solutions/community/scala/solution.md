# simple and beat's 100 scala solution

**Author:** vermasuraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/5825032/](https://leetcode.com/problems/teemo-attacking/solutions/5825032/)

---

# Intuition
The problem requires calculating the total duration for which a character is poisoned given a series of time points and a fixed duration of poisoning. The key observation is that if the next poisoning time starts before the current poisoning duration ends, the durations overlap and should not be counted twice.

# Approach
1. Initialize `prev` and `cur` to the first element of `timeSeries` and `res` to 0.
2. Iterate through the `timeSeries` starting from the second element.
3. For each time point, check if the current poisoning duration ends before the next time point starts.
   - If it does, add the full duration to the result and update `prev` to the current time point.
   - Update `cur` to the current time point.
4. After the loop, add the duration of the last poisoning period to the result.

# Complexity
- Time complexity:  
  $$O(n)$$, where \\(n\\) is the length of `timeSeries`. We iterate through the array once.

- Space complexity:  
  $$O(1)$$, as we use a constant amount of extra space.

# Code
```scala
object Solution {
    def findPoisonedDuration(timeSeries: Array[Int], duration: Int): Int = {
        var prev = timeSeries(0)
        var cur = timeSeries(0)
        var res = 0
        for (i <- 1 until timeSeries.length) {
            if (cur + duration - 1 < timeSeries(i)) {
                res += cur - prev + duration
                prev = timeSeries(i)
            }
            cur = timeSeries(i)
        }
        res + cur - prev + duration
    }
}
```