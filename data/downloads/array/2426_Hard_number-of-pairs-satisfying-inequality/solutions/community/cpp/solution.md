# Easy Merge Sort based solution | C++ |

**Author:** khem_404
**Votes:** 60
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2646585/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2646585/)

---

**Explanation ::**
**Given that we have to find i , j such that 0 <= i < j <= n - 1 and 
nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff**
**Step 1::**
Rewriting the inequality--
(nums1[i] - nums2[i]) <= (nums1[j] - nums2[j]) + diff

**Step 2::**
Make a new array/vector c which stores nums1[i]-nums2[i].
or c[i] = nums1[i]-nums2[i] for  0 <= i <= n - 1.

**Step 3::**
Problem reduces to  find i , j such that 0 <= i < j <= n - 1 and 
c[i] <= c[j] + diff

Now, This can be solved by using merge sort (Similar to inversion counting )



```
class Solution 
{
public:

    long long int count;
   
    void checkCount(vector<int>& nums, int start, int mid, int end,int d)
    {

        
        int l = start, r = mid + 1;
        while(l <= mid && r <= end)
        {
            if(nums[l]<=(nums[r]+d))  // if (nums[l]<=nums[r]+d) then all values from nums[r] to nums[end] will be be having their summation with d greater than or equal to nums[l]
            {
                count += (end - r+1);
                l++;
            }
            else      // otherwise we need to increment r so that we can find match for nums[l]
            {
                r++;
            }
        }
         // sort all values from start to end
        sort(nums.begin() + start, nums.begin() + end + 1);  // (Sort using two-pointers for better time complexity)
        return;
         
    }
    void mergeSort(vector<int>& nums, int start, int end,int d)
    {
        if(start == end) 
            return;
        
        int mid = (start + end)/2;
        mergeSort(nums,start, mid,d);
        mergeSort(nums,mid+1,end,d);
        
        checkCount(nums,start,mid,end,d);
        return;
        
    }
    long long numberOfPairs(vector<int>& a, vector<int>& b, int d) 
    {
        count = 0;
        int n = a.size();
        vector<int>c(n);  
        
        for(int i=0;i<n;i++)
        c[i]=a[i]-b[i];               
			
        mergeSort(c,0,n-1,d);
		
        return count;
    }
};
```