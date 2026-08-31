# [Java] easy and %100 solution using just two for loop

**Author:** zeldox
**Votes:** 15
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1168765/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1168765/)

---

if you like it pls upvote

Java

```
class Solution {
    public int secondHighest(String s) {
        int[] arr = new int[10];
        for(int i = 0;i<s.length();i++){
            if(s.charAt(i) - '0' <=9 & s.charAt(i)-'0' >=0){
                arr[s.charAt(i)-'0']++;
            }
        }
        boolean first = false;
        for(int i = 9;i>=0;i--){
            if(arr[i] !=0){
                if(first)
                    return i;
                else first = true;
            }
        }
        
        
        return -1;
    }
}
```