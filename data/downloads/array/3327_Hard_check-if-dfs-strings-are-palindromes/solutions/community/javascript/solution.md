# Easiest Fastest Solution || Most Optimized solution

**Author:** jiya31
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5941660/](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5941660/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves traversing a tree-like structure and determining if a certain condition is met based on the traversal path. One approach to solve this problem is to perform a Depth First Search (DFS) traversal of the tree and check the condition at each step.


# Approach
<!-- Describe your approach to solving the problem. -->

1. Create a HashMap t to store the parent-child relationships based on the parent array.
2. Define a recursive function dfs that traverses the tree from the root node (-1) and accumulates the string representation of the path.
3. Check if the concatenated string from the path is a palindrome. If it is, mark the current node as a valid result
4. Create a result array of boolean values based on the results map filled during the traversal.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def findAnswer(self, parent: List[int], s: str) -> List[bool]:
        t = {}
        results = {}

        for i in range(len(parent)):
            p = parent[i]
            t[p] = t.get(p, []) + [i]

        def dfs(x):
            if x not in t:
                results[x] = True
                return s[x]
            st = ""
            for v in t[x]:
                st += dfs(v)
            st += s[x]
            if st[::-1] == st:
                results[x] = True
            return st

        dfs(-1)

        ans = [False] * len(parent)
        for i in results.keys():
            ans[i] = results[i]
        return ans
```

```C++ []
class Solution {
public:
    vector<bool> findAnswer(vector<int>& parent, string s) {
        unordered_map<int, vector<int>> t;
        unordered_map<int, bool> results;

        for (int i = 0; i < parent.size(); i++) {
            int p = parent[i];
            t[p].push_back(i);
        }

        auto dfs = [&](int x) -> string {
            if (t.find(x) == t.end()) {
                results[x] = true;
                return string(1, s[x]);
            }
            string st = "";
            for (int v : t[x])
                st += dfs(v);
            st += s[x];
            if (st == string(st.rbegin(), st.rend())) {
                results[x] = true;
            }
            return st;
        };

        dfs(-1);

        vector<bool> ans(parent.size(), false);
        for (auto i : results) {
            ans[i.first] = i.second;
        }
        return ans;
    }
};
```

```Java []
public class Solution {

    public List<Boolean> findAnswer(int[] parent, String s) {
        Map<Integer, List<Integer>> t = new HashMap<>();
        Map<Integer, Boolean> results = new HashMap<>();

        for (int i = 0; i < parent.length; i++) {
            int p = parent[i];
            t.computeIfAbsent(p, k -> new ArrayList<>()).add(i);
        }

        dfs(-1, t, results, s);

        List<Boolean> ans = new ArrayList<>();
        for (int i = 0; i < parent.length; i++) {
            ans.add(results.getOrDefault(i, false));
        }
        return ans;
    }

    private String dfs(int x, Map<Integer, List<Integer>> t, Map<Integer, Boolean> results, String s) {
        if (!t.containsKey(x)) {
            results.put(x, true);
            return String.valueOf(s.charAt(x));
        }
        StringBuilder st = new StringBuilder();
        for (int v : t.get(x)) {
            st.append(dfs(v, t, results, s));
        }
        st.append(s.charAt(x));
        if (st.toString().equals(new StringBuilder(st).reverse().toString())) {
            results.put(x, true);
        }
        return st.toString();
    }
}
```

```JavaScript []

class Solution {
  findAnswer(parent, s) {
    let t = {};
    let results = {};

    for (let i = 0; i < parent.length; i++) {
      let p = parent[i];
      if (!t[p]) {
        t[p] = [];
      }
      t[p].push(i);
    }

    const dfs = (x) => {
      if (!t[x]) {
        results[x] = true;
        return s.charAt(x);
      }
      let st = "";
      for (let v of t[x]) {
        st += dfs(v);
      }
      st += s.charAt(x);
      if (st === st.split("").reverse().join("")) {
        results[x] = true;
      }
      return st;
    };

    dfs(-1);

    let ans = new Array(parent.length).fill(false);
    for (let i in results) {
      ans[i] = results[i];
    }
    return ans;
  }
}
```


