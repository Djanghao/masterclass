# JAVA | CLEAR EXPLANATION | DP

**Author:** dani_danielsOO
**Votes:** 28
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/979653/](https://leetcode.com/problems/last-stone-weight-ii/solutions/979653/)

---






**What the question says**-"We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose any two rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the smallest possible weight of this stone (the weight is 0 if there are no stones left.)"

 **What it actually means** - "Divide the array into two arrays such that the difference between the sums of the two individual arrays is the minimum"

Now,
Our best case scenario would be the case:
1>where all elements are same(so we can use the condition 1 in the question (x==y)) and everything cancels out and the answer is simply zero)
2>Difference of the sum of two individual arrays is equal to 0.

**So our best case answer is 0**

*So  , now we will try to reach as close a possible to our best case answer and try to find the array whose sum is totalSum/2(where totalSum is the sum of all array elements).*

**One more thing  -
Lets say S is the sum of all array elements
S2 is our nearest sum to S/2 that we can find ,
then , our answer would be S-2*S2(why?)
Well because ,S-S2 is simply the sum of the other array , but we need to find the difference between the two individual  arrays.
In other words :
S=S1+S2
We need to find S1-S2
Therefore we return S-S2-S2, which is nothing but S-2*S2 because S-S2 gives us S1 , and hence again subtracting gives us S1-S2.**

The rest of the logic is pretty simple.
We use DP to find this S2(standard stuff).

**dp[i][j] = can sum 'i' be found by using 0 - j-1th elements ?**

```
class Solution {
    public int lastStoneWeightII(int[] stones) {
        int S=0;
        for(int i: stones)
            S+=i;
        int S2=0;
        int n=stones.length;
        //maximise S2
        boolean[][] dp = new boolean[S/2 +1][n+1];
        for(int i=0;i<=n;i++)
            dp[0][i]=true;
        //zero sum is always possible(just dont take any element in the array)
        
        for(int i=1;i<=n;i++)
        {
            for(int s=1;s<=S/2;s++)
            {
                if(dp[s][i-1] || (s>=stones[i-1] &&dp[s-stones[i-1]][i-1]))
                {
                    dp[s][i]=true;
                    S2=Math.max(s,S2);
                }
                
            }
        }
        return S-2*S2;
        
    }
}
```

Hope you understood the logic.