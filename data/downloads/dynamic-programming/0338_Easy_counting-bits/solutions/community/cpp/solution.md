# Four lines, C++, time O(n), space O(n)

**Author:** fengcc
**Votes:** 663
**Link:** [https://leetcode.com/problems/counting-bits/solutions/79527/](https://leetcode.com/problems/counting-bits/solutions/79527/)

---

    class Solution {
    public:
        vector<int> countBits(int num) {
            vector<int> ret(num+1, 0);
            for (int i = 1; i <= num; ++i)
                ret[i] = ret[i&(i-1)] + 1;
            return ret;
        }
    };