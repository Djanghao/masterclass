# ✅Simple Solution || Multiple Approach | Beats 100.00% || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 6
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/5331709/](https://leetcode.com/problems/valid-perfect-square/solutions/5331709/)

---

# Intuition
Iterate through all integers starting from 0, squaring each one until the square is greater than or equal to num.

# Approach
- Initialize a **counter**.
- Iterate until the square of i is greater than or equal to num.
- Check if the square of **i** equals **num**.

# Complexity
- Time complexity: **O(Sqrt(N))**
- Space complexity: **O(1)**


```Java []
class Solution {
    public boolean isPerfectSquare(int num) {
        long i = 0;
        for (; i * i < num; i++);
        return num == i * i;
    }
}
```
```C++ []
class Solution {
public:
    bool isPerfectSquare(int num) {
        long i = 0;
        for (; i * i < num; i++);
        return num == i * i;  
    }
};
```
```C# []
public class Solution {
    public bool IsPerfectSquare(int num) {
        long i = 0;
        for (; i * i < num; i++);
        return num == i * i;
    }
}
```

# Alternate Approach
```Java []
class Solution {
    public boolean isPerfectSquare(int num) {
        if(num == 1) return true;
        for (long i = num / 2; i > 0; i--)
            if((i * i) == num) return true;
        return false;
    }
}
```
```C++ []
class Solution {
public:
    bool isPerfectSquare(int num) {
        if(num == 1) return true;
        for (long i = num / 2; i > 0; i--)
            if((i * i) == num) return true;
        return false;
    }
};
```
```C# []
public class Solution {
    public bool IsPerfectSquare(int num) {
        if(num == 1) return true;
        for (long i = num / 2; i > 0; i--)
            if((i * i) == num) return true;
        return false;
    }
}
```


![image.png](./images/0.png)
