# Easy || Well Explained || Beginner Friendly

**Author:** bipsig
**Votes:** 5
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/4869991/](https://leetcode.com/problems/bulb-switcher/solutions/4869991/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When I looked at the problem, I thought about how bulbs get switched on and off. I figured out that if a bulb has 'm' factors, it gets toggled 'm' times. Then I connected this idea to perfect squares, realizing that only they have an odd number of factors because factors come in pairs. This simple fact helped me see that if 'n' is a perfect square, it's the answer. To find how many perfect squares are there up to 'n', I just used the square root function. This straightforward approach combined basic math with problem-solving to crack the question.

# Approach
<!-- Describe your approach to solving the problem. -->
If we consider all the bulbs are initially turned on.

Example: 
        - **Round 1**: Multiples of 1 are toggled. Hence every bulb is toggled and turned on (CONDITION SATISFIED)
        - **Round 2**: Multiples of 2 are toggled.
        - **Round 3**: Multiples of 3 are toggled.
        - **...**
        - **...**
        - **...**
        - **Round n**: Multiples of n are toggled which will only be the last bulb. (CONDITION SATISFIED)

Thus any bulb (say x) shall be toggled 'm' number of times if it has 'm' factors.
    WHY? Think yourself


We considered all bulbs to be off initially. SO if a bulb is toggled even number of times, then the bulb remains off
    Or else the bulb turns on.

If one has done basic mathematics, only perfect squares can have even number of factors 
    WHY?
    Because all number is formed by multiplying two numbers. Hence factors exist in pairs.
    But perfect squares have one such pair which have same value. Hence number of factors remain odd.


So, for the solution we need the number of perfect squares upto n.
    Which can be found using the sqrt function.
    If n is a perfect square, it is the answer. 
    If not, the last perfect square which occured, its sqrt is the answer which can be found using the floor function.

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var bulbSwitch = function(n) {
    return Math.floor (Math.sqrt (n));
};

```

```cpp []
class Solution {
public:
    int bulbSwitch(int n) {
        return sqrt (n);
    }
};
```

```python []
class Solution(object):
    def bulbSwitch(self, n):
        return (int)(floor(sqrt (n)))
```

```java []
class Solution {
    public int bulbSwitch(int n) {
        return (int)(Math.floor (Math.sqrt (n)));
    }
}
```

```typescript []
function bulbSwitch(n: number): number {
    return Math.floor (Math.sqrt (n));
};
```
``` csharp []
public class Solution {
    public int BulbSwitch(int n) {
        return (int)(Math.Floor (Math.Sqrt (n)));
    }
}
```

```c []
int bulbSwitch(int n) {
    return floor (sqrt (n));
}
```