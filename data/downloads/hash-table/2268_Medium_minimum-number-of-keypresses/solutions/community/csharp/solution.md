# C# frequency sorting

**Author:** clewBy
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2691762/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2691762/)

---

```
public class Solution {
    public int MinimumKeypresses(string s) {
        int res = 0;
        int[] freq = new int[26];

        foreach(char ch in s){
            freq[ch-'a']++;
        }

        Array.Sort(freq, (a,b) => { return b-a; });

        for(int i = 0; i < freq.Length; i++){
            if(i < 9)
                res += freq[i];
            else if(i < 18)
                res += freq[i]*2;
            else
                res += freq[i]*3;
        }

        return res;
    }
}
```