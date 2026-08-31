# JS, Python, Java, C++ | 2-Pointer Solution w/ Visual Explanation | beats 100%

**Author:** sgallivan
**Votes:** 333
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/1069746/](https://leetcode.com/problems/container-with-most-water/solutions/1069746/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

***Idea:***

The first thing we should realize is that the amount of water contained is always going to be a rectangle whose area is defined as **length * width**. The width of any container will be the difference between the index of the two lines (**i** and **j**), and the height will be whichever of the two sides is the lowest (**min(H[i], H[j])**).

The brute force approach would be to compare every single pair of indexes in **H**, but that would be far too slow. Instead, we can observe that if we start with the lines on the opposite ends and move inward, the only possible time the area could be larger is when the height increases, since the width will continuously get smaller.

This is very easily observed with the use of visuals. Let's say we start with a graph of **H** like this:

![Visual 1](https://i.imgur.com/2xU6MPx.png)

The first step would be to find our starting container described by the lines on either end:

![Visual 2](https://i.imgur.com/bWpX3VY.png)

We can tell that the line on the right end will never make a better match, because any further match would have a smaller width and the container is already the maximum height that that line can support. That means that our next move should be to slide **j** to the left and pick a new line:

![Visual 3](https://i.imgur.com/pcyUfzx.png)

This is a clear improvement over the last container. We only moved over one line, but we more than doubled the height. Now, it's the line on the left end that's the limiting factor, so the next step will be to slide **i** to the right. Just looking at the visual, however, it's obvious that we can skip the next few lines because they're already underwater, so we should go to the first line that's larger than the current water height:

![Visual 4](https://i.imgur.com/25MGHYY.png)

This time, it doesn't look like we made much of a gain, despite the fact that the water level rose a bit, because we lost more in width than we made up for in height. That means that we always have to check at each new possible stop to see if the new container area is better than the current best. Just lik before we can slide **j** to the left again:

![Visual 5](https://i.imgur.com/c4VBpqn.png)

This move also doesn't appear to have led to a better container. But here we can see that it's definitely possible to have to move the same side twice in a row, as the **j** line is still the lower of the two:

![Visual 6](https://i.imgur.com/R6AAkNd.png)

This is obviously the last possible container to check, and like the last few before it, it doesn't appear to be the best match. Still, we can understand that it's entirely possible for the best container in a different example to be only one index apart, if both lines are extremely tall.

Putting together everything, it's clear that we need to make a **2-pointer sliding window solution**. We'll start from either end and at each step we'll check the container area, then we'll shift the lower-valued pointer inward. Once the two pointers meet, we know that we must have exhausted all possible containers and we should **return** our answer (**ans**).

---

***Implementation:***

Javascript was weirdly more performant when using both **Math.max()** and **Math.min()** rather than performing more basic comparisons, even with duplicated effort in the ternary.

For the other languages, it made more sense (and was ultimately more performant) to only have to do the basic comparisons once each.

---

***Javascript Code:***

The best result for the code below is **68ms / 41.1MB** (beats 100% / 41%).
```javascript
var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};
```

---

***Python Code:***

The best result for the code below is **140ms / 16.4MB** (beats 100% / 75%).
```python
class Solution:
    def maxArea(self, H: List[int]) -> int:
        ans, i, j = 0, 0, len(H)-1
        while (i < j):
            if H[i] <= H[j]:
                res = H[i] * (j - i)
                i += 1
            else:
                res = H[j] * (j - i)
                j -= 1
            if res > ans: ans = res
        return ans
```

---

***Java Code:***

The best result for the code below is **1ms / 40.3MB** (beats 100% / 88%).
```java
class Solution {
    public int maxArea(int[] H) {
        int ans = 0, i = 0, j = H.length-1, res = 0;
        while (i < j) {
            if (H[i] <= H[j]) {
                res = H[i] * (j - i);
                i++;
            } else {
                res = H[j] * (j - i);
                j--;
            }
            if (res > ans) ans = res;
        }
        return ans;
    }
}
```

---

***C++ Code:***

The best result for the code below is **12ms / 17.6MB** (beats 100% / 100%).
```c++
class Solution {
public:
    int maxArea(vector<int>& H) {
        int ans = 0, i = 0, j = H.size()-1, res = 0;
        while (i < j) {
            if (H[i] <= H[j]) {
                res = H[i] * (j - i);
                i++;
            } else {
                res = H[j] * (j - i);
                j--;
            }
            if (res > ans) ans = res;
        }
        return ans;
    }
};
```