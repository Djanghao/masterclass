# JAVA | Optimize | easy✔

**Author:** rj0711
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/2420665/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/2420665/)

---

```
class Solution {
    public int[] maxDepthAfterSplit(String seq) {
        int[] a = new int[seq.length()];
        
        int count = 0;
        for(int i = 0; i < seq.length(); i++){
            if(seq.charAt(i) == '('){
                a[i] = count++ % 2;
            }else{
                a[i] = --count % 2;
            }
        }
        return a;
    }
}
```