# Manacher's

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5940188/](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5940188/)

---

## Intuition
We traverse the tree post-order, populating the `traversed` string. 

For each node, there is a substring in `traversed` that corresponds to `dfsStr` for that node. So, we track the left and right position of that substring.

Now, our goal is to find out, efficiently, whether those substrings are palindromes. 

## Manacher's Algorithm
Manacher's algorithm finds the largest palindrome for each position in the string in O(n).

Specifically, `d[i]` tells us the size of the largest palindrome when `i` is the center.

Knowing the left and right position of each `dfsStr`, we can determine its center and see if the palindrome there is large enough.

Manacher's algorithm is not that complex, but it's quite complicated to handle even- and odd-sized palindromes. 

A common trick is to put `#` between each character, e.g. `#a#b#c#b#a#`, and run Manacher's algorithm for odd-sized palindromes.

Then, for a substring `[l, r]`, the largest palindrome would be `d[l + r + 1] - 1`.

> The `manacher_odd` function is taken as-is from the CP-A site.

**C++**
```cpp
void dfs(int i, vector<vector<int>> &ch, string &s, string &traversed, int &count, vector<pair<int, int>> &subs) {
    int l = count;
    for (int j : ch[i])
        dfs(j, ch, s, traversed, count, subs);
    traversed[count * 2 + 1] = s[i];
    subs[i] = {l, count++};
}
vector<bool> findAnswer(vector<int>& parent, string s) {
    int n = s.size(), count = 0;
    vector<bool> answer(n);    
    vector<vector<int>> ch(n);
    for (int i = 1; i < parent.size(); ++i)
        ch[parent[i]].push_back(i);
    string traversed(n * 2 + 1, '#');
    vector<pair<int, int>> subs(n);
    dfs(0, ch, s, traversed, count, subs);
    auto d = manacher_odd(traversed);
    for (int i = 0; i < n; ++i) {
        auto &[l, r] = subs[i];
        int len = r - l + 1;
        answer[i] = d[l + r + 1] - 1 >= len;
    }
    return answer;
}
vector<int> manacher_odd(string s) {
    int n = s.size();
    s = "$" + s + "^";
    vector<int> p(n + 2);
    int l = 1, r = 1;
    for(int i = 1; i <= n; i++) {
        p[i] = max(0, min(r - i, p[l + (r - i)]));
        while(s[i - p[i]] == s[i + p[i]]) {
            p[i]++;
        }
        if(i + p[i] > r) {
            l = i - p[i], r = i + p[i];
        }
    }
    return vector<int>(begin(p) + 1, end(p) - 1);
}
```