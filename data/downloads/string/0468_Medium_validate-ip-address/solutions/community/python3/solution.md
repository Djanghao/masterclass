# Just check all cases [self-explanatory, Python with comments]

**Author:** ganeshcodes
**Votes:** 7
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/691022/](https://leetcode.com/problems/validate-ip-address/solutions/691022/)

---

```
def validIPAddress(self, IP: str) -> str:
        if self.isIPv4(IP):
            return "IPv4"
        elif self.isIPv6(IP):
            return "IPv6"
        else:
            return "Neither"
    
    def isIPv4(self, IP) -> bool:
        arr = IP.split('.')
        # Must contain 4 groups
        if len(arr) != 4:
            return False
        for val in arr:
            # 01 is not valid
            if len(val) > 1 and val[0] == '0':
                return False
            # Range 0 to 255
            if val.isdigit() and int(val) <= 255:
                continue
            else:
                return False
        return True
    
    def isIPv6(self, IP) -> bool:
        arr = IP.split(':')
        # Must contain 8 groups
        if len(arr) != 8:
            return False
        for val in arr:
            # 0(a8::07) or greater than 4 letters (2001c) are not valid.
            if len(val) > 4 or len(val) == 0:
                return False
            elif self.isValidHexa(val):
                continue
            else:
                return False
        return True
    
    def isValidHexa(self, val) -> bool:
        # All numbers are valid (9999, 0008, 1 are all valid)
        if val.isdigit():
            return True
        for char in val:
            # 0-9 valid
            if char.isdigit():
                continue
            # a-f valid
            elif ord(char) >= ord('a') and ord(char) <= ord('f'):
                continue
            # A-F valid
            elif ord(char) >= ord('A') and ord(char) <= ord('F'):
                continue
            else:
                return False
        return True
```