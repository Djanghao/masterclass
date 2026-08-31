# TypeScript 58 ms && java 0 ms

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/4799387/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/4799387/)

---


```Typescript []
function canBeEqual(s1: string, s2: string): boolean {
    return (s1[1]==s2[1] || s1[1]==s2[3]) && (s1[3]==s2[1] || s1[3]==s2[3]) && (s1[0]==s2[0] || s1[0]==s2[2]) && (s1[2]==s2[0] || s1[2]==s2[2])
};
```
```Java []
class Solution {
    public boolean canBeEqual(String s1, String s2) {
        return (s1.charAt(1)==s2.charAt(1) || s1.charAt(1)==s2.charAt(3)) && (s1.charAt(3)==s2.charAt(1) || s1.charAt(3)==s2.charAt(3)) && (s1.charAt(0)==s2.charAt(0) || s1.charAt(0)==s2.charAt(2)) && (s1.charAt(2)==s2.charAt(0) || s1.charAt(2)==s2.charAt(2));
    }
}
```

