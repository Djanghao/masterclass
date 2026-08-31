# Java Trie + DP (with comments)

**Author:** BradleyPelton
**Votes:** 22
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5431698/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5431698/)

---

# Summary
Brilliant Problem. Applying two advanced patterns at the same time, very cool

# Intuition
- Minimum cost  should immediately make you think DP
- String prefix should immediately make you think Trie

### Similar Problem
- This is nearly identical to !139 https://leetcode.com/problems/word-break/description/
- Instead, we need to return the minimum cost instead of just true/false


# Approach
- For any given index, return the minimum cost for the remaining substring `target[index..]`
- Store the possible words we can use in a Trie structure (including the cost if the node `endsWords`)
- For a given index, walk down the Trie and keep track of the minimum cost.
- Cache the minimum cost using a DP array.


# Code
```
class Solution {
    TrieNode root; // root of Trie structure
    Integer[] dp;  // Cached minimum costs
    int n;
    public int minimumCost(String target, String[] words, int[] costs) {
        root = new TrieNode();
        buildTrie(words, costs); // store all words in a Trie data structure with the associated costs

        n = target.length();
        dp = new Integer[n];

        int ans = topDownDP(target, 0);
        if (ans == Integer.MAX_VALUE) {
            ans = -1;
        }
        System.out.println(ans);
        return ans;
    }

    // Return the minimum cost it takes to construct the substring `target[currIndex..]
    public int topDownDP(String target, int currIndex) {
        if (currIndex >= n) {
            return 0; // there are no more letters, so the cost is 0.
        }
        if (dp[currIndex] != null) { // if we've already calculated this index minCost
            return dp[currIndex];
        }

        // The default answer is Integer.MAX_VALUE, meaning "impossible" starting at currIndex
        int ans = Integer.MAX_VALUE;

        TrieNode currNode = root;
        for (int i = currIndex; i < n; i++) {
            char nextChar = target.charAt(i);
            if (!currNode.containsKey(nextChar)) {
                break; // no such word exists in the Trie, no point in continuing
            }
            currNode = currNode.get(nextChar); // step down the Trie

            if (currNode.endsWord) {
                int localAns = topDownDP(target, i + 1);
                // if localAns == Integer.MAX_VALUE, it's impossible to use this word as a substring of `target`
                if (localAns != Integer.MAX_VALUE) {
                    localAns += currNode.cost;
                    ans = Math.min(ans, localAns);
                }
            }
        }

        dp[currIndex] = ans;
        return ans;
    }

    private void buildTrie(String[] words, int[] costs) {
        for (int i = 0; i < words.length; i++) {
            TrieNode nextNode = root;
            for (char c : words[i].toCharArray()) {
                if (!nextNode.containsKey(c)) {
                    nextNode.put(c);
                }
                nextNode = nextNode.get(c);
            }

            if (nextNode.endsWord) {
                nextNode.cost = Math.min(nextNode.cost, costs[i]); // dumb, duplicate word condition.
            } else {
                nextNode.endsWord = true;
                nextNode.cost = costs[i];
            }
        }
    }

    class TrieNode {
        boolean endsWord = false;
        TrieNode[] childrenNodes;
        // Non-standard Trie. This Trie keeps track of costs inside the node
        int cost;
        public TrieNode() {
            childrenNodes = new TrieNode[26];
        }

        public TrieNode get(Character c) {
            return childrenNodes[c - 97];
        }

        public void put(Character c) {
            if (!containsKey(c)) {
                childrenNodes[c - 97] = new TrieNode();
            }
        }

        public boolean containsKey(Character c) {
            return childrenNodes[c - 97] != null;
        }
    }
}
```