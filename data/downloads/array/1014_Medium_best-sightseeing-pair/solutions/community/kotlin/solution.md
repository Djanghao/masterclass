# 🔥🚀 Kotlin/Java O(n) time & O(1) space easy solution

**Author:** Klemo1997
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/3195066/](https://leetcode.com/problems/best-sightseeing-pair/solutions/3195066/)

---

# Approach
The hint is to compute best first pairing for index i (at i > 0) at each run and then sum it up with current value, the maximum of these summaries is the answer.

So basically:

1. set current optimal to values[0]
2. at index i -> find out if it is more suitable to reuse previous currentOptimal (decremented, because it is 1 more index further) or to use previous value. This gives us optimal choice for first sigthseeing in pair. 
3. Then sum up currentOptimal + values[i]
4. If it is larger than max, assign to max
5. return max

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

```kotlin []
class Solution {
    fun maxScoreSightseeingPair(values: IntArray): Int {
        var max = Int.MIN_VALUE
        var currentOptimal = values[0]

        for (i in 1 until values.size) {
            currentOptimal = maxOf(currentOptimal-1, values[i-1]-1)
            max = maxOf(max, currentOptimal+values[i])
        }
        return max
    }
}
```
```java []
class Solution {
    public int maxScoreSightseeingPair(int[] values) {
        int n = values.length;
        int max = Integer.MIN_VALUE;
        int currentOptimal = values[0];

        for (int i = 1; i < n; i++) {
            currentOptimal = Math.max(currentOptimal-1, values[i-1]-1);
            max = Math.max(max, currentOptimal + values[i]);
        }

        return max;
    }
}
```