# ~The Essence of Kotlin Solution~

**Author:** 930264909
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/5921155/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/5921155/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun reorderLogFiles(logs: Array<String>): Array<String> {
        val letters = mutableListOf<String>();
        val numbers = mutableListOf<String>();

        for (log in logs) {
            if(Character.isDigit(log.split(" ")[1][0])) {
                numbers.add(log);
            } else {
                letters.add(log);
            }
        }

        letters.sortWith(Comparator {
            s1: String, s2: String -> 
            val s1x = s1.split(" ", limit = 2)
            val s2x = s2.split(" ", limit = 2)

            val compared = s1x[1].compareTo(s2x[1])

            if(compared == 0) {
                s1x[0].compareTo(s2x[0])
            } else {
                compared
            }
        })

        letters.addAll(numbers);

        return letters.toTypedArray()
    }
}
```