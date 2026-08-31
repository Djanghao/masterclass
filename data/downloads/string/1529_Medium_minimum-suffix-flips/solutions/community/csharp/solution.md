# Solution | Python | C++ | C# | Beats 74%

**Author:** H31SENBERG
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/5212686/](https://leetcode.com/problems/minimum-suffix-flips/solutions/5212686/)

---

```Python []
class Solution:
    def minFlips(self, target: str) -> int:
        ans = 0
        tmp = '0'
        for i in target:
            if i != tmp:
                ans += 1
                tmp = i
        
        return ans
        
```
```C++ []
class Solution {
public:
    int minFlips(string target) {
        int ans = 0;
        char c = '0';
        for ( int i = 0 ; i < target.size() ; i++ ){
            if ( target[i] != c ){
                ans++;
                c = target[i];
            } 
        }
        return ans;
    }
};
```
```C# []
public class Solution {
    public int MinFlips(string target) {
        int ans = 0;
        char c = '0';
        for ( int i = 0 ; i < target.Length ; i++ ){
            if ( target[i] != c ){
                c = target[i];
                ans++;
            }
        }
        return ans;
    }
}
```
