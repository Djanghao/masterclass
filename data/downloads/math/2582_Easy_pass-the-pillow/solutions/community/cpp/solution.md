# 💯✅🔥Detailed,Easy Java ,Python3 ,C++ Solution|| 0 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 41
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5424657/](https://leetcode.com/problems/pass-the-pillow/solutions/5424657/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The code is solving the "Pass the Pillow" problem, where a pillow is passed around a circle of n people. The pillow starts at person 1 and moves in a specific pattern:

1. It moves to the next person (person 2) in the first second.
1. It moves to the previous person (person 1) in the second second.
1. It moves to the next person (person 3) in the third second.
1. It moves to the previous person (person 2) in the fourth second.
1. And so on, alternating between moving to the next and previous person.
The goal is to find the person holding the pillow at a given time t.

---
# Approach
<!-- Describe your approach to solving the problem. -->
The approach used in the code is based on the observation that the pattern repeats every (n * 2 - 2) seconds. This is because the pillow moves between the first and last person in (n - 1) seconds, and then it moves back to the first person in the next (n - 1) seconds, completing one cycle.

The code calculates the person holding the pillow at time t by following these steps:
- Calculate the number of complete cycles that have passed by dividing t by (n * 2 - 2).
- Calculate the remaining time within the current cycle by taking the modulus of t with (n * 2 - 2).
- Determine the direction of movement (forward or backward) based on the remaining time.
- Calculate the person holding the pillow by subtracting the absolute value of (n - 1 - remaining time) from n.

---
# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
---
- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
---
# Step-by-Step Explanation

1. The code receives the input values:
   - n = 4 (the number of people in the circle)
   - time = 5 (the time at which we want to find the person holding the pillow)

2. The code calculates the number of complete cycles that have passed:
   - n * 2 - 2 = 4 * 2 - 2 = 6 (the number of seconds in one complete cycle)
   - 5 / 6 = 0 (the number of complete cycles that have passed)

3. The code calculates the remaining time within the current cycle:
   - 5 % 6 = 5 (the remaining time within the current cycle)

4. The code determines the direction of movement based on the remaining time:
   - If the remaining time is less than (n - 1), the pillow moves forward.
   - If the remaining time is greater than or equal to (n - 1), the pillow moves backward.
   - In this case, 5 < 3 (n - 1), so the pillow moves forward.

5. The code calculates the person holding the pillow:
   - n - Math.abs(n - 1 - time % (n * 2 - 2))
   - n = 4
   - Math.abs(n - 1 - time % (n * 2 - 2)) = Math.abs(4 - 1 - 5 % 6) = Math.abs(3 - 5) = Math.abs(-2) = 2
   - 4 - 2 = 2

Therefore, at time=5, the person holding the pillow is person 2.

## Explanation of the Formula

The formula used in the code is:
```java
n - Math.abs(n - 1 - time % (n * 2 - 2))
```

Let's break it down:

1. `n * 2 - 2` calculates the number of seconds in one complete cycle.

2. `time % (n * 2 - 2)` calculates the remaining time within the current cycle.

3. `n - 1` represents the number of seconds it takes for the pillow to move from the first person to the last person.

4. `Math.abs(n - 1 - time % (n * 2 - 2))` calculates the absolute difference between the remaining time and the time it takes for the pillow to move from the first person to the last person. This determines the position of the pillow within the current cycle.

5. Finally, `n - Math.abs(n - 1 - time % (n * 2 - 2))` calculates the person holding the pillow by subtracting the absolute difference from n. This works because the pillow starts at person 1 and moves in a circular pattern.

---

# Code
```java []
class Solution {
    public int passThePillow(int n, int time) {
        return n-Math.abs(n-1-time%(n*2-2));
    }
}
```
```python3 []
class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        return n - abs(n - 1 - time % (n * 2 - 2));
```
```C++ []
class Solution {
public:
    int passThePillow(int n, int time) {
     return n - abs(n - 1 - time % (n * 2 - 2));   
    }
};
```
---
![upvote.png](./images/0.png)



