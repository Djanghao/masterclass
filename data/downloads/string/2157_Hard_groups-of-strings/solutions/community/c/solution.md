# Union Find vs. DFS

**Author:** votrubac
**Votes:** 74
**Link:** [https://leetcode.com/problems/groups-of-strings/solutions/1731073/](https://leetcode.com/problems/groups-of-strings/solutions/1731073/)

---

The tricky part here is how to compare strings efficiently.

> Note that the union-find solution could TLE sometimes. DFS is noticeably faster.

> **Update**: the union-find solution can be simplified by only using the delete operation. See below.

Because letters are unique, we can represent each string as a bitmask. Initially, I tried to xor each pair of bitmasts, but that O(n * n) solution was too slow even for 20,000 strings. I then tried to use a trie; it was complicated and also too slow.

The faster way is to mutate each bitmast representation, and use a hashmap to check for connected strings:
- Bitmasks with one bit flipped for the add and remove operations (example for "ace",bitmask `10101`):
	- 1010**0**: "ce"
	- 101**1**1: "abce"
	- 10**0**01: "ae"
	- 1**1**101: "acde"
	- **0**0101: "ac"
- Bitmasks where two bits with different values flipped for the replace operation (same example):
	- 101**10**: "bce" (a -> b)
	- 1**1**10**0**: "cde" (a -> d)
	- 10**01**1: "abe" (c -> b)
	- 1**10**01: "ade" (c -> d)
	- **0**01**1**1: "abc" (e -> b)
	- **01**101: "acd" (e -> d)

#### Approach 1: DFS
Instead of processing connection of each string, like in the union-find approach, we can explore the entire group at once using DFS. First, we compute and put all masks into a hash map. 

> Note that we use hash map to count the occurence of each mask in case of duplicates.

Then, starting from a mask in the hash map, we search for all connected masks recursively. 

As we "visit" a mask, we increment the number of connected strings, and remove that mask from the map. This way, the corresponding string will not be processed again.

**C++**
```cpp
unordered_map<int, int> m;
int dfs(int mask) {
    int res = 0;
    auto it = m.find(mask);
    if (it != end(m)) {
        res += it->second;
        m.erase(it);
        for (int i = 0; i < 26; ++i) {
            res += dfs(mask ^ (1 << i));
            for (int j = i + 1; j < 26; ++j)
                if (((mask >> i) & 1) != ((mask >> j) & 1))
                    res += dfs(mask ^ (1 << i) ^ (1 << j));
        }
    }
    return res;
}
vector<int> groupStrings(vector<string>& words) {
    int groups = 0, max_size = 0;
    for (auto &w : words)
        ++m[accumulate(begin(w), end(w), 0, [](int m, char ch){ return m | (1 << (ch - 'a')); })];
    while (!m.empty()) {
        auto size = dfs(begin(m)->first);
        max_size = max(max_size, size);
        groups += size > 0;
    }
    return { groups, max_size };
}
```

#### Approach 2: Union Find
We go through each string, find connected strings as described above, and merge the corresponding groups using union-find.

For union-find approach, we can ignore *replace* and *add* operation, and only do the *remove* operation:
- If we remove one letter from "abc", it will match "ab",  "ac" and "bc". 
	- This is the same as adding a letter to "ab", "ac" and "bc" to match "abc".
- If we remove the third letter from "abde" and "abce", we will get matching mask ("abe").
	- This is the same as replacing letter `d` with `c` to transform "abde" into "abce".

**C++**
```cpp
unordered_map<int, int> m;
int find(vector<int> &ds, int i) {
    return ds[i] < 0 ? i : ds[i] = find(ds, ds[i]);
}
void merge(vector<int> &ds, int i, int mask) {
    auto it = m.find(mask);
    if (it != end(m)) {
        int pi = find(ds, i), pj = find(ds, it->second);
        if (pi != pj) {
            if (ds[pi] > ds[pj])
                swap(pi, pj);
            ds[pi] += ds[pj];
            ds[pj] = pi;
        }
    }
    else
        m[mask] = i;
}
vector<int> groupStrings(vector<string>& words) {
    vector<int> ds(words.size(), -1);
    for (int i = 0; i < words.size(); ++i) {
        int mask = accumulate(begin(words[i]), end(words[i]), 0, [](int m, char ch){ return m | (1 << (ch - 'a')); });
        merge(ds, i, mask);
        for (int j = 0; j < 26; ++j)
            if (mask & (1 << j))
                merge(ds, i, mask ^ (1 << j));
    }
    return {(int)count_if(begin(ds), end(ds), [](int i){ return i < 0; }), - *min_element(begin(ds), end(ds)) };
}
```