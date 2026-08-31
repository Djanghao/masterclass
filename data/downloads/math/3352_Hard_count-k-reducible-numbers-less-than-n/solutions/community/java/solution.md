# java | dp | Memoization | simple recursion

**Author:** d2s2
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6029119/](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6029119/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
You can try all possible combination and for each string you can count how many one are persent and then check if that number is reducible or not. 

there will be two case while trying all the combination.
let's say string is s = "1010011";
1. to change any bit 0 to 1. there should be a prior bit 1 which has been flipped to zero. otherwise the resultant number will be bigger.
2. you can change bit 1 to 0 without any restriction.

keep the counter of one.

Now see the code you will be able to understand. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*n*k)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n*n)$$

# Code
```java []
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    long [][][] dp;
    int mod = (int)1e9+7;
    int k;
    public int countKReducibleNumbers(String s, int k) {
        this.k = k;
        char [] a = s.toCharArray();
        int n= a.length;
        dp = new long[2][n+1][n+1];
        for (int i = 0; i <=n; i++) {
            Arrays.fill(dp[0][i], -1);
            Arrays.fill(dp[1][i], -1);

        }
        int cntOfOne=0;
        for(char c : a){
            if(c=='1')cntOfOne++;
        }
        return (int)((solve(a,0,0,0)-isReducible(cntOfOne)+mod)%mod);
    }
    
    // to check if the number n can be reduced within k steps.
    int isReducible(int n){
        if(n==0)return 0;
        int cnt =1; //cnt =1, because n is the number of bit of the number that will be formed from the string.
                    // e.g 10011 count will be three but original number is 19. so one operation is already performed. that's why cnt = 1;
        while (n>1){
            cnt++;
            n = Integer.bitCount(n);
        }
        return cnt<=k?1:0;
    }

    
    long solve(char [] a ,int i,int cnt,int taken){
        if(i==a.length){
            return isReducible(cnt);
        }
        if(dp[taken][i][cnt]!=-1) return dp[taken][i][cnt];
        long ans=0;
        
        // taken = 1 represent that one of the bit is flipped from one to zero.
        // taken = 0 represent that no change has been done yet.
        if(taken==0){
            if(a[i]=='1'){
                ans+=solve(a,i+1,cnt+1,0); // take the bit as it is
                ans+=solve(a,i+1,cnt,1); // change it to zero. and mark the one bit has been flipped by setting taken =1.
            }else{
                ans+=solve(a,i+1,cnt,0); // you can't change.
            }
        }else{
            if(a[i]=='1') {
                ans += solve(a, i + 1, cnt + 1, 1); // take it as it is
            }else{
                ans+=solve(a,i+1,cnt+1,taken); // change 0 to 1.
            }
            ans+=solve(a,i+1,cnt,taken); // change it 0
        }
        return dp[taken][i][cnt] = ans%mod;
    }
}
```