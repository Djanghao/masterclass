# JAVA || beats 100% ||  💯 || Simple ||

**Author:** gowtham491
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/2595859/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/2595859/)

---

```
class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        int count=1;
        int sum=0;
        for(char i:s.toCharArray()){
            if((sum+widths[i-'a'])<=100)sum+=widths[i-'a'];
            else {
                sum=widths[i-'a'];
                count++;
            }
        }
        return new int[]{count,sum};
    }
}
Please upvote if you like the solution \uD83D\uDE4F 
