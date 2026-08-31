# Scala | 2 Liner | 100%

**Author:** soumensaha
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/2168368/](https://leetcode.com/problems/search-suggestions-system/solutions/2168368/)

---

Somehow this simple solution makes 100% faster & 100% less memory

```
object Solution {
  def suggestedProducts(products: Array[String], searchWord: String): List[List[String]] = products.sorted match {
    case sorted => searchWord.scanLeft("")(_ + _).tail.map(word => sorted.filter(_ startsWith word).take(3).toList).toList
  }
}

//Runtime: 1527 ms, faster than 100.00% of Scala online submissions for Search Suggestions System.
//Memory Usage: 124.4 MB, less than 100.00% of Scala online submissions for Search Suggestions System.
```