# Simple DFS solution in C++, java & python

**Author:** cpcs
**Votes:** 86
**Link:** [https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3804246/](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3804246/)

---

# Intuition
Calculate the frequency of the each letter for each path from root to node.
Indeed only the parity matters, so for each node we can save a 26 bits integer (bitmap) and the set bits are the letters that have odd frequencies in the (unqiue) simple path from root to it.

Node u and Node v is valid if and only if the there is at most 1 letter that has odd frequency on the path between u and v.

For each letter, its frequency on u-v path == (frequency on root->u path) + (frequency on root->v path) - 2 * (frequency on root -> LCA(u, v) path)

Here, LCA is the lowest common ancestor of u and v.
Note, if we only consider the parity (or just consider % 2), the 2 * (frequency on root -> LCA(u, v) path) part doesnt matter (since it's always even), so our interested part is just (frequency on root->u path) + (frequency on root->v path), both parts can be just calculated in a simple DFS.



# Approach
As mentioned before, for each node we can save a 26 bits integer (bitmap) and the set bits are the letters that have odd frequencies in the (unqiue) simple path from root to it. We can call these values mask. We can also save a hashmap keyed by masks and valued by the frequency of the masks. We update the hashmap in DFS as well.

For each mask value, before updating it, we need to consider how many previous values mask' that have (mask' ^ mask) contains at most 1 set bit. Then we can just query the hashmap by 0, 1, 2, 4, 8 , 16....until (1 << 25) since they are only interested results of (mask' ^ mask).

# Complexity
O(n * 26)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
    long long dfs(int x, int mask, const string &s, const vector<vector<int>>& con, unordered_map<int, int>& have) {
        long long r = 0;
        if (x) {
            mask ^= 1 << (s[x] - 'a');
            for (int i = 1 << 25; i; i >>= 1) {
                if (have.count(mask ^ i)) {
                    r += have[mask ^ i];
                }
            }
            r += have[mask]++;
        }
        for (int y : con[x]) {
            r += dfs(y, mask, s, con, have);
        }
        return r;
    }
public:
    long long countPalindromePaths(vector<int>& parent, string s) {
        const int n = s.length();
        vector<vector<int>> con(n);
        for (int i = 1; i < n; ++i) {
            con[parent[i]].push_back(i);
        }
        unordered_map<int, int> have;
        have[0] = 1;
        return dfs(0, 0, s, con, have);
        
    }
};
```

Java
```
class Solution {
     private long dfs(int x, int mask, String s, List<List<Integer>> con, Map<Integer, Integer> have) {
        long r = 0;
        if (x != 0) {
            mask ^= 1 << (s.charAt(x) - 'a');
            for (int i = 1 << 25; i > 0; i >>= 1) {
                if (have.containsKey(mask ^ i)) {
                    r += have.get(mask ^ i);
                }
            }
            r += have.getOrDefault(mask, 0);
            have.put(mask, have.getOrDefault(mask, 0) + 1);
        }
        for (int y : con.get(x)) {
            r += dfs(y, mask, s, con, have);
        }
        return r;
    }

    public long countPalindromePaths(List<Integer> parent, String s) {
        int n = s.length();
        List<List<Integer>> con = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            con.add(new ArrayList<>());
        }
        for (int i = 1; i < n; i++) {
            con.get(parent.get(i)).add(i);
        }
        Map<Integer, Integer> have = new HashMap<>();
        have.put(0, 1);
        return dfs(0, 0, s, con, have);
    }
}
```

Python
```
class Solution:

    def dfs(self, x: int, mask: int, s: str, con: List[List[int]], have: Dict[int, int]) -> int:
        r: int = 0
        if x:
            mask ^= 1 << (ord(s[x]) - ord('a'))
            i: int = 1 << 25
            while i:
                if mask ^ i in have:
                    r += have[mask ^ i]
                i >>= 1
            r += have.get(mask, 0)
            have[mask] = have.get(mask, 0) + 1
        for y in con[x]:
            r += self.dfs(y, mask, s, con, have)
        return r

    def countPalindromePaths(self, parent: List[int], s: str) -> int:
        n: int = len(s)
        con: List[List[int]] = [[] for _ in range(n)]
        for i in range(1, n):
            con[parent[i]].append(i)
        have: Dict[int, int] = {0: 1}
        return self.dfs(0, 0, s, con, have)

```