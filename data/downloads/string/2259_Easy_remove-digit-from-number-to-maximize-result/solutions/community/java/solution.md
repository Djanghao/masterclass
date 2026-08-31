# O(N) Solution

**Author:** virendra115
**Votes:** 47
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996585/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996585/)

---

```
class Solution {
    public String removeDigit(String number, char digit) {
        int index = 0,n=number.length();
        for(int i=0;i<n;i++){
            if(number.charAt(i)==digit){
                index = i;
                if(i<n-1 && digit < number.charAt(i+1)) break;
            }
        }
        number = number.substring(0, index) + number.substring(index+1);
        return number;
    }
}
```