# Handwritten Explanation of Why?

**Author:** akashyeole
**Votes:** 62
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3014926/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3014926/)

---

![WhatsApp Image 2023-01-07 at 11.27.40 PM.jpeg](./images/0.jpeg)

# Code
```
class Solution {
public:
    int xorBeauty(vector<int>& nums) {
        int ans = 0;
        for(int num: nums) ans ^= num;
        return ans;
    }
};
```

Help others by upvoting. Suggestion are welcome!