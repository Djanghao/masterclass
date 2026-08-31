# [Scala] Using range and map

**Author:** shu_sh
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4723903/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4723903/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def isWinner(player1: Array[Int], player2: Array[Int]): Int = {
        
        def getPlayerScore(nums: Array[Int]): Int = {
            (0 until nums.length).map{ i =>
                if(i == 0) nums(i)
                else if(nums(i-1) == 10 || ( i > 1 && nums(i-2) == 10)) nums(i)*2
                else nums(i)
            }.sum
        }

        val playerOneScore = getPlayerScore(player1)
        val playerTwoScore = getPlayerScore(player2)

        if(playerOneScore > playerTwoScore) 1
        else if(playerTwoScore > playerOneScore) 2
        else 0


    }
}
```