# O(N) solution explained

**Author:** vokasik
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5457792/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5457792/)

---

> Brute force `O(N^3)` is too easy

```
class Solution:
    def tripletCount(self, a: List[int], b: List[int], c: List[int]) -> int:
        res = 0
        for v1 in a:
            for v2 in b:
                for v3 in c:
                    res += (v1 ^ v2 ^ v3).bit_count() % 2 == 0
        return res
```

> `O(N)` solution
> 
How I arrived at the `O(N)` solution? Btw, would be **great to hear y'all about your jouney too!!!**

>> Simplified problem a^b = even_bits
>> 
Let's take a few examples and start with a simplified problem: `a^b=even_bits`
I did all with 3 bits. the same works for more.
```  
a 001 010 011 100 101 110 111
b 001 010 011 100 101 110 111
```
A quick `pen & paper` exercise:
xor `a=1 (odd bits)` and `b=1(odd),2(odd),3(even),4(odd),5(even),6(even),7(odd)`
xor `a=3 (even bits)` and `b=1(odd),2(odd),3(even),4(odd),5(even),6(even),7(odd)`

From the above exercise we see that:
`even_bits ^ even_bits = even_bits`
`odd_bits ^ odd_bits = even_bits`

> Back to the original problem a^b^c = even_bits
> 
`even_bits_in_a_b ^ even_bits_c = even_bits`

Usiing knowledge from the simpler problem we have:
`even_bits_a ^ even_bits_b ^ even_bits_c = even_bits`
`odd_bits_x ^ odd_bits_x ^ even_bits_x = even_bits`
what's `x`??? You need to have `2 odds` and `1 even` formed from `a, b, c` triple:
```
odd_bits_a ^ odd_bits_b ^ even_bits_3 = even_bits
odd_bits_a ^ even_bits_2 ^ odd_bits_c = even_bits
even_bits_1 ^ odd_bits_b ^ odd_bits_c = even_bits
```
Now we can simply sum all combinations formed by the triplets above and get the final result in `O(N*bits)`

```
class Solution:
    def tripletCount(self, a: List[int], b: List[int], c: List[int]) -> int:
        """
        ^2:
        o^o = e
        e^e = e

        ^3:
        o^o^e = e
        e^e^e = e

        e1^e2^e3 = e
        o1^o2^e3 = e
        o1^e2^o3 = e
        e1^o2^o3 = e        

        """
        N = len(a)
        even_a = sum(v.bit_count() % 2 == 0 for v in a)
        odd_a = N - even_a
        even_b = sum(v.bit_count() % 2 == 0 for v in b)
        odd_b = N - even_b
        even_c = sum(v.bit_count() % 2 == 0 for v in c)
        odd_c = N - even_c
        return even_a * even_b * even_c + odd_a * odd_b * even_c + odd_a * even_b * odd_c + even_a * odd_b * odd_c
```