# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/2451706/](https://leetcode.com/problems/maximum-69-number/solutions/2451706/)

---

```
def maximum69Number (self, num: int) -> int:
        num_arr=list(str(num))
        for i in range(len(num_arr)):
            if num_arr[i]=='6':  # change the first occurrence of 6 to 9, This will give the max number
                num_arr[i]='9'
                break
        return int(''.join(num_arr))
```