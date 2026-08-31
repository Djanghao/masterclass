# Java Simple Sliding Window Solution, Easy to understand

**Author:** jianhuilin1124
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/739375/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/739375/)

---

```
class Solution {
    public int numKLenSubstrNoRepeats(String S, int K) {
        if (K > S.length()){
            return 0;
        }
        int size = S.length(), start = 0, count = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < size; ++i){
            char c = S.charAt(i);
            if (map.containsKey(c) && start <= map.get(c)){
                start = map.get(c) + 1;
            }
            map.put(c, i);
            if (i - start + 1 == K){
                count++;
                start++;
            }
        }
        return count;
    }
}
```