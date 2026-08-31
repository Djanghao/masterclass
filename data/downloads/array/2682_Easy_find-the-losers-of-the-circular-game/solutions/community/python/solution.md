# ✅[Python] Simple and Clean, beats 99.99%✅

**Author:** _Tanmay
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3535150/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3535150/)

---

### Please upvote if you find this helpful. \u270C
<img src="https://assets.leetcode.com/users/images/b8e25620-d320-420a-ae09-94c7453bd033_1678818986.7001078.jpeg" alt="Cute Robot - Stable diffusion" width="200"/>

*This is an NFT*


# Intuition
The problem asks us to find the losers of a circular game played by n friends sitting in a circle. The game involves passing a ball between friends according to certain rules. The losers of the game are friends who did not receive the ball in the entire game. Our first thought might be to simulate the game and keep track of the friends who have received the ball.

# Approach
1. We can use an array `visited` of size n to keep track of the friends who have received the ball. We initialize all elements of `visited` to 0.
2. We then use a while loop to simulate the game. In each iteration of the loop, we calculate the next friend to receive the ball using the formula `pos = (pos+(count*k))%n` where `pos` is the current friend holding the ball, `count` is the turn number, and `k` is the number of steps to move in the clockwise direction.
3. We increment `visited[pos]` by 1 to indicate that this friend has received the ball. If `visited[pos]` becomes 2, it means that this friend has received the ball for the second time and the game is finished.
4. After simulating the game, we can iterate over `visited` and add all friends who have not received the ball to a list `res`. We then return `res` which contains the losers of the game.

# Complexity
- Time complexity: $$O(n)$$ where n is the number of friends. This is because we need to simulate n turns of the game and each turn takes constant time.
- Space complexity: $$O(n)$$ since we use an array of size n to keep track of the friends who have received the ball.

# Code
```
class Solution:
    def circularGameLosers(self, n: int, k: int) -> List[int]:
        visited = [0] * n
        count = 1
        pos = 0
        visited[pos] = 1
        while (visited[pos]!=2):
            pos = (pos+(count*k))%n
            visited[pos]+=1
            count+=1
        res = []
        for i in range(n):
            if not visited[i]:
                res.append(i+1)
        return res
```