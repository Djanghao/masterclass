# Simple Video Explanation with proof 🔥 || Focused on question description || Maths

**Author:** ayushnemmaniwar12
**Votes:** 20
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4636711/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4636711/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
    Draw the circle and dry run few scenarios.


# *Easy Video Explanation*

https://youtu.be/2TkWaGBKzTI




# Approach
<!-- Describe your approach to solving the problem. -->
The code calculates the score in a flower game given the number of flowers picked by two players. It multiplies the number of flowers each player picked, then divides the product by 2 to determine the score.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(1)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
    

# Code


```C++ []
class Solution {
public:
    long long flowerGame(int n, int m) {
        long long a=m;
        long long b=n;
        long long s=a*b;
        return s/2;
    }
};
```
```python []
class Solution:
    def flowerGame(self, n: int, m: int) -> int:
        a = m
        b = n
        s = a * b
        return s // 2

```
```Java []
class Solution {
    public long flowerGame(int n, int m) {
        long a = m;
        long b = n;
        long s = a * b;
        return s / 2;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00