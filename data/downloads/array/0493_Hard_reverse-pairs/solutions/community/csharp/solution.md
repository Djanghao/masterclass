# C# | Merge sort solution

**Author:** PrisonMike7
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/4987356/](https://leetcode.com/problems/reverse-pairs/solutions/4987356/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int ReversePairs(int[] nums) {
        
        return MergeSort(nums,0,nums.Length-1);

        int  MergeSort(int[] nums,int left,int right){
            if(left==right){
                return 0;
            }
            var mid = (left+right)/2;
            int count = MergeSort(nums, left, mid) + MergeSort(nums, mid + 1, right);
            
            // Counting reverse pairs
            int j = mid + 1;
            for (int i = left; i <= mid; i++) {
                while (j <= right && (long)nums[i] > 2 * (long)nums[j]) {
                    j++;
                }
                count += j - (mid + 1);
            }
            
            // Merging two sorted arrays
            Merge(nums, left, mid, right);
            return count;
        }
        
        void Merge(int[] data, int l, int m,int r){
            var n1 = m-l+1;
            var n2 = r-m;

            var left = new int[n1];
            var right = new int[n2];

            int i=0,j=0,k=l;

            Array.Copy(data,l,left,0,n1);
            Array.Copy(data,m+1,right,0,n2);

            while(i<n1 && j<n2){
                if(left[i]<=right[j]){
                    data[k]=left[i];
                    i++;
                }
                else{
                    data[k]=right[j];
                    j++;
                }
                k++;
            }
            while(i<n1){
                data[k]=left[i];
                i++;
                k++;
            }
            while(j<n2){
                data[k]=right[j];
                j++;
                k++;
            }
        }
    }
}
```