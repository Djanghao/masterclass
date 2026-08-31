# golang bracktraking solution

**Author:** Sheelendar
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/4783261/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/4783261/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:k*!n
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func canPartitionKSubsets(nums []int, k int) bool {
    n:=len(nums)
    sum:=0
    for i:=0; i<n; i++ {
        sum+=nums[i]
    }
    visited:=make([]bool,n)
    if k<=0 || sum%k!=0 {
        return false
    }
    return checkPartition(nums,visited,0,n,k,0,sum/k)    
}

func checkPartition(nums []int,visited []bool,index,n,k,currSum,target int) bool{
    if k==1{
        return true
    }
    if currSum==target {
        return checkPartition(nums,visited,0,n,k-1,0,target) 
    }
    for i:=index;i<n; i++{
        if visited[i] || currSum+nums[i] > target{
            continue
        }
        visited[i]=true
        if checkPartition(nums,visited,i+1,n,k,currSum+nums[i],target){
            return true
        }
        visited[i]=false
    }
    return false
}

```