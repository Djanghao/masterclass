# C++ 72ms, beats 100%, memory beats 95%, hash table, no sorting

**Author:** dubiety
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-abbreviation/solutions/821765/](https://leetcode.com/problems/word-abbreviation/solutions/821765/)

---

I solved this problem in an intuitive way.
First, we process the words in `dict`, store the first around answer in `ans` vector. Meanwhile, we record an `"abbreviation" -> indices` hash map, `abbrevs`

For example, if we have `dict`: `["like", "internal", "interval", "international", "intennel"]`
We process each word at first round, so we have: `ans` = `["l2e", "i6l", "i6l", "i11l", "i6l"]`
At the same time, we make a reverse lookup hash map `abbrevs`, which is a `string: vector<int>` hash map, the `vector<int>` store the indices that have the same abbreviation:
```
abbrevs = [
    "l2e": [0],
	"i6l": [1,2,4],
	"i11l": [3]
]
```

Next, we iterate through `abbrevs`. If there's only 1 element in the abbreviation, it means there's no collision, and we can move on to next abbreviation.

If there are multilple word abbreviations that collid with other words, in this example: `[1, 2, 4]` which are `["internal", "interval", "intennel"]`, we iterate any 2 of them and decide the longest common prefix of every words, and then decide how to abbreviate the words.

For `internal`, it has longest common prefix with `interval`, so `internal` cannot be abbreviated, we update `ans` from `i6l` to `internal` at `ans[1]`

For `interval`, it has longest common prefix with `internal`, which cannot be abbreviated either, we update `ans` from `i6l` to `interval` at `ans[2]`

For `internnel`, it has longest common prefix of 4 chars with either `interval` and `internal`, we update `ans` from `i6l` to `intern2l` at `ans[5]`

Also, since we need to get "longest" common prefix, we can use a `dp` vector to memorize the previous calculated result.

```cpp
class Solution {
public:
    vector<string> wordsAbbreviation(vector<string>& dict) {
        int n = dict.size();
        vector<string> ans(n);
        unordered_map<string, vector<int>> abbrevs;

        // Go through all words in dict
		// Update ans and also record it's abbreviation and index mapping
        for (int i = 0; i < n; i++) {
            string abbrev = abbreviate(dict[i]);
            abbrevs[abbrev].emplace_back(i);
            ans[i] = abbrev;
        }
		
		// Check duplicate abbreviations
        for (auto& words: abbrevs) {
		    // Skip words without duplicates
            if (words.second.size() < 2) continue;

            // Handle the collisions
            auto& indices = words.second;
            int len = indices.size();
			// Use a DP vector to avoid re-calculation of LCP between 2 words
            vector<int> dp(len, 0);
            for (int i = 0; i < len; i++) {
                string& cur_str = dict[indices[i]];
                for (int j = i + 1; j < len; j++) {
                    int sim = LCP(cur_str, dict[indices[j]]);
                    if (sim > dp[i]) dp[i] = sim;
                    if (sim > dp[j]) dp[j] = sim;
                }
                if (dp[i] >= cur_str.length() - 3) {
                    ans[indices[i]] = cur_str;
                } else {
                    string left = cur_str.substr(dp[i]);
                    ans[indices[i]] = cur_str.substr(0, dp[i]) + abbreviate(left);
                }
            }
        }
        return ans;
    }
private:
    // Abbreviate a word
	// For example: "internal" => "i6l"; "cow" => "cow"
    inline string abbreviate(string& str) {
        if (str.length() <= 3) return str;
        return str[0] + to_string(str.length() - 2) + str.back();
    }
	
	// Check longest common prefix, and return LCP length
	// For example: ("internal", interval") => return 5
    inline int LCP(string& s1, string& s2) {
        if (s1.length() != s2.length()) return 0;
        int i = 0;
        for (; i < s1.length(); i++) {
            if (s1[i] != s2[i]) return i;
        }
        return i;
    }
};
```

**Time complexity**: In worst case, all words are abbreviated to the same result. We need to compare all of them again, so it will be `O(C^2)`, where `C` is the sum length of all characters in the word list(`dict`)
However, in general, if we don't have too many collisions, the time should be close to `O(C)`
**Space complexity**: `O(C)` for `ans`, `O(W)` for hash map `abbrevs`, where `W` is the word count in list