# DFS

**Author:** votrubac
**Votes:** 73
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1537471/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1537471/)

---

The value of a node is the product of:
1. number of nodes in the left subtree, 
2. number of nodes in the right subtree,
3. number of all other nodes, excluding the current one (n - left - right - 1)

We can just use DFS to count child nodes for (1) and (2), and we can then compute (3) as we know the total nubers of nodes.

**C++**
```cpp
int dfs(vector<vector<int>> &al, vector<long long> &s, int i) {
    long long prod = 1, sum = 1;
    for (int j : al[i]) {
        int cnt = dfs(al, s, j);
        prod *= cnt;
        sum += cnt;
    }
    s[i] = prod * (max(1ll, (long long)al.size() - sum));
    return i != 0 ? sum : count(begin(s), end(s), *max_element(begin(s), end(s)));
}
int countHighestScoreNodes(vector<int>& p) {
    vector<vector<int>> al(p.size());
    vector<long long> s(p.size());
    for (int i = 1; i < p.size(); ++i)
        al[p[i]].push_back(i);
    return dfs(al, s, 0);
}
```
**Java**
```java
long dfs(List<List<Integer>> al, long[] s, int i) {
    long prod = 1, sum = 1;
    for (int j : al.get(i)) {
        long cnt = dfs(al, s, j);
        prod *= cnt;
        sum += cnt;
    }
    s[i] = prod * (Math.max(1, al.size() - sum));
    return sum;
}    
public int countHighestScoreNodes(int[] p) {
    List<List<Integer>> al = new ArrayList<>();
    for (int i = 0; i < p.length; ++i)
        al.add(new ArrayList<Integer>());         
    long[] s = new long[p.length];
    for (int i = 1; i < p.length; ++i)
        al.get(p[i]).add(i);
    dfs(al, s, 0);
    long max_val = Arrays.stream(s).max().getAsLong();
    return (int)Arrays.stream(s).filter(v -> v == max_val).count();
}
```