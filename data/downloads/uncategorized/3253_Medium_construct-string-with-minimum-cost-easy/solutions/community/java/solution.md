# [Java] Trie + DP Optimized Top-Down Solution

**Author:** whoawhoawhoa
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5638972/](https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5638972/)

---

# Intuition
Look-alike [LC-140](https://leetcode.com/problems/word-break-ii/) task. We can use trie for faster sub-string match.

# Approach
We build a trie from the $$words$$. Then we do a Top-Down DP. For each index go through Trie. If we find the end of the word - we can try to search starting with its end.

# Complexity
- Time complexity:
$$O(target.length()*words.length)$$

- Space complexity:
$$O(target.length()^2)$$

# Code
```
class Solution {
    static Node root;
    public int minimumCost(String target, String[] words, int[] costs) {
        root = new Node();
        for (int i = 0; i < words.length; i++) {
            insert(words[i].getBytes(), costs[i]);
        }
        Integer[] dp = new Integer[target.length()];
        int res = recursion(dp, target.getBytes(), 0);
        return res == Integer.MAX_VALUE ? -1 : res;
    }

    static int recursion(Integer[] dp, byte[] b, int ix) {
        if (ix == b.length) {
            return 0;
        }
        if (dp[ix] != null) {
            return dp[ix];
        }
        int res = Integer.MAX_VALUE;
        Node n = root;
        for (int i = ix; i < b.length; i++) {
            int j = b[i] - 'a';
            if (n.children[j] == null) {
                break;
            }
            n = n.children[j];
            if (n.cost != Integer.MAX_VALUE) {
                int tmp = recursion(dp, b, i + 1);
                if (tmp != Integer.MAX_VALUE) {
                    res = Math.min(res, tmp + n.cost);
                }
            }
        }

        return dp[ix] = res;
    }

    static void insert(byte[] b, int cost) {
        Node n = root;
        for (int i = 0; i < b.length; i++) {
            int ix = b[i] - 'a';
            if (n.children[ix] == null) {
                n.children[ix] = new Node();
            }
            n = n.children[ix];
        }

        n.cost = Math.min(n.cost, cost);
    }
}

class Node {
  Node[] children;
  int cost;

  Node() {
    cost = Integer.MAX_VALUE;
    children = new Node[26];
  }
}
```