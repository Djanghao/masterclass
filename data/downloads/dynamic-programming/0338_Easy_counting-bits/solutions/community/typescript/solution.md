# typescript + javascript - 3 line o(n) beats 100% - w/ VERY DETAILED explanation

**Author:** carti
**Votes:** 28
**Link:** [https://leetcode.com/problems/counting-bits/solutions/853078/](https://leetcode.com/problems/counting-bits/solutions/853078/)

---

**solution**
```
function countBits(num: number): number[] {
    const res = new Uint8Array(num + 1);
    for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
    return [...res];
}
```

**Line 1**
```
const res = new Uint8Array(num+1);
```
This line is just a java-style array initialization (all elements set to 0 originally)

**Line 2**
```
for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
```
We are simply iterating from 0 to n, setting this number to be half of this number, + whether this number was odd or not (since i&1 will evaluate to 1 if odd).

Here's why this works. Let's use input [0,8] as example, and count up to 8 in binary.
```
0000 : 0 (even)
0001 : 1
0010 : 2 (even)
0011 : 3
0100 : 4 (even)
0101 : 5
0110 : 6 (even)
0111 : 7
1000 : 8 (even)
```
Notice, how every even number ends in 0? This is important. It means, for every even N, the number of set bits, is equal to the number of set bits in N>>1 (right shifted by 1).

Here's an example:
6 = 0110 (2 set bits)
6 >> 1 = 3 = 011 (2 set bits)

So that's why we get the number of set bits in `res[i>>1]`. The `i&1` is simply to account for the last bit that's set.

**Line 3**
```
return [...res];
```
I'm just spreading the Uint8Array into an array, since the return value must be number[]. Pretty sure this should only be done when using Typescript.