# Sol in Kotlin

**Author:** Arista_agarwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/4808522/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/4808522/)

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
```
class Solution {
    fun minimumTeachings(n: Int, languages: Array<IntArray>, friendships: Array<IntArray>): Int {
        val userLanguages = languages.mapIndexed { index, langs -> index + 1 to langs.toSet() }.toMap()

        // Find users who need to be taught
        val usersToTeach = mutableSetOf<Int>()
        for ((u1, u2) in friendships) {
            if (userLanguages[u1]!!.intersect(userLanguages[u2]!!).isEmpty()) {
                usersToTeach.add(u1)
                usersToTeach.add(u2)
            }
        }

        // Count languages to find the most common one
        val languageFrequency = mutableMapOf<Int, Int>().withDefault { 0 }
        for (user in usersToTeach) {
            for (lang in userLanguages[user]!!) {
                languageFrequency[lang] = languageFrequency.getValue(lang) + 1
            }
        }

        // Find the most common language among users to teach
        val maxFrequency = languageFrequency.values.maxOrNull() ?: 0

        // Calculate the minimum number of users to teach
        return usersToTeach.size - maxFrequency
    }
}
```