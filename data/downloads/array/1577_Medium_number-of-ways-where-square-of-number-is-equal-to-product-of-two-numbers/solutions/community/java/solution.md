# 2 pointer approach || O(1) space complexity || 98% faster

**Author:** HarshitGoel1110
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1298187/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/1298187/)

---

```
class Solution {
    public int numTriplets(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        return count(nums1 , nums2) + count(nums2 , nums1);
    }
    
    public int count(int a[] , int b[]){
        int n = a.length;
        int m = b.length;
        int count = 0;
        for(int i=0;i<n;i++){
            long x = (long)a[i]*a[i];
            int j = 0;
            int k = m-1;
            while(j<k){
                long prod = (long)b[j]*b[k];
                if(prod<x)
                    j++;
                else if(prod>x)
                    k--;
                else if(b[j] != b[k]){
                    int jNew = j;
                    int kNew = k;
                    
                    while(b[j] == b[jNew])
                        jNew++;
                    while(b[k] == b[kNew])
                        kNew--;
                    count += (jNew-j)*(k-kNew);
                    j = jNew;
                    k = kNew;
                }
                else{
                    int q = k-j+1;
                    count += (q)*(q-1)/2;
                    break;
                }
            }
        }
        return count;
    }
    
}
```