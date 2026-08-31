# 2 solutions: Using map + treeset, using merging procedure of merge-sort

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/1200402/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/1200402/)

---


```
dict = ["practice","makes","perfect","coding","makes"]
then, indicies map will contain
{coding=[3], practice=[0], perfect=[2], makes=[1, 4]}
```

```
class WordDistance(val dict: Array<String>) {
    val indices = HashMap<String, TreeSet<Int>>()
    
    fun shortest(word1: String, word2: String): Int {
        var ans = Int.MAX_VALUE
        val first = indices[word1]!!
        val second = indices[word2]!!
        for (i in first) {
            val ceil = second.ceiling(i)
            val floor = second.floor(i)
            if (ceil != null)
                ans = minOf(ans, ceil - i)
            if (floor != null)
                ans = minOf(ans, i - floor)
        }
        return ans
    }
    
    init {
        for ((i, w) in dict.withIndex()) {
            indices.computeIfAbsent(w) { TreeSet() }.add(i)
        }
    }
}
```

Better time complexity - 
```
import kotlin.math.abs

class WordDistance(val dict: Array<String>) {
    val indices = HashMap<String, ArrayList<Int>>()
    
    fun shortest(word1: String, word2: String): Int {
        var ans = Int.MAX_VALUE
        val first = indices[word1]!!
        val second = indices[word2]!!
        val (m, n) = first.size to second.size
        var (i, j) = 0 to 0
        while (i < m && j < n) { // merge procedure of merge sort
            ans = minOf(ans, abs(first[i] - second[j]))
            if (first[i] < second[j])
                i++
            else
                j++
        }
        return ans
    }
    
    init {
        for ((i, w) in dict.withIndex()) {
            indices.computeIfAbsent(w) { ArrayList() }.add(i)
        }
    }
}
```