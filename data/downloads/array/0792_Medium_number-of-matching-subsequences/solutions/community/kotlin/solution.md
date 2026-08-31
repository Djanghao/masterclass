# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/2309279/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/2309279/)

---


(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).

```

struct Node {
    const string& word;
    int index;
    Node(const string &word, int index) : word(word), index(index) {}
};
class Solution {
public:
    int numMatchingSubseq(const string& s, vector<string>& words) {
        vector<Node> buckets[26];
        for (string& word : words) {
            char startingChar = word[0];
            buckets[startingChar-'a'].emplace_back(word, 0);
        }
        int ans = 0;
        for (char c : s) {
            auto currBucket = buckets[c-'a'];
            buckets[c-'a'].clear();
            for (Node& node : currBucket) {
                ++node.index; // Point to next character of node.word
                if (node.index == node.word.size()) {
                    ++ans;
                } else {
                    buckets[node.word[node.index]-'a'].push_back(node);
                }
            }
        }
        return ans;
    }
};

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
