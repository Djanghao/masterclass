# 2D Monostack

**Author:** votrubac
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2077412/](https://leetcode.com/problems/number-of-people-that-can-be-seen-in-a-grid/solutions/2077412/)

---

We count people on the right and below independently. We go right-to-left (or bottom-up), and maintain a monotonically decreasing stack.

For the current height, we pop smaller or equal heights from the stack and increase the number of people we can see. If there are remaining elements in the stack, we add one more person to the number of people we can see - unless the last heigth we popped is equal to the current heigth (that person blocks us from seeing a taller one).

Then, we push the current  height to the stack.

For the implementation, we can do two passes (for horizontal and vertical directions), or we can do it in one pass if we maintain monostacks for all columns (or rows).

**C++**
```cpp
int monoStack(int h, vector<int> &ms) {
    int res = 0, last = 0;
    for (; !ms.empty() && ms.back() <= h; ++res) {
        last = ms.back(); 
        ms.pop_back();
    }
    res += !ms.empty() && h != last;
    ms.push_back(h);
    return res;
}
vector<vector<int>> seePeople(vector<vector<int>>& h) {
    int m = h.size(), n = h[0].size();
    vector<vector<int>> res(m, vector<int>(n)), hms(m), vms(n); 
    for (int i = m - 1; i >= 0; --i)
        for (int j = n - 1; j >= 0; --j)
            res[i][j] = monoStack(h[i][j], hms[i]) + monoStack(h[i][j], vms[j]);
    return res;
}
```