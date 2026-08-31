# Typescript using regex

**Author:** user8652E
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-ip-address/solutions/5809870/](https://leetcode.com/problems/validate-ip-address/solutions/5809870/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function validIPAddress(queryIP: string): string {
    const isIPV6Hex = (str: string): boolean => {
        const hexRegex = /^[0-9a-fA-F]+$/;
        return hexRegex.test(str) && str.length >= 1 && str.length <= 4;
    };

    const isIPV4Number = (str: string): boolean => {
        if (str.length > 1 && (str.startsWith('0') || str.startsWith('00'))) {
            return false;
        }

        const onlyNumbersRegex = /^\\d+$/;
        const num = Number(str);
        return !isNaN(num) && num >= 0 && num <= 255 && onlyNumbersRegex.test(str);
    }

    const isIPV4 = (str: string): boolean => {
        const v4Parts = queryIP.split('.');

        if(v4Parts.length != 4) return false;

        return v4Parts.every((p) => isIPV4Number(p));
    }

    const isIPV6 = (str: string): boolean => {
        const v6Parts = queryIP.split(':');

        if(v6Parts.length != 8) return false;

        return v6Parts.every((p) => isIPV6Hex(p));
    }

    if(isIPV4(queryIP)) return 'IPv4';
    if(isIPV6(queryIP)) return 'IPv6';
    return 'Neither';
};
```