# Go

**Author:** bhawsarshubham741
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/4662388/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/4662388/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countDistinct(nums []int, k int, p int) int {
    count:=0
    hash:=make(map[string]bool)
    for i:=0;i<len(nums);i++{
        temp:=""
        count=0
        
        for j:=i;j<len(nums);j++{
            if nums[j]%p==0 && count == k{
                
                break
            }else if nums[j]%p==0 {
                count++
            }
            temp+=string(nums[j])+"-"
            hash[temp]=true
            
            
            
            
        }
    }
    return len(hash)
    
}
```