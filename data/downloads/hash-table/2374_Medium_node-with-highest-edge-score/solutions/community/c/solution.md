# Counting

**Author:** votrubac
**Votes:** 36
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/2422312/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/2422312/)

---

Just need to use 64-bit integer when counting the score to avoid overflow.

**C++**
```cpp
int edgeScore(vector<int>& edges) {
    vector<long long> score(edges.size());
    for (int i = 0; i < edges.size(); ++i)
        score[edges[i]] += i;
    return max_element(begin(score), end(score)) - begin(score);
}
```