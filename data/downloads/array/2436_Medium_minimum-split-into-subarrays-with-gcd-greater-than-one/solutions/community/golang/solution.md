# Go Solution. Beats 100% Runtime and Memory.

**Author:** mischief_
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/3421954/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/3421954/)

---

# Intuition
Simply scan the array till gcd is > 1, then start again.
# Approach
initialize var with  nums[0] x = nums[0], take gcd of this and i, for i=1, i<n. keep going till gcd is greater than 1, then increase result count and set x = nums[i]. repeat from this index.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
func minimumSplits(nums []int) int {
    x := nums[0]
    res := 0
    n :=len(nums)
    for i:=1;i<n;i++{
        for i<n {
            temp := gcd(x,nums[i])
            if temp > 1{
            x = temp
            i++
            }else{
                break
            }
        }
        res++
        if i<n{
            x= nums[i]
        }
    }
    if x == nums[n-1]{ // if x was changed to last item
        return res+1
    }
    return res
}
func gcd(a,b int) int{
    if b == 0{
        return a
    }
    return gcd(b,a%b)
}
```