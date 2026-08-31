# Count Spaces

**Author:** votrubac
**Votes:** 65
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2083788/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2083788/)

---

The number of words in a message is the number of spaces, plus one.

We count words for each sender using a hash map, and track max count with the sender's name.

**C++**
```cpp
string largestWordCount(vector<string>& messages, vector<string>& senders) {
    unordered_map<string, int> cnt;
    string res;
    int max_cnt = 0;
    for (int i = 0; i < messages.size(); ++i) {
        int words = count(begin(messages[i]), end(messages[i]), ' ') + 1;
        int total = cnt[senders[i]] += words;
        if (total > max_cnt || (total == max_cnt && senders[i] > res)) {
            max_cnt = total;
            res = senders[i];
        }
    }
    return res;
}
```