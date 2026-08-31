# Single pass, super easy to understand!

**Author:** rezord
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5822139/](https://leetcode.com/problems/hash-divided-string/solutions/5822139/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(n)

- Space complexity:
- O(1)

# Code
```csharp []
public class Solution {
    public string StringHash(string s, int k) {
        var result="";
        var val=0;
        for(var i=0;i<s.Length;i++){
            val += s[i]-'a';
            if((i+1)%k==0){
                result+=(char)(val%26+97);
                val=0;
            }
        }
        return result;
    }
}
```