# JS, Python, Java, C++ | Optimized LCS Solution w/ Explanation

**Author:** sgallivan
**Votes:** 24
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1195718/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/1195718/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem is basically asking us to identify the **longest common subsequence** (**LCS**) between the two words (**W1, W2**). The answer will then be the combined difference between the length of the words and the length of the LCS.

For a typical LCS solution, we would use a **bottom-up** **dynamic programming** (**DP**) approach and use nested loops to compare each letter of each word against each other (**W1[i], W2[j]**). This would normally call for a DP array of size **(m + 1) * (n + 1)**, where **m = W1.length** and **n = W2.length**. Since the LCS process references the previous row and column for the target cell, we'll need the extra buffer of **0**-filled cells. Each cell in the DP array at **dp[i][j]** will represent the longest subsequence found between **W1.substr(0,i)** and **W2.susbtr(0,j)**. Our final answer will then be **dp[m][n]**.

Since the DP array is being built iteratively, in order, we can reduce the normal **space complexity** from **O(N * M)** by only keeping the current and last rows (**dpCurr, dpLast**) as we iterate through. This will drop the space complexity to **O(N)**. Doing this, we can also ensure that the shorter word is used for **N** by swapping the two words if necessary.

 - _**Time Complexity: O(N * M)** where **N** and **M** are the lengths of the two words_
 - _**Space Complexity: O(N)** where **N** is the length of the smaller of the two words_

---

#### ***Implementation:***

Javascript and Java will find it easier to iterate repeatedly through an array rather than a string, so we can initially **split()** or **toCharArray()** the two words (**WA1, WA2**).

---

#### ***Javascript Code:***

The best result for the code below is **96ms / 40.2MB** (beats 100% / 100%).
```javascript
var minDistance = function(W1, W2) {
    let m = W1.length, n = W2.length
    if (m < n) [W1, W2, m, n] = [W2, W1, n, m]
    let WA1 = W1.split(""), WA2 = W2.split(""),
        dpLast = new Uint16Array(n + 1),
        dpCurr = new Uint16Array(n + 1)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) 
            dpCurr[j+1] = WA1[i] === WA2[j]
                ? dpLast[j] + 1
                : Math.max(dpCurr[j], dpLast[j+1]);
        [dpLast, dpCurr] = [dpCurr, dpLast]
    }
    return m + n - 2 * dpLast[n] 
};
```

---

#### ***Python Code:***

The best result for the code below is **196ms / 14.0MB** (beats 100% / 100%).
```python
class Solution:
    def minDistance(self, W1: str, W2: str) -> int:
        m, n = len(W1), len(W2)
        if m < n: W1, W2, m, n = W2, W1, n, m
        dpLast, dpCurr = [0] * (n + 1), [0] * (n + 1)
        for c1 in W1:
            for j in range(n):
                dpCurr[j+1] = dpLast[j] + 1 if c1 == W2[j] else max(dpCurr[j], dpLast[j+1])
            dpLast, dpCurr = dpCurr, dpLast
        return m + n - 2 * dpLast[n]
```

---

#### ***Java Code:***

The best result for the code below is **3ms / 38.6MB** (beats 100% / 100%).
```java
class Solution {
    public int minDistance(String W1, String W2) {
        int m = W1.length(), n = W2.length();
        if (m < n) {
            String tempStr = W1;
            W1 = W2;
            W2 = tempStr;
            int tempInt = n;
            n = m;
            m = tempInt;
        }
        char[] WA1 = W1.toCharArray(), WA2 = W2.toCharArray();
        int[] dpLast = new int[n+1], dpCurr = new int[n+1];
        for (char c1 : WA1) {
            for (int j = 0; j < n; j++) 
                dpCurr[j+1] = c1 == WA2[j]
                    ? dpLast[j] + 1
                    : Math.max(dpCurr[j], dpLast[j+1]);
            int[] tempArr = dpLast;
            dpLast = dpCurr;
            dpCurr = tempArr;
        }
        return m + n - 2 * dpLast[n];
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **4ms / 6.6MB** (beats 99% / 99%).
```c++
class Solution {
public:
    int minDistance(string W1, string W2) {
        int m = W1.size(), n = W2.size();
        if (m < n) swap(W1, W2), swap(n, m);
        vector<int> dpLast(n+1, 0), dpCurr(n+1, 0);
        for (char c1 : W1) {
            for (int j = 0; j < n; j++) 
                dpCurr[j+1] = c1 == W2[j]
                    ? dpLast[j] + 1
                    : max(dpCurr[j], dpLast[j+1]);
            swap(dpLast, dpCurr);
        }
        return m + n - 2 * dpLast[n];
    }
};
```