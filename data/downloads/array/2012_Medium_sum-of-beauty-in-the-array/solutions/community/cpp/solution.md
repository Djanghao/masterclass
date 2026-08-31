# [C++] easy solution - beats 92% runtime, 93% memory

**Author:** vanshdhawan60
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/4150059/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/4150059/)

---

![image.png](./images/0.png)


# Code
```
class Solution {
public:
    int sumOfBeauties(vector<int>& nums) {
        int n = nums.size();
        int premax[n]; premax[0] = nums[0]; //stores prefix max
        int sufmin[n]; sufmin[n-1] = nums[n-1]; //store suffix min
        for (int i=1; i<n; i++) premax[i] = max(nums[i], premax[i-1]);
        for (int i=n-2; i>=0; i--) sufmin[i] = min(nums[i], sufmin[i+1]);

        int ans = 0;
        for (int i=1; i<=n-2; i++) {
            if (nums[i] > premax[i-1] && nums[i] < sufmin[i+1]) ans+=2;
            else if (nums[i] > nums[i-1] && nums[i] < nums[i+1]) ans++;
        }
        return ans;
    }
};
```