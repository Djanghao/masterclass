# C++ || sliding window technique || EXLAPAINED

**Author:** priyamesh28
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/1376091/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/1376091/)

---

```
    double findMaxAverage(vector<int>& nums, int k) {
        //This question will be solved by sliding window technique
        //first we will take a window of size k 
        //and move it till the end
        double sum=0;
        double max_sum=0;
        int i=0;
        for(;i<k;i++) //calculate the sum for first k values(intial window)
        {
            sum+=nums[i];
        }
        max_sum=sum;
        
        //now slide the window 
        //remove element from left and add from right 
        //make note of max sum
        int j=0;
        while(i<nums.size())
        {
            sum-=nums[j++];
            sum+=nums[i++];
            max_sum=max(max_sum,sum);
        }
        return max_sum/k;
        
    }
```

If you find any issue in understanding the solutions then comment below, will try to help you.
If you found my solution useful.
So please do upvote and encourage me to document all leetcode problems\uD83D\uDE03
Happy Coding :)