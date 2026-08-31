# Java | ONLY 1 Character Matters | Explained.

**Author:** Student2091
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/1655332/](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/solutions/1655332/)

---

If we have a substring `"abc"` that appears in both strings, then we also have `'a', 'b', 'c'` all appear in both strings. If we pick the whole substring `"abc"`, then our score is: **index of a + 2 in s1 - index of a in s2**, but we can also just pick, say, letter "a", then our score is: **index of a in s1 - index of a in s2**, which is 2 units smaller than if we pick the whole substring. 

Basically what this means is that this question is merely asking us to find the matching letters with the farthest distance. It is not a hard problem but more of a trick question. 

```
class Solution {
    public int countQuadruples(String f, String s) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < f.length(); i++)
            map.putIfAbsent(f.charAt(i), i); //we only care about the first appearance of each letter

        int ans = 0;
        for (int i = s.length() - 1, min = Integer.MAX_VALUE; i >= 0 && min >= -i; i--){
            if (!map.containsKey(s.charAt(i))) continue; //we can terminate when min < -i because -i is the minimum that min can go 
            if (map.get(s.charAt(i)) - i < min){ans = 1; min = map.get(s.charAt(i)) - i;}
            else if (map.get(s.charAt(i)) - i == min) ans++;
        }

        return ans;
    }
}
```