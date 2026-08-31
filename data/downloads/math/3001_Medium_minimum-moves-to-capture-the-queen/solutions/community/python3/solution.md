# Easy Video Explanation with Visuals and Observations 🔥 || Maths ✅

**Author:** ayushnemmaniwar12
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4521349/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4521349/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Know the functionality and try few cases on pen and paper. You will get various approaches

## ***Easy Video Explanation***

https://youtu.be/meXhyoAZx-M





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
    int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
         if(a == e || b == f) {
            if(a == e && a == c && ((d-b) * (d-f) < 0)) return 2;
            if(b == f && b == d && ((c-a) * (c-e) < 0)) return 2;
            return 1;
        }
        if(abs(c - e) == abs(d - f)) {
            if(abs(c - a) == abs(d - b) && ((b-f) * (b-d) < 0))  return 2;
                return 1;
        }
        return 2;
    }
};
```
```python []
class Solution:
    def minMovesToCaptureTheQueen(self, a, b, c, d, e, f):
        if a == e or b == f:
            if a == e and a == c and (d - b) * (d - f) < 0:
                return 2
            if b == f and b == d and (c - a) * (c - e) < 0:
                return 2
            return 1
        if abs(c - e) == abs(d - f):
            if abs(c - a) == abs(d - b) and (b - f) * (b - d) < 0:
                return 2
            return 1
        return 2

```
```Java []
class Solution {
    public int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
        if (a == e || b == f) {
            if (a == e && a == c && ((d - b) * (d - f) < 0)) return 2;
            if (b == f && b == d && ((c - a) * (c - e) < 0)) return 2;
            return 1;
        }
        if (Math.abs(c - e) == Math.abs(d - f)) {
            if (Math.abs(c - a) == Math.abs(d - b) && ((b - f) * (b - d) < 0)) return 2;
            return 1;
        }
        return 2;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00