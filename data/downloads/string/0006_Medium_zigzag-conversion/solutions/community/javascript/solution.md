# 【Video】Two points to solve the question

**Author:** niits
**Votes:** 781
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/5004842/](https://leetcode.com/problems/zigzag-conversion/solutions/5004842/)

---

# Intuition
We can move up and down with `1` and `-1`

---

# Solution Video

https://youtu.be/fxhPxvBAvD0

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,344
Thank you for your support!

---

# Approach

Let's think about this example.
```
s = "abcdefghi", numRows = 4
```
In this case, we put the characters of `s` like this.

```
1 a     g \u2192 ag
2 b   f h \u2192 bfh
3 c e   i \u2192 cei
4 d       \u2192 d
```
```
return "agbfhceid"
```

## What we should do?

---

\u2B50\uFE0F Points
- Put characters on zigzag path
- Create strings horizontally
---

### Put characters on zigzag path
Seems like tough because we move diagonally but it's very simple.
```
s = "abcdefghi", numRows = 4
```
In this case
```
"abcdefghi"
 123432123 (= row)
```
All we have to do is that we just move up and down. **More precisely, if we reach `numsRows - 1`, we move up next time and if we reach the first row, we move down next time.**

We will creat direction variable to handle moving direction. When we move down, the variable has `1`. On the other hand, when we move up, the variable has `-1`.

### Create strings horizontally
Now we have an array like this.

```
1 a     g
2 b   f h
3 c e   i
4 d      
```
All we have to do is just to concatenate all characters in the same row. But there is a point here.

---

\u2B50\uFE0F Points

Use 2d array instead of 1d array

---

Why?

That's because if we use 1d array(of course we can solve the question), we have to concatenate all characters in the same row when we add a new character which is $$O(n)$$. We will repeat the process length of `s` times, so that is $$O(n^2)$$. `n` is the length of the string s.

To avoid $$O(n^2)$$, we use 2d array so that we just append a new character to the last position of a target row which is $$O(1)$$.

**This enables us to keep $$O(n)$$ time instead of $$O(^2)$$.**

I put Python code of $$O(n^2)$$ below.

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!

---



\u2B50\uFE0F I created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls

---



# Complexity
- Time complexity: $$O(n)$$
 `n` is the length of the string s

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s

        idx, d = 0, 1
        rows = [[] for _ in range(numRows)]

        for char in s:
            rows[idx].append(char)
            if idx == 0:
                d = 1
            elif idx == numRows - 1:
                d = -1
            idx += d

        for i in range(numRows):
            rows[i] = ''.join(rows[i])

        return ''.join(rows)   
```
```javascript []
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let idx = 0, d = 1;
    const rows = new Array(numRows).fill().map(() => []);

    for (const char of s) {
        rows[idx].push(char);
        if (idx === 0) {
            d = 1;
        } else if (idx === numRows - 1) {
            d = -1;
        }
        idx += d;
    }

    for (let i = 0; i < numRows; i++) {
        rows[i] = rows[i].join('');
    }

    return rows.join('');    
};
```
```java []
class Solution {
    public String convert(String s, int numRows) {
       if (numRows == 1 || numRows >= s.length()) {
            return s;
        }

        int idx = 0, d = 1;
        List<Character>[] rows = new ArrayList[numRows];
        for (int i = 0; i < numRows; i++) {
            rows[i] = new ArrayList<>();
        }

        for (char c : s.toCharArray()) {
            rows[idx].add(c);
            if (idx == 0) {
                d = 1;
            } else if (idx == numRows - 1) {
                d = -1;
            }
            idx += d;
        }

        StringBuilder result = new StringBuilder();
        for (List<Character> row : rows) {
            for (char c : row) {
                result.append(c);
            }
        }

        return result.toString();        
    }
}
```
```C++ []
class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1 || numRows >= s.length()) {
            return s;
        }

        int idx = 0, d = 1;
        vector<vector<char>> rows(numRows);

        for (char c : s) {
            rows[idx].push_back(c);
            if (idx == 0) {
                d = 1;
            } else if (idx == numRows - 1) {
                d = -1;
            }
            idx += d;
        }

        string result;
        for (const auto& row : rows) {
            for (char c : row) {
                result += c;
            }
        }

        return result;        
    }
};
```

## Step by Step Algorithm

1. **Check Special Cases**: 
    - If numRows is 1 or greater than or equal to the length of the input string `s`, it means that the ZigZag pattern will be the same as the input string. In such cases, just return the input string `s` as it is.
    ```python
    if numRows == 1 or numRows >= len(s):
        return s
    ```

2. **Initialization**: 
    - Initialize `idx` to keep track of the current row index, starting from 0, and `d` as the direction of traversal (1 for downward, -1 for upward).
    - Create a list of numRows empty lists to represent the rows of the ZigZag pattern.
    ```python
    idx, d = 0, 1
    rows = [[] for row in range(numRows)]
    ```

3. **Traverse through the String**:
    - Iterate through each character `char` in the input string `s`.
    - Append the current character to the row indicated by the `idx`.
    - Update the direction `d` based on the current position (`idx`).
    - Update the current row index `idx` according to the direction `d`.
    ```python
    for char in s:
        rows[idx].append(char)
        if idx == 0:
            d = 1
        elif idx == numRows - 1:
            d = -1
        idx += d
    ```

4. **Join Rows**:
    - Iterate through each row in `rows`.
    - Join the characters in each row to form strings.
    - Update each row in `rows` with the joined string.
    ```python
    for i in range(numRows):
        rows[i] = ''.join(rows[i])
    ```

5. **Join Rows into Result String**:
    - Join all the rows together to form the final ZigZag pattern.
    ```python
    return ''.join(rows)
    ```


---

# Bonus

This is $$O(n^2)$$.

```python []
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s

        idx, d = 0, 1
        rows = [''] * numRows

        for char in s:
            rows[idx] += char
            if idx == 0:
                d = 1
            elif idx == numRows - 1:
                d = -1
            idx += d

        return ''.join(rows)  
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

#### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

#### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

# My previous post and video
#### \u2B50\uFE0F Best Time to Buy and Sell Stock

post
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/

video
https://youtu.be/NG4ZDYD4a2o

