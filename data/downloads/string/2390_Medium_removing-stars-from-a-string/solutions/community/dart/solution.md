# Easy DART Solution

**Author:** Isko21
**Votes:** 1
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3566334/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3566334/)

---

```
class Solution {
    String removeStars(String s) {
        List<String> list = [];

        s.split('').forEach((i){
            if(i == '*') list.removeAt(list.length - 1);
            else list.add(i);
        });

        return list.join('');
    }
}
```