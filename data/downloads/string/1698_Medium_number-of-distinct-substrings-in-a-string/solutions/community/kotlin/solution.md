# Kotlin with Trie

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/4835783/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/4835783/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Tire data structure because prefix of word
This question is very similar to 386. Lexicographical Numbers
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countDistinct(s: String): Int {
        val root = Trie()
        var count = 0
        if( s == "") return 0

        s.forEachIndexed{i, c->
            var node = root
            for( j in i .. s.lastIndex){
                if(node.children[s[j]] == null ){
                    node.children[s[j]] = Trie()
                    count++
                }

                node = node.children[s[j]]!!
            }
        }

        return count
    }


}

class Trie{
    var children = HashMap<Char, Trie>()
}
```