# Java 1ms 100% - Clean & Efficient O(n) Solution (Faster Solution)

**Author:** talhashaikh1998
**Votes:** 9
**Link:** [https://leetcode.com/problems/goat-latin/solutions/1469434/](https://leetcode.com/problems/goat-latin/solutions/1469434/)

---

**Hit the UPVOTE! Thankyou <3**
```
class Solution {
    public String toGoatLatin(String sentence) {
        StringBuilder sb = new StringBuilder();
        String[] words = sentence.split(" ");
        int r = 1;
        for(String word : words){
            char ch = word.charAt(0);
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
                sb.append(word).append("ma").append("a".repeat(r++)).append(" ");
            else
                sb.append(word.substring(1,word.length())).append(word.charAt(0)).append("ma").append("a".repeat(r++)).append(" ");            
        }        
        return sb.toString().trim();
    }
}
```