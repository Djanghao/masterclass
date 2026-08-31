# Similar to 292. Nim Game | Explained

**Author:** Student2091
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-game/solutions/1911806/](https://leetcode.com/problems/sum-game/solutions/1911806/)

---

With some observation, we can transform this question into [292. Nim Game](https://leetcode.com/problems/nim-game/) which is an easy level question. 

**Observation**
- We only care about the difference of `?` and sum between Bob and Alice.

- One player can always move so that their move + other player's move sum up to **exactly** 9.
- If there are **odd** difference of `?` between them, then Alice will win because she goes first, she can mess it up and always keep the 9 per two moves.
- If there are **even** difference of `?`, then Bob and Alice both can make sure each two moves get 9. Bob can **only** win if getting 9 per two moves happens to balance it out.

```Java
class Solution {
    public boolean sumGame(String num) {
        int q = 0, d = 0, n = num.length();
        for (int i = 0; i < n; i++){
            if (num.charAt(i) == '?'){
                q += 2* i < n? 1 : -1;
            }else{
                d += (2 * i < n? 1 : -1) * (num.charAt(i) - '0');
            }
        }
        return (q & 1) > 0 || q * 9 + 2 * d != 0;
    }
}
```