# C++ two easy solutions | one liner mathematical and bruteforce dp  with explanation

**Author:** _levi_
**Votes:** 71
**Link:** [https://leetcode.com/problems/divisor-game/solutions/1663853/](https://leetcode.com/problems/divisor-game/solutions/1663853/)

---

First I'll explain using brute force dp.
let dp[n] be true if we can win from n , false if we will lose. 
Lets start with n and its alice's turn
Here we are only allowed to reduce n by a number x if 0<x<n and n%x==0 and after reduction we will have (n-x) as our new number and it'll be bobs turn , so we would like to end up with a number (n-x) such that bob will lose. 
which means dp(n-x) ==0
so if we can find any number x (where 0<x<n and n%x==0 ) for which (n-x) is a losing position we can always win from n using that number x.
here in this dp Im just checking all the possible values which satisfy our criteria and are losing position (which means dp for that position is false ) and updating the answer.
note- dp[1] is always a losing position as if we have 1 alice cant do anything about it and will lose.


```
bool divisorGame(int n) {
        int dp[n+1];
        memset(dp,0,sizeof(dp));
        for(int i=2;i<n+1;i++){
            for(int j=1;j<i;j++){
                if(i%j==0)dp[i] = dp[i] | !dp[i-j];  //(!dp[i-j] checks if i-j is a losing position)
            }
        }return dp[n];
    }
```
Runtime: 4 ms, faster than 21.55% of C++ online submissions for Divisor Game.

Next is the observation based mathematical solution-
Now, we know that the person who ends up with 1 on the chalkboard always loses which means we have to avoid getting a 1 in the end.
suppose we get an even number -
1) we can reduce 1 from it forcing an odd number on our opponent bob.
2) as we know odd numbers have odd divisors and (odd - odd) is even bob will always end up giving us an even number for our turn. 
3) we get an even again !! we can simply repeat step 2.... this will keep on going till we give bob the last odd number possible which is '1' !! thats it...we've forced a 1 on bob and won the game..
This proves that no matter what number...as long as its even we will always win , just by repeatedly subracting 1 from it. 
opposite of this we will end up losing if we have an odd number as then bob will play optimally and force us to have an odd number at every turn.

So we just need to check if the number is odd or even and output our answer.

```
bool divisorGame(int n) {
        return n % 2 == 0;
    }
```

Runtime: 0 ms, faster than 100% of C++ online submissions for Divisor Game.
There are many other ways to understand this solution but I think this one was enough. Still lemme know in the comments if you didnt understand and would like to hear another explanation for this method :))
Please **upvote** if u've read it so far and it helped you even a lil bit ! much appreciated :)