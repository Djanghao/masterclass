# Number of Equal Numbers Blocks - java

**Author:** Karthi01
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4390125/](https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4390125/)

---


# Code 1
```
class Solution {
    public int countBlocks(BigArray nums) {
        long n = nums.size(), blocks = 0;

        for(long i = 0; i < n; ++blocks){
            long l = i, r = n - 1, num = nums.at(i), rightBoundary=i;
            while (l <= r) {
                long mid = (l + r) / 2;
                if (nums.at(mid) == num) {
                    l = mid + 1; rightBoundary = mid;
                } else {
                    r = mid - 1;
                }
            }
            i = rightBoundary + 1;
        }
        return (int)blocks;
        long size = nums.size();
        return helper(0, size-1, nums.at(0), nums.at(size-1), nums);
    }
        int helper(long l, long r, int lval, int rval, BigArray nums){
        if(lval==rval) return 1;
        if(l==r-1) return 2;
        long mid = l+(r-l)/2;
        int mval = nums.at(mid);
        
        return helper(l, mid, lval, mval, nums) + helper(mid, r, mval, rval, nums) - 1 ;
    }
}
```
# Code 2
```
class Solution {
    public int countBlocks(BigArray nums) {
        long size = nums.size();
        return helper(0, size-1, nums.at(0), nums.at(size-1), nums);
    }
        int helper(long l, long r, int lval, int rval, BigArray nums){
        if(lval==rval) return 1;
        if(l==r-1) return 2;
        long mid = l+(r-l)/2;
        int mval = nums.at(mid);
        
        return helper(l, mid, lval, mval, nums) + helper(mid, r, mval, rval, nums) - 1 ;
    }
}
```