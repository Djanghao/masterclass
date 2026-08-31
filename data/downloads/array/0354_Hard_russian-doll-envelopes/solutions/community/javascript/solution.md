# JS, Python, Java, C++ | Easy LIS Solution w/ Explanation

**Author:** sgallivan
**Votes:** 158
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/1134011/](https://leetcode.com/problems/russian-doll-envelopes/solutions/1134011/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The naive approach here would be to try every single permutation of our envelope array (**E**), but that would be a **time complexity** of **O(N!)** which is frankly an incomprehensible number when **N** goes up to **5000**.

As the naive approach would involve repeating many of the same individual comparisons over and over again, we can quickly see that a **dynamic programming** (**DP**) solution would be beneficial.

In order for a DP solution to be effective, however, we'd need to find a way to progress from the easiest subsolution and build from there for each successively more complex subsolution. The best way to do this would be to sort **E** first by **width** (**E[i][0]**), and then by **height** (**E[i][1]**).

Then we could start with the smallest envelope and work our way up, storing in our DP array (**dp**) the result of how many smaller envelopes it is possible to fit in the corresponding envelope. That way we could simplify each iteration to checking to see which of the entries in **dp** corresponding to smaller envelopes is the largest. This would drop the time complexity to **O(N^2)**, which is a definite improvement.

But it should also be apparent that if we were to define a **subsequence** of **E** that was the ideal nesting order of envelopes for the solution, then that array would be strictly increasing in *both* width and height.

If we've already sorted **E** primarily by width, we should then be able to consider a corresponding array of just the heights and realize that the solution would be defined as the [**longest increasing subsequence**](https://en.wikipedia.org/wiki/Longest_increasing_subsequence) of that.

The only difficulty would be for consecutive envelopes with the *same* sorted width. To avoid that, we can simply make sure that our sort function sorts height in descending order so that the first envelope encountered for any given width would be the largest one.

At the end of the longest increasing subsequence algorithm, the length of **dp** is equal to the length of the subsequence. Due to the sort function and the binary searches required for the algorithm, the time complexity now shrinks to **O(N log N)**.

---

#### ***Implementation:***

Python has a built-in binary search function, **bisect()**.

Java has a built-in binary search function as well (**Arrays.binarySearch()**), but in order to use the more performant **int[]** rather than a **List< Integer >**, we'll need to specify a max length for **dp** and then keep track of the current index of the longest subsequence separately in **ans**.

C++ has a built-in binary search function, **lower_bound()**.

---

#### ***Javascript Code:***

The best result for the code below is **80ms / 40.8MB** (beats 100% / 90%).
```javascript
var maxEnvelopes = function(E) {
    E.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let len = E.length, dp = []
    for (let i = 0; i < len; i++) {
        let height = E[i][1], left = 0, right = dp.length   
        while (left < right) {
            let mid = (left + right) >> 1
            if (dp[mid] < height) left = mid + 1
            else right = mid
        }
        dp[left] = height
    }
    return dp.length
};
```

---

#### ***Python Code:***

The best result for the code below is **140ms / 16.4MB** (beats 97% / 85%).
```python
class Solution:
    def maxEnvelopes(self, E: List[List[int]]) -> int:
        E.sort(key=lambda x: (x[0], -x[1]))
        dp = []
        for _,height in E:
            left = bisect_left(dp, height)
            if left == len(dp): dp.append(height)
            else: dp[left] = height
        return len(dp)
```

---

#### ***Java Code:***

The best result for the code below is **7ms / 39.5MB** (beats 100% / 95%).
```java
class Solution {
    public int maxEnvelopes(int[][] E) {
        Arrays.sort(E, (a,b) -> a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
        int[] dp = new int[E.length];
        int ans = 0;
        for (int[] env : E) {
            int height = env[1];
            int left = Arrays.binarySearch(dp, 0, ans, height);
            if (left < 0) left = -left - 1;
            if (left == ans) ans++;
            dp[left] = height;
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **32ms / 15.9MB** (beats 99% / 99%).
```c++
class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& E) {
        sort(E.begin(), E.end(), [](vector<int>& a, vector<int>& b) 
             -> bool {return a[0] == b[0] ? b[1] < a[1] : a[0] < b[0];});
        vector<int> dp;
        for (auto& env : E) {
            int height = env[1];
            int left = lower_bound(dp.begin(), dp.end(), height) - dp.begin();
            if (left == dp.size()) dp.push_back(height);
            dp[left] = height;
        }
        return dp.size();
    }
};
```