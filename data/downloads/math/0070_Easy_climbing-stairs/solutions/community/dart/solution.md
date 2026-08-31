# Dart simple solution Fibonacci

**Author:** Mahmoud_Zakaria
**Votes:** 7
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/2846485/](https://leetcode.com/problems/climbing-stairs/solutions/2846485/)

---

If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```
class Solution { //it's a fibonacci.
  int climbStairs(int n) {
      int a = 1, b = 1;
    while (n-->0)
        a = (b += a) - a;
    return a;
  }
}
```




Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)