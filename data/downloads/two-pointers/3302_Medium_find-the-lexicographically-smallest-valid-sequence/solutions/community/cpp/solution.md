# Recursion with Greedy

**Author:** paardarshee
**Votes:** 29
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844284/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844284/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about finding whether `word2` can be matched as a subsequence of `word1` with at most one mismatch. The idea is to traverse both strings simultaneously, trying to match characters. If a character mismatch occurs, we have one chance to ignore this mismatch (using a flag). Memoization helps to avoid redundant computations by storing previously visited states.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Use a recursive function with memoization (via a set) to avoid reprocessing the same state.
2. The recursive function `start()` takes three parameters: current indices `i` (for `word1`) and `j` (for `word2`), and a `flag` that indicates whether a mismatch is still allowed.
3. If characters at `i` and `j` match, move both indices forward. If they don't match, either skip a character in `word1` (if the flag allows) or continue searching for the next match.
4. If the entire `word2` is matched, return true and store the indices in the solution vector. Reverse the vector at the end to get the correct order of indices.
5. If no valid subsequence is found, return an empty vector.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is approximately $$O(nmlogm)$$, where `m` is the length of `word1` and `n` is the length of `word2`. Each combination of `i` and `j` can be visited once with a possible flag state, making the maximum number of recursive calls.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is $$O(n*m)$$ due to the memoization set `s1` storing visited states. 

# Code
```cpp
class Solution {
    set<pair<int, pair<int, int>>> s1;
public:
    bool start(int i, int j, int flag, string &word1, string &word2, vector<int> &sol) {
        if (j >= word2.size()) return true;
        if (i >= word1.size()) return false;
        if (s1.count({i, {j, flag}})) return false;

        bool f1 = false;

        if (word1[i] == word2[j]) {
            f1 = start(i + 1, j + 1, flag, word1, word2, sol);
            if (f1) sol.push_back(i);
            return f1;
        } else {
            if (flag > 0) {
                f1 = start(i + 1, j + 1, 0, word1, word2, sol);
                if (f1) {
                    sol.push_back(i);
                    return true;
                }
            }

            while (i < word1.size() && word1[i] != word2[j]) i++;
            if (i < word1.size()) {
                f1 = start(i + 1, j + 1, flag, word1, word2, sol);
                if (f1) {
                    sol.push_back(i);
                    return true;
                }
            }
        }

        s1.insert({i, {j, flag}});
        return f1;
    }

    vector<int> validSequence(string word1, string word2) {
        vector<int> sol;
        if (start(0, 0, 1, word1, word2, sol)) {
            reverse(sol.begin(), sol.end());
            if (sol.size() == word2.size()) return sol;
        }
        return {};
    }
};
```

# Note :- `This Solution is not working now`
