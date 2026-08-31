# C++ O(n) solution using std::unordered_set

**Author:** IgorB
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-elements/solutions/568023/](https://leetcode.com/problems/counting-elements/solutions/568023/)

---

```
class Solution {
public:
    int countElements(vector<int>& arr) 
    {
        int count = 0;
        unordered_set<int> st(arr.begin(), arr.end());
        for(int n : arr) count += st.count(n+1);
        return count;
    }
};
```