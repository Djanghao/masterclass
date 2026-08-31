# Bitmask Very Detailed Explaination || Titans plz Skip || Code Java

**Author:** cooper--
**Votes:** 24
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3206717/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3206717/)

---

# Naive Way Not Okay
(1) Generate combinations   $$O(2^n)$$
(2) Check if valid $$O(\\sqrt{x})$$ where $$x$$ is possible product

Step(1) directly leads to TLE.

# Why Bitmask

**Every integer greater than 1 can be written as the product of prime numbers.**


$$x=p_{1}^{a} \	imes p_{2}^{b} \	imes p_{3}^{c}\	imes ...$$

So, square-free requires the power of each prime factor less than 2.

It is equivalent to for each prime, **choose once or not**, which leads to bit idea.

    0: not selected
    1: selected
    
If interested, [Explanation of BitMask](https://leetcode.com/discuss/interview-question/3206851/Bitmask-Learning-Note).

**Usage in Code**

Instead of actual value, use mask to show current primes selection.

```
If only 4 primes: {2, 3, 5, 7}

2 = 0001
3 = 0010
5 = 0100
7 = 1000

6  = 2 * 3     = 0011      (select 2 and 3)
10 = 2 * 5     = 0101      (select 2 and 5)
30 = 2 * 3 * 5 = 0111   (select 2, 3 and 5)

```

At a certain step, product is `product`, decide to choose `nums[i]`, we can use mask to check if okay: 

```
If only 4 primes: {2, 3, 5, 7}

product = 6 = 0011
num = 5 = 0100

0011 & 0100 ===> 0 okay, no duplicate
newProduct = 30 = 6 * 5 = 0011 | 0100 = 01111


product = 30 = 0111
num = 3 = 0010

0111 & 0010 != 0, not okay, duplicate

```

This reduces Step(2) to $$O(1)$$

---

**Supportive Reason of BitMask**

$$1 <= nums[i] <= 30$$

Only 10 prime numbers in this range, the total combination is $$2^{10} = 1024$$. Not Big.


# Additional Explanations

Q: Why dfs base case return 1?
A: **Each combination counts 1** to final answer.

---

Q: Why final answer - 1?
A: Select **nothing** would count in dfs, which not okay.

---

Q: In computeMask, why illegal number return -1?
A: -1 in binary -> "1111...11", which would be excluded in AND operation check.


```Java []
System.out.println(Integer.toBinaryString(-1))
/// "11111111111111111111111111111111"
```


---
Q: Why `int[][] dp = new int[1010][1 << 11]`?

A(1): `1 <= nums.length <= 1000`, so first dimension larger than 1000 okay.
So you can see competitive guys using 1111, 1010, 1050, 1100. 

A(2): `1 << 11` is due to 10 primes and a possible valid product `1`

```
Input: nums = [1]
Output: 1
Explanation: There is 1 square-free subset in this example
```




# Code
```
class Solution {
    int MOD = (int)1e9 + 7;
    public int squareFreeSubsets(int[] nums) {
        int[][] dp = new int[1010][1 << 11];
        for (int[] d : dp) Arrays.fill(d, -1);

        int[] primes = new int[]{2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
        
        int[] numsPrimeMask = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            numsPrimeMask[i] = computeMask(nums[i], primes);
        }

        // error one : return dfs(0, 1, numsPrimeMask, dp) - 1;
        return (dfs(0, 1, numsPrimeMask, dp) - 1 + MOD) % MOD;
    }

    private int dfs(int pos, int productMask, int[] numsPrimeMask, int[][] dp) {
        if (pos >= numsPrimeMask.length) return 1;

        if (dp[pos][productMask] != -1) return dp[pos][productMask];


        // case 1: skip current pos
        int ans = dfs(pos + 1, productMask, numsPrimeMask, dp);

        // case 2: select current if not conflict
        if ((productMask & numsPrimeMask[pos]) == 0) {
            ans = (ans + dfs(pos + 1, productMask | numsPrimeMask[pos], numsPrimeMask, dp)) % MOD;
        }

        return dp[pos][productMask] = ans;
    }

    private int computeMask(int x, int[] primes) {
        int mask = 0;
        for (int i = 0; i < primes.length; i++) {
            int p = primes[i];
            int cnt = 0;
            while (x % p == 0) {
                x /= p;
                cnt++;
            }

            if (cnt == 0) continue;
            if (cnt == 1) mask |= (1 << (i + 1));
            if (cnt >= 2) return -1;
        }
        return mask;
    }
}
```