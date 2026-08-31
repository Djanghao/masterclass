# beats 100%

**Author:** Kristian97
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/5730857/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/5730857/)

---

# Intuition
shifted all the complexity in the if-conditions and append the stringbuilder accordingly :)
Leave a like if it helped

# Code
```csharp []
public class Solution {
    public string MaximumNumber(string num, int[] change) {
        var o = new StringBuilder();
        bool used = default;
        bool done = default;
        for(int i = 0; i < num.Length; i++){
            var x = num[i] - '0';
            var y = change[x];
            if(x < y && ( i == 0 || !done || !used)){
                used = true;
                o.Append(y.ToString());
            }
            else if(x == change[x] && !done && used){
                used = true;
                o.Append(y.ToString());
            }
            else if(done){
                return o.Append(num.Substring(i)).ToString();
            }
            else{
                o.Append(num[i]);
                done = used ? true : false;
            }
        }
        return o.ToString();
    }
}
```