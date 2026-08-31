# Two Queues

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3083223/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3083223/)

---

**C++**
```cpp
vector<int> timeTaken(vector<int>& arrival, vector<int>& state) {
    int i = 0, time = 0, n = state.size(), dir = 1;
    queue<int> arr[2];
    vector<int> res(n); 
    while (n - i + arr[0].size() + arr[1].size()) {
        while (i < n && arrival[i] <= time)
            arr[state[i]].push(i++);
        dir = arr[0].empty() ? 1 : arr[1].empty() ? 0 : dir;
        if (!arr[dir].empty()) {
            res[arr[dir].front()] = time;
            arr[dir].pop();
        }
        ++time;
    }
    return res;
}
```