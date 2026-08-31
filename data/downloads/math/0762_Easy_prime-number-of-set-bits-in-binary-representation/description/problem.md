# [762. Prime Number of Set Bits in Binary Representation](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 768 | 514 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation)

**Companies:** `amazon`

## Description

Given two integers `left` and `right`, return *the **count** of numbers in the **inclusive** range *`[left, right]`* having a **prime number of set bits** in their binary representation*.

Recall that the **number of set bits** an integer has is the number of `1`'s present when written in binary.

	- For example, `21` written in binary is `10101`, which has `3` set bits.

 

**Example 1:**

```

Input: left = 6, right = 10
Output: 4
Explanation:
6  -&gt; 110 (2 set bits, 2 is prime)
7  -&gt; 111 (3 set bits, 3 is prime)
8  -&gt; 1000 (1 set bit, 1 is not prime)
9  -&gt; 1001 (2 set bits, 2 is prime)
10 -&gt; 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.

```

**Example 2:**

```

Input: left = 10, right = 15
Output: 5
Explanation:
10 -&gt; 1010 (2 set bits, 2 is prime)
11 -&gt; 1011 (3 set bits, 3 is prime)
12 -&gt; 1100 (2 set bits, 2 is prime)
13 -&gt; 1101 (3 set bits, 3 is prime)
14 -&gt; 1110 (3 set bits, 3 is prime)
15 -&gt; 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.

```

 

**Constraints:**

	- `1 <= left <= right <= 10^6`

	- `0 <= right - left <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/) | [Solutions](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/)
