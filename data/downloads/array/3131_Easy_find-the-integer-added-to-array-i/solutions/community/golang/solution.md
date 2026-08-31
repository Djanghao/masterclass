# GO Easy

**Author:** Gokulkarthi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5706237/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5706237/)

---

func addedInteger(nums1 []int, nums2 []int) int {
    
      
    i:=1
    min1:=nums1[0]
    min2:=nums2[0]
   if(len(nums1)>1){
   for i < len(nums1) {
        if nums1[i] < min1 {
            min1 = nums1[i]
        }
        if nums2[i]<min2{
            min2 =nums2[i]
        }
        i++
    }
   }
    
    return min2-min1
    
    
}