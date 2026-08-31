# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/3685209/](https://leetcode.com/problems/implement-magic-dictionary/solutions/3685209/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MagicDictionary() {
      val dict = scala.collection.mutable.Set[String]()

      // Time complexity: O(n)
      def buildDict(dictionary: Array[String]) = dict ++= dictionary

      // Time complexity: O(m * 25 * n)
      def search(searchWord: String): Boolean =
        searchWord
          .indices
          .flatMap(i => ('a' to 'z').filter(_ != searchWord(i)).map(searchWord.updated(i, _)))
          .exists(dict.contains) 
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
```