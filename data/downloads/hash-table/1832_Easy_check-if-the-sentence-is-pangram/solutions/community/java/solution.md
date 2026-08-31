# Java Simple and easy to understand solution, 1 ms, faster than 100.00%, clean code with comments

**Author:** satyaDcoder
**Votes:** 70
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/1164224/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/1164224/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**


```
class Solution {
    public boolean checkIfPangram(String sentence) {
        boolean[] letters  = new boolean[26];
        
        for(char c : sentence.toCharArray()) {
            letters[c - 'a'] = true;
        }
        
        //find any letter that not exist
        for(boolean existLetter : letters) {
            if(!existLetter) return false;
        }
        
        return true;
    }
}
```