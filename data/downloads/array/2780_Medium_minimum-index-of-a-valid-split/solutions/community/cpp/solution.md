# Find majority using Boyer-Moore Algo || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 55
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771388/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771388/)

---

### Up vote if you liike the solution

# Approach
1. Find the majority element by [Boyer-Moore Majority Voting Algorithm](https://leetcode.com/problems/majority-element-ii/solutions/63520/Boyer-Moore-Majority-Vote-algorithm-and-my-elaboration/)
2. Count the frequency of the majority element
3. Check on each of the index if the split is possible or not - For this keep tracking majority element seen till now and apply the formula count*2 > element count on both the side of the index i.

# Code
```
int minimumIndex(vector<int>& nums) {
    //find the majority element 
    int majority = nums[0], count = 0;
    for(auto n: nums){
        if(n == majority) count++;
        else count--;
        if(count == 0) { majority = n; count = 1; }
    }
    
    //count majority elements occurance
    int majCout = 0;
    for(auto n: nums) if(n == majority)  majCout++;
    
    //check if split is possible or not
    count = 0;
    for(int i = 0; i < nums.size(); ++i){
        if(nums[i] == majority) count++;
        if(count*2 > (i+1)  && (majCout - count)*2 > (nums.size() - i - 1)) return i;
    }
    return -1;
}
```

<b>Here is an article of my recent interview experience at Amazon, you may like :
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted