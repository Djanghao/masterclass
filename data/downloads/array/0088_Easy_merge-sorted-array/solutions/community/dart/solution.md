# Runtime 0 ms Beats 100% C++ & Java🔥🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 214
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/2847423/](https://leetcode.com/problems/merge-sorted-array/solutions/2847423/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code



```Java []
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i=m-1 , j=n-1 ;
        while(i>=0 && j>=0 ){
            if(nums1[i]>=nums2[j]){
                nums1[i+j+1]=nums1[i] ;
                i-- ;
                }else{
                    nums1[i+j+1]=nums2[j];
                    j-- ;
                }
        }
        while(j>=0){
                    nums1[j]=nums2[j];
                    j-- ;
                }
    }
}
```
```C++ []
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {

        int i=m-1 , j=n-1 ;
        while(i>=0 && j>=0 ){
            if(nums1[i]>=nums2[j]){
                nums1[i+j+1]=nums1[i] ;
                i-- ;
                }else{
                    nums1[i+j+1]=nums2[j];
                    j-- ;
                }
        }
        while(j>=0){
                    nums1[j]=nums2[j];
                    j-- ;
                }      
    }
};
```
```Dart []
class Solution {
  void merge(List<int> nums1, int m, List<int> nums2, int n) {

      int i=m-1 , j=n-1 ;
        while(i>=0 && j>=0 ){
            if(nums1[i]>=nums2[j]){
                nums1[i+j+1]=nums1[i] ;
                i-- ;
                }else{
                    nums1[i+j+1]=nums2[j];
                    j-- ;
                }
        }
        while(j>=0){
                    nums1[j]=nums2[j];
                    j-- ;
                }
  }
}
```






Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)
![images.jfif](./images/0.jpeg)
