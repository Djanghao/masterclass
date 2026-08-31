# C++ | Java | Python | JS || Beginner Friendly with Explanation and Dry Run || Mr. Robot

**Author:** LakshayBrejwal_1_0
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995037/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995037/)

---

# Minimum Operations to Make a Number Special

## Problem Description

You are given a string `num` representing an integer. You want to make this integer "special" by performing the following operations:

1. **Operation A:** You can replace any digit '0' with '5' in the integer.

2. **Operation B:** You can replace any digit '5' with '2' or '7' in the integer.

You need to find the minimum number of operations required to make the integer "special."

Write a function `minimumOperations` to solve this problem.

## Approach

We can approach this problem by scanning the string `num` from left to right and counting the number of digits that need to be replaced to make the integer special.

We maintain several counters:
- `a`: Counts the number of '0's encountered so far.
- `b`: Counts the number of '5's encountered so far.
- `c`: Counts the number of non-zero and non-five digits encountered so far.
- `d`: A flag to indicate whether we have encountered a digit '0' or not.
- `e`: A flag to indicate whether we have encountered a digit '5' or not.

We iterate through the string from right to left:
- If `d` is 0 (indicating we haven't encountered a '0' yet) and the current digit is '0', we increment `d`. Otherwise, we increment `a`.
- If `e` is 0 (indicating we haven't encountered a '5' yet) and the current digit is '5', we increment `e`. Otherwise, we increment `b`.

After scanning the string, we have the following information:
- `a` represents the number of '0's to be replaced with '5' to make the integer special.
- `b` represents the number of '5's that need to be replaced with '2' or '7' to make the integer special.
- `c` represents the number of non-zero and non-five digits that are already special.

We return the minimum of these counts as the answer.

## Dry Run

Let's dry run an example to illustrate how the approach works:

Input:
- `num = "505122"`

Initialization:
- `ans = 6` (size of `num`), `n = 6` (length of `num`), `a = 0`, `b = 0`, `c = 0`, `d = 0`, `e = 0`.

Step 1 (Right to Left):
- At index 5: `d = 0`, `e = 1`, increment `b` to 1 (count '5').
- At index 4: `d = 0`, `e = 1`, increment `b` to 2 (count '5').
- At index 3: `d = 0`, `e = 1`, increment `b` to 3 (count '5').
- At index 2: `d = 0`, `e = 0`, increment `a` to 1 (count '0').
- At index 1: `d = 0`, `e = 0`, increment `a` to 2 (count '0').
- At index 0: `d = 0`, `e = 0`, increment `a` to 3 (count '0').

Now, we have:
- `a = 3` (number of '0's to be replaced with '5').
- `b = 3` (number of '5's to be replaced with '2' or '7').
- `c = 0` (no non-zero and non-five digits).

Finally, return the minimum of `a`, `b`, and `c`, which is 0.

## Complexity Analysis

- Time Complexity: O(N), where N is the length of the input string `num`. We perform a single pass through the string.
- Space Complexity: O(1), as we use only a constant amount of extra space.

Now, let's implement this approach in C++.

## Code

```cpp []
class Solution {
public:
    int minimumOperations(string num) {
        int operations = num.size();
        int n = num.size();
        int zeroCount = 0, fiveCount = 0, nonZeroCount = 0, zeroFlag = 0, fiveFlag = 0;

        for (int i = n - 1; i >= 0; i--) {
            if (zeroFlag == 0) {
                if (num[i] == '0') 
                    zeroFlag++;
                else 
                    zeroCount++;
                
            } else {
                if (num[i] == '0' || num[i] == '5') {
                    zeroFlag = 2;
                    break;
                } else 
                    zeroCount++;
                
            }
        }

        for (int i = n - 1; i >= 0; i--) {
            if (fiveFlag == 0) {
                if (num[i] == '5') 
                    fiveFlag++;
                else
                    fiveCount++;
                
            } else {
                if (num[i] == '2' || num[i] == '7') {
                    fiveFlag = 2;
                    break;
                } else
                    fiveCount++;
                
            }
        }

        for (int i = 0; i < n; i++) {
            if (num[i] != '0') {
                nonZeroCount++;
            }
        }

        if (zeroFlag == 2) {
            operations = min(zeroCount, operations);
        }

        if (fiveFlag == 2) {
            operations = min(fiveCount, operations);
        }

        operations = min(nonZeroCount, operations);

        return operations;
    }
};
```

```java []
class Solution {
    public int minimumOperations(String num) {
        int operations = num.length();
        int n = num.length();
        int zeroCount = 0, fiveCount = 0, nonZeroCount = 0, zeroFlag = 0, fiveFlag = 0;

        for (int i = n - 1; i >= 0; i--) {
            if (zeroFlag == 0) {
                if (num.charAt(i) == '0') 
                    zeroFlag++;
                else 
                    zeroCount++;
                
            } else {
                if (num.charAt(i) == '0' || num.charAt(i) == '5') {
                    zeroFlag = 2;
                    break;
                } else 
                    zeroCount++;
                
            }
        }

        for (int i = n - 1; i >= 0; i--) {
            if (fiveFlag == 0) {
                if (num.charAt(i) == '5') 
                    fiveFlag++;
                else
                    fiveCount++;
                
            } else {
                if (num.charAt(i) == '2' || num.charAt(i) == '7') {
                    fiveFlag = 2;
                    break;
                } else
                    fiveCount++;
                
            }
        }

        for (int i = 0; i < n; i++) {
            if (num.charAt(i) != '0') {
                nonZeroCount++;
            }
        }

        if (zeroFlag == 2) {
            operations = Math.min(zeroCount, operations);
        }

        if (fiveFlag == 2) {
            operations = Math.min(fiveCount, operations);
        }

        operations = Math.min(nonZeroCount, operations);

        return operations;
    }
}
```

```python []
class Solution:
    def minimumOperations(self, num: str) -> int:
        operations = len(num)
        n = len(num)
        zeroCount = 0
        fiveCount = 0
        nonZeroCount = 0
        zeroFlag = 0
        fiveFlag = 0

        for i in range(n - 1, -1, -1):
            if zeroFlag == 0:
                if num[i] == '0':
                    zeroFlag += 1
                else:
                    zeroCount += 1
            else:
                if num[i] == '0' or num[i] == '5':
                    zeroFlag = 2
                    break
                else:
                    zeroCount += 1

        for i in range(n - 1, -1, -1):
            if fiveFlag == 0:
                if num[i] == '5':
                    fiveFlag += 1
                else:
                    fiveCount += 1
            else:
                if num[i] == '2' or num[i] == '7':
                    fiveFlag = 2
                    break
                else:
                    fiveCount += 1

        for i in range(n):
            if num[i] != '0':
                nonZeroCount += 1

        if zeroFlag == 2:
            operations = min(zeroCount, operations)

        if fiveFlag == 2:
            operations = min(fiveCount, operations)

        operations = min(nonZeroCount, operations)

        return operations
```


```javascript []
var minimumOperations = function(num) {
    let operations = num.length;
    let n = num.length;
    let zeroCount = 0, fiveCount = 0, nonZeroCount = 0, zeroFlag = 0, fiveFlag = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (zeroFlag == 0) {
            if (num[i] == '0') 
                zeroFlag++;
            else 
                zeroCount++;
        } else {
            if (num[i] == '0' || num[i] == '5') {
                zeroFlag = 2;
                break;
            } else 
                zeroCount++;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        if (fiveFlag == 0) {
            if (num[i] == '5') 
                fiveFlag++;
            else
                fiveCount++;
        } else {
            if (num[i] == '2' || num[i] == '7') {
                fiveFlag = 2;
                break;
            } else
                fiveCount++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (num[i] != '0') {
            nonZeroCount++;
        }
    }

    if (zeroFlag == 2) {
        operations = Math.min(zeroCount, operations);
    }

    if (fiveFlag == 2) {
        operations = Math.min(fiveCount, operations);
    }

    operations = Math.min(nonZeroCount, operations);

    return operations;
};
```
---
# Consider UPVOTING\u2B06\uFE0F

![image.png](./images/0.png)

# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

 -- *MR.ROBOT SIGNING OFF*