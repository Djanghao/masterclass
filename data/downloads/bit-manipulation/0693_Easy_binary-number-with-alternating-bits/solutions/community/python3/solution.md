# Solution

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/3434881/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/3434881/)

---

```C++ []
class Solution {
public:
    bool hasAlternatingBits(int n) {
        int pre = n&0x1;
        n>>=1;        
        while(n!=0)
        {
            if((n&0x1) == pre)
                return false;
            
            pre = n&0x1;
            n>>=1;
        }
        return true;
    }
};
```

```Python3 []
class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        bits = bin(n)
        return "00" not in bits and "11" not in bits
```

```Java []
class Solution {
    public boolean hasAlternatingBits(int n) {
        while(n!=0){
            int a=(n&1);
            n>>=1;
            int b=(n&1);
            if(a==b)
                return false;
        }
        return true;
    }
}
```
