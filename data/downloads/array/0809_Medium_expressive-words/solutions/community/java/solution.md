# Interview-grade fully commented & readable solution for better understanding Java

**Author:** aniketsomwanshi
**Votes:** 12
**Link:** [https://leetcode.com/problems/expressive-words/solutions/1708608/](https://leetcode.com/problems/expressive-words/solutions/1708608/)

---

```
class Solution {
    // O(N*M) O(1) N = number of words, M = maxlength of each word
    public int expressiveWords(String s, String[] words) {
        int count = 0;
        for (String word: words) {
            if (isStretchy(word, s)) count++;
        }
        return count;
    }
    
    private boolean isStretchy(String word, String s) {
        int sIndex = 0;
        int wordIndex = 0;
        while (sIndex < s.length() && wordIndex < word.length()) {
            // get the group in word
            char wordLetter = word.charAt(wordIndex);
            // count number of wordLetters in this group
            int wordLetterCount = 0;
            while (wordIndex < word.length() && word.charAt(wordIndex) == wordLetter) {
                wordIndex++;
                wordLetterCount++;
            } 

            // get the group in s
            char sLetter = s.charAt(sIndex);
            // count number of sLetters in this group
            int sLetterCount = 0;
            while (sIndex < s.length() && s.charAt(sIndex) == sLetter) {
                sIndex++;
                sLetterCount++;
            }

            // compare the groups
            // if the letters don't match it's simply not possible
            if (wordLetter != sLetter) return false;
            // if count of letters in word is greater than those in s, 
            // then it's not possible, as we cannot delete letters from word
            if (wordLetterCount > sLetterCount) return false;
            // if the counts dont match and required count 
            // ie sLetter count is less than 3 then its' not possible as the 
            // stretched group should be of size 3 atleast
            if (wordLetterCount != sLetterCount && sLetterCount < 3) return false;
            // checking for this group is done, go for next group
        }
        // if we are here and we have reached the end of both s and word, it means it's stretchy
        if (sIndex == s.length() && wordIndex == word.length()) return true;
        else return false;
    }
}
```
*(If the letter do not match, we can disacard the word right away, although this solution is intented for understanding the approach)*
**Let me know if you could further improve the code quality for technical interviews**