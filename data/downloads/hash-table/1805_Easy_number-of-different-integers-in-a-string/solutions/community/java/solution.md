# [Java] - Set and regex - 100%

**Author:** elulcao
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1142964/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1142964/)

---

1. Replace all the non-numeric character with a single space.
2. Split the word by spaces and store it in a `String[]`
3. Ignore empty strings
4. Replace all `0` from the beginning, if any
5. Save the new word in the set
6. Return the set size

```java
class Solution {
    public int numDifferentIntegers(String word) {
        String[] arr = word.replaceAll("[a-zA-Z]", " ").split("\\\\s+");
        Set<String> set = new HashSet<String>();
            
        for (String str : arr) {
            if (!str.isEmpty())
                set.add(String.valueOf(str.replaceAll("^0*","")));
        }
                
        return set.size();
    }
}
```