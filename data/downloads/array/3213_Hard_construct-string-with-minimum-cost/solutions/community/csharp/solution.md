# Trie + Enumerable + DP

**Author:** funleifun
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5438396/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5438396/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
+ To match a string from a set of strings, use Trie;
+ To repeat similar operations base on the result of previous operaions, use DP.

# Approach
<!-- Describe your approach to solving the problem. -->
###### Example:
target:
>    "abcde..."

words:
>    ["a", "ab", "abc", ...]

costs:
>    [1, 10, 100, ...]

###### Dynamic programming logic:
```
MinimumCost
= MinimumCostFromIndex(0)
= minimum of (
    1    + MinimumCostFromIndex(1) // choose word "a"
    10   + MinimumCostFromIndex(2) // choose word "ab"
    100  + MinimumCostFromIndex(3) // choose word "abc"
    ... // any word that matchs target from index 0
  )
```
We need to memorize the results for we may use the value of MinimumCostFromIndex(i) many times.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    class Node {
        public bool isLast = false;
        public int cost = int.MaxValue;
        Node[] sub = new Node[26];
        public Node this[char c] {
            get { return sub[c - 'a']; }
            set { sub[c - 'a'] = value; }
        }
    }
    class Trie {
        public Node node = new();
        public void Add(string s, int cost) {
            Node p  = node;
            foreach (var c in s) {
                if (p[c] == null) p[c] = new();
                p = p[c];
            }
            p.isLast = true;
            if (cost < p.cost) p.cost = cost;
        }
        public IEnumerable<(int, int)> MatchFrom(string s, int startIndex = 0) {
            Node p = node;
            for (int i = startIndex; i < s.Length; i++) {
                p = p[s[i]];
                if (p == null) break;
                if (p.isLast) 
                    yield return (i - startIndex + 1, p.cost);
            }
        }
    }

    public int MinimumCost(string target, string[] words, int[] costs) {
        int n = target.Length, unknown = -2, unreachable = -1;

        Trie trie = new();
        for (int i = 0; i < words.Length; i++) 
            trie.Add(words[i], costs[i]);

        int[] memo = new int[n];
        Array.Fill(memo, unknown);

        return MinCostFrom(0);

        int MinCostFrom(int idx) {
            if (idx > n) return unreachable;
            if (idx == n) return 0;
            if (memo[idx] != unknown) return memo[idx];

            int min = int.MaxValue;
            foreach (var (len, cost) in trie.MatchFrom(target, idx)) {
                var after = MinCostFrom(idx+len);
                if (after != unreachable)
                    min = Math.Min(min, cost + after);
            }
            int minCost = min == int.MaxValue ? unreachable : min;
            memo[idx] = minCost;
            return minCost;
        }
    }
}
```