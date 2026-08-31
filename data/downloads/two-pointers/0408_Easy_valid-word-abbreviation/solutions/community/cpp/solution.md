# [C++] 100% Runtime easy solution

**Author:** hunarbatra
**Votes:** 5
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/1742940/](https://leetcode.com/problems/valid-word-abbreviation/solutions/1742940/)

---

```
bool validWordAbbreviation(string word, string abbr) {
        if(word.size() < abbr.size()) return false;
        int n = word.size();
        int abbr_size = 0;
        for(int i=0; i<abbr.size();) {
            if(abbr[i] == '0') return false;
            if(isdigit(abbr[i])) { // digit
                int start_idx = i;
                while(i<abbr.size() && isdigit(abbr[i])) {
                    i++;
                }
                abbr_size += stoi(abbr.substr(start_idx, i - start_idx));
            } else { // letter
                if(word[abbr_size] != abbr[i]) return false;
                abbr_size++;
                i++;
            }
        }
        return n == abbr_size;
    }
```