# C++ BFS

**Author:** jianchao-li
**Votes:** 795
**Link:** [https://leetcode.com/problems/word-ladder/solutions/40707/](https://leetcode.com/problems/word-ladder/solutions/40707/)

---

This problem has a nice BFS structure. Let's illustrate this using the example in the problem statement.

```
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
```

Since only one letter can be changed at a time, if we start from `"hit"`, we can only change to those words which have exactly one letter different from it (in this case, `"hot"`). Putting in graph-theoretic terms, `"hot"` is a neighbor of `"hit"`. The idea is simpy to start from the `beginWord`, then visit its neighbors, then the non-visited neighbors of its neighbors until we arrive at the `endWord`. This is a typical BFS structure.

```cpp
class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> dict(wordList.begin(), wordList.end());
        queue<string> todo;
        todo.push(beginWord);
        int ladder = 1;
        while (!todo.empty()) {
            int n = todo.size();
            for (int i = 0; i < n; i++) {
                string word = todo.front();
                todo.pop();
                if (word == endWord) {
                    return ladder;
                }
                dict.erase(word);
                for (int j = 0; j < word.size(); j++) {
                    char c = word[j];
                    for (int k = 0; k < 26; k++) {
                        word[j] = 'a' + k;
                        if (dict.find(word) != dict.end()) {
                            todo.push(word);
                        }
                     }
                    word[j] = c;
                }
            }
            ladder++;
        }
        return 0;
    }
};
```

The above code starts from a single end `beginWord`. We may also start from the `endWord` simultaneously. Once we meet the same word, we are done. [This link](https://leetcode.com/problems/word-ladder/discuss/40708/Share-my-two-end-BFS-in-C%2B%2B-80ms.) provides such a two-end search solution. I rewrite the code below for better readability. This solution uses two pointers `phead` and `ptail` to switch to the smaller set at each step to save time.

```cpp
class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> dict(wordList.begin(), wordList.end()), head, tail, *phead, *ptail;
        if (dict.find(endWord) == dict.end()) {
            return 0;
        }
        head.insert(beginWord);
        tail.insert(endWord);
        int ladder = 2;
        while (!head.empty() && !tail.empty()) {
            if (head.size() < tail.size()) {
                phead = &head;
                ptail = &tail;
            } else {
                phead = &tail;
                ptail = &head;
            }
            unordered_set<string> temp;
            for (auto it = phead -> begin(); it != phead -> end(); it++) {    
                string word = *it;
                for (int i = 0; i < word.size(); i++) {
                    char t = word[i];
                    for (int j = 0; j < 26; j++) {
                        word[i] = 'a' + j;
                        if (ptail -> find(word) != ptail -> end()) {
                            return ladder;
                        }
                        if (dict.find(word) != dict.end()) {
                            temp.insert(word);
                            dict.erase(word);
                        }
                    }
                    word[i] = t;
                }
            }
            ladder++;
            phead -> swap(temp);
        }
        return 0;
    }
};
```