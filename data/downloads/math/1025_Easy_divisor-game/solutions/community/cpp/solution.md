# c++ dp 100% time complexity

**Author:** Izat_Khamiyev
**Votes:** 32
**Link:** [https://leetcode.com/problems/divisor-game/solutions/323884/](https://leetcode.com/problems/divisor-game/solutions/323884/)

---

Let's consider dynomic approach to solve this problem. Let ```dp[i]``` be true if Alice wins and false for the opposite case. Each ```i such that 1 <= i <= N``` is either winning or losing position for Alice. It's easy to see that if ```0 < x < i``` such that ```i % x == 0``` and if position ```i - x``` is winning position for Alice i.e. ```dp[i - x] == true```, then she can just subtract ```x``` from ```i``` and move to winning position, therefore for her ```i``` is also winning position. Now it's only left to consider all possible cases where Alice can win and return ```dp[N]```. 
```
class Solution {
public:
    bool divisorGame(int N) {
        bool dp[N+1];
        memset(dp, false, N+1);
        for(int i=2; i <= N; i++)
            for(int j = 1; j*j <= i;j++){
                if(i % j == 0 && !dp[i - j])
                    dp[i] = true;
            }
        
        return dp[N];
    }
};
```