# Easy Two-Map Solution (C++/Java)

**Author:** jianchao-li
**Votes:** 457
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/13658/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/13658/)

---

I think the following code is self-explanatory enough. We use an `unordered_map<string, int> counts` to record the expected times of each word and another `unordered_map<string, int> seen` to record the times we have seen. Then we check for every possible position of `i`. Once we meet an unexpected word or the times of some word is larger than its expected times, we stop the check. If we finish the check successfully, push `i` to the result `indexes`.

* C++


    class Solution {
    public:
        vector<int> findSubstring(string s, vector<string>& words) {
            unordered_map<string, int> counts;
            for (string word : words)
                counts[word]++;
            int n = s.length(), num = words.size(), len = words[0].length();
            vector<int> indexes;
            for (int i = 0; i < n - num * len + 1; i++) {
                unordered_map<string, int> seen;
                int j = 0;
                for (; j < num; j++) {
                    string word = s.substr(i + j * len, len);
                    if (counts.find(word) != counts.end()) {
                        seen[word]++;
                        if (seen[word] > counts[word])
                            break;
                    } 
                    else break;
                }
                if (j == num) indexes.push_back(i);
            }
            return indexes;
        }
    };

* Java

```
class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        final Map<String, Integer> counts = new HashMap<>();
        for (final String word : words) {
            counts.put(word, counts.getOrDefault(word, 0) + 1);
        }
        final List<Integer> indexes = new ArrayList<>();
        final int n = s.length(), num = words.length, len = words[0].length();
        for (int i = 0; i < n - num * len + 1; i++) {
            final Map<String, Integer> seen = new HashMap<>();
            int j = 0;
            while (j < num) {
                final String word = s.substring(i + j * len, i + (j + 1) * len);
                if (counts.containsKey(word)) {
                    seen.put(word, seen.getOrDefault(word, 0) + 1);
                    if (seen.get(word) > counts.getOrDefault(word, 0)) {
                        break;
                    }
                } else {
                    break;
                }
                j++;
            }
            if (j == num) {
                indexes.add(i);
            }
        }
        return indexes;
    }
}
```