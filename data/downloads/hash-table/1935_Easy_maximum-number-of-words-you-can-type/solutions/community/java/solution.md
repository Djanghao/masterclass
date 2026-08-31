# Java | String | Straightforward Solution

**Author:** Divyansh__26
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/2580360/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/2580360/)

---

```
class Solution {
    public int canBeTypedWords(String text, String brokenLetters) {
        String arr[] = text.split(" ");
        int count=0;
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<brokenLetters.length();j++){
                if(arr[i].contains(Character.toString(brokenLetters.charAt(j)))){
                    count++;
                    break;
                }
            }
        }
        return arr.length-count;
    }
}
```
Kindly upvote if you like the code.