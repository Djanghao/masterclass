# JS, Python, Java, C++ | Easy Logarithm & Modulo Solutions w/ Explanation

**Author:** sgallivan
**Votes:** 30
**Link:** [https://leetcode.com/problems/power-of-three/solutions/1178718/](https://leetcode.com/problems/power-of-three/solutions/1178718/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The naive approach here would be to simply iterate through dividing **n** by **3** to see if we ultimately get to **1**. But if we want to accomplish this solution _without_ iteration or recursion, we'll have to get creative.

**Approach 1: Logarithms -**
We can take advantage of the natural mathematical properties of **logarithms** to find our solution. If **n** is a power of **3**, then **3^x = n**. This can be rewritten as **log3 n = x**, where **x** will be an integer if **n** is a power of **3**.

Since most programming languages can't natively do **log3** calculations, we can take advantage of another property of logarithms: **log3 n** can be rewritten as **log n / log 3**. This will produce a slight amount of floating point error, but any value that is within a close margin (**1e-10**) while **n** is constrained to an **int** will be a correct.

**Approach 2: Modulo -**
Since **3** is a prime number, any power of **3** will only be divisible by any power of **3** that is equal or smaller. We can use this to our advantage by taking the largest possible power of **3** within our constraints (**3^19**) and performing a **modulo** **n** operation on it. If the result is a **0**, then **n** is a power of **3**.

---

#### ***Javascript Code:***

##### ***w/ Logarithms:***
```javascript
var isPowerOfThree = function(n) {
    let a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10
};
```
##### ***w/ Modulo:***
```javascript
var isPowerOfThree = function(n) {
    return n > 0 && 1162261467 % n === 0
};
```

---

#### ***Python Code:***

##### ***w/ Logarithms:***
```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n < 1: return False
        ans = log(n, 3)
        return abs(ans - round(ans)) < 1e-10
```

##### ***w/ Modulo:***
```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        return n > 0 and 1162261467 % n == 0
```

---

#### ***Java Code:***

##### ***w/ Logarithms:***
```java
class Solution {
    public boolean isPowerOfThree(int n) {
        double a = Math.log(n) / Math.log(3);
        return Math.abs(a - Math.round(a)) < 1e-10;
    }
}
```
##### ***w/ Modulo:***
```java
class Solution {
    public boolean isPowerOfThree(int n) {
        return n > 0 && 1162261467 % n == 0;
    }
}
```

---

#### ***C++ Code:***

##### ***w/ Logarithms:***
```c++
class Solution {
public:
    bool isPowerOfThree(int n) {
        double a = log(n) / log(3);
        return abs(a - round(a)) < 1e-10;
    }
};
```
##### ***w/ Modulo:***
```c++
class Solution {
public:
    bool isPowerOfThree(int n) {
        return n > 0 && 1162261467 % n == 0;
    }
};
```