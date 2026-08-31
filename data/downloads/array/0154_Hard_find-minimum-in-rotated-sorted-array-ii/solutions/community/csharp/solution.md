# BinarySearch

**Author:** dimitri_zikki
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/5284867/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/5284867/)

---

BinarySearch
```
public class Solution {
    public int FindMin(int[] a) {
        int l=0,r=a.Length-1;
        int ans = Int32.MaxValue;
        while(l<=r){
            int m = l+(r-l)/2;
            ans=Math.Min(ans,a[m]);
            if(a[m]>a[r])
            l=m+1;
            else if(a[m]<a[r]) 
            r=m-1;
            else if(a[m]==a[r])
            r--;
        }
        return ans;
    }
}
```