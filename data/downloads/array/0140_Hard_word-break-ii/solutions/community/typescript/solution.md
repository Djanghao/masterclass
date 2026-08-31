# Fastest execution || beats 95% users with java || pthon3 || C++ || typescript || DFS & Memorization

**Author:** SanketSawant18
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/5203820/](https://leetcode.com/problems/word-break-ii/solutions/5203820/)

---

# Approach
Depth-First Search (DFS) and Memoization.

# Complexity
- Time complexity: O(n^2.2^n)

- Space complexity: O(n.2^n)

# Explanation 
1. **Class Variables:**

- wordSet: A Set of valid words from the dictionary for quick lookup.
- memo: A Map used to store intermediate results for substrings to avoid redundant computations.
2. **wordBreak Method:**

- Initializes wordSet and memo.
- Calls _wordBreak_topdown to get all possible sentences as lists of words.
- Converts these lists of words into single strings with words joined by spaces.
- Returns the final list of segmented sentences.
3. **_wordBreak_topdown Method:**

- Memoization Check: If the result for the current substring s is already computed, return the memoized result.
- Base Case: If s is empty, add an empty list to the result (indicating a valid end of sentence) and return.
- Recursive Case:
    - Iterate through all possible end indices for the first word in s.
    - If the extracted word is in the wordSet, recursively process the remaining substring.
    - Combine the current word with the results from the recursive call to form complete sentences.
    - Store the result in memo for the current substring and return it.
4. **Main Processing:**

- Start processing from the beginning of the string s using _wordBreak_topdown.
- Convert the results from lists of words to strings joined by spaces.
Return the final results.


---

```java []
import java.util.*;

class Solution {
    private Set<String> wordSet;
    private Map<String, List<List<String>>> memo;

    public List<String> wordBreak(String s, List<String> wordDict) {
        wordSet = new HashSet<>(wordDict);
        memo = new HashMap<>();
        
        List<List<String>> sentences = _wordBreak_topdown(s);
        
        List<String> result = new ArrayList<>();
        for (List<String> words : sentences) {
            result.add(String.join(" ", words));
        }
        
        return result;
    }

    private List<List<String>> _wordBreak_topdown(String s) {
        if (memo.containsKey(s)) {
            return memo.get(s);
        }

        List<List<String>> result = new ArrayList<>();
        if (s.isEmpty()) {
            result.add(new ArrayList<>());
            return result;
        }

        for (int endIndex = 1; endIndex <= s.length(); endIndex++) {
            String word = s.substring(0, endIndex);
            if (wordSet.contains(word)) {
                List<List<String>> subSentences = _wordBreak_topdown(s.substring(endIndex));
                for (List<String> subSentence : subSentences) {
                    List<String> newSentence = new ArrayList<>(subSentence);
                    newSentence.add(0, word);
                    result.add(newSentence);
                }
            }
        }

        memo.put(s, result);
        return result;
    }
}

```
```python3 []
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        wordSet = set(wordDict)
        memo = defaultdict(list)

        def _wordBreak_topdown(s):
            """return list of word lists"""
            if not s:
                return [[]]  # list of empty list

            if s in memo:
                return memo[s]

            for endIndex in range(1, len(s) + 1):
                word = s[:endIndex]
                if word in wordSet:
                    for subsentence in _wordBreak_topdown(s[endIndex:]):
                        memo[s].append([word] + subsentence)
            return memo[s]

        _wordBreak_topdown(s)

        return [" ".join(words) for words in memo[s]]
```
```C++ []
#include <vector>
#include <string>
#include <unordered_set>
#include <unordered_map>
#include <sstream>

using namespace std;

class Solution {
public:
    vector<string> wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
        unordered_map<int, vector<vector<string>>> memo;  // Use int as the key to represent the start index

        vector<vector<string>> sentences = _wordBreak_topdown(s, 0, wordSet, memo);

        vector<string> result;
        for (const auto& words : sentences) {
            result.push_back(join(words, " "));
        }

        return result;
    }

private:
    vector<vector<string>> _wordBreak_topdown(const string& s, int start, unordered_set<string>& wordSet, unordered_map<int, vector<vector<string>>>& memo) {
        if (memo.find(start) != memo.end()) {
            return memo[start];
        }

        vector<vector<string>> result;
        if (start == s.size()) {
            result.push_back({});
            return result;
        }

        for (size_t endIndex = start + 1; endIndex <= s.size(); ++endIndex) {
            string word = s.substr(start, endIndex - start);
            if (wordSet.find(word) != wordSet.end()) {
                vector<vector<string>> subSentences = _wordBreak_topdown(s, endIndex, wordSet, memo);
                for (auto& subSentence : subSentences) {
                    vector<string> newSentence = { word };
                    newSentence.insert(newSentence.end(), subSentence.begin(), subSentence.end());
                    result.push_back(newSentence);
                }
            }
        }

        memo[start] = result;
        return result;
    }

    string join(const vector<string>& words, const string& delimiter) {
        ostringstream oss;
        for (size_t i = 0; i < words.size(); ++i) {
            if (i != 0) {
                oss << delimiter;
            }
            oss << words[i];
        }
        return oss.str();
    }
};

```
```Typescript []
function wordBreak(s: string, wordDict: string[]): string[] {
    const wordSet = new Set(wordDict);
    const memo: Map<number, string[][]> = new Map();

    function _wordBreak_topdown(start: number): string[][] {
        if (memo.has(start)) {
            return memo.get(start)!;
        }

        const result: string[][] = [];
        if (start === s.length) {
            result.push([]);
            return result;
        }

        for (let endIndex = start + 1; endIndex <= s.length; endIndex++) {
            const word = s.substring(start, endIndex);
            if (wordSet.has(word)) {
                const subSentences = _wordBreak_topdown(endIndex);
                for (const subSentence of subSentences) {
                    result.push([word, ...subSentence]);
                }
            }
        }

        memo.set(start, result);
        return result;
    }

    const sentences = _wordBreak_topdown(0);

    return sentences.map(words => words.join(' '));
}
```
