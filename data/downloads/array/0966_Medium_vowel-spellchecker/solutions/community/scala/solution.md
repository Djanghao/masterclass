# 7 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/5152708/](https://leetcode.com/problems/vowel-spellchecker/solutions/5152708/)

---

```scala
object Solution {
  def spellchecker(wordlist: Array[String], queries: Array[String]): Array[String] =
    val vowels = Set('a', 'e', 'i', 'o', 'u')
    def f(s:String): String = s.map{c => if (vowels.contains(c.toLower)) '.' else c.toLower}
    lazy val map0 = wordlist.map(s => s->s).toMap
    lazy val map1 = wordlist.reverse.map(s => s.toLowerCase -> s).toMap
    lazy val map2 = wordlist.reverse.map{s => f(s) -> s }.to(Map)
    queries.map{q => map0.get(q).orElse(map1.get(q.toLowerCase)).orElse(map2.get(f(q))).getOrElse("")}
}
```