# Beats 100% Easy Counter Solution 🧠 Python | Java | C++

**Author:** violet_6
**Votes:** 85
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913694/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913694/)

---

# Intuition
To minimize the number of swaps, we calculate the number of `swaps` required by counting how many `white balls (0)` we need to skip as we encounter `black balls (1)` that are out of place. 

**Every time a** `black ball (1)` **appears before a** `white ball (0)`, **it means we would need to swap that black ball to the right.**

# Approach
1. We count how many `black balls (1)` we have encountered so far.
2. Every time we encounter a `white ball (0)`, it can be thought of as a **swap opportunity**, where a black ball should have taken that position.
3. The `total number of swaps` == `sum of the "swap opportunities"` for every black ball (1) we encounter.

Initialization of two variables:
- `swap`: This variable tracks the total number of swaps needed.
- `black`: This variable tracks the number of '1's encountered so far as we iterate through the string.

> **Thank you for your upvote in advance \u2B06\uFE0F**

# Complexity
- Time complexity: $$O(N)$$
    - Traversing the input string `s`

- Space complexity: $$O(1)$$
    - Using two variables and therefore constant

# Code
```python3 []
class Solution:
    def minimumSteps(self, s: str) -> int:
        swap, black = 0, 0
        for c in s:
            if c == "0":
                swap += black
            else:
                black += 1
        return swap
```
```java []
class Solution {
    public long minimumSteps(String s) {
        long swap = 0;
        int black = 0; 
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '0') 
                swap += (long) black; 
            else
                black++; 
        }
        return swap;
    }
}
```
```C++ []
class Solution {
public:
    long long minimumSteps(string s) {
        long long swap = 0;
        int black = 0; 
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '0') 
                swap += (long long) black; 
            else
                black++; 
        }
        return swap;
    }
};
```
> **Thank you for your upvote in advance \u2B06\uFE0F**

![image.png](./images/0.png)