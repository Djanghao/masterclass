# C# Solution Time O(N), Space O(1)

**Author:** panaeimi
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/3216388/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/3216388/)

---


# Code
```
public class Solution {
    public int RearrangeCharacters(string s, string target) {
        int[] countS = new int[26];
        foreach(char ch in s) {
            countS[ch - 'a']++;
        }

        int[] countT = new int[26];
        foreach(char ch in target) {
            countT[ch - 'a']++;
        }

        int maxNoOfCopies = Int32.MaxValue;
        for(int i = 0; i < countT.Length; i++) {
            if(countT[i] == 0) continue;
            if(countS[i] == 0) return 0;
            maxNoOfCopies = Math.Min(countS[i] / countT[i], maxNoOfCopies); 
        } 

        return maxNoOfCopies;
    }
}
```