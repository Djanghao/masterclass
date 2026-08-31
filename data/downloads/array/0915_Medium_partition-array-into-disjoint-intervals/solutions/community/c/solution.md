# [C++] Easy, Clean Solution

**Author:** rsgt24
**Votes:** 27
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1354687/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/1354687/)

---

**Solution:**

1. Establish the maximum `max_1` as `nums[0]`, i.e., the lowest element in the beginning.
2. If we find something lower than our current maximum `max_1`, that element must be included in the left partition.
3. Otherwise, if we find something greater than our overall maximum `curr` change its value.


```
class Solution {
public:
    int partitionDisjoint(vector<int>& nums) {
        int n = nums.size();
        int max_1, curr, ans = 1;
        max_1 = curr = nums[0];
        for(int i = 1; i < n; i++){
            if(nums[i] < max_1){
                max_1 = curr;
                ans = i + 1;
            }
            else if(nums[i] > curr){
                curr = nums[i];                
            }
        }
        return ans;
    }
};
```

**`Time Complexity`**: **`O(n)`**
**`Space Complexity`**: **`O(1)`**
where **n** is the size of array **nums**.