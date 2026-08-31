# [scala] - permutations, recursive merge, minBy

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3837451/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3837451/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {

  def minimumString(a: String, b: String, c: String): String =
    List(a, b, c).permutations.map(go(_, List.empty)).minBy(s => (s.length, s))

  def go(strings: List[String], acc: List[Char]): String =
    strings match {
      case Nil => acc.mkString
      case string :: tail =>
        def merge(check: List[Char], checked: List[Char]): List[Char] =
          if(string.startsWith(check)) checked.reverse ::: string.toList
          else merge(check.tail, check.head :: checked)

        if (acc.containsSlice(string)) go(tail, acc) else go(tail, merge(acc, List.empty))
    }
}
```

foldLeft instead of recursion:
```
object Solution {

  def minimumString(a: String, b: String, c: String): String =
    List(a, b, c).permutations.map(merge(_).mkString).minBy(s => (s.length, s))

  def merge(strings: List[String]): List[Char] =
    strings.foldLeft(List.empty[Char]) { (acc, string) =>
      if (acc.containsSlice(string)) acc else superpose(string, acc, List.empty)
    }

  def superpose(string: String, check: List[Char], checked: List[Char]): List[Char] =
    if (string.startsWith(check)) checked.reverse ::: string.toList
    else superpose(string, check.tail, check.head :: checked)
}
```

Also, see tangj1905's version with `reduce` below
