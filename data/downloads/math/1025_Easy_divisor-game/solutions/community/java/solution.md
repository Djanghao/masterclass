# Java all approach - Easy, Recursive, Memoization, DP

**Author:** vinsinin
**Votes:** 63
**Link:** [https://leetcode.com/problems/divisor-game/solutions/979796/](https://leetcode.com/problems/divisor-game/solutions/979796/)

---

**Algorithm**
*  This problem is easy but little tricky to understand. I have tried my best to explain it in easy way.
*  From the problem, Alice has options to choose for a number from `1 to N` and she has to choose to optimize her winning. In same way Bob will also try to win for herself.
*  Consider if the number is `2`, Alice starts with `1` and she wins
*  for `3`, Alice chooses `1`,  Bob again chooses `1` and alice looses
*  Consider Number `4`
```
4 = Alice -> (4-1) - gives 3 to Bob
3 = Bob -> (3-1) -  gives 2 to Alice
2 - Alice -> (2-1) - gives 1 to Bob
```
*  Now Bob cannot choose anything and he looses
*  like this if we try for each and every number, we will get a pattern that if we know that the N is odd, then alice is loosing, if N is even alice is winning.
*  Simple solution to this problem is to return `N % 2 == 0`

**O(1) Solution**
```
class Solution {
   public boolean divisorGame(int N) {
       return N % 2 == 0;
   }
}
```

* This problem can be solved by recursion as well.
* Base condition is if `N==1` and `N==2` in these two cases we return `false` and `true`
* Alice and Bob has the choice to pick for a number upto `N`, So we do a for loop from `1 to N`
* Each person will play optimally and look for the win, so the condition to win is if `N % i == 0`
* Then the other person will be given an option with the number that is left behind


**O(N) - Top Down Recursive Solution**
```
class Solution {
   public boolean divisorGame(int N) {

        if (N==1) return false;
        if (N==2) return true;
       
        for (int i=1;i<=N;i++){
            if (N%i == 0)
                return !(divisorGame(N-i));
       }
        return false;
  }
}
```

* With the recursion we tend to re compute the sub problem again and again. 
* So introduding cache will help to cache already computed values
* Also we can iterate from `1 to sqrt(N)`. for example for `N=16` the only optimal factors to choose from will be
```
1x16 = 16
2x8 = 16
4x4 = 16
```

**O(N) - Recursive with Memoization**
```
  class Solution {
   public boolean divisorGame(int N) {           

        boolean[] cache = new boolean[N+1];
        if (N== 1){
            cache[1] = false;
            return false;
        }
       
        if (N== 2){
            cache[2] = true;
            return true;
        }
       
        for (int i=1;i*i<=N;i++){
            if (N % i == 0){
                cache[i] = !(divisorGame(N-i));
                return cache[i];
            }
        }
        return false;
    }   
 }
 ```
 
 **Bottom up Approach**
*  We can also solve this problem using bottom up, dp approach
*  Store a `dp` boolean array upto `N+1`
*  Have `i` loop for the choices of `N from 1`
*  Have `j` to loop for the choices of number choosen by each player
*  If any one winning then store the current value `dp[i]` with the previous computed value `! dp[i-j]`
*  finally return `dp[N]`

```
   class Solution {
     public boolean divisorGame(int N) {           
   
       boolean[] dp = new boolean[N+1];
       for(int i=1;i<=N;i++)
        {
            if(i==1) dp[i]=false;
            else if(i==2) dp[i]=true;
            else{
                for(int j=1;j*j<=i;j++)
                {
                    if(i%j==0)
                    {
                       dp[i] = !dp[i-j];
                        break;
                    }
                }    
            }  
        }
        return dp[N];
    }
}
```
