# dart solution fast and easy

**Author:** beshoyFayz
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4230450/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/4230450/)

---


class Solution {
  List<int> findArray(List<int> pref) {
if(pref.length<2)
            return pref;
        for(int i = pref.length-1;i>=1;i--)
            pref[i] ^= pref[i-1]; 
        return pref;
  }
}