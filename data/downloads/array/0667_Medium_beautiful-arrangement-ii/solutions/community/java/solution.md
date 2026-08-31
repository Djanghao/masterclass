# JS, Python, Java, C++ | Simple Mathematical Solution w/ Explanation

**Author:** sgallivan
**Votes:** 44
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1154742/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/1154742/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

For this problem, we have to think about the nature of the range of possible values for **k** and their matching arrays. The smallest value of **k** possible is obviously **1**, which can be achieved by a strictly increasing (or decreasing) array. Thinking about the largest possible value for **k**, however, is slightly more challenging.

First, we can consider the range of values in our array, which is **[1, n]**. The largest possible absolute difference of any two numbers in that range would obviously be the difference between the two extremes, **1** and **n**, which is **n - 1**. Since the smallest possible absolute difference is obviously **1**, then it would appear to perhaps be possible to achieve each difference in the range **[1, n - 1]**, or a **k** value of **n - 1**.

*But is this actually possible?*

Let's take **n = 5** and **k = 4** for example. The only possible way to get the absolute difference of **4** would be for **1** and **5** to be consecutive. After that there are two possibilites for next smallest absolute difference of **3**, which are **1** & **4** or **2** & **5**. Since the **1** and **5** are already next to each other, that means we can achieve this second step with either **[1,5,2]** or **[4,1,5]** (or their reverses).

Continuing this trend along, we can gradually see that we can indeed achieve the maximum **k** value of **n - 1** by zig-zagging back and forth between the remaining extremes as we add them to our array. In the previous example, one such example would be **[1,5,2,4,3]**.

The question then remains how we go about achieving some medium value of **k** larger than **1** but smaller than **n - 1**. The answer to that lies in considering the array to be made of two parts. In the first part, **[1, k+1]**, we can achieve our **k** number of absolute differences, then we can simply fill in the remaining range, **[k+2, n]**, with the ideal incrementing values without increasing the value of **k**.

For example, if we have **n = 8** and **k = 4**, we would build the first part the same as the last example, **[1,5,2,4,3]**, then we would add on the remaining values in increasing order, **[6,7,8]**, to make the wole array, **[1,5,2,4,3,6,7,8]**.

_Examples of each variation of **k** when **n = 8**:_
![Visual 1](https://i.imgur.com/OOuahhe.png)

To achieve the zig-zag fill, we can use variables for the top and bottom values of our first part (**a, z**), then use a **modulo** operation (**i % 2**) to alternate between the two options, remembering to increment/decrement the respective variables each time they're used.

A slightly easier to visualize (but harder to code) version of the solution similarly involves using the same zig-zag for the first **k** elements, but with the full range of **n** numbers, and then moving in ideal fashion (either increasing or decreasing by **1**, depending on whether **k** is even or odd) to fill the remaining elements of the array.

_Examples of each alternate variation of **k** when **n = 8**:_
![Visual 2](https://i.imgur.com/foIzoFT.png)

---

#### ***Implementation:***

The are only minor differences between each of the four languages.

---

#### ***Javascript Code:***

The best result for the code below is **80ms / 40.2MB** (beats 100% / 91%).
```javascript
var constructArray = function(n, k) {
    let ans = new Array(n)
    for (let i = 0, a = 1, z = k + 1; i <= k; i++)
        ans[i] = i % 2 ? z-- : a++
    for (let i = k + 1; i < n;)
        ans[i] = ++i
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **40ms / 15.0MB** (beats 97% / 93%).
```python
class Solution:
    def constructArray(self, n: int, k: int) -> List[int]:
        ans, a, z = [0] * n, 1, k + 1
        for i in range(k+1):
            if i % 2:
                ans[i] = z
                z -= 1
            else:
                ans[i] = a
                a += 1
        for i in range(k+1,n):
            ans[i] = i + 1
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 38.8MB** (beats 100% / 98%).
```java
class Solution {
    public int[] constructArray(int n, int k) {
        int[] ans = new int[n];
        for (int i = 0, a = 1, z = k + 1; i <= k; i++)
            ans[i] = i % 2 == 1 ? z-- : a++;
        for (int i = k+1; i < n;)
            ans[i] = ++i;
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 7.3MB** (beats 100% / 88%).
```c++
class Solution {
public:
    vector<int> constructArray(int n, int k) {
        vector<int> ans(n);
        for (int i = 0, a = 1, z = k + 1; i <= k; i++)
            ans[i] = i % 2 ? z-- : a++;
        for (int i = k+1; i < n; i++)
            ans[i] = i + 1;
        return ans;
    }
};
```