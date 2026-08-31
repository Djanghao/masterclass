# C++ solution: easy and concise

**Author:** A1exrebys
**Votes:** 18
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1131472/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1131472/)

---

```
class Solution {
public:
    int numDifferentIntegers(string word) {
        unordered_map<string, int> hmap;  
        for (int i = 0; i < word.size(); i++) {
            if (isdigit(word[i])) {
			    string str;
                while (word[i] == '0')
                    i++;
                while (isdigit(word[i]))
                    str += word[i++];
                hmap[str]++;
            }
        }
        return hmap.size();
    }
};
```