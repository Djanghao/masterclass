# Simple, functional soluction with explaination

**Author:** andreazube
**Votes:** 4
**Link:** [https://leetcode.com/problems/single-number/solutions/775936/](https://leetcode.com/problems/single-number/solutions/775936/)

---

We're going to use the XOR (^) operation. 
First, the basics: 

```
A   B   OUT
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0
```

XOR also works on groups of bytes (of the same dimension), you just have to XOR bit-a-bit. For example, `1010 ^ 1101 = 0111`.

Now, for some properties. 
* `A ^ B = B ^ A` (e.g. `1010 ^ 1101 = 1101 ^ 1010`), since the operation is commutative (just look at the truth table)

* `A^B^C=C^A^B` (e.g. `10 ^ 11 ^ 01 = 01 ^ 10 ^ 11`), since the operation is transitive (try it)
* ` A ^ A = 0` (e.g. `1010 ^ 1010 = 0000`), since the only possible bit-a-bit combinations are `0 ^ 0` and `1 ^ 1`, both of which yield 0.
* `A^0 = A` (e.g.` 1010 ^ 0000 = 1010`), since the only possible bit-a-bit combinations are `0^0` and `1^0`, both of which yield the "original" bit.


Now, we have an array of integers. What if we XOR them all? We're talking about 
```
Arr = [A, B, C, B, A]
A ^ B ^ C ^ B ^ A
```

Since XOR is transitive, we can reorder the operations to get a better view:
```
A ^ A ^ B ^ B ^ C
```

But we know that A ^ A = 0! So, we can simplify 
```
(A ^ A) ^ (B ^ B) ^ C = 0 ^ 0 ^ C
```

Then again, `0 ^ 0` is still 0, so we're left with `0 ^ C`

And as we've seen, `C ^ 0 = 0 ^ C = C`

**What this all means if that if we XOR all the elements in the array, we get the only element that doesn't appear twice, because all the others nullify themselfes sooner or later.**

You can just use a for/foreach/while loop and xor them all. I'm going to use a more functional and in my opinion "cleaner" approach, using the `reduce `function (in scala) 

```
def singleNumber(nums: Array[Int]): Int = nums.reduce((a, b) => a ^ b)
```

Or, the be more concise and perhaps more expressive, at the cost of using scala's particular syntax which might look less intuitive to someone that doesn't know the language

`def singleNumber(nums: Array[Int]): Int = nums.reduce(_^_)`
