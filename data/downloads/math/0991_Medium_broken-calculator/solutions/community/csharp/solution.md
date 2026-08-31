# 100% Faster || Easy to Understand || Short & Concise || 2 Approaches

**Author:** gameboey
**Votes:** 3
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/5013554/](https://leetcode.com/problems/broken-calculator/solutions/5013554/)

---

# Intuition
The intuition behind the approach used in this code is to work backwards from the target value to the start value, determining the minimum number of operations needed to reach the target by either halving it (if it's even) or incrementing it by 1 (if it's odd) until it reaches or exceeds the start value.

# Approach: RECURSIVE


1. **Observation**: 
   - We have a broken calculator that can perform two operations: doubling the current value or subtracting 1 from the current value.
   - We are given a starting value `startValue` and a target value `target`.
   - The goal is to reach the target value `target` starting from `startValue` using the minimum number of operations.

2. **Approach**:
   - We can work backwards from the `target` to the `startValue`.
   - At each step, we can either:
     - Divide `target` by 2 if it's even, as this operation corresponds to the doubling operation on the calculator.
     - Increment `target` by 1, as this operation corresponds to the subtraction operation on the calculator.
   - By working backwards, we can determine the minimum number of operations needed to reach `target`.

3. **Recursive Approach**:
   - The `helper` function takes two parameters `s` and `t`, where `s` represents the current value on the calculator display and `t` represents the target value.
   - If `s` is greater than or equal to `t`, we return the absolute difference between `s` and `t`, as we can just decrement `s` to reach `t`.
   - Otherwise, if `t` is even, we recursively call `helper(s, t / 2)`, representing the doubling operation.
   - If `t` is odd, we recursively call `helper(s, t + 1)`, representing the subtraction operation.
   - We take the minimum of these two recursive calls and add 1 to represent the current operation.
   - We continue this process until `s` reaches or exceeds `t`, at which point we return the number of operations needed.

4. **Base Case**:
   - The base case of the recursion occurs when `s` is greater than or equal to `t`, indicating that no further operations are needed.

5. **Return Value**:
   - The `BrokenCalc` function simply serves as an entry point to start the recursive calculation by calling the `helper` function with the initial `startValue` and `target`.
   - It returns the minimum number of operations needed to reach the `target` value from the `startValue`.

Overall, this approach effectively works backwards from the target value to the start value, determining the minimum number of operations needed to reach the target.

# Complexity
- Time complexity: O(log(target - startValue))

- Space complexity: O(1)


```C++ []
class Solution {
public:
    int helper(int s, int target) {
        if(s >= target) {
            return s - target;
        }

        if(target % 2) {
            return  1 + helper(s, target + 1);
        }

        return 1 + helper(s, target / 2);
    }

    int brokenCalc(int s, int target) {
        return helper(s, target);
    }
};
```
```python []
class Solution:
    def helper(self, s, t) :
        if s >= t:
            return s - t
        
        return 1 + self.helper(s, t // 2) if t % 2 == 0 else 1 + self.helper(s, t + 1)

    def brokenCalc(self, startValue: int, target: int) -> int:
        return self.helper(startValue, target)
```
```java []
class Solution {
    public int helper(int s, int t) {
        if(s >= t) {
            return s - t;
        }

        return (t % 2 == 0) ? 1 + helper(s, t / 2) : 1 + helper(s, t + 1);
    }

    public int brokenCalc(int startValue, int target) {
        return helper(startValue, target);    
    }
}
```
```javascript []
/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    const helper = (s, t) => {
        if (s >= t) {
            return s - t;
        }
        return (t % 2 === 0) ? 1 + helper(s, t / 2) : 1 + helper(s, t + 1);
    };

    return helper(startValue, target);
};
```
```C# []
public class Solution {
    public int helper(int s, int t) {
        if (s >= t) {
            return s - t;
        }
        
        return (t % 2 == 0) ? 1 + helper(s, t / 2) : 1 + helper(s, t + 1);
    }

    public int BrokenCalc(int startValue, int target) {
        return helper(startValue, target);
    }
}
```
```C []
int helper(int s, int t) {
    if (s >= t) {
        return s - t;
    }
    return (t % 2 == 0) ? 1 + helper(s, t / 2) : 1 + helper(s, t + 1);
}

int brokenCalc(int startValue, int target) {
    return helper(startValue, target);    
}
```

# Intuition
This code iteratively transforms the target value into the start value by either halving it or incrementing it, depending on whether it's even or odd, respectively, and then adds the difference between the start and target values.

# Approach: ITERATIVE



1. **Goal**: The goal is to find the minimum number of operations needed to reach the target value from the start value using only two operations: doubling the current value or decrementing the current value by 1.

2. **Iterative Process**: The approach employs an iterative process to gradually transform the target value into the start value. Here's how it works:
   - While the target value is greater than the start value, the algorithm performs the following steps:
     - If the target value is even, it divides the target value by 2 using the double operation.
     - If the target value is odd, it increments the target value by 1 using the decrement operation.
     - In both cases, it counts the operation performed.

3. **Handling Odd and Even Numbers**: When the target value is odd, it's often more efficient to increment it by 1 rather than doubling it, as it can reduce the distance to the start value faster.

4. **Adjustment at the End**: Once the target value becomes less than or equal to the start value, the algorithm adjusts the count by adding the difference between the start and target values. This adjustment accounts for any additional operations needed to reach the exact target value.

5. **Return Count**: Finally, the algorithm returns the total count of operations required to transform the target value into the start value.

Overall, this approach optimally utilizes the two available operations to minimize the number of steps required to reach the target value from the start value.

# Complexity
- Time complexity: O(log(target))

- Space complexity: O(1)


```C++ []
class Solution {
public:
    int brokenCalc(int startValue, int target) {
        int count = 0;
        while(target > startValue) {
            if(target % 2 == 0) {
                target /= 2;
            } else {
                target++;
            }

            count++;
        }

        count += (startValue - target);
        return count;
    }
};
```
```python []
class Solution:
    def brokenCalc(self, startValue: int, target: int) -> int:
        count = 0
        while target > startValue:
            if target % 2 == 0:
                target //= 2
            else:
                target += 1
            count += 1
        count += startValue - target
        return count

```
```java []
class Solution {
    public int brokenCalc(int startValue, int target) {
        int count = 0;
        while(target > startValue) {
            if(target % 2 == 0) {
                target /= 2;
            } else {
                target++;
            }
            count++;
        }
        count += (startValue - target);
        return count;
    }
}

```
```javascript []
/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
    let count = 0;
    while (target > startValue) {
        if (target % 2 === 0) {
            target /= 2;
        } else {
            target++;
        }
        count++;
    }
    count += (startValue - target);
    return count;
};
```
```C# []
public class Solution {
    public int BrokenCalc(int startValue, int target) {
        int count = 0;
        while(target > startValue) {
            if(target % 2 == 0) {
                target /= 2;
            } else {
                target++;
            }
            count++;
        }
        count += (startValue - target);
        return count;
    }
}
```
```C []
int brokenCalc(int startValue, int target) {
    int count = 0;
    while(target > startValue) {
        if(target % 2 == 0) {
            target /= 2;
        } else {
            target++;
        }
        count++;
    }
    count += (startValue - target);
    return count;
}
```
![upvote.jpg](./images/0.jpeg)

