# Kotlin code || Sorting || Freq

**Author:** girl_coder_s
**Votes:** 1
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5192289/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5192289/)

---



# Code
```
class Solution {
    fun mostVisitedPattern(username: Array<String>, timestamp: IntArray, website: Array<String>): List<String> {
        // Step 1: Combine and sort data
        val visits = username.indices.map { Triple(username[it], website[it], timestamp[it]) }
        val sortedVisits = visits.sortedBy { it.third }

        // Step 2: Group by user
        val userVisits = sortedVisits.groupBy { it.first }
            .mapValues { entry -> entry.value.map { it.second } }

        // Step 3: Generate patterns and count
        val patternCount = mutableMapOf<List<String>, MutableSet<String>>()

        for ((user, sites) in userVisits) {
            if (sites.size < 3) continue
            val patterns = mutableSetOf<List<String>>()
            for (i in 0 until sites.size - 2) {
                for (j in i + 1 until sites.size - 1) {
                    for (k in j + 1 until sites.size) {
                        val pattern = listOf(sites[i], sites[j], sites[k])
                        patterns.add(pattern)
                    }
                }
            }
            for (pattern in patterns) {
                patternCount.computeIfAbsent(pattern) { mutableSetOf() }.add(user)
            }
        }

        // Step 4: Find the most frequent pattern
        var maxPattern: List<String>? = null
        var maxCount = 0

        for ((pattern, users) in patternCount) {
            if (users.size > maxCount || (users.size == maxCount && (maxPattern == null || pattern.lexicographicalCompareTo(maxPattern) < 0))) {
                maxPattern = pattern
                maxCount = users.size
            }
        }

        return maxPattern ?: listOf()
    }

    private fun List<String>.lexicographicalCompareTo(other: List<String>): Int {
        val minSize = minOf(this.size, other.size)
        for (i in 0 until minSize) {
            val cmp = this[i].compareTo(other[i])
            if (cmp != 0) return cmp
        }
        return this.size.compareTo(other.size)
    }
}
```