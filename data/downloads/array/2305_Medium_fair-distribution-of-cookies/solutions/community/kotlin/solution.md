# Binary Search with Knapsack

**Author:** aamir16001
**Votes:** 0
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3705802/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3705802/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The answer will lie between 0 and cookies.sum().
So we perform binary search between 0 and cookies.sum().

For each mid element, check whether all possible cookies can be distributed to everyone under the threshold.

# Approach
<!-- Describe your approach to solving the problem. -->
Binary search to find mid.
Then use that mid as max, and try to assign everyone cookies using Knapsack approach. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(k **n^2** log(n))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n^2)

# Code
```

class Solution {
  fun distributeCookies(cookies: IntArray, k: Int): Int {
    cookies.sortDescending()

    val visited = IntArray(cookies.size) { 0 }
    fun cleanVisited() {
      for (i in visited.indices) {
        visited[i] = 0
      }
    }

    fun checkAllVisited(): Boolean {
      for (i in visited.indices) {
        if (visited[i] == 0) return false
      }
      return true
    }

    fun findChosenNumbers(numbers: List<Int>, target: Int): List<Int> {
      val n = numbers.size
      val dp = Array(n + 1) { IntArray(target + 1) }

      for (i in 1..n) {
        val currentItem = numbers[i - 1]
        for (j in 1..target) {
          if (currentItem > j) {
            dp[i][j] = dp[i - 1][j]
          } else {
            val includeValue = currentItem + dp[i - 1][j - currentItem]
            val excludeValue = dp[i - 1][j]
            dp[i][j] = maxOf(includeValue, excludeValue)
          }
        }
      }

      val chosenNumbers = mutableListOf<Int>()
      var remaining = target
      for (i in n downTo 1) {
        if (dp[i][remaining] != dp[i - 1][remaining]) {
          chosenNumbers.add(numbers[i - 1])
          remaining -= numbers[i - 1]
        }
      }

      return chosenNumbers
    }

    fun checkValidity(max: Int): Boolean {
      cleanVisited()
      for (i in 0 until k) {
        val newList = cookies.zip(visited) { a, b -> if (b == 1) -1 else a }.filter { it != -1 }
//        println("List ${newList.serializeOrNull()} ${cookies.zip(visited) { a, b -> if (b == 1) -1 else a }.serializeOrNull()}")
        val chosenNumbers = findChosenNumbers(newList, max)
//        println("Chosen Numbers ${chosenNumbers.serializeOrNull()}")
        for (i in chosenNumbers) {
          for (j in cookies.indices) {
            if (i == cookies[j] && visited[j] == 0) {
              visited[j] = 1
              break
            }
          }
        }
//        println("$max ${visited.serializeOrNull()}")
      }
      return checkAllVisited()
    }

    var low = cookies[cookies.size - 1]
    var high = cookies.sum()
    var result = low

    while (low <= high) {

      var mid = low + (high - low) / 2
//      println("$low $mid $high $result")

//      println("Validity $mid ${checkValidity(mid)}")
      if (checkValidity(mid)) {
        result = mid
        high = mid - 1
      } else low = mid + 1
    }
//    println("$low $result $high $result")


    return result
  }
}
```