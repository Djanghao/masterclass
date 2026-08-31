# Why the Accepted Answer Skip the Maximum Path ???

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/820379/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/820379/)

---

It is not clear to me, what if I am understanding in wrong way.
What if I give the path
```
[5,4 ,5]
[1,2,6]
[7,100,6]
```
As we have all moves Left, right, up and down, so Why not we should visit all nodes to increase the max path. Like 5 -> 4 -> 5 -> 6 -> 2 -> 1 -> 7 -> 100 -> 6(destination)
Where in the question it is mentioned we have to pick the maximum local path and then should reach the destination ???