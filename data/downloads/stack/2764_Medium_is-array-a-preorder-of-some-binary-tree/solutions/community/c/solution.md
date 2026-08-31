# Stack

**Author:** votrubac
**Votes:** 3
**Link:** [https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3729835/](https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3729835/)

---

We simulate pre-order stack, and return false if we cannot find a parent that should be there.

**C++**
```cpp
bool isPreorder(vector<vector<int>>& nodes) {
    vector<int> st;
    for (const auto &n : nodes) {
        while (!st.empty() && st.back() != n[1])
            st.pop_back();
        if (st.empty() && n[1] != -1)
            return false;
        st.push_back(n[0]);
    }
    return true;
}
```