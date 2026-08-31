# Java solution (with and without in built methods)

**Author:** sakshi-k
**Votes:** 37
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/1685659/](https://leetcode.com/problems/to-lower-case/solutions/1685659/)

---

The solution using Java in built function -
```
class Solution {
    public String toLowerCase(String s) {
        return s.toLowerCase();
    }
}
```

___________________________________________________________________________________________
The solution without in built function -

```
class Solution {
    public String toLowerCase(String s) {
       StringBuilder str = new StringBuilder();
        for(int i=0;i<s.length();i++)
        {
            if(s.charAt(i)>=65 && s.charAt(i)<=90)
            {
                str.append((char)(s.charAt(i)+32));
            }
            else
            {
                str.append(s.charAt(i));
            }
        }
        return str.toString();  
    }
}
```

Please upvote if you find this useful. Also share any other approaches. I would like to learn.