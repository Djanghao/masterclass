# JAVA | Prefix sum | Explained ✅

**Author:** sourin_bruh
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143881/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143881/)

---

---
# Please Upvote \uD83D\uDE07
---
``` java []
// We will say a word satisfies us if its first and last character are vowels
class Solution {
    public int[] vowelStrings(String[] words, int[][] queries) {
        int n = words.length;
        // we will create a prefix sum array whose index i will tell us 
        // how many words satisfy us from index 0 till index i
        int[] pref = new int[n];    
        // if the first word itself saitisfy us, we will put 1 in index 0
        // which means till index 0 we have 1 satisfactory string
        String s = words[0];
        if (isVowel(s.charAt(0)) && isVowel(s.charAt(s.length() - 1))) {
            pref[0] = 1;
        }
        // start iterating from index 1
        for (int i = 1; i < n; i++) {
            s = words[i];
            // if current word is satisfactory
            if (isVowel(s.charAt(0)) && isVowel(s.charAt(s.length() - 1))) {
                // number of satisfactory words increases by 1 at current index
                pref[i] = 1 + pref[i-1];
            } else {    // otherwise it remains the same
                pref[i] = pref[i-1];
            }
        }

        // create answer array
        int[] ans = new int[queries.length];    
        for (int i = 0; i < queries.length; i++) {
            int l = queries[i][0];  // get left bound
            int r = queries[i][1];  // get right bound
            // our words in range l to r (inclusive) is the
            // difference of satisfactory words till index `r` and index l-1
            // why `l-1` and not `l`? because `l` is inclusive
            // in case l is 0, means we want from index 0 itself till 'r' 
            // so its directly pref[r]
            ans[i] = pref[r] - ((l == 0)? 0 : pref[l-1]);            
        }

        return ans;     // return the answer array
    }

    // method to tell is passed in character is a vowel or not
    private boolean isVowel(char c) {
        return Set.of('a', 'e', 'i', 'o', 'u').contains(c);
    }
}
```
--- 
#### Clean solution:
``` java []
class Solution {
    public int[] vowelStrings(String[] words, int[][] queries) {
        int n = words.length;
        int[] pref = new int[n];
        String s = words[0];
        if (isVowel(s.charAt(0)) && isVowel(s.charAt(s.length() - 1))) {
            pref[0] = 1;
        }

        for (int i = 1; i < n; i++) {
            s = words[i];
            boolean b = isVowel(s.charAt(0)) && isVowel(s.charAt(s.length() - 1));
            pref[i] = pref[i-1] + (b? 1 : 0);
        }
        
        int[] ans = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int l = queries[i][0];
            int r = queries[i][1];
            ans[i] = pref[r] - ((l == 0)? 0 : pref[l-1]);            
        }

        return ans;
    }

    private boolean isVowel(char c) {
        return Set.of('a', 'e', 'i', 'o', 'u').contains(c);
    }
}
```
--- 
Let $$n$$ and $$k$$ be the length of the arrays `words` and `queries` respectively.
##### Time complexity: $$O(n + k)$$
##### Space complexity: $$O(n + k)$$
