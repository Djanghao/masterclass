# Java | HashSet

**Author:** AaveshK
**Votes:** 29
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2168123/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2168123/)

---

```
class Solution
{
    public String greatestLetter(String s)
    {
        Set<Character> set = new HashSet<>();
        for(char ch : s.toCharArray())
            set.add(ch);
        
        for(char ch = 'Z'; ch >= 'A'; ch--)
            if(set.contains(ch) && set.contains((char)('a'+(ch-'A'))))
               return ""+ch;
        return "";
    }
}
```