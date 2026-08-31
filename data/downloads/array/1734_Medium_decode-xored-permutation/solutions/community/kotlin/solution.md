# Explanations XOR and 1st element [Java, Kotlin, Python]

**Author:** chenon
**Votes:** 73
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/1031840/](https://leetcode.com/problems/decode-xored-permutation/solutions/1031840/)

---

I was stuck in this seemingly easy question in [contest 44](https://leetcode.com/contest/biweekly-contest-44).  How could the answer be unique?

**XOR properties and tips**

Let's note `xor` as xor instead of ^
**1) For `a xor b = c` , you can write 
`b = c xor a` 
or `a = c xor b`** . 
You can use 2) and 3) to demonstrate 1) .
2) XOR is commutative, `a xor b = b xor a`
3) XOR to the same number is always zero `a xor a = 0`


# **Intuition**
If the first element is determined, the whole array can be decoded.
> `encoded[i] = perm[i] XOR perm[i + 1]` implies

 `perm[i+1] = perm[i] XOR encoded[i]` thanks to 1)
 So you can loop to find the next perm element
See [1720. Decode XORed Array](https://leetcode.com/problems/decode-xored-array/discuss/1009844)

But you still need `perm[0]` , the first element in output array.



# **Find the first element**
That's where I was stuck in the contest 44.  How could the answer be unique?
It took a while to understand after reading other solutions.

I missed an important part in the problem descrition
> integer array `perm` that is a permutation of the **first `n` positive integers**,  where `n` is always odd.

Yes, perm is an array with values ranging from [1,2,3 .. n]. The order in the array is permuted.

Let's XOR all elements in array  `perm`. And perms is an array with **first `n` positive integers**
`perm[0] XOR perm[1] XOR ... perm[n] = 1 XOR 2 XOR 3 .. XOR n`  Order doesn't matter, XOR is commutative.
Let's call `totalXor`
`totalXor = 1 XOR 2 XOR 3 .. XOR n` .

XOR all except the first `perm[0]`
`perm[0] = totalXor XOR perm[1] XOR perm[2] XOR  perm[3] XOR  perm[4] XOR ... perm[n]`

Let's subsitute (replace) by encoded
> encoded[i] = perm[i] XOR perm[i + 1]

encoded[1] = perm[1] XOR perm[2]
encoded[3] = perm[3] XOR perm[4]
...
encoded[n-2] = perm[n-2] XOR perm[n-1], remember `n` is the size of perm and is always **odd**

**`perm[0] = totalXor XOR encoded[1] XOR encoded[3] ... encoded[n-2] `**
Only the odd indexes of `encoded` are taken.




## Solutions big O
Time complexity: O(n)
Space complexity: O(n)

## Java
```
    public int[] decode(int[] encoded) {
        int first = 0;
        int n = encoded.length+1;
        for(int i=1;i<=n;i++){
            first ^= i; 
        }
        for(int i=1;i<n-1;i+=2) first ^= encoded[i];
        
        int[] perm = new int[n];
        perm[0] = first;
        for(int i=0;i<n-1;i++){
            perm[i+1] = perm[i] ^ encoded[i];
        }
        return perm;
    }
```

## Kotlin
```
   fun decode(encoded: IntArray): IntArray {
        var first = 0
        val n = encoded.size + 1
        for(i in 1 .. n){
            first = first xor i
        }
        
        for(i in 1 until n step 2){
            first = first xor encoded[i]
        }
        
        val perm = IntArray(n)
        perm[0] = first
        for (i in 0 until n-1) {
            perm[i + 1] = perm[i] xor encoded[i]
        }

        return perm
    }
```

## Python
```
    def decode(self, encoded: List[int]) -> List[int]:
        first = 0
        n = len(encoded) + 1
        for i in range(1,n+1):
            first = first ^ i

        for i in range(1,n,2):
            first = first ^ encoded[i]
            
        
        perm = [0] * n
        perm[0] = first
        for i in range(n-1):
            perm[i+1] = perm[i] ^ encoded[i]
        return perm
```
Not a python pro, the code could be much shorter.