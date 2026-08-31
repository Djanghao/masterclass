# Easy Solution | Sliding Window |  Java | Go

**Author:** william42
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5657186/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5657186/)

---

# Code
```Java []
class Solution {
    public int countKConstraintSubstrings(String s, int k) {
        int count  = 0;
        int left = -1;
        int count0 = 0;
        int count1 = 0;
        for(int right = 0;right<s.length();right++){
            if(s.charAt(right) == '1'){
                count1++;
            }else{
                count0++;
            }
            while(left<=right && count0>k && count1>k){
                left++;
                if(s.charAt(left)=='1'){
                    count1--;
                }else{
                    count0--;
                }
            }
            count += right-left;
        }
        return count;
    }
}
```
```Go []
func countKConstraintSubstrings(s string, k int) int {
    count := 0
    count0 := 0
    count1 := 0
    left := -1
    for right:=0;right<len(s);right++ {
        if s[right] == '1' {
            count1++
        }else {
            count0++
        }
        for left<=right && count0>k && count1> k {
            left++
            if s[left] == '1' {
                count1--
            }else {
                count0--
            }
        }

        count += right-left
    }

    return count
}
```