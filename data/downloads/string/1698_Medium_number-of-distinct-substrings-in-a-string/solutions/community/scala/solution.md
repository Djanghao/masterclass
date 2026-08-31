# Trie solution

**Author:** adorable_http
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/2923090/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/2923090/)

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
object Solution {
   def countDistinct(s: String): Int = {
    class TrieNode {
      val children = new Array[TrieNode](26)
    }

    val root = new TrieNode
    var res = 0

    for(i <- s.indices){
      var curr = root
      for(j <- i until s.length){
        if(curr.children(s(j) - 'a') == null) {
          curr.children(s(j) - 'a') = new TrieNode
          res += 1
        }
        curr = curr.children(s(j) - 'a')
      }
    }
   res
  }
}
```