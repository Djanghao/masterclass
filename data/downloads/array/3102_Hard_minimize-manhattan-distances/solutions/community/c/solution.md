# Classic O(n) Solution

**Author:** votrubac
**Votes:** 62
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949465/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949465/)

---

**Intuition:** we need to find 2 points with the maximum Manhattan distance. We then try to remove one of these points (whichever gives a better result). Removing any other point won\u2019t change the maximum distance.

Finding the maximum Manhattan distance is a classic problem, and we can do it in O(n). You can find existing articles and solutions that explain how to do it.
    
We need to modify the maximum Manhattan distance solution to also track two points that produce that distance.
    
Then, we compute the maximum distance without the first, and without the second point, and return the minimum.

**Complexity Analysis**
- Time: O(n)
- Memory: O(1)

> You can see other solutions that collect and sort sums and differences. Having all this information, we do not need to process points again.
> However, the complexity is higher - O(n log n) runtime and O(n) memory, which is less efficient than going through the array 3 times.

**C++**
```cpp
int minimumDistance(vector<vector<int>>& ps) {
    auto [_, i, j] = maxDistance(ps);
    return min(maxDistance(ps, i)[0], maxDistance(ps, j)[0]);
}    
array<long long, 3> maxDistance(vector<vector<int>>& ps, int skip = -1) {
    int sum[2] = {INT_MAX, INT_MIN}, sum_i[2] = {0, 0};
    int diff[2] = {INT_MAX, INT_MIN}, diff_i[2] = {0, 0};
    for (int i = 0; i < ps.size(); ++i) {
        if (i == skip)
            continue;
        if (sum[0] > ps[i][0] + ps[i][1]) {
            sum[0] = ps[i][0] + ps[i][1];
            sum_i[0] = i;
        }
        if (sum[1] < ps[i][0] + ps[i][1]) {
            sum[1] = ps[i][0] + ps[i][1];
            sum_i[1] = i;
        }
        if (diff[0] > ps[i][0] - ps[i][1]) {
            diff[0] = ps[i][0] - ps[i][1];
            diff_i[0] = i;
        }
        if (diff[1] < ps[i][0] - ps[i][1]) {
            diff[1] = ps[i][0] - ps[i][1];
            diff_i[1] = i;
        }
    }
    if (sum[1] - sum[0] > diff[1] - diff[0])
        return {sum[1] - sum[0], sum_i[0], sum_i[1]};
    return {diff[1] - diff[0], diff_i[0], diff_i[1]};
}
```