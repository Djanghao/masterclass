# JS, Python, Java, C++ | Simple Sort & Iterate Solution w/ Explanation

**Author:** sgallivan
**Votes:** 35
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/1248591/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/1248591/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The trick to this problem is realizing that if the horizontal slices and vertical slices are perpendicular, then all vertical slices cross all horizontal slices. This means that we just need to find the largest of each, and the cross-section should be the largest slice.

To find the largest slice of each, we need to first **sort** the horizontal cuts (**hc**) and vertical cuts (**vc**), then iterate through both sets and keep track of the maximum difference found between two consecutive cuts (**maxh**, **maxv**). We need to not forget to include the two end cuts, which are found using **0** and **h**/**w**, as well.

Once we have the largest difference for both, we can just **return** the product of these two numbers, **modulo 1e9+7**.

 - _**Time Complexity: O(N * log(N) + M * log(M))**  where **N** is the length of **hc** and **M** is the length of **vc**_
 - _**Space Complexity: O(1)**_

---

#### ***Javascript Code:***
```javascript
var maxArea = function(h, w, hc, vc) {
    hc.sort((a,b) => a - b)
    vc.sort((a,b) => a - b)
    let maxh = Math.max(hc[0], h - hc[hc.length-1]),
        maxv = Math.max(vc[0], w - vc[vc.length-1])
    for (let i = 1; i < hc.length; i++)
        maxh = Math.max(maxh, hc[i] - hc[i-1])
    for (let i = 1; i < vc.length; i++)
        maxv = Math.max(maxv, vc[i] - vc[i-1])
    return BigInt(maxh) * BigInt(maxv) % 1000000007n
};
```

---

#### ***Python Code:***
```python
class Solution:
    def maxArea(self, h: int, w: int, hc: List[int], vc: List[int]) -> int:
        hc.sort()
        vc.sort()
        maxh, maxv = max(hc[0], h - hc[-1]), max(vc[0], w - vc[-1])
        for i in range(len(hc)):
            maxh = max(maxh, hc[i] - hc[i-1])
        for i in range(len(vc)):
            maxv = max(maxv, vc[i] - vc[i-1])
        return (maxh * maxv) % 1000000007
```

---

#### ***Java Code:***
```java
class Solution {
    public int maxArea(int h, int w, int[] hc, int[] vc) {
        Arrays.sort(hc);
        Arrays.sort(vc);
        int maxh = Math.max(hc[0], h - hc[hc.length-1]),
            maxv = Math.max(vc[0], w - vc[vc.length-1]);
        for (int i = 1; i < hc.length; i++)
            maxh = Math.max(maxh, hc[i] - hc[i-1]);
        for (int i = 1; i < vc.length; i++)
            maxv = Math.max(maxv, vc[i] - vc[i-1]);
        return (int)((long)maxh * maxv % 1000000007);
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    int maxArea(int h, int w, vector<int>& hc, vector<int>& vc) {
        sort(hc.begin(), hc.end());
        sort(vc.begin(), vc.end());
        int maxh = max(hc[0], h - hc.back()),
            maxv = max(vc[0], w - vc.back());
        for (int i = 1; i < hc.size(); i++)
            maxh = max(maxh, hc[i] - hc[i-1]);
        for (int i = 1; i < vc.size(); i++)
            maxv = max(maxv, vc[i] - vc[i-1]);
        return (int)((long)maxh * maxv % 1000000007);
    }
};
```