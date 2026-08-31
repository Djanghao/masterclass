# Java Solution Using Fenwick Tree

**Author:** piyushja1n
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/1784036/](https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/1784036/)

---


    
```
class Solution {
    public long goodTriplets(int[] nums1, int[] nums2) {
        int n=nums1.length;
        int []pos = new int[n];
        
        FenwickTree ft = new FenwickTree(n+1);
        
        for(int i=0;i<n;i++)
            pos[nums2[i]]=i;
        
        long []left=new long[n];
        long []right = new long[n];
        
        for(int i=0;i<n;i++){
            int idx = pos[nums1[i]];
            left[i] = ft.sum(idx-1);
            ft.update(idx,1);
        }
        
        ft=new FenwickTree(n+1);
        
        for(int i=n-1;i>=0;i--){
            int idx = pos[nums1[i]];
            right[i]= ft.sum(n+1)-ft.sum(idx);
            ft.update(idx,1);
        }
        
        long ans=0;
        
        for (int i=0;i<n;i++)
            ans+= left[i]*right[i];
        
        return ans;
    }
}

class FenwickTree {
    int[] bit;
    int n;
    
    FenwickTree(int n) {
        this.n = n;
        this.bit = new int[n + 2];
    }
    
    public void update(int i, int val) {
        i++;
        while (i < bit.length) {
            bit[i] += val;
            i += (i & (-i));
        }
    }
    
    public int sum(int i) {
        int sum = 0;
        i++;
        while (i > 0) {
            sum += bit[i];
            i -= (i & (-i));
        }
        return sum;
    }
}