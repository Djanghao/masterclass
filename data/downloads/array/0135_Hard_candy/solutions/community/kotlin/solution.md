# Single loop, O(N) by time and by memory. Top 97%

**Author:** darktugrenok
**Votes:** 3
**Link:** [https://leetcode.com/problems/candy/solutions/4645520/](https://leetcode.com/problems/candy/solutions/4645520/)

---

# Intuition
This is a diffucult task by the first view. But! Let's try to use the Greedy approach: On the first round, each subsequent neighbor with a higher rating receives one more candy. If the rating is less than or equal to the current one, then just one candy. On the second round, we go in the opposite direction and make adjustments: if the neighbor to the left has a higher rating, then he should have one more candy than us, or as many as it was before (what if his neighbor to the left has a higher rating than us?).

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$
- Top 97%
![image.png](./images/0.png)

# Code # 1. Clear for understanding version.
```
fun candy(ratings: IntArray): Int {
    val candies = IntArray(ratings.size) { 1 }
    var index = 1
    while (index < ratings.size) {
        if (ratings[index] > ratings[index - 1]) {
            candies[index] = candies[index - 1] + 1
        }
        index++
    }
    index = ratings.size - 1
    while (index > 0) {
        if (ratings[index - 1] > ratings[index]) {
            candies[index - 1] = max(candies[index - 1], candies[index] + 1)
        }
        index--
    }
    return candies.sum()
}
```

# Code # 2. Ultime-optimazed version.
Comprese three loops in one. 
```
class Solution {
    fun candy(ratings: IntArray): Int {
        val candies = IntArray(ratings.size) { 1 }
        var index = 1
        var sum = ratings.size
        while (index < ratings.size) {
            if (ratings[index] > ratings[index - 1]) {
                val current = candies[index]
                candies[index] = max(current, candies[index - 1] + 1)
                sum = sum - current + candies[index]
            }
            val reverseIndex = ratings.size - index
            if (ratings[reverseIndex - 1] > ratings[reverseIndex]) {
                val current = candies[reverseIndex - 1]
                candies[reverseIndex - 1] = max(candies[reverseIndex - 1], candies[reverseIndex] + 1)
                sum = sum - current + candies[reverseIndex - 1]
            }
            index++
        }
        return sum
    }
}
```