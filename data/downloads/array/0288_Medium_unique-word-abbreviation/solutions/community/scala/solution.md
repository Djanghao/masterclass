# Functional Solution, time: O(1) space: O(n)

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/4375226/](https://leetcode.com/problems/unique-word-abbreviation/solutions/4375226/)

---

```
class ValidWordAbbr(_dictionary: Array[String]) {

    private val cache: Map[String, Set[String]] = {
        _dictionary.foldLeft(Map.empty[String, Set[String]]){case(cum, word) =>
            val abbreviated = abbreviate(word)
            cum + (abbreviated -> (cum.getOrElse(abbreviated, Set.empty) + word))
        }
    }

    private def abbreviate(word: String): String = {
        if(word.length <= 2) return word
        else s"${word(0)}${word.length - 2}${word(word.length - 1)}"
    }

    def isUnique(word: String): Boolean = {
        cache.get(abbreviate(word)) match {
            case None => true
            case Some(uniques) => uniques.size == 1 && uniques.contains(word)
        }
    }

}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
```