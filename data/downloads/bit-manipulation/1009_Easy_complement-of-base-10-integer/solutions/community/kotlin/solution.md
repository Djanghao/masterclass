# ✅ KOTLIN || Bit Manipulation || Sum || Simple Logic

**Author:** yash-k9
**Votes:** 1
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/1666404/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/1666404/)

---

**Solution**

The complement of a number is found by inverting 0's and 1's. 

Let's look at this observation first. If we add the binary and it's compliment it results a binary with all one's. Check the below example

Ex: for n = 5, 
The Binary will be *101* and complement is *010*

		  101
		  010
		  ----
		  111
		  
		 so we can conclude that,  bin(n) + complement(n) = 11..11
		 
		 complement(n) = 11..11 - bin(n)
 
Our goal is to find the complement. so if we subtract the `number` and `one's` , we can get the complement.

Note that `one's` will be greater than the `number`. For example, 
binary of **2** is `010` and it's corresponding one will be `011` which is **3**, similarly
binary of **5** is `101` and it's corresponding one will br `111` is  **7**

Try out with different numbers, you'll get hang of it.

**How do we find the binary with one's?**

let's take a variable `ones` = 0. For every iteration untill the `ones` is greater than the number, we keep left-shifting one 'i' times and add it.

Ex: For n = 2
```

	ones   i      updated ones
	----  ---  ---------------------
	0       0       0 + 1  (1 << 0) 
	1       1       1 + 2  (1 << 1) 
	3       -        -
	
	Loop will be terminated at ones = 3 as it is greater than number,  binary of ones is `111`
	
```

when we subtract ones and n, we'll get the *compliment*


```
class Solution {
    fun bitwiseComplement(n: Int): Int {
        if(n == 0) return 1
      
        var ones = 0
        var i = 0
       
        while(ones < n){
            ones += 1.shl(i)
            i++
        }
        
        return ones - n
    }
}
```