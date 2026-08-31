# Easy Solution | Java | Go

**Author:** william42
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/6050471/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/6050471/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

```java []
class Solution {
    public int[] resultsArray(int[] nums, int k) {
        int len = nums.length;
        int ans[] = new int[len-k+1];
        int count = 0;
        for(int i=0;i<len;i++){
            if(i==0 || nums[i]-nums[i-1] == 1){
                count++;
            }else{
                count = 1;
            }
            if(i>=k-1){
                ans[i-k+1] = -1;
                if(count>=k){
                    ans[i-k+1] = nums[i];
                }
            }
        }
        return ans;
    }
}
```
```Go []
func resultsArray(nums []int, k int) []int {
    length := len(nums)
    ans := make([]int,length-k+1)
    count := 0
    for i:=0;i<length;i++ {
        if i==0 || nums[i]-nums[i-1] == 1 {
            count++
        }else{
            count = 1
        }
        if i>=k-1 {
            ans[i-k+1] = -1
            if count>=k {
                ans[i-k+1] = nums[i]
            }
        }
    }
    return ans
}
```