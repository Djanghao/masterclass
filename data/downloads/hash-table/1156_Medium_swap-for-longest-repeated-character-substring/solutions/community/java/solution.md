# Simple Java Solution similar to 424 Using Sliding Window

**Author:** xinlong_
**Votes:** 8
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/357714/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/357714/)

---

LeetCode 424
```
class Solution {
    public int characterReplacement(String s, int k) {
        int len = s.length();
        int[] count = new int[26];
        int start = 0, maxCount = 0, maxLength = 0;
        for (int end = 0; end < len; end++) {
            maxCount = Math.max(maxCount, ++count[s.charAt(end) - 'A']);
            while (end - start + 1 - maxCount > k) {
                count[s.charAt(start) - 'A']--;
                start++;
                maxCount = 0;
                for(int i = 0; i < 26; i++){
                    if(maxCount < count[i]){
                        maxCount = count[i];
                    }
                }
            }
            maxLength = Math.max(maxLength, end - start + 1);
        }
        return maxLength;
    }
}
```


LeetCode 1156
In this case, just set k=1.
```
class Solution {
    public int maxRepOpt1(String s) {
        int len = s.length();
        int[] count = new int[26];
        
        int[] newCount = new int[26];
        for(char c:s.toCharArray()) newCount[c-'a']++;
        
        int start = 0, maxCount = 0, maxLength = 0;
        for (int end = 0; end < len; end++) {
            maxCount = Math.max(maxCount, ++count[s.charAt(end) - 'a']);
            while (end - start + 1 - maxCount > 1 || end - start + 1>newCount[s.charAt(start)-'a']) {
                count[s.charAt(start) - 'a']--;
                start++;
                // maxCount = Math.max(count[s.charAt(end)-'a'],count[s.charAt(start)-'a']);
                maxCount=0;
                for(int i = 0; i < 26; i++){
                    if(maxCount < count[i]){
                        maxCount = count[i];
                    }
                }
            }
            maxLength = Math.max(maxLength, end - start + 1);
        }
        return maxLength;
    
    }
}
```