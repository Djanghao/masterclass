# [Python/C++/Java] Stack Based Solution - Clean & Concise

**Author:** hiepit
**Votes:** 164
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/392939/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/392939/)

---

**Python 3**
```python
class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        st = []  # pair of (character, frequence)
        for c in s:
            if st and st[-1][0] == c:
                st[-1][1] += 1  # Increase the frequency
            else:
                st.append([c, 1])
            if st[-1][1] == k:  # If reach enough k duplicate letters -> then remove
                st.pop()
        return "".join(c * f for c, f in st)
```

**C++**
```c++
class Solution {
public:
    string removeDuplicates(string s, int k) {
        vector<pair<char, int>> st;
        for (char c : s) {
            if (!st.empty() && st.back().first == c) {
                ++st.back().second;
            } else {
                st.push_back({c, 1});
            }
            if (st.back().second == k) { // If reach enough k duplicate letters -> then remove
                st.pop_back();
            }
        }
        string res;
        for (auto p : st) {
            res.append(p.second, p.first);
        }
        return res;
    }
};
```

**Java ~ 9ms**
```java
class Solution {
    public String removeDuplicates(String s, int k) {
        // ArrayDeque has better performance than Stack and LinkedList
        ArrayDeque<Adjacent> st = new ArrayDeque<>(s.length());
        for (char c : s.toCharArray()) {
            if (!st.isEmpty() && st.peekLast().ch == c) {
                st.peekLast().freq++; // Increase the frequency
            } else {
                st.addLast(new Adjacent(c, 1));
            }
            if (st.peekLast().freq == k) // If reach enough k duplicate letters -> then remove
                st.removeLast();
        }
        StringBuilder sb = new StringBuilder();
        for (Adjacent a : st) {
            sb.append(String.valueOf(a.ch).repeat(a.freq));
        }
        return sb.toString();
    }
    class Adjacent {
        char ch;
        int freq;
        public Adjacent(char ch, int freq) {
            this.ch = ch;
            this.freq = freq;
        }
    }
}
```
Time & Space: `O(n)`, where `n` is the length of the string