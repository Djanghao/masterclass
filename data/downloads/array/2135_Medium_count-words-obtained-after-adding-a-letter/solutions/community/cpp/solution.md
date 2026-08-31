# simple solution using Bitmasking with Unordered_set

**Author:** vijay_15
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/5465870/](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/5465870/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int wordCount(vector<string>& startWords, vector<string>& target) {
        unordered_set<int> st;
        for (string& word :startWords) {
            int temp = 0;
            for (char ch : word) {
                temp |= (1 << (ch - 'a'));
            }
            st.insert(temp);
        }
        int ans = 0;
        for (string& word :target) {
            int temp = 0;
            for (char ch :word) {
                temp |= (1 << (ch - 'a'));
            }
            for (char ch : word) {
                int newtemp = temp & ~(1 << (ch - 'a'));
                if (st.find(newtemp) != st.end()) {
                    ans++;
                    break;
                }
            }
        }
        return ans;
    }
};

```