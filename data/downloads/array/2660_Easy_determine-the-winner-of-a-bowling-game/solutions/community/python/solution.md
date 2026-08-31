# ✔💯 DAY 395 | EASY | 100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 💫

**Author:** ManojKumarPatnaik
**Votes:** 22
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3468269/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3468269/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
##### \u2022	We first initialize ans, s1, and  s2 to 0.  Ans will store the winner of the game, and  s1 and  s2 will store the total scores of players 1 and 2, respectively.
##### \u2022	We compute the total scores of players 1 and 2 by iterating over the elements of  p1 and  p2 and adding them to  s1 and  s2 , respectively.
##### \u2022	If the length of  p1   is greater than 1, we iterate over the elements of p1 and  p2 again, starting from the second element. For each element, we check if the previous element was a strike (score of 10) or a spare (sum of the previous two scores is 10). If either of these conditions is true, we add the current score to the total score of the corresponding player.
##### \u2022	We then compare the total scores of players 1 and 2. If they are equal, we set  ans  to 0, indicating a tie. If the total score of player 1 is greater than that of player 2, we set ans to 1, indicating that player 1 is the winner. Otherwise, we set  ans to 2, indicating that player 2 is the winner.
##### \u2022	We return  ans.
##### \u2022	The intuition behind this approach is that we can compute the total scores of players 1 and 2 by simply adding up the scores in their respective arrays. However, in the case of strikes and spares, the score of the current frame depends on the scores of the previous frames. Therefore, we need to iterate over the arrays again and adjust the scores accordingly. Once we have the total scores of both players, we can compare them to determine the winner of the game.



# Complexity
- Time complexity:o(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
    public int isWinner(int[] p1, int[] p2) {
        int ans=0,s1=0,s2=0;
        int n=p1.length;
       for(int i=0;i<n;i++){
               s1+=p1[i];
               s2+=p2[i];
           }
        if(n>1) {
            for(int i=1;i<n;i++){
                if(p1[i-1]==10 ||((i>=2) && p1[i-2]==10))s1+=p1[i];
                if(p2[i-1]==10 ||((i>=2)&& p2[i-2]==10))s2+=p2[i];
            }
        }
        if(s1==s2) ans= 0;
        else if(s1>s2) ans= 1;
        else ans= 2;
        return ans;
        
    }
```

```python []
def isWinner(p1: List[int], p2: List[int]) -> int:
    ans, s1, s2 = 0, 0, 0
    n = len(p1)
    for i in range(n):
        s1 += p1[i]
        s2 += p2[i]
    if n > 1:
        for i in range(1, n):
            if p1[i - 1] == 10 or ((i >= 2) and p1[i - 2] == 10):
                s1 += p1[i]
            if p2[i - 1] == 10 or ((i >= 2) and p2[i - 2] == 10):
                s2 += p2[i]
    if s1 == s2:
        ans = 0
    elif s1 > s2:
        ans = 1
    else:
        ans = 2
    return ans
```

```c++ []
int isWinner(vector<int>& p1, vector<int>& p2) {
    int ans = 0, s1 = 0, s2 = 0;
    int n = p1.size();
    for (int i = 0; i < n; i++) {
        s1 += p1[i];
        s2 += p2[i];
    }
    if (n > 1) {
        for (int i = 1; i < n; i++) {
            if (p1[i - 1] == 10 || ((i >= 2) && p1[i - 2] == 10)) {
                s1 += p1[i];
            }
            if (p2[i - 1] == 10 || ((i >= 2) && p2[i - 2] == 10)) {
                s2 += p2[i];
            }
        }
    }
    if (s1 == s2) {
        ans = 0;
    } else if (s1 > s2) {
        ans = 1;
    } else {
        ans = 2;
    }
    return ans;
}
```
# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99

![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A