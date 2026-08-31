# ✅96.33%🔥Easy Solution🔥With explanation🔥

**Author:** MrAke
**Votes:** 117
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969587/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969587/)

---

# Intuition
#### To find the nesting depth of the given VPS string `s`, we can iterate through each character of the string and keep track of the current nesting depth. Whenever we encounter an opening parenthesis `'('`, we increment the depth, and whenever we encounter a closing parenthesis `')'`, we decrement the depth. We update the maximum depth encountered so far accordingly.
----

# Approach
#### 1. Initialize variables `count` and `max_num` to keep track of the current depth and maximum depth encountered so far, respectively. Set both to 0.
#### 2. Iterate through each character `i` in the input string `s`.
#### 3. If `i` is `'('`, increment `count` by 1 and update `max_num` if count exceeds it.
#### 4. If `i` is `')'`, decrement `count` by 1.
#### 5. Finally, return `max_num`, which represents the maximum nesting depth.



# Complexity
- ## Time complexity:
#### $$O(n)$$, where n is the length of the input string `s`. We traverse the entire string once.

- ## Space complexity:
#### $$O(1)$$, as we only use a constant amount of extra space for variables `count` and `max_num`.

---
# Code

```python []
class Solution:
    def maxDepth(self, s):
        count = 0
        max_num = 0
        for i in s:
            if i == "(":
                count += 1
                if max_num < count:
                    max_num = count
            if i == ")":
                count -= 1
        return(max_num)
```
```C++ []
class Solution {
public:
    int maxDepth(string s) {
        int count = 0;
        int max_num = 0;
        for (char c : s) {
            if (c == '(') {
                count++;
                if (max_num < count)
                    max_num = count;
            } else if (c == ')') {
                count--;
            }
        }
        return max_num;
    }
};

```
```java []
class Solution {
    public int maxDepth(String s) {
        int count = 0;
        int maxNum = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                count++;
                if (maxNum < count)
                    maxNum = count;
            } else if (c == ')') {
                count--;
            }
        }
        return maxNum;
    }
}

```
```javascript []
var maxDepth = function(s) {
    let count = 0;
    let maxNum = 0;
    for (let c of s) {
        if (c === '(') {
            count++;
            if (maxNum < count)
                maxNum = count;
        } else if (c === ')') {
            count--;
        }
    }
    return maxNum;
};

```
```C# []
public class Solution {
    public int MaxDepth(string s) {
        int count = 0;
        int maxNum = 0;
        foreach (char c in s) {
            if (c == '(') {
                count++;
                if (maxNum < count)
                    maxNum = count;
            } else if (c == ')') {
                count--;
            }
        }
        return maxNum;
    }
}

```
----


![Screenshot 2023-08-20 065922.png](./images/0.png)











