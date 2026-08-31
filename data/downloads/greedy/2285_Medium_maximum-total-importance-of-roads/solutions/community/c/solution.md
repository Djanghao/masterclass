# Node Degree

**Author:** votrubac
**Votes:** 114
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/2083774/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/2083774/)

---

For the maximum result, we assign the highest value to a city with the largest degree (number of roads).
    
We compute the degree of each node, and then sort them. Finally, we assing increasing values starting from the smallest degree.

**C++**
```cpp
long long maximumImportance(int n, vector<vector<int>>& roads) {
    long long cnt[50001] = {}, res = 0;
    for (auto &r : roads) {
        ++cnt[r[0]];
        ++cnt[r[1]];
    }
    sort(begin(cnt), begin(cnt) + n);
    for (int i = 0; i < n; ++i)
        res += cnt[i] * (i + 1);
    return res;
}
```