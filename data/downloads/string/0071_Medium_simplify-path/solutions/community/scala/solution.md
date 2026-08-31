# scala easy solution

**Author:** lyk4411
**Votes:** 2
**Link:** [https://leetcode.com/problems/simplify-path/solutions/3406773/](https://leetcode.com/problems/simplify-path/solutions/3406773/)

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
    def simplifyPath(path: String): String = 
        path.split("/+").foldLeft(List[String]())((acc, cur) => cur match {
            case ".." => acc.drop(1)
            case "." | "" => acc
            case _ => cur +: acc
        }).reverse.mkString("/", "/", "")
```

or

```
object Solution {
    def simplifyPath(path: String): String = 
        path.split("/+").foldLeft(List[String]())((acc, cur) => cur match {
            case ".." => scala.util.Try(acc.tail).getOrElse(List[String]())
            case "." | "" => acc
            case _ => cur +: acc
        }).reverse.mkString("/", "/", "")
}
```