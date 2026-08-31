# JavaScript Easy Method || Beats 100% Faster || Easy Understanding :)

**Author:** Abhishek_Nayak_
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/3507588/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/3507588/)

---

## Please Upvote if you got some help
```
const hasAlternatingBits = (n) => {
    let binary = n.toString(2); // Converting into binary string
    for(let i=1;i<binary.length;i++) if(binary[i-1] === binary[i]) return false;
    return true;
};
```