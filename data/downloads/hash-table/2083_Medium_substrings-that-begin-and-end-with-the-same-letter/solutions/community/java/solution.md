# Java: count freq + simple combinatorial  maths

**Author:** renhai
**Votes:** 4
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/1613641/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/1613641/)

---

Simply count the frequency for each char.
When we have **a**xyz**a**d**a** with 3 **a**, we know the count of substring that starts and ends with **a** should be 3*(3-1)/2, which is the combinatorial number for 3. Then add the single char to it will make the answer.

```class Solution {
    public long numberOfSubstrings(String s) {
        long[] freq = new long[26];
        for(char c: s.toCharArray()){
            freq[c-'a']++;
        }
        
        long result = 0;
        for(long count: freq){
            result += count*(count-1)/2+count;
        }
        
        return result;
    }
}
```