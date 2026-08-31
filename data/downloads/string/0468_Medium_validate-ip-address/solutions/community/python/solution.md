# [Python] beats 100%, 12 ms

**Author:** Grace_HUANG
**Votes:** 11
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/690025/](https://leetcode.com/problems/validate-ip-address/solutions/690025/)

---

```
class Solution:
    def validIPAddress(self, IP: str) -> str:
        """
        :type IP: str
        :rtype: str
        """
		
        res = 0
        ipv4 = IP.split('.')
        if len(ipv4) == 4:
            for x in ipv4:
                if x == '' or (x[0] == '0' and len(x) != 1) or not x.isdigit() or int(x) > 255:
                    res = 1
                    break
            if not res:
                return 'IPv4'
        
        ipv6 = IP.split(':')
        if len(ipv6) == 8:
            for x in ipv6:
                if x == '' or len(x) > 4 or not all(c in hexdigits for c in x):
                    res = 1
                    break
            if not res:
                return 'IPv6'
        
        return 'Neither'
```