# 100% binary search java.

**Author:** prateekvortex
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/694632/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/694632/)

---

```
class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        char res=letters[0];
        int start=0;
        int end=letters.length-1;
        while(start<=end)
        {
            int mid=start+(end-start)/2;
            if(letters[mid]==target)
            {
                start=mid+1;
            }
            else if(target>letters[mid])
            {
                start=mid+1;
            }
            else if(letters[mid]>target)
            {
                res=letters[mid];
                end=mid-1;
            }
        }
        return res;
        
    }
}
```