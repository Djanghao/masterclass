# First submission for Scala

**Author:** Annmoll
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5592937/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5592937/)

---

# Intuition
I solved this in Java first using HashMap and basic 2D Arrays. This is more of an extension to my Java logic. 

# Approach
```
Function winningPlayerCount(n, pick):
    Initialize res to 0
    Create a 2D array 'players' with dimensions n x 11, initialized to 0
    Create an array 'seen' of size n, initialized to False

    For each element 'p' in 'pick':
        Increment players[p[0]][p[1]] by 1
        If players[p[0]][p[1]] > p[0] and seen[p[0]] is False:
            Increment res by 1
            Set seen[p[0]] to True

    Return res

```

# Complexity
```
- Time complexity:
O(n+m)

- Space complexity:
O(n)

Here, 
n is the number of players, and 
m is the number of picks.
```


# Code
```
object Solution {
    def winningPlayerCount(n: Int, pick: Array[Array[Int]]): Int = {
        var res: Int = 0
        val players = Array.ofDim[Int](n, 11)
        val seen = new Array[Boolean](n)
        for (p <- pick) {
            if({players(p(0))(p(1)) += 1; players(p(0))(p(1))} > p(0) && !seen(p(0))){
                res += 1
                seen(p(0)) = true
            }
        }
        return res
    }
}
```