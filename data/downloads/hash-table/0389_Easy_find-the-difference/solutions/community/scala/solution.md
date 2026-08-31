# Scala. Bit manipulation

**Author:** sobik
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/1724171/](https://leetcode.com/problems/find-the-difference/solutions/1724171/)

---

```

    def findTheDifference(s: String, t: String): Char = {
        (s.toCharArray ++ t.toCharArray).foldLeft(0)(_^_).toChar
    }
	
```