# C Sharpxxxxxxxxxx Assthatic.Solution

**Author:** paul__
**Votes:** 4
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/5537472/](https://leetcode.com/problems/destroying-asteroids/solutions/5537472/)

---

# Intuition
   I dont know,my friend said!
# Approach
  initially i was fu$ked ^[p]; when see this problem;
  To slove this problem.... we need to visit Google search and type LeetCode and Login to it.....
Ater loging search for Problem No : 2126....
and go to "SOLUTIONS" and select "C#" or "C Sharp"
now Search for "C Sharpxxxxxxxxxx Assthatic.Solution"
Just realised that is a recursion
HURRAY! you just passed the BASE CONDITION 
THE FINAL STEP IS "just scroll down your mouse"


# Complexity
- Time complexity: 
  O(n log n) + O(n)

- Space complexity:
  O(n)

# Code
```
// "H+E+R+E I+S T+H+E F+U+C+K+I+G S+0+L:
public class Solution {
    public bool AsteroidsDestroyed(int mass, int[] asteroids) {
        Array.Sort(asteroids);
        long new_mass = mass;
        foreach(int ass in asteroids)
        {
            if(ass <= new_mass)
               new_mass += ass;
            else
               return false;
        }
        return true;
    }
}
```