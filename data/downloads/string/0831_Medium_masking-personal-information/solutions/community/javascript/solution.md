# intuitive 13-line JS solution | 97.22% faster, 86.11% memory usage

**Author:** brianbrian
**Votes:** 2
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/1136228/](https://leetcode.com/problems/masking-personal-information/solutions/1136228/)

---

```var maskPII = function(S) {
    if (S.includes('@') && S.includes('.')) { // is email
        const elements = S.split('@');
        const name = elements[0];
        return `${name[0].toLowerCase()}*****${name[name.length - 1].toLowerCase()}@${elements[1].toLowerCase()}`;
    } else {
        const stripped = S.replace(/\\D/g, '');
        const lastFour = stripped.slice(stripped.length - 4);
        if (stripped.length === 10) {
            return `***-***-${lastFour}`;
        } else {
            return `+${'*'.repeat(stripped.length - 10)}-***-***-${lastFour}`
        }
    }
};```