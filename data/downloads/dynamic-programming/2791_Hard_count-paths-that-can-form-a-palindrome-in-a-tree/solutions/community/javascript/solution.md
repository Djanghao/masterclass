# 🌳 [VIDEO] Solving the Tree Palindrome Path Challenge 🔤

**Author:** vanAmsen
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3811843/](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3811843/)

---

# Intuition
Looking at this problem, my first thought was to use depth-first search (DFS) to traverse through the tree and calculate the character frequency of each path from the root node to every other node. Also, since we're dealing with palindromes, we'd need to consider the frequency of each character on a path. For a sequence to be rearranged into a palindrome, all characters, except at most one, must appear an even number of times. Therefore, bit manipulation seemed like a viable option to keep track of these frequencies.

https://youtu.be/AAXzbS77cRI

# Approach
My approach is to use bit manipulation along with DFS. The main function `countPalindromePaths` calculates the total number of paths that can form a palindrome. For each node in the tree, I calculate a bitmask that represents the character frequency of the path from the root node to the current node. Then for each lowercase English letter, I add the count of paths that can merge with the current path to form a palindrome to the result. The helper function `bit` uses recursion and bit manipulation to calculate the bitmask for each path.

# Complexity
- Time complexity: The time complexity is \\(O(26n)\\), because for each of the \\(n\\) nodes, we may need to loop through all 26 lowercase English letters to calculate the bitmask.

- Space complexity: The space complexity is \\(O(n)\\), because we need to store the bitmask for each node in the `dp` array.

# Code
```Python []
class Solution:
    def countPalindromePaths(self, parent: List[int], s: str) -> int:
        n = len(parent) 
        dp = [0]*n 
        res = 0 
        count = defaultdict(int) 
        for i in range(n): 
            mask = self.bit(dp, parent, s, i) 
            v = count[mask] 
            for j in range(26): 
                res += count[mask ^ (1 << j)] 
            res += v 
            count[mask] += 1 
        return res 

    def bit(self, dp, parent, s, i): 
        if i > 0 and dp[i] == 0: 
            dp[i] = self.bit(dp, parent, s, parent[i]) ^ (1 << (ord(s[i]) - ord('a'))) 
        return dp[i]
```
``` JavaScript []
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var countPalindromePaths = function(parent, s) {
    const n = parent.length;
    const dp = Array(n).fill(0);
    let res = 0;
    const count = new Map();

    function bit(parent, s, i) {
        if (i > 0 && dp[i] === 0)
            dp[i] = bit(parent, s, parent[i]) ^ (1 << (s.charCodeAt(i) - 97));
        return dp[i];
    }

    for (let i = 0; i < n; i++) {
        const mask = bit(parent, s, i);
        const v = count.get(mask) || 0;
        for (let j = 0; j < 26; j++)
            res += count.get(mask ^ (1 << j)) || 0;
        res += v;
        count.set(mask, v + 1);
    }
    
    return res;
};

```
``` C# []
public class Solution {
    int[] dp;
    Dictionary<int, int> count;
    public long CountPalindromePaths(IList<int> parent, string s) {
        int n = parent.Count;
        dp = new int[n];
        count = new Dictionary<int, int>();
        long res = 0;
        for (int i = 0; i < n; i++) {
            int mask = Bit(parent, s, i);
            int v = count.ContainsKey(mask) ? count[mask] : 0;
            for (int j = 0; j < 26; j++)
                res += count.ContainsKey(mask ^ (1 << j)) ? count[mask ^ (1 << j)] : 0;
            res += v;
            if (count.ContainsKey(mask)) count[mask] = v + 1;
            else count.Add(mask, v + 1);
        }
        return res;
    }

    private int Bit(IList<int> parent, string s, int i) {
        if (i > 0 && dp[i] == 0)
            dp[i] = Bit(parent, s, parent[i]) ^ (1 << (s[i] - 'a'));
        return dp[i];
    }
}
```
``` Java []
class Solution {
    List<Integer> dp;
    Map<Integer, Integer> count;
    
    public long countPalindromePaths(List<Integer> parent, String s) {
        int n = parent.size();
        dp = new ArrayList<>(Collections.nCopies(n, 0));
        count = new HashMap<>();
        long res = 0;
        for (int i = 0; i < n; i++) {
            int mask = bit(parent, s, i);
            int v = count.getOrDefault(mask, 0);
            for (int j = 0; j < 26; j++)
                res += count.getOrDefault(mask ^ (1 << j), 0);
            res += v;
            count.put(mask, v + 1);
        }
        return res;
    }

    private int bit(List<Integer> parent, String s, int i) {
        if (i > 0 && dp.get(i) == 0)
            dp.set(i, bit(parent, s, parent.get(i)) ^ (1 << (s.charAt(i) - 'a')));
        return dp.get(i);
    }
}
```
``` C++ []
class Solution {
public:
    long long countPalindromePaths(vector<int>& parent, string s) {
        int n = parent.size();
        long long res = 0;
        vector<int> dp (n);
        unordered_map<int, int> count;
        for (int i = 0; i < n; i++) {
            int mask = bit(dp, parent, s, i);
            for (int j = 0; j < 26; j++)
                res += count.count(mask ^ (1 << j)) ? count[mask ^ (1 << j)] : 0;
            res += count[mask]++;
        }
        return res;
    }

    int bit(vector<int>& dp, vector<int>& parent, string& s, int i) {
        if (i > 0 && dp[i] == 0)
            dp[i] = bit(dp, parent, s, parent[i]) ^ (1 << (s[i] - 'a'));
        return dp[i];
    }
};
```