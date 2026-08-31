# Simple Java Solution with comments for understanding

**Author:** m0rnings8ar
**Votes:** 28
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1955290/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1955290/)

---

```
class Solution {
    public String digitSum(String s, int k) {
        while(s.length()>k){
            String ns=""; // replace the old string with updated one
            for(int i=0;i<s.length();i+=k){
                String t=s.substring(i,Math.min(i+k,s.length())); // form the string of k size
                int sum=0;
                for(int l=0;l<t.length();l++){ // to find the character sum of string t
                    sum+=t.charAt(l)-'0';
                }
                ns+="" + sum;    //update the string with sum of k size string character                 
            }
            s=ns; //update the old string with updated one
        }
        return s;
    }
}
```
Upvote if it's helpful