# simple kotlin solution using HashSet

**Author:** nourmorgan01
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2757921/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2757921/)

---

```
fun repeatedCharacter(s: String): Char {
    val hash = HashSet<Char>()
    for (i in 0..s.length) {
        if (hash.contains(s[i])) {
            return s[i]
        }
        hash.add(s[i])
    }
    return ' '
}

```