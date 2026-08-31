# JS, Python, Java, C++ | Simple Sort Solution w/ Explanation

**Author:** sgallivan
**Votes:** 62
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1271374/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1271374/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

For this problem, we simply need to prioritize the more valuable boxes first. To do this, we should **sort** the boxtypes array (**B**) in descending order by the number of units per box (**B[i][1]**).

Then we can iterate through **B** and at each step, we should add as many of the **boxes** as we can, until we reach the truck size (**T**). We should add the number of **boxes** added multiplied by the units per box to our answer (**ans**), and decrease **T** by the same number of **boxes**.

Once the truck is full (**T == 0**), or once the iteration is done, we should **return ans**.

 - _**Time Complexity: O(N log N)** where **N** is the length of **B**, for the sort_
 - _**Space Complexity: O(1)** to **O(N)** depending on the sort algorithm used_

---

#### ***Javascript Code:***
```javascript
var maximumUnits = function(B, T) {
    B.sort((a,b) => b[1] - a[1])
    let ans = 0
    for (let i = 0; T && i < B.length; i++) {
        let count = Math.min(B[i][0], T)
        ans += count * B[i][1], T -= count
    }
    return ans
};
```

---

#### ***Python Code:***
```python
class Solution:
    def maximumUnits(self, B: List[List[int]], T: int) -> int:
        B.sort(key=lambda x: x[1], reverse=True)
        ans = 0
        for b,n in B:
            boxes = min(b, T)
            ans += boxes * n
            T -= boxes
            if T == 0: return ans
        return ans
```

---

#### ***Java Code:***
```java
class Solution {
    public int maximumUnits(int[][] B, int T) {
        Arrays.sort(B, (a,b) -> b[1] - a[1]);
        int ans = 0;
        for (int[] b : B) {
            int count = Math.min(b[0], T);
            ans += count * b[1];
            T -= count;
			if (T == 0) return ans;
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    int maximumUnits(vector<vector<int>>& B, int T) {
        sort(B.begin(), B.end(), [](auto& a, auto& b) { return b[1] < a[1];});
        int ans = 0;
        for (auto& b : B) {
            int count = min(b[0], T);
            ans += count * b[1], T -= count;
			if (!T) return ans;
        }
        return ans;
    }
};
```