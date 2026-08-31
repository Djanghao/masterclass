# simple dart solution

**Author:** Shaham_Ahammed
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4732925/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4732925/)

---


# Code
```
class Solution {
  int minNumber(List<int> nums1, List<int> nums2) {
    String number="";
    String reversedNum="";
    nums1.sort();
    nums2.sort();
   for(int numbers in nums1){
       if(nums2.contains(numbers)){
           return numbers;
       }
   }
    String n1=nums1[0].toString();
    String n2= nums2[0].toString();
    number=n1+n2;
    reversedNum=n2+n1;
    int finalNum=int.parse(number);
    int finalReversed=int.parse(reversedNum);
    return (finalNum<finalReversed)?finalNum:finalReversed;
  }
}
```