# [Javascript] AREA is NOT an Appropriate Weight!

**Author:** Lynn19950915
**Votes:** 4
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/2071821/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/2071821/)

---

Here's an intuitive thought:

> If `rect A` is bigger than `rect B`, it should have a larger weight to get selected.
> While its `# of points` are also more, **each point** within it has a smaller chance for picked then.

Sounds fair, but that's not completely right.
.

Taking `rect A`=2x1, `rect B`=1x1 for example:

Though A's area is twice as B, there are **6 points in A** while **4 in B**.
So the correct ratio should be `(2+1)*(1+1):(1+1)*(1+1)=6:4`
Which can then distribute to all points uniformly.
.
.
**Conclusion**

We should take **\\# OF POINTS** within a rectangle (instead of area) as weight.
```
For size=m*n, there are (m+1)*(n+1) points
which stands for possible choices in X&Y direction.
```

Thanks for your reading and **up-voting** :)

**\u2B50 Check [HERE](https://github.com/Lynn19950915/LeetCode_King) for my full Leetcode Notes ~**



