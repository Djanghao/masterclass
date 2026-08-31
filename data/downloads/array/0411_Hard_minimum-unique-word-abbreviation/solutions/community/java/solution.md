# AC Slow (1500 ms) but Simple Java Brute-force Solution with Explanation

**Author:** thaicurry
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/707744/](https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/707744/)

---

1. Prune away words of a different length
2. Prune away words with no overlap at all (but add their length to your set of taken abbreviations)

Generate the abbreviations by mapping them to numbers 0 to Math.pow(2, len).
0 ==> Don't take the character at that point
Add all the generated abbreviations into your taken set.

At this point, you will notice that only generated abbreviates with the same prefix as in the target can cause collisions,
so you might thing of a Trie, but ignore that impulse :)

Generate all the appreviations of your target word.
If they are smaller than your previously stored smallest abbreviation, replace it.

Here again, you might wonder if you can optimise your search but ignore that impulse too :)

Feel good about an AC solution and then try DP and/or Trie in your next approach. Or refactor out the logic into their own methods.
(Or read other people's solutions at this point!)

```
class Solution {
    public String minAbbreviation(String target, String[] dictionary) {
        Set<String> set = new HashSet<>();
        String output = null;

        for (String word: dictionary) {
            int len = word.length();
            if (len != target.length()) {
                continue;
            }
            boolean noMatch = true;
            for (int i = 0; i < len; i++) {
                if (target.charAt(i) == word.charAt(i)) {
                    noMatch = false;
                    break;
                }
            }
            
            if (noMatch) {
                set.add(String.valueOf(len));
                continue;
            }
            
            int n = 1 << len;
            
            for (int i = 0; i < n; i++) {
                StringBuilder sb = new StringBuilder();
                int mask = 1 << (len - 1);
                int count = 0;
                int charPos = 0;
                while (mask > 0) {
                    if ( (mask & i) > 0) {
                        if (count != 0) {
                            sb.append(count);
                            count = 0;
                        }
                        sb.append(word.charAt(charPos));
                    } else {
                        count++;
                    }
                    charPos++;
                    mask = mask >> 1;
                }
                
                if (count != 0) {
                    sb.append(count);
                }
                
                set.add(sb.toString());
            }
        }
        
        int len = target.length();
        int n = 1 << len;
        int minSoFar = len + 1;
            
        for (int i = 0; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            int mask = 1 << (len - 1);
            int count = 0;
            int charPos = 0;
                        
            while (mask > 0) {
                if ( (mask & i) > 0) {
                    if (count != 0) {
                        sb.append(count);
                        count = 0;
                    }
                    sb.append(target.charAt(charPos));
                } else {
                    count++;
                }
                charPos++;
                mask = mask >> 1;
            }
            
            if (count != 0) {
                sb.append(count);
            }
            
            int abbLen = 0;
            for (int j = 0; j < sb.length(); j++) {
                if (Character.isDigit(sb.charAt(j))) {
                    abbLen++;
                    while (j + 1 < sb.length() && Character.isDigit(sb.charAt(j + 1))) {
                        j++;
                    }
                } else {
                    abbLen++;
                }
            }
            
                    
            if (output == null || abbLen < minSoFar) {
                String sbWord = sb.toString();
                if (!set.contains(sbWord)) {
                    output = sbWord;
                    minSoFar = abbLen;
                }
            }
        }
        
        return output;        
    }
}
```