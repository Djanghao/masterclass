# Short || Clean || Java

**Author:** HimanshuBhoir
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3286298/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/3286298/)

---


```java []
class Solution {
    public int vowelStrings(String[] words, int left, int right) {
        int count = 0;
        String v = "aeiou";
        for(int i=left; i<=right; i++){
            if(v.contains(words[i].charAt(0)+"") && v.contains(words[i].charAt(words[i].length()-1)+""))   count++;
        }
        return count;
    }
}
```