# 100% Java & C# Easy Math solution with O(1) Time and Space

**Author:** venendroid
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5508761/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5508761/)

---

# Intuition
Using Math we can solve this.

# Approach
1. To get 115 we need always 4 coins of 10 & 1 coin of 75 are required. 
2. Thats means we need to know how many times Alice & Bob can play with 10's and 75's.
3. Whatever minimum is the turns we can use to find the winner.
4. Since Alice starts the game,  always odd turn winner & Bob is even turn winner.

# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)

# C# Code
```
public class Solution {
    public string LosingPlayer(int x, int y) 
    {
        //Always 4 coins of 10 required. 
        // It will be d times we can use 10 to win
       var d = y / 4; 

       //Find number of turns: we can always use x times of 75 
       //to get 115 but we need to see what is min.
       var t = Math.Min(x, d); 
       
       //If even then Bob will win, Odd then Alice 
       //as Alice starts the game 
       return t % 2 == 0?"Bob" :"Alice"; 
    }
}
```
# Java Code
```
public class Solution {
    public string LosingPlayer(int x, int y) 
    {
       //Always 4 coins of 10 required. 
       // It will be d times we can use 10 to win
       var d = y / 4; 

       //Find number of turns: we can always use x times of 75 
       //to get 115 but we need to see what is min.
       var t = Math.min(x, d); 
       
       //If even then Bob will win, Odd then Alice 
       //as Alice starts the game 
       return t % 2 == 0?"Bob" :"Alice"; 
    }
}
```
Please vote up if you like the solution.