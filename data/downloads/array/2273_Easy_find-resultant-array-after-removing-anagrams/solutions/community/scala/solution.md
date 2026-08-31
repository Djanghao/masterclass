# One Line with ScanLeft

**Author:** nellipudi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/5148935/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/5148935/)

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
object Solution {
    def removeAnagrams(words: Array[String]): List[String] = {
        words.zipWithIndex.tail.scanLeft((words(0), false))((acc,cur) => if(acc._1.sorted == cur._1.sorted) (cur._1, true) else (cur._1, false)).filterNot(_._2).toList.map(_._1)
    }
}
```