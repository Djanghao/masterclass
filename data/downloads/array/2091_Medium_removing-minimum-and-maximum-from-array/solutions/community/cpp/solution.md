# [C++] easy to understand || O(n)

**Author:** ashish0401
**Votes:** 10
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/1599907/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/1599907/)

---

```
class Solution
{
public:
    int minimumDeletions(vector<int> &nums)
    {
        int n = nums.size();
        int mxi = 0, mni = 0;
        int mn = INT_MAX, mx = INT_MIN;
		
		//Finding minimum and maximum element
 \xA0 \xA0 \xA0 \xA0for (int i = 0; i < n; i++)
        {
            mn = min(mn, nums[i]);
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0mx = max(mx, nums[i]);
        }
		
		//Storing indexes of minimum and maxumum element
        for (int i = 0; i < n; i++)
        {
            if (nums[i] == mn)
                mni = i;
            if (nums[i] == mx)
                mxi = i;
        }
		
		//When removed from front only
        int f = max(mxi, mni) + 1;
		
		//When removed from back only
        int l = n - min(mni, mxi);
		
		//When removed from both front and back
        int fl = (min(mni, mxi) + 1) + (n - max(mni, mxi));
		
        return min(min(f, l), fl);
    }
};
```