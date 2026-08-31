# Dart Solution | Easy-Peasy

**Author:** ayato91
**Votes:** -7
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4637022/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4637022/)

---

# Intuition
Easy Dart Solution | Bit Manipulation

# Approach
Bit Manipulation Technique is used for getting the result.

# Code
```
class Solution {
  int minOrAfterOperations(List<int> nums, int k) {
    int ans =0;
    int n = nums.length;
    for(int i = 30; i>=0; i--){
        int count =0;
        int current = (1<<30) -1 ;
        int target = ans | ((1<<i)-1);
        for(int j in nums){
            current&= j;
            if((current| target) == target){
                count++;
                current=(1<<30)-1;
            }
        }
        if(n-count > k){
            ans += 1 <<i;
        }
    }
    return ans;
  }
}
```