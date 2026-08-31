# JS, Python, Java, C++ | Easy O(N) / O(1) Solution w/ Explanation

**Author:** sgallivan
**Votes:** 26
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/1115231/](https://leetcode.com/problems/wiggle-subsequence/solutions/1115231/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The key realization here is that any number that lies in the middle of a stretch of the same direction is extraneous, because the more extreme numbers are the better choices to keep, as they allow for a larger likelihood that a subsequent number will be a directional change.

So the simple answer here is to count the inflection points in our input array (**N**) where the direction changes. There are several ways to do this, but in this solution, we can keep a directional flag (**up**) to keep track of the current direction and then increment our answer (**ans**) and invert **up** when a change is found.

One tricky thing lies in setting the initial direction. Per the instructions, the first number can represent any direction, so we'll have to wait until the first time we see a different number to set our direction. We can check this with a simple **while** loop before the main loop.

Once we finish, we can **return ans**.

---

#### ***Implementation:***

All but Javascript will require an additional check before the main loop to account for an input array with all the same number.

---

#### ***Javascript Code:***

The best result for the code below is **64ms / 38.2MB** (beats 99% / 97%).
```javascript
var wiggleMaxLength = function(N) {
    let len = N.length, i = 1
    while (N[i] === N[i-1]) i++
    let up = N[i-1] > N[i], ans = 1
    for (; i < len; i++)
        if ((up && N[i] < N[i-1]) || (!up && N[i] > N[i-1]))
            up = !up, ans++
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **28ms / 13.9MB** (beats 95% / 100%).
```python
class Solution:
    def wiggleMaxLength(self, N: List[int]) -> int:
        lenN, i = len(N), 1
        while i < lenN and N[i] == N[i-1]: i += 1
        if i == lenN: return 1
        up, ans = N[i-1] > N[i], 1
        while i < lenN:
            if (up and N[i] < N[i-1]) or (not up and N[i] > N[i-1]):
                up = not up
                ans += 1
            i += 1
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 36.2MB** (beats 100% / 98%).
```java
class Solution {
    public int wiggleMaxLength(int[] N) {
        int len = N.length, i = 1, ans = 1;
        while (i < len && N[i] == N[i-1]) i++;
        if (i == len) return 1;
        boolean up = N[i-1] > N[i];
        for (; i < len; i++)
            if ((up && N[i] < N[i-1]) || (!up && N[i] > N[i-1])) {
                up = !up;
                ans++;
            }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 6.9MB** (beats 100% / 97%).
```c++
class Solution {
public:
    int wiggleMaxLength(vector<int>& N) {
        int len = N.size(), i = 1, ans = 1;
        while (i < len && N[i] == N[i-1]) i++;
        if (i == len) return 1;
        bool up = N[i-1] > N[i];
        for (; i < len; i++)
            if ((up && N[i] < N[i-1]) || (!up && N[i] > N[i-1]))
                up = !up, ans++;
        return ans;
    }
};
```