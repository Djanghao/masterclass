# Easy Solution | Java | Go

**Author:** william42
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solutions/6053407/](https://leetcode.com/problems/zero-array-transformation-ii/solutions/6053407/)

---

Refer - https://leetcode.com/problems/zero-array-transformation-i/description/ to understand the isPossible function better. 

# Code
```java []
class Solution {
    public int minZeroArray(int[] nums, int[][] queries) {
        int qLen = queries.length;
        int start = 0;
        int end = qLen-1;
        int ans = -1;
        boolean isAllZero = true;
        for(int num : nums){
            if(num !=0){
                isAllZero = false;
                break;
            }
        }
        if(isAllZero){
            return 0;
        }
        while(start<=end){
            int mid = start + (end-start)/2;
            if(isPossible(mid,queries,nums)){
                ans = mid;
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        return ans != -1 ? ans+1 : -1;
    }

    private boolean isPossible(int index,int[][] queries,int[] nums){
        int len = nums.length;
        int[] pos = new int[len+1];
        int sum = 0;
        for(int i=0;i<=index;i++){
            int start = queries[i][0];
            int end = queries[i][1];
            int val = queries[i][2];
            pos[start] += val;
            pos[end+1] -= val;
        }

        for(int i=0;i<len;i++){
            sum += pos[i];
            if(sum<nums[i]){
                return false;
            }
        }
        return true;
    }
}
```
```go []
func minZeroArray(nums []int, queries [][]int) int {
    qLen := len(queries)
    min := 0
    max := qLen-1
    ans := -1
    allZero := true
    for _,num := range nums {
        if num != 0 {
            allZero = false
            break
        }
    }
    if allZero {
        return 0
    }
    for min<=max {
        mid := min + (max-min)/2
        if isPossible(mid,queries,nums) {
            ans = mid
            max = mid-1
        }else{
            min = mid+1
        }
    }
    if ans != -1 {
        ans++
    }
    return ans
}

func isPossible(index int,queries [][]int,nums []int) bool{
    length := len(nums)
    pos := make([]int,length+1)
    prefix := 0
    for i:=0;i<=index;i++ {
        start := queries[i][0]
        end := queries[i][1]
        val := queries[i][2]
        pos[start] += val
        pos[end+1] -= val
    }
    for i,num := range nums {
        prefix += pos[i]
        if prefix < num {
            return false
        }
    }
    return true
}
```