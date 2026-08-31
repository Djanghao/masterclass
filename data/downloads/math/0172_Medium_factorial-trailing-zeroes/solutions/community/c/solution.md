# Solution using prime factorization (with Easy Explanation)

**Author:** nazninhaque7622
**Votes:** 26
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/817709/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/817709/)

---

```
class Solution {
public:
    int trailingZeroes(int n) {
        int ans=0;
        long int i=0;
        for(i=5; n/i >=1 ;i*=5){
            ans+= n/i;
        }
        return ans;
    }
};
```
A number has trailing zeroes if it is divisible by 10 which has prime factors 2 and 5.
Let a number be 95000. 
How many trailing zeroes are in this number?   Ans: 3
What is the highest power of 10 the number is divisible by? Ans: 10^3. So, 3 is the ans.
Hence, we can say, if an integer is divisible by 10^k, then it has k trailing zeroes.

Now let a number be 2^5 * 5^4. Here  2^4 * 5^4 is the highest power of 10 which is 10^4. So, The number has 4 trailing powers.
Another example, 2^3 * 3^1 * 5^4 * 7^2 gives us 2^3 * 5^3 to make the max power of 10 hence 3 trailing zeroes.
So, we can see that the number of trailing zeroes comes from the power of 2 and power of 5, whichever is smaller. Then we also see that total power of 2 is always less than or equal to total power of 5. So, it is absolutely fine if we calculate only power of 5.

So, from the explanation above, let's calculate 30! 30! has 30/5 = 6 multiples of 5 that are less or equal than 30.
			30! = 30* 25* 20 * 15 * 10 * 5 * k
Each term here contributes 5^1 factor except 25 which contributes 5^2 factor (which gives extra 1 trailing zero). So, the number of trailing zeroes in 30! is 7.

Thus each multiple of 25 will contribute an additional 1 trailing zero.
Let's find the number of trailing zeroes in 500!
500/5 + 500/25 + 500/125 = 100+20+4 = 124 trailing zeroes (Ans). Here 25 gives extra 4, 125 gives extra 4 trailing zeroes.

