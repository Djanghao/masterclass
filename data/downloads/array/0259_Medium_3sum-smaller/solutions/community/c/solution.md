# C solution with comments

**Author:** user9501Ew
**Votes:** 1
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/2165824/](https://leetcode.com/problems/3sum-smaller/solutions/2165824/)

---

Details:
Runtime: 37 ms, faster than 81.82% of C online submissions for 3Sum Smaller.
Memory Usage: 6 MB, less than 63.64% of C online submissions for 3Sum Smaller.

```
int intCompare(void *p1, void *p2)
{
    return ( *((int*) p1) - *((int*)p2) );  //compare function for qsort
}
int threeSumSmaller(int* nums, int numsSize, int target){

    qsort(nums, numsSize, sizeof(int), intCompare);
    int low=0;
    int res=0;
    int high=0;
    int start =0;
    for (start; start<numsSize-2; start++){
        int rem= target-nums[start];  //for counting how many sets *include* the value at starting position
        low=start+1;
        high=numsSize-1;
        while (low<high){
         if (nums[low]+nums[high] < rem){
		 //if we arrive here it means that all triplits that contain nums[start] and nums[low] must be counted 
             res+=high-low;
            low++; //we checked all possibilteis that include low
            continue;
         }
        else high--; // high is too high
        }
    }    
    return res;    
}
```