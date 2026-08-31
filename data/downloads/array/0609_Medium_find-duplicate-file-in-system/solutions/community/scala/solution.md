# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/3629795/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/3629795/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findDuplicate(paths: Array[String]): List[List[String]] = {
      paths.toList
        .flatMap(parseDirectory)
        .groupBy(_._2)
        .view.mapValues(_.map(_._1))
        .values.filter(_.length > 1).toList
    }

    def parseDirectory(directory: String): Array[(String, String)] = {
      val parts = directory.split(" ")
      parts.tail.map(parseFile(_, parts.head))
    }

    def parseFile(fileInfo: String, dir: String): (String, String) = {
      val parts = fileInfo.split("\\\\(")
      val name = parts.head
      (s"$dir/$name", parts(1).dropRight(1))
    }
}
```