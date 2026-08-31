# Solution in JAVA and KOTLIN using a counting array (no sorting) - beats 100%

**Author:** anlk
**Votes:** 2
**Link:** [https://leetcode.com/problems/h-index/solutions/6003962/](https://leetcode.com/problems/h-index/solutions/6003962/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
The goal is to find the maximum h-index such that the researcher has published at least h papers that each have at least h citations. 

We can optimize the search by leveraging the citation counts directly rather than sorting.

# Approach
- Use a counting array to track the number of papers that have a specific number of citations.
- Iterate through the citations, populating this count array.
- Traverse the count array from the back to determine the h-index by checking the cumulative count of papers with at least i citations.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```kotlin []
class Solution {
    fun hIndex(citations: IntArray): Int {
        val n = citations.size
        val count = IntArray(n + 1)
        for (citation in citations) {
            if (citation >= n) count[n]++ else count[citation]++
        }

        var total = 0
        for (i in n downTo 0) {
            total += count[i]
            if (total >= i) return i
        }
        return 0
    }
}
```

```java []
public class Solution {
    public int hIndex(int[] citations) {
        int n = citations.length;
        int[] count = new int[n + 1];
        for (int citation : citations) {
            if (citation >= n) {
                count[n]++;
            } else {
                count[citation]++;
            }
        }

        int total = 0;
        for (int i = n; i >= 0; i--) {
            total += count[i];
            if (total >= i) {
                return i;
            }
        }   
        return 0;
    }
}
```