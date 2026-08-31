# Java 5-line solution👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍

**Author:** Ouyang2021
**Votes:** 39
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2342721/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2342721/)

---

Upvote please, if it helps.  
Thank you!
```
public char repeatedCharacter(String s) {
        Set<Character> set = new HashSet();
        for (char c : s.toCharArray())  
            if (!set.add(c)) 
                return c;
				
        return 'a';// can't reach to this line, because there must be a letter appearing TWICE
    }
```