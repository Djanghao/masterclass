# [C++] Simple Math Solutions Explained, 100% Time,

**Author:** Ajna
**Votes:** 9
**Link:** [https://leetcode.com/problems/valid-square/solutions/931757/](https://leetcode.com/problems/valid-square/solutions/931757/)

---

This is the kind of lovely problem which is easy to understand and not that easy to crack, since you need to picture in your mind a few edge cases.

To solve it, I created a few variables:
* `d0`, `d1`, `d2` and `d3` are 4 `double`s (but it would work with `float`s too) to keep track of the computed distances;
* `pts` is a vector of points, that we create and sort immediately so that we do not have to deal with annoying set of conditions not knowing which point might be up and left of whichever other point.

Imagine for example receiving as an input:

```cpp
{ 0,-1}
{ 1, 0}
{-1, 0}
{ 0, 1}
```

After sorting we will have:

```cpp
{-1, 0}
{ 0,-1}
{ 0, 1}
{ 1, 0}
```

Knowing for sure that any element will have x coordinate (the first value in the vector) less than or equal to all the following elements and that points with the same x will be sorted comparing the y coordinate (the second value in the vector).

This is not trivial, since we now know for example that the sides go between:
* `pts[0]` and `pts[1]`;
* `pts[0]` and `pts[2]`;
* `pts[1]` and `pts[3]`;
* `pts[2]` and `pts[3]`.

Conversely, we expect the diagonals to be:
* `pts[0]` and `pts[3]`;
* `pts[1]` and `pts[2]`.

We will also use a plain helper function `d` to compute the distance of each couple of point with the well known Pythagorean formula.

We will then assign:
* `d0` as the distance between `pts[0]` and `pts[1]` (first side);
* `d1` as the distance between `pts[0]` and `pts[2]` (second side);
* `d2` as the distance between `pts[0]` and `pts[3]` (first diagonal);
* `d3` as the distance between `pts[1]` and `pts[2]` (second diagonal).

Now, if we know that the first side and the second side are both `!= 0` and they are equal to each other and so are the diagonals, then we have a valid square and that is what our `return` statement finall computes for us :)

The code:

```cpp
class Solution {
public:
    double d(vector<int>& p1, vector<int>& p2) {
        return pow(pow(p1[0] - p2[0], 2) + pow(p1[1] - p2[1], 2), 0.5);
    }
    bool validSquare(vector<int>& p1, vector<int>& p2, vector<int>& p3, vector<int>& p4) {
        // support variables
        double d0, d1, d2, d3;
        vector<vector<int>> pts = {p1, p2, p3, p4};
        sort(begin(pts), end(pts));
        // computing the distances between ordered points
        d0 = d(pts[0], pts[1]), d1 = d(pts[0], pts[2]), d2 = d(pts[0], pts[3]), d3 = d(pts[1], pts[2]);
        // checking if sides are non-0 and if sides and diagonals are equal
        return d0 && d2 && d0 == d1 && d2 == d3;
    }
};
```

Interesting variant suggested to me by [Bhavik](https://leetcode.com/bhaviksheth/), with no need to spend resources with `double`s and square roots, since we can just compare squared distances (`sd`s):

```cpp
class Solution {
public:
    int sd(vector<int>& p1, vector<int>& p2) {
        return pow(p1[0] - p2[0], 2) + pow(p1[1] - p2[1], 2);
    }
    bool validSquare(vector<int>& p1, vector<int>& p2, vector<int>& p3, vector<int>& p4) {
        // support variables
        int sd0, sd1, sd2, sd3;
        vector<vector<int>> pts = {p1, p2, p3, p4};
        sort(begin(pts), end(pts));
        // computing the distances between ordered points
        sd0 = sd(pts[0], pts[1]), sd1 = sd(pts[0], pts[2]), sd2 = sd(pts[0], pts[3]), sd3 = sd(pts[1], pts[2]);
        // checking if sides are non-0 and if sides and diagonals are equal
        return sd0 && sd2 && sd0 == sd1 && sd2 == sd3;
    }
};
```