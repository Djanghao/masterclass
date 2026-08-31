# My Java Solution

**Author:** sagarbalyan
**Votes:** 18
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/2510279/](https://leetcode.com/problems/unique-email-addresses/solutions/2510279/)

---

```
class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> set = new HashSet();
        int count=0;
        for(String email: emails){
            int atIndex = email.indexOf("@");
            int plusIndex= email.indexOf("+");
            String str1 = "";
            if(plusIndex>=0) str1 = email.substring(0,plusIndex);
            else str1 = email.substring(0,atIndex);
            str1 = str1.replace(".","") + email.substring(atIndex);
            if(set.add(str1)) count++;
        }
        return count;
    }
}
```