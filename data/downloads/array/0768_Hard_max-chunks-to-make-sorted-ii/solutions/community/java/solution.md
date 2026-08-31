# Java O(n) Solution

**Author:** HIMANSHUCHHIKARA
**Votes:** 6
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/1110503/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/1110503/)

---

In **general idea** is maximum till now should be less than minimum from right then only we can make chunk .(minimum have place in right array itself because it is greater than maximum of left).
If minimum from right is less than maximum from left then in sorted array the position of minimum is in left part so therefore we cannot create chunk in that case.. 
 
Steps to follow:
1. Always check for edge case if array length is 0 what to do.
2. Make 2 arrays maximum from left and minimum from left.
3. now check maximum till now <= minimum from right then chunk is possible(increase chunk count)

```
class Solution {
    public int maxChunksToSorted(int[] arr) {
        
        if(arr.length==0) return 0;
        int[] maxfromstart=new int[arr.length];
        int[] minfromlast=new int[arr.length];
         
        maxfromstart[0]=arr[0];
        for(int i=1;i<arr.length;i++){
            if(arr[i]>maxfromstart[i-1]){
                maxfromstart[i]=arr[i];
            }else{
                maxfromstart[i]=maxfromstart[i-1];
            }
        }
        
        minfromlast[arr.length-1]=arr[arr.length-1];
        for(int i=arr.length-2;i>=0;i--){
            if(arr[i]<minfromlast[i+1]){
                minfromlast[i]=arr[i];
            }else{
                minfromlast[i]=minfromlast[i+1];
            }
        }
        
        int chunk=1; 
        for(int i=0;i<arr.length-1;i++){
            if(maxfromstart[i]<=minfromlast[i+1]){
                chunk++;
            }
        }
        return chunk;
    }
}
```
Time:O(N) and Space:O(N)
Please **upvote** if you find it helpful :)