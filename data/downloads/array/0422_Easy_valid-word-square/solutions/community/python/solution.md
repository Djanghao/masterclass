# C++ & Python solutions

**Author:** woziji
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/670361/](https://leetcode.com/problems/valid-word-square/solutions/670361/)

---

C++ solution,
```
class Solution {
public:
    bool validWordSquare(vector<string>& words) {
        for (int i = 0; i < words.size(); ++i)
            for (int j = 0; j < words[i].size(); ++j)
                if (j >= words.size() || i >= words[j].size() || words[i][j] != words[j][i])
                    return false;

        return true;
    }
};
```

Python solution,
```
class Solution:
    def validWordSquare(self, words: List[str]) -> bool:
        for i in range(len(words)):
            for j in range(len(words[i])):
                try:
                    if words[i][j] != words[j][i]:
                        return False
                except:
                    return False

        return True
```