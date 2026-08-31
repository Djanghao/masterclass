# DP Top-Down with TreeMap and one loop

**Author:** deniotokiari
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/4948978/](https://leetcode.com/problems/odd-even-jump/solutions/4948978/)

---

# Intuition
From description we could spot two hints. One is related to Dynamic Programming Top-Down approach (we know that last index is good) and other one about TreeMap (cell/floor for odd/even jumps).

# Approach
Use Top-Down DP approach to calculate the possibility of odd/even jumps with the help of TreeMap.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$ - TreeMap traversal + looping through the array

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - TreeMap with n elements + DP array

# Code
```
class Solution {
    fun oddEvenJumps(arr: IntArray): Int {
        var result = 1
        // first for odd, second for even
        val dp = Array<Pair<Boolean, Boolean>>(arr.size) { false to false }
        val map = TreeMap<Int, Int>()

        // we know that last index is good index from description
        dp[arr.size - 1] = true to true
        // put the last value and index to tree map, so after we can get jum index
        map[arr[arr.size - 1]] = arr.size - 1

        for (i in (arr.size - 2) downTo 0) {
            // for odd step we should get arr[j] >= arr[i] and arr[j] is smallest
            val nextOddIndex = map.ceilingEntry(arr[i])?.value ?: -1
            // for even step we should get arr[j] <= arr[i] and arr[j] is largest
            val nextEvenIndex = map.floorEntry(arr[i])?.value ?: -1

            if (nextOddIndex != -1) {
                dp[i] = dp[i].copy(first = dp[nextOddIndex].second)
            }

            if (nextEvenIndex != -1) {
                dp[i] = dp[i].copy(second = dp[nextEvenIndex].first)
            }

            if (dp[i].first) {
                result++
            }

            map[arr[i]] = i
        }

        return result
    }
}
```