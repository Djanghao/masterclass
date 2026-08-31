# Most Easiest Solution || Intuitive || Pattern

**Author:** anand_code7
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4069135/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4069135/)

---

In this type of rotation problems , what is recommend is to duplicate the array , add same array behind the original one and now check if there is a subarray of length 'n' which is sorted , if yes then no of right shift = (n-i-2)%size . else you cannot .



```
int minimumRightShifts(vector<int>& nums) {
        int size=nums.size(),counter=0;
        
        for(int i=0;i<size;i++){
            nums.push_back(nums[i]);
        }
        
        int n=nums.size();
        
        for(int i=0;i<n-1;i++){
            if(nums[i]<nums[i+1]) counter++;
            else counter=0;
            
            if(counter==size-1) return (n-i-2)%size;
        }
        
        return -1;
    }
```


Time Complexity :- O(n)

Space Complexity :- O(n)



Please Upvote if you like the solution\uD83D\uDC4D