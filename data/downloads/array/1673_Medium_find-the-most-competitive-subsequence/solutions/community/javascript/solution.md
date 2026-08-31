# JS, Python, Java, C++ | Stack Solution w/ Explanation | beats 100%

**Author:** sgallivan
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/1027592/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/1027592/)

---

*(Note: This is part of a series of Leetcode solution explanations ([**index**](https://dev.to/seanpgallivan/leetcode-solutions-index-57fl)). If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The problem's definition for "competitiveness" sounds just like a standard sort order, and just like a standard sort order, it can be improved by removing any larger number that comes before a lower number. Also, the further left in the input you make this removal, the larger its impact.

The trick here is to perform this operation as many times as you can while still making sure you have at least **K** elements left.

The standard solution here will resemble a **stack**, as we'll iterate through our input (**N**) and push values to the answer stack. If the next value (**N[i]**) is lower than the top value of the stack, then we'll pop numbers off the stack until it's not. By doing this, our stack will always be sorted in ascending order.

If at any point the number of elements you can safely remove (**moves**) is reduced to **0**, then we combine our stack with the remaining elements of **N** and **return**. If we reach the end of **N** and our stack is longer than **K**, just return the first **K** elements.

But as is often the case when we're doing a one-time pass through an array and selectively removing elements, we can increase our efficiency by doing an **in-place stack** using a **2-pointer system** by using the early positions of **N** as our answer stack.

---

#### ***Implementation:***

Python, unlike the other three languages, actually prefers the normal stack solution rather than an in-place version.

C++ can drastically improve the speed up its solution of this particular problem via use of a custom lambda function designed to speed up I/O.

---

#### ***Javascript Code:***

The best result for the code below is **200ms / 55.9MB** (beats 98% / 100%).
```javascript
var mostCompetitive = function(N, K) {
    let len = N.length, moves = len - K
    for (let i = 0, j = 1; j < len;) {
        while (N[j] < N[i] && moves) i--, moves--
        if (!moves) return N.slice(0,i+1).concat(N.slice(j))
        N[++i] = N[j++]
    }
    return N.slice(0,K)
};
```

---

#### ***Python Code:***

The best result for the code below is **1232ms / 27.1MB** (beats 100% / 86%).
```python
class Solution:
    def mostCompetitive(self, N: List[int], K: int) -> List[int]:
        i, moves = 0, len(N) - K
        ans = []
        for x in N:
            while ans and moves and x < ans[-1]:
                ans.pop()
                moves -= 1
            ans.append(x)
        return ans[:K]
```

---

#### ***Java Code:***

The best result for the code below is **5ms / 54.8MB** (beats 100% / 36%).
```java
class Solution {
    public int[] mostCompetitive(int[] N, int K) {
        int len = N.length;
        int moves = len - K;
        for (int i = 0, j = 1; j < len;) {
            while (moves > 0 && i >= 0 && N[j] < N[i]) {
                i--;
                moves--;
            }
            N[++i] = N[j++];
        }
        return Arrays.copyOfRange(N,0,K);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **88ms / 106.3MB** (beats 100% / 93%).
```c++
class Solution {
public:
    vector<int> mostCompetitive(vector<int>& N, int K) {
        int len = N.size();
        int moves = len - K;
        for (int i = 0, j = 1; j < len;) {
            while (moves && i >= 0 && N[j] < N[i])
                i--, moves--;
            N[++i] = N[j++];
        }
        return vector<int>(N.begin(), N.begin() + K);
    }
};

static int fastIO = [] {
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    return 0;
}();
```