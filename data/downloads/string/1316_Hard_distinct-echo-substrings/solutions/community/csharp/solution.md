# C# Solution | HashSet

**Author:** anshulgarg904
**Votes:** 1
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/3116927/](https://leetcode.com/problems/distinct-echo-substrings/solutions/3116927/)

---

# Code
```
public class Solution {
    public int DistinctEchoSubstrings(string text) {
        if(text.Length == 1){
            return 0;
        }

        HashSet<string> echos = new();
        int lastIndex = text.Length - 1;

        for(int i=0; i<lastIndex; i++){
            int mid = (text.Length-i)/2;

            for(int len=1; len<=mid; len++){
                int j = i+len;

                if(text.Substring(i, len).Equals(text.Substring(j, len))){
                    echos.Add(text.Substring(i, (len*2)));
                }
            }
        }

        return echos.Count;
    }
}
```