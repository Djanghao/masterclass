# Merge Sort logic

**Author:** adi2k20
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2646522/](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/solutions/2646522/)

---

```

// ->   nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff
// ->   nums1[i] - nums2[i] - nums1[j] + nums2[j] <= diff
// ->   (nums1[i] - nums2[i]) - (nums1[j] - nums2[j]) <= diff

// make an array with values i.e arr[k] = nums1[k] - nums2[k];

// now the question is boiled down to count pairs in array 'arr' with difference less than diff i.e arr[i]-arr[j] <= diff (where j>i)

// we can get both indices by doing merge sort.



class Solution {
public:
    long long cnt = 0;
    int diff = 0;
    void merge(vector<long> &arr,int low,int mid,int high){
        long long temp[arr.size()];
        int i = low;
        int j = mid+1;
        int k = low;
        
        while(i<=mid and j<=high){
            long long a = arr[j];
            if(arr[i]-a<=diff){
                cnt += high-j+1;
                i++;
             }
             else{
                 j++;
             }
          }
        
         i = low;
         j = mid+1;
         while(i<=mid and j<=high){
             if(arr[i]<=arr[j]){
                 temp[k++] = arr[i++];
             }
             else{
                 temp[k++] = arr[j++];

             }
         }
         while(i<=mid){
             temp[k++] = arr[i++];
         }
         while(j<=high){
             temp[k++] = arr[j++];
         }
         for(int z = low; z<=high; z++){
             arr[z] = temp[z];
         }
        
    }
    
    void mergeSort(int low , int high ,vector<long> &nums){
        if(low<high){
            int mid = low + (high-low)/2;
            mergeSort(low , mid ,nums);
            mergeSort(mid+1, high,nums);
            merge(nums,low,mid,high);
        }
    }
    
    
    long long numberOfPairs(vector<int>& nums1, vector<int>& nums2, int d) {
        int n = nums1.size();
        diff = d;
        vector<long> v;
        for(int i = 0; i<n; i++){
            long val = nums1[i]-nums2[i];
            v.push_back(val);
        }
        int l = 0;
        int h = n-1;
        mergeSort(l,h,v);
        return cnt;
    }
};
```