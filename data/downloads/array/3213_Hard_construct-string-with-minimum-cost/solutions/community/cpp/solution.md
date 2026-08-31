# Monster Problem 4: NsqrtN Trie Aho Corasick DP

**Author:** Aylup
**Votes:** 53
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5431950/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5431950/)

---

# Why Aho Corasick is needed for Trie Solutions

Many solutions that passed don't use Aho Corasick, making this problem much simpler. However, the time complexity of many of those solutions is unclear and their acceptence may just be a case of weak test cases. The following valid (and unused) test case breaks several of these.

```py
n = 5 * 10**4
target = 'a'*n
words = ['a', target[:-1]]
costs = [10000, 1]
```

You can generate this in python and see for yourself by running it. Feel free to let me know if you have a Trie DP solution that has provable $$O(N\\sqrt{N})$$ complexity. But the reason why I called this a Monster problem for a Leetcode contest is because I believe it requires this or a solution of similar complexity.

# Intuition

The problem asks you to find the minimum cost given a bunch of operations. In otherwords, it's asking to find the result of picking the optimal choices.

When I hear "optimal choices," I immediately think DP, because it allows me to simulate those choices quickly, instead of inventing and proving a greedy solution.

However, what are our choices? We are given one big string `target` and a list of `words` that we need to match.

This naturally leads to me to think of a Trie.

With that in mind, I'm looking at this problem and I notice that the recurrence relation I need to do DP requires that I find all matches in `words` that are suffixes of my prefix of `target`.

To check for a single word, prefix - suffix matching can be done with KMP or Boyer Moore, but for multiple words we need to combine those ideas with the Trie Algorithm Aho Corasick.

So with that, I came up with a recurrence relation, optimized it with Dynamic programming, and pruned out all irrelevant decisions (words that cannot match) with a Trie and Aho Corasick.

# Approach

Let `dp[i]` be the minimum amount of cost to form the `i'th` prefix of target `target[:i]`

If this `target[:i]` is possible to create using `words`, we know that some word `j` must be a suffix of `target[:i]`.
`target[:i] = target[:i-len(words[j])] + words[j]`

However, we also need to ensure that `target[:i-len(words[j])]` is also possible to form (and minimally). Luckily, we already are writing the function that solves that, so this subproblem can be solved recursively. This leads to recurrence relation:

```py
dp[i] = 
    min(
        dp[i - len(words[j])] + cost[j]
            for j in range(len(words))
                if target[:i].endswith(words[j])
    )
```

That last inner for loop is painfully expensive. Ideally, we would want to only loop over the ones that match. Aho Corasick allows us to do this by traversing our Trie every time we append a character.

This way every time I append a character I can return the list of words (by index) that are a suffix of the current string I'm building.


`words = [abc, ab, a, bc]`
`current_prefix = "ab"`

`suffixesAfterAppending('c')` returns -> `["bc", "abc"]` (by index)

Because `"bc"` and `"abc"` are suffixes of `"abc"`

Remember we don't need to return the string, we just need the index to find the size and the cost.

There's still a bit of magic, because why is this not potentially quadratic in time complexity, since those are some massive constraints.

# Complexity
- Time complexity:
$$O(n\\sqrt{n})$$

I call `suffixesAfterAppending()` every time I add a character (so `n` times).

`suffixesAfterAppending()` at most returns `sqrt{n}` results

## Proof

The worst case for matches is all of them match right? Because duplicates are easily handled (just use the one with min cost), they have to be each a unique length. To maximize the number of words that match, we can use only 1 type of character and greedily make strings of incremental minimal length starting with 1.

target = `"aaaaaa...."`
words = `["a", "aa", "aaa", ...]`

Looks really bad, right?

However, we can show that the `len(words)` would be at most $$O(\\sqrt{n})$$

`sum(len(w) for w in words) <= n`

Using our greedy construction

Let `k = len(words) = max(map(len, words))` 

This is an arithmetic sum

$$1 + 2 + 3 + \\ldots + k = \\frac{(k + 1) * k}{2}$$

$$\\frac{(k + 1) * k}{2} \\leq n$$
so $$k \\leq \\sqrt{2 * n}$$

So at most we have $$\\sqrt{n}$$ matches

- Space complexity:
$$O(n)$$

Just the space for the DP table and the Trie

# Code

```
constexpr int INF = 2e9;
struct TrieNode {
    int len = 0, sfx = 0, dict = 0, cost = INF;
    std::array<int, 26> next;
};

struct Trie {
    static constexpr int unassigned = 0, root = 1;
    std::vector<TrieNode> tree;

    int newNode(TrieNode node) {
        tree.push_back(node);
        return tree.size() - 1;
    }

    Trie() {
        tree.assign(2, {});
        tree[unassigned].len = -1;
        tree[unassigned].next.fill(root);
    }

    void addWord(std::string_view s, int cost) {
        int u_id = root;
        for (char c : s) {
            int x = c - 'a';
            if (tree[u_id].next[x] == unassigned) {
                tree[u_id].next[x] = newNode({.len = tree[u_id].len + 1});
            }
            u_id = tree[u_id].next[x];
        }
        tree[u_id].cost = std::min(tree[u_id].cost, cost);
    }

    void ahoCorasick() {
        std::deque<int> q{root};
        while (!q.empty()) {
            auto [u, u_id] = ref(q.front());
            q.pop_front();
            for (int x = 0; x < 26; ++x) {
                auto [v, v_id] = ref(u->next[x]);
                auto [s, s_id] = ref(tree[u->sfx].next[x]);
                if (v_id == unassigned) {
                    u->next[x] = s_id;
                } else {
                    v->sfx = s_id;
                    v->dict = s->cost != INF ? s_id : s->dict;
                    q.push_back(v_id);
                }
            }
        }
    }

    std::tuple<TrieNode*, int> ref(int id) {
        return {&tree[id], id};
    }

    TrieNode* operator[](int id) {
        return &tree[id];
    }
};

class Solution {
public:
    int minimumCost(string target, vector<string>& words, vector<int>& costs) {
        int n = target.size(), m = words.size();
        Trie trie;
        for (int i = 0; i < m; ++i) {
            trie.addWord(words[i], costs[i]);
        }
        trie.ahoCorasick();
        std::vector<int> dp(n + 1, INF);
        dp[0] = 0;
        auto u = trie[Trie::root];
        for (int i = 1; i <= n; ++i) {
            int x = target[i - 1] - 'a';
            u = trie[u->next[x]];
            auto v = u->cost != INF ? u : trie[u->dict];
            while (v->cost != INF) {
                dp[i] = std::min(dp[i], dp[i - v->len] + v->cost);
                v = trie[v->dict];
            }
        }
        return dp[n] == INF ? -1 : dp[n];
    }
};
```