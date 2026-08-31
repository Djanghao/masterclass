# scala one line solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2649601/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2649601/)

---

```

  def longestContinuousSubstring(s: String): Int =
    scala.util.Try(
	(s.toList.map(_ - '0') zip s.toList.map(_ - '0' - 1).drop(1)).map(n => if(n._1 == n._2) 1 else 0)
	.mkString.split("0").map(_.size).max)
	.getOrElse(0) + 1

```