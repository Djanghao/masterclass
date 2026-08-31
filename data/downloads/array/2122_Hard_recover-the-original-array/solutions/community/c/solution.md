# [100%] [50ms]  WITHOUT map

**Author:** lyronly
**Votes:** 31
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/1647743/](https://leetcode.com/problems/recover-the-original-array/solutions/1647743/)

---

First sort the nums array,  nums[0] belong to low array. 
Try every possible diff in array, and diff must be even. k = diff / 2;
Each element in low array (v) should have its equivalent in  high arrray (v + k + k). 
Maintain a pointer for the last element in low array that haven't found its equalient in high array yet, 
1 If pointer is valid and next element's value is pointer's value + k + k, then next element is the in high array. pointer++;
2 Otherwise next element is in low array.

```
class Solution {
public:
    int n;
    vector<int> recoverArray(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n2 = nums.size();
        n = n2/2;
        int a = nums[0];
        vector<int> v1, v2, ans;
        v1.reserve(n);v2.reserve(n);
        for (int i = 1; i < n2; i++)
        {
            int k = nums[i] - a;
            if (k % 2 == 1 || k == 0 || nums[i] == nums[i - 1]) continue;       
            v1.clear();v2.clear();
            v1.push_back(a);
            int x = 0;
            for (int j = 1; j < n2; j++)
            {
                if (x < v1.size() && (nums[j] == v1[x] + k)) {
                    v2.push_back(nums[j]);
                    x++;
                } else  v1.push_back(nums[j]);
            
                if (v1.size() > n || v2.size() > n) break;
            }
            if (v1.size() != n || v2.size() != n) continue;
            for (int i = 0; i < n; i++) ans.push_back((v1[i] + v2[i]) / 2);
            return ans;
        }
        return ans; 
    }
};
```