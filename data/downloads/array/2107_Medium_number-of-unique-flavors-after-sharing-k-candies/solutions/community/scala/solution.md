# Scala sliding window

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/5260776/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/5260776/)

---

# Intuition
The problem requires identifying the maximum number of unique candy types that can be shared in a way that maximizes variety. Given that one window of size k can influence the count of candy types, a sliding window approach seems intuitive to track the frequency of candies and dynamically update the count of unique candy types.

# Approach
1. Initialization: Use a mutable map to count occurrences of candies from index k to the end of the array.
2. Initial Unique Count: Initialize the result (res) with the number of unique candy types in this initial window.
3. Sliding Window: Slide the window across the array starting from index k:
- Decrease the count of the current candy at the end of the window.
- Increase the count of the candy that comes into the window from the left.
- Remove any candy from the map if its count drops to zero.
- Update the result (res) to track the maximum number of unique candies encountered.
4. Return Result: Finally, return the maximum number of unique candy types.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
    def shareCandies(candies: Array[Int], k: Int): Int = {
        val d = scala.collection.mutable.Map[Int, Int]()
        
        // Initialize the dictionary with the candies from index k to the end
        for (i <- k until candies.length) {
            d(candies(i)) = d.getOrElse(candies(i), 0) + 1
        }
        
        var res = d.size
        
        // Sliding window
        for (j <- k until candies.length) {
            // Decrement the count for the current candy at index j
            d(candies(j)) = d(candies(j)) - 1
            // Increment the count for the candy k positions before the current one
            d(candies(j - k)) = d.getOrElse(candies(j - k), 0) + 1
            
            // Remove the candy from the dictionary if its count drops to zero
            if (d(candies(j)) == 0) {
                d.remove(candies(j))
            }
            
            // Update the result with the maximum size of unique candies
            res = math.max(res, d.size)
        }
        
        res
    }
}

```