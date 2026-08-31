# Simple and Concise || 100% Fast

**Author:** sam02202001
**Votes:** 46
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2984535/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2984535/)

---

**PLEASE UPVOTE IF YOU FIND MY APPROACH HELPFUL, MEANS A LOT \uD83D\uDE0A**
# Code
```
class Solution {
    public int countDigits(int num) {
        int answer = 0;
        int n = num;
        while(n>0){
            if(num % (n%10) == 0) answer++;
            n/=10;
        }
        return answer;
    }
}
```