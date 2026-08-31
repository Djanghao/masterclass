# Solution

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/3547713/](https://leetcode.com/problems/convert-to-base-2/solutions/3547713/)

---

```C++ []
class Solution {
public:
    string baseNeg2(int n) {
        if (n == 0)
            return "0";
        string out = "";
        while (n) {
            out = ((n&1) ? "1" : "0") + out;
            n = -(n >> 1);
        }
        return out;
    }
};
```

```Python3 []
class Solution:
    def baseNeg2(self, n: int) -> str:
        if n==0:
            return '0'

        ret = []
        while (n != 0):

            if n % 2 == 0:
                ret.append('0')
                n //= -2
            else:
                ret.append('1')
                n = (n - 1) // -2

        return ''.join(ret[::-1])
```

```Java []
class Solution {
    public String baseNeg2(int n) {
        StringBuilder sc = new StringBuilder();
        int rem;
        int b = -2;
        if(n == 0)
            sc.append('0');
        while(n != 0){
            rem = n % b;
            n /= b;
            if(rem < 0){
                rem -= b;
                n++;
            }
            sc.append(rem);
        }
        return sc.reverse().toString();
    }
}
```