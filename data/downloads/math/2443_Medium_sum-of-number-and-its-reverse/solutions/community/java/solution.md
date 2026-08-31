# Fast Solution

**Author:** Java_Programmer_Ketan
**Votes:** 18
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2708194/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2708194/)

---

```
class Solution {
    static HashSet<Integer> set = new HashSet<>();
    static {
        for(int i=0;i<=100000;i++){
            set.add(i+Integer.parseInt(new StringBuilder(Integer.toString(i)).reverse().toString()));
        }
    }
    public boolean sumOfNumberAndReverse(int num) {
        return set.contains(num);
    }
}
```
Create one HashSet for all test cases