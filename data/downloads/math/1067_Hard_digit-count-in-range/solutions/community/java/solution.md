# Java | Digit DP with explanation | 2ms | O(Log(N))

**Author:** Rinka006
**Votes:** 2
**Link:** [https://leetcode.com/problems/digit-count-in-range/solutions/2446123/](https://leetcode.com/problems/digit-count-in-range/solutions/2446123/)

---

```
class Solution {
    char[] s;
    int[][] memo;
    int target;
    public int digitsCount(int d, int low, int high) {
        this.target=d;
        return helper(high)-helper(low-1);
    }

    private int helper(int n) {
        s=Integer.toString(n).toCharArray();
        int m=s.length;
        memo = new int[m][m];
        for (int[] ints : memo) {
            Arrays.fill(ints,-1);
        }
        return dp(0,0,true,false);
    }

    // i: current digit index
    // mask: the number of times "target" occurs before this move.
    // isLimit: if the before digit is restricted by the "high num"
    // isNum: is false if the before digits are all zero.
    public int dp(int i, int mask, boolean isLimit, boolean isNum){
        if (i==s.length)    return mask;
        if(!isLimit&&isNum&&memo[i][mask]!=-1)  return memo[i][mask];

        int res=0;
        int up=isLimit?s[i]-'0':9; // the biggest digit we can iterate in this loop.(depends on the isLimit)
        if(!isNum)  res=dp(i+1,mask,false,false);// skip filling this digit
        for (int d = isNum?0:1; d <=up; d++) {
            res+=dp(i+1,mask+(d==target?1:0),isLimit&&d==up,true);
        }
        if(!isLimit&&isNum) memo[i][mask]=res;
        return res;
    }
}
```