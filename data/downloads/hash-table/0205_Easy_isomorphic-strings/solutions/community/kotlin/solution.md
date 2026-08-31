# Kotlin In One Line.

**Author:** CityZouitel
**Votes:** 10
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/2816745/](https://leetcode.com/problems/isomorphic-strings/solutions/2816745/)

---

```kotlin
val isIsomorphic: (String, String) -> Boolean = { s, t ->
    s.zip(t).toSet().size.run { equals(s.toSet().size) && equals(t.toSet().size) }
}
```