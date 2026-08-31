# 0ms Beats 100 % in Time & Memory , GO

**Author:** ideepsrma
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4600312/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4600312/)

---

# Intuition
First Am searching for how many time list is broken sort,
   If its more then 1 its not possible to sort it so **-1**
   If its 0 already sorted so **0**
   Last condition ```if last index > 0 index``` so its again **-1**
   Otherwise **Minus** First break Point from length is **Answer**




# Code
```
func minimumRightShifts(nums []int) int {
    result := 0;
    brk := 0; //How many breaks , if breaks are > 1 return -1;
    for i:=0;i<len(nums)-1;i++ {
        if(nums[i] > nums[i+1]) {
            if(result == 0) {
             result = len(nums)-i-1;
            }
            brk +=1 
        }
    }
    if(brk > 0) {
         if brk > 1 || nums[len(nums)-1] > nums[0] {
             return -1;
         }  else {
             return result
         }
    }
    return result
}
```