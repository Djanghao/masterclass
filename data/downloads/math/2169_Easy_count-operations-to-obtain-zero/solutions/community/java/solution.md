# Java - beats 100%

**Author:** abanoubcs
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1852620/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1852620/)

---

```
class Solution {
    public int countOperations(int num1, int num2) {
        int count=0;
        while(num1!=0 && num2!=0){
            if(num1<num2){
                count+=num2/num1;
                num2=num2%num1;
            }else{
                count+=num1/num2;
                num1=num1%num2;
            }
        }
        return count;
    }
}
```