# JS, Python, Java, C++ | Easy Sliding Window Solution w/ Explanation

**Author:** sgallivan
**Votes:** 182
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/1202397/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/1202397/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Since we're forced to take **K** amount of cards no matter what, we can solve this problem with a **two-pointer system** with a **sliding window** approach. Instead of counting the sum of the values _between_ the two pointers, we'll instead be counting the sum of the values _outside_ the sliding window.

We can start by iterating through the first **K** cards of our card list (**C**) and finding the **total** points. At this point, our reverse window will be the cards from **i = K** to **j = C.length - 1**. At each iteration, we'll slide the window backwards, removing one card from the left side (**-C[i]**) and adding one card from the right side (**+C[j]**) each time.

We should keep track of the **best** possible result at each iteration, then **return best** once we reach the end.

![Visual 1](https://i.imgur.com/ec3x0su.gif)

 - _**Time Complexity: O(K)**_
 - _**Space Complexity: O(1)**_

---

#### ***Javascript Code:***

The best result for the code below is **80ms / 45.4MB** (beats 95% / 99%).
```javascript
var maxScore = function(C, K) {
    let total = 0
    for (let i = 0; i < K; i++) total += C[i]
    let best = total
    for (let i = K - 1, j = C.length - 1; ~i; i--, j--)
        total += C[j] - C[i], best = Math.max(best, total)
    return best
};
```

---

#### ***Python Code:***

The best result for the code below is **380ms / 27.5MB** (beats 100% / 87%).
```python
class Solution:
    def maxScore(self, C: List[int], K: int) -> int:
        best = total = sum(C[:K])
        for i in range (K-1, -1, -1):
            total += C[i + len(C) - K] - C[i]
            best = max(best, total)
        return best
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 48.0MB** (beats 100% / 75%).
```java
class Solution {
    public int maxScore(int[] C, int K) {
        int total = 0;
        for (int i = 0; i < K; i++) total += C[i];
        int best = total;
        for (int i = K - 1, j = C.length - 1; i >= 0; i--, j--) {
            total += C[j] - C[i];
            best = Math.max(best, total);
        }
        return best;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **44ms / 42.3MB** (beats 98% / 77%).
```c++
class Solution {
public:
    int maxScore(vector<int>& C, int K) {
        int total = 0;
        for (int i = 0; i < K; i++) total += C[i];
        int best = total;
        for (int i = K - 1, j = C.size() - 1; ~i; i--, j--)
            total += C[j] - C[i], best = max(best, total);
        return best;
    }
};
```