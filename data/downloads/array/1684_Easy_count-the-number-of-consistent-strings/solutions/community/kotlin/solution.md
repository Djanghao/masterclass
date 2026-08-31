# [Java / Kotlin / Python] Set

**Author:** chenon
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/972559/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/972559/)

---

A string is `consistent` if all characters in the string appear in the string allowed.

# Explanations to a child
Strings "aaab" and "baa" are consistent to the allowed string "ab" since they only contain characters 'a' and 'b'.
We don't need to look at the occurrences of chars.
A string is not consistent if at least one char is not in the string allowed. The search of a char in a string is linear O(n), find a way to make the search constant O(1).
Let's transform the `allowed` into a Set or array. The array of size is 26 because all chars are lowercase English letters.
Personally I prefer a Set over array, Set works for all cases.


**Java**

```
class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
        Set<Character> allowedSet = new HashSet<>();
        for(int i=0;i<allowed.length();i++){
            allowedSet.add(allowed.charAt(i));
        }
        
        int count = 0;
        for(String word: words){
            if(isConsistent(allowedSet, word)) count++;
        }
        
        return count;
    }
    
    boolean isConsistent(Set<Character> allowedSet, String word){
        for (int i = 0; i < word.length(); i++){
            if(!allowedSet.contains(word.charAt(i))) return false;   
        }
        return true;
    }
}
```

**Kotlin**

```
class Solution {
    
    fun countConsistentStrings(allowed: String, words: Array<String>): Int {
        val allowedSet = mutableSetOf<Char>()
        for (c in allowed) {
            allowedSet.add(c)
        }
        
        var count = 0
        for (word in words) {
            if (isConsistent(allowedSet, word)) {
                count++
            }

        }
        return count
    }

    private fun isConsistent(allowedSet: Set<Char>, word: String): Boolean {
        for (w in word) {
            if (!allowedSet.contains(w)) {
                return false
            }
        }
        return true
    }

}
```

**Python**
```
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        allowed_set = set(allowed)
        count = 0
        for word in words:
            if all(c in allowed_set for c in word):
                count+= 1
        return count
```