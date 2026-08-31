# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solution/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solution/)

---

### Approach 1: Enumeration With Optimization

#### Intuition

The most straightforward method that comes to mind is to incrementally check each number starting from $1$. For each number $i$, if $i$ is a palindrome and its $k$-ary representation is also a palindrome, we add $i$ to the answer. Once we have found $n$ such numbers, we can stop the search and return the result.

However, this approach exceeds the time limit. For example, when $k = 7$, the $30$th number that satisfies the condition is $64454545446 \approx 6 \times 10^{10}$. Even though checking whether a number meets the conditions takes $O(1)$ time, scanning up to $64454545446$ still takes far too long.

To improve efficiency, we can consider a binary search–style approach. Since $i$ itself must be a palindrome, we can construct $i$ by first generating the first half of the digits, denoted as $i'$, then reversing $i'$ and appending it to itself to form $i$. This "halving" strategy ensures that $i$ is always a palindrome, significantly reducing the search space. For instance, to cover all numbers up to $10^{10}$, the brute-force method would examine up to $10^{10}$ numbers, but the halving method only needs to generate $O(\sqrt{10^{10}}) = O(10^5)$ palindromes.

When constructing $i$ from $i'$, we must consider both odd-length and even-length palindromes. For example, if $i' = 123$, we can form either $12321$ (odd length, with the middle digit reused) or $123321$ (even length, by fully reversing $i'$ and appending it).

To enumerate values of $i$, we also incrementally enumerate values of $i'$. For the same $i'$, the even-length palindrome will always be greater than the corresponding odd-length one, so we process them as follows:

- Define the range of $i'$, typically as $[10^k, 10^{k+1})$ for some $k$.

- Incrementally generate odd-length palindromes from $i'$ and check if they meet the requirements.

- Then generate even-length palindromes from $i'$ and check if they meet the requirements.

In this way, we ensure that the search over $i$ proceeds in increasing order.

#### Implementation

<iframe src="https://leetcode.com/playground/UAdDpN83/shared" frameBorder="0" width="100%" height="500" name="UAdDpN83"></iframe>

#### Complexity analysis

- Time complexity: $O(\sqrt{10^{10}}) \approx O(1)$.
  
  For a given $n$ and $k$, it is difficult to determine the range of the $n$th $k$-mirror number. In this problem, the worst case is when $n = 30$, $k = 7$, and the corresponding number is $64454545446$.

- Space complexity: $O(\log n)$.
  
  Digit storage requires $O(\log n)$ space.

### Approach 2: Preprocessing

#### Intuition

We can preprocess the first 30 $k$-mirror digits for $k = 2, 3, \cdots, 9$ and directly sum them to return the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/BaSA5EsH/shared" frameBorder="0" width="100%" height="500" name="BaSA5EsH"></iframe>

#### Complexity analysis

- Time complexity: $O(1)$.

- Space complexity: $O(1)$.