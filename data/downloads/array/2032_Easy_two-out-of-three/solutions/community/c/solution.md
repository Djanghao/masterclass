# O(N) | C++ | Mask

**Author:** askvij
**Votes:** 23
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1513632/](https://leetcode.com/problems/two-out-of-three/solutions/1513632/)

---

for each array we can have mask and can OR them
```
class Solution {
public:
    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {
        vector<int>f(110, 0);
        for (int n : nums1) f[n] |= 1<<0;
        for (int n : nums2) f[n] |= 1<<1;
        for (int n : nums3) f[n] |= 1<<2;
        
        vector<int>ret;
        for (int i = 1; i <= 100; i++) if (f[i] == 3 || f[i] >= 5) ret.push_back(i);
        return ret;
    }
};
```