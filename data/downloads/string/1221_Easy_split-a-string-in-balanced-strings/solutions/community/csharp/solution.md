# C++ and C# very easy solution

**Author:** aloneguy
**Votes:** 9
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/3388749/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/3388749/)

---


# Approach:We have to use loop to find the number of different elements when they are equal then,we split that part.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:60 ms->C# beats 87.37%.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:35.5Mb->C# beats 84.55%.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```C# []
public class Solution {
    private ushort count=0,r=0,l=0;
    public int BalancedStringSplit(string s) {
        for(int i=0;i<s.Length;i++){
            if(s[i]=='R'){
            r++;
            }
            else{
                l++;
            }
            if(r==l){
                count++;
                r=0;l=0;
            }
        }
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int balancedStringSplit(string s) {
        unsigned int count=0,r=0;
       for(int i=0;i<s.length();i++){
            r+=s[i]=='R'? 1:-1;
            if(r==0)
            count++;
        }
        return count; 
    }
};
```


