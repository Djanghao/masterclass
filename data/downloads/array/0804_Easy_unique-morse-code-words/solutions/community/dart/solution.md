# Dart Easy Approach, Beats 100%

**Author:** Isko21
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/3575711/](https://leetcode.com/problems/unique-morse-code-words/solutions/3575711/)

---

```
class Solution {
    int uniqueMorseRepresentations(List<String> words) {
        List<String> mor = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        List<String> apl = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z"  ];

        Set<String> set = {};

        for(String i in words){
            String cur = '';
            i.split('').forEach((v){
                cur += mor[apl.indexOf(v.toUpperCase())];
            });
            set.add(cur); cur = '';
        }

        return set.length;
    }
}
```