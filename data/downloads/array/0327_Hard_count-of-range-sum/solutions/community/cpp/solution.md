# [C++] SIMPLE explanation for BEGINNERS to HARD problems

**Author:** penrosecat
**Votes:** 59
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/1267104/](https://leetcode.com/problems/count-of-range-sum/solutions/1267104/)

---

Hello, with this post I want to explain the solution to this problem to those who are encountering this problem for the first time (i.e. have not solved any other problems with this pattern), and are **NEW to solving HARD problems** in general. I will be explaining the solution found in this post https://leetcode.com/problems/count-of-range-sum/discuss/1178174/Java-Clean-Merge-Sort-O(N-logN)-Solution-oror-with-detailed-Explanation because this version of the solution applies commonly known concepts which anyone with basic data structures background should be able to grasp **(no BIT, fenwick tree or anything else which usually is not covered in a basic data structures course)**. Moreover, this approach is also applicable to other problems which are linked in the answer, hence it is most suitable for a beginner looking to learn general approaches/patterns.

So, the naive approach, which after some experience with medium problems, particularly like subarray sum etc. should come to one within a few minutes of thinking: Find the array of prefix sums, then use a nested loop to find all the sums which satisfy the given criteria. Of course O(n^2) will give TLE which is why this is HARD. 

Since I am also a beginner, I thought about it for a while and then moved on to reading a solution to understand what was the next step.

I suppose for someone experienced, they may try some patterns with which n^2 problems are simplified, like DP or divide-and-conquer. The point of the hard problem is to start teaching you to inculcate this thinking of approaches when TLE after the naive solution is reached. So here, the mental question that should come to one's mind is, 

* For DP: If I know the solution to nums[start:i-1], can I calculate the solution to nums[start:i]?
* For divide-and-conquer: If I know the solution to nums[start:mid] and nums[mid+1:end] (where mid = (start+end)/2 and end is the length of the array), can I calculate the solution to nums[start:end]?

In this case, it turns out that there is a divide and conquer solution. The solution is similar to **merge sort**.

Take the PREFIX SUM array (and not the original array). Let this be called **sums**. 

If we have the solution to the left and right halves of the array, we can find the solution to the complete array by finding suitable pairs of prefix sums, one from the left half and the other from the right half, and adding these to the solution from the left and right halves of the array.

Now I will quote the crucial step from here: https://leetcode.com/problems/count-of-range-sum/discuss/1178174/Java-Clean-Merge-Sort-O(N-logN)-Solution-oror-with-detailed-Explanation

The merge sort based solution counts the answer while doing the merge. During the merge stage, we have already sorted the left half [start, mid) and right half [mid, end). We then iterate through the left half with index i. For each i, we need to find two indices k and j in the right half where

* j is the first index satisfy sums[j] - sums[i] > upper and
* k is the first index satisfy sums[k] - sums[i] >= lower.

Then the number of sums in [lower, upper] is j-k.

To understand this, consider any prefix sum after x elements. Consider another prefix sum after y elements such that x <= y. Then, if we know sums[x], then for x and y to form a range with a sum within the lower and upper bounds,  then the conditions sums[y] - sums[x] >= lower and sums[y] - sums[x] <= upper, should be satisfied. 

This gives the **condition for y** as sums[y] <= sums[x] + upper and sums[y] >= sums[x] + lower, and y >= x.

During merge sort note that the **relative ordering between the left and right halves is maintained** before the merging, so letting x belong to the left side of the array, y to the right half of the array maintains x <= y.

Hence if we make the count for each element in the left half of the array during the merge, then the count is guaranteed to be correct. 

Also, due to sorted nature of subarrays used during merge, for a given x in the left subarray, since the right subarray is also sorted, it means that the elements within the desired range sums[x] + lower and sums[x] + upper are **found in a contiguous chunk** of the right subarray. 

Moreover, since the left subarray is also sorted, sums[x] increases with x **(monotonicity)**. This means that every time x is incremented, we can use the indices obtained for the range in the right subarray for the previous x, instead of starting both from 0, since both sums[x] + lower and sums[x] + upper can only increase. 

 In the quoted bullet points above, the updates ensure that at the end of the updating, the indices cover the required range for each index.

The base case here is that a single element will add to the count if the element value lies between lower and upper otherwise the solution will be zero. 

**To write the solution** after understanding these steps, I used the following approach: Write merge sort in the usual way. Use two indices/pointers m and n starting from the beginning of the right subarray before the merge. At any block where the left subarray index is updated, update these two m and n. Add these to the total count. The function should return the sum of the counts of the left half, right half and the total count during the merge. 

My first working solution in which I used the conventional merge sort template where following the main merge step there are two while loops, had to make the counts twice, once in the nested loop and once in the outside loop (since left subarray index is updated in these places). To get the form of the elegant solutions such as in the linked answer, I made the change to use an alternative form of merging where during every loop iteration, an update to the left index is guaranteed, and the merge concludes when the left subarray is completely traversed. 

```
class Solution {
public:
    
    int countWithMergeSort(vector<long> &sums, int left, int right, int lower, int upper)
    {
        int count = 0;
        
        if(right - left <= 1)
        {
            if(right - left == 1)
            {
                return (lower <= sums[left] && sums[left] <= upper);
            }
            else
            {
                return 0;
            }
        }
        
        int mid = (left + right)/2;
        
        int leftSideSum = countWithMergeSort(sums, left, mid, lower, upper);
        int rightSideSum = countWithMergeSort(sums, mid, right, lower, upper);
        
        
        int i = left;
        int j = mid;
        
        int n = 0;
        int m = 0;
        
        vector<long> cache(right - left, 0);
        
        int k = 0;
        
        
        while(i < mid)
        {
            

            while(mid+n < right && sums[mid+n] < sums[i]+lower)
                {
                    n++;
                }
            
            while(mid+m < right && sums[mid+m] <= sums[i] + upper)
                {
                    m++;
                }
            
            while(j < right && sums[j] < sums[i])
            {
                cache[k++] = sums[j++];
            }
            
            cache[k++] = sums[i++];
            
            count += m-n;
        }
        
        
        while(j < right)
        {
            cache[k++] = sums[j++];
        }
        
        
        for(int idx = 0; idx<cache.size(); idx++)
        {
            sums[left + idx] = cache[idx];
        }
    
        return leftSideSum + rightSideSum + count;
        
    }
    
    int countRangeSum(vector<int>& nums, int lower, int upper) {
        
        vector<long> prefixSum(nums.size(),0);
        
        int n = nums.size();
        
        prefixSum[0] = nums[0];
        
        for(int i = 1; i<nums.size(); i++)
        {
            prefixSum[i] = nums[i] + prefixSum[i-1];
        }
        
        return countWithMergeSort(prefixSum, 0, n, lower, upper);
    }
};
```

Any comments or suggestions are welcome as I am also a beginner (took me 3+ hours to get this) who has spent some time in learning/convincing myself of the approach. I tried to address the points which took up a lot of my time while trying to understand some of the other solutions. 




