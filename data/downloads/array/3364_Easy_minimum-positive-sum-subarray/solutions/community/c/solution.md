# Efficient solution in C program

**Author:** Wolffang_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6128258/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6128258/)

---

# Intuition
The solution to solve this problem efficiently in C

# Code
```c []
int minimumSumSubarray(int* nums, int numsSize, int l, int r) {
    int i,j,sum,minSum='\\0',count=0;
    for (l;l<=r;l++) {
        sum=0;
        for (i=0;i<numsSize;i++) {
            sum+=nums[i];
            if (i>=l) {
                sum-=nums[i-l];
            }
            if (sum>0 && i>=l-1) {
                if (minSum=='\\0' || minSum>sum) {
                    minSum=sum;
                }
            }
        }
    }
    return minSum=='\\0'? -1 : minSum;
}
```