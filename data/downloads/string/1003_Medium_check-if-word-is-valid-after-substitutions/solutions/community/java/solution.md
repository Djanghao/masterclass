# Java 92% faster ||  6 ms  || 4 lines of clean code  ||

**Author:** adarsh1405
**Votes:** 12
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/1340880/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/1340880/)

---

<-----**If you like the solution . Kindly UPvote for better reach**
```
class Solution {
    public boolean isValid(String s) {
        while(s.contains("abc"))
            s=s.replace("abc",""); 
		if(s.isEmpty())
			return true;
        return false;
    }
}
```