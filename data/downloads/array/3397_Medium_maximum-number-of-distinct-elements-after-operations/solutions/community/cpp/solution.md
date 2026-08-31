# Greedy approach, well explained in comments

**Author:** ShubhamLahoti
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6173075/](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6173075/)

---

```
class Solution {
public:
    int maxDistinctElements(vector<int>& nums, int k) {
        
        
        /*
        I can add any value within the range [-k, k] to each number in the array.
        My goal is to maximize the number of distinct elements

        Let maxx represent the previous maximum element.

        For the current number nums[i]:

        If adjusting nums[i] allows it to become maxx + 1, i.e.,
        nums[i] - k <= maxx + 1 <= nums[i] + k,
        then I can set nums[i] = maxx + 1.
        
        Otherwise, to leave room for future numbers to remain distinct,
        I\u2019ll set nums[i] to the smallest possible value: nums[i] = nums[i] - k.
        
        */
        
        sort(nums.begin(), nums.end());
        
        int n = nums.size();
   
        vector<int> check(n, 0);
        
        int maxx = nums[0] - k;
        check[0] = maxx; 
        
        for(int i = 1 ; i < n ; i++){
            
            if(maxx + 1 >= nums[i] - k && maxx + 1 <= nums[i] + k)
            {
                check[i] = maxx + 1; // unique ho gya
                maxx = check[i];
                continue;
            }
            
            check[i] = nums[i] - k; // unique to nahi hona
            maxx = max(check[i], maxx);
        }
        
        unordered_set<int> ret(check.begin(), check.end());
        
        return ret.size();

    }
};
```