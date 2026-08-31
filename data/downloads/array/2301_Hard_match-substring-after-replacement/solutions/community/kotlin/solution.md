# [Java] Optimized Brute Force [Kotlin] 4 lines

**Author:** grantapher
**Votes:** 1
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/2189409/](https://leetcode.com/problems/match-substring-after-replacement/solutions/2189409/)

---

### Algorithm

We create a `List<Set<Char>>` to use as a replacement for our `sub` string and then brute force the rest of the approach.

* Create a map of the original characters to its possible replacements. (`O(M)` time and space)
* Create a list that contains the sets of allowed characters for each index of `sub`. (`O(S)` time and `O(M * S)` space)
* For each possible start index: (`O(N`) time and `O(1)` space)
  * check that the chars starting at the index all have a match to the matchSets. (`O(S)` time and `O(1)` space)

### Complexity

 * `N` is the length of `str`
 * `S` is the length of `sub`
 * `M` is the size of `mappings`

Time complexity: `O(N * S + M)`

Space complexity: `O(S * M)`

### Kotlin

```kotlin
class Solution {
    fun matchReplacement(str: String, sub: String, mappings: Array<CharArray>): Boolean {
        val charMapping = mappings.groupBy({ it[0] }, { it[1] })
        val matchSets = sub.map { charMapping[it].orEmpty().toSet() + it }
        return (0..str.length - sub.length).any { start ->
            (0 until matchSets.size).all { str[it + start] in matchSets[it] } 
        }
    }
}
```

### Java
```java
class Solution {
    public boolean matchReplacement(String str, String sub, char[][] mappings) {
        final Map<Character, Set<Character>> charMappings = new HashMap<>();
        for (char[] pair : mappings) {
            charMappings.computeIfAbsent(pair[0], HashSet::new).add(pair[1]);
        }
        
        final List<Set<Character>> matchSets = new ArrayList<>();
        for (char c : sub.toCharArray()) {
            final Set<Character> set = new HashSet<>();
            set.add(c);
            charMappings.getOrDefault(c, Collections.emptySet()).forEach(set::add);
            matchSets.add(set);
        }
        
        for (int i = 0; i <= str.length() - sub.length(); i++) {
            if (matchAt(str, i, matchSets)) {
                return true;
            }
        }
        
        return false;
    }
    
    private boolean matchAt(String str, int start, List<Set<Character>> matchSets) {
        for (int i = 0; i < matchSets.size(); i++) {
            if (!matchSets.get(i).contains(str.charAt(start + i))) {
                return false;
            }
        }
        return true;
    }
}
```