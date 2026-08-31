# Official Solution

**Link:** [https://leetcode.com/problems/find-the-count-of-good-integers/solution/](https://leetcode.com/problems/find-the-count-of-good-integers/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Enumeration + Permutations and Combinations

#### Intuition

According to the description, if $x$ is a **palindromic** integer and divisible by $k$, then $x$ is called a **k-palindromic** integer. The question requires finding the number of **k-palindromic** integers with a digit length of $n$. According to the definition of **palindromic** integers, the sequence of digits on the left side of a **palindromic** integer is the same as the reverse sequence on the right side. If the digits on the left side are known, the digits on the right side can be determined. In the case of a digit length of $n$, we discuss the following categories:

+ If $n$ is even, then the first $\dfrac{n}{2}$ digits of the left half of the **palindromic** integer are in the same order as the reversed $\dfrac{n}{2}$ digits of the right half. The range of values for the first $\dfrac{n}{2}$ digits of the left half is $[0,10^{\frac{n}{2}})$, since there cannot be leading zeros, there are a total of $10^{\frac{n}{2}}-10^{\frac{n-2}{2}}$ different **palindromic** integers.

+ If $n$ is odd, then the left half of the **palindromic** integer has the same sequence as the reverse of the right half for the first $\dfrac{n-1}{2}$ digits, and the middle digit has a value range of $[0,9]$. The direct enumeration of the value range of the first $\dfrac{n + 1}{2}$ digits of the left half of the integer is $[0,10^{\frac{n + 1}{2}})$, since there cannot be leading zeros, there are a total of $10^{\frac{n+1}{2}} - 10^{\frac{n-1}{2}}$ different **palindromic** integers.

From the above deductions, it can be known that when the length is $n$, there are a total of $10^{\lfloor \frac{n+1}{2} \rfloor} - 10^{\lfloor \frac{n-1}{2} \rfloor}$ palindromic integers. The given range of $n$ is $[1,10]$, and there are at most $10^5$ different **k-palindromic** integers. Therefore, it is possible to enumerate and find all **k-palindromic** integers. Let $m = \lfloor \frac{n-1}{2} \rfloor$, and let $\textit{base} = 10^m$. Enumerate the left half of the palindromic integer, whose value range is in $[\textit{base}, 10 \times \textit{base})$, to generate a palindromic integer of length $n$. At this time, if the palindromic integer is divisible by $k$, then the palindromic integer is a **k-palindromic** integer.

According to the description, if the digits of an integer can be rearranged to form a **k-palindromic** integer, then the integer is called a "good integer." That is, if an integer has the same digits as a **k-palindromic** integer and does not contain leading zeros, then it is a "good integer." The problem requires finding the number of all "good integers" of length $n$. We know that for a **k-palindromic** integer, any permutation of the characters that do not contain leading zeros can be called a "good integer." Since all valid **k-palindromic** integers have been found, the problem now converts to finding the number of different permutation combinations of the given string.

When calculating, since different palindromic integers may consist of the same digits, to avoid redundant calculations, the string of each palindromic integer can be regularized. The string can be sorted in lexicographical order, which ensures the uniqueness of the same digit characters. We use the hash map $\textit{dict}$ to record the sorted strings. If the sorted string s has appeared in the hash map, it will not be recorded again. Next, consider the problem of permutations and combinations, as the same characters may appear multiple times, which requires consideration of multiple combinations. Assuming the given string of length $n$ has the occurrences of digits '0' to '9' as $c_0, c_1, \cdots, c_9$, and disregarding leading zeros, the number of permutations that can be formed is:

$$\dfrac{n!}{\prod_{i=0}^{9}c_i!}$$

Considering that there cannot be a leading $0$, at this point, it is first necessary to select a character that is not $'0'$ from the $n$ characters to place at the first position. There are $n-c_0$ characters that are not $'0'$. The remaining $n-1$ characters can be arranged arbitrarily, resulting in $(n-1)!$ combinations. In this case, without considering repeated elements, the number of combination schemes is $(n-c_0) \cdot (n-1)!$. Since some elements are repeated, it is necessary to divide by the permutations of the repeated elements. Therefore, the number of combinations is:

$$\dfrac{(n-c_0) \cdot (n-1)!}{\prod_{i=0}^{9}c_i!}$$

Enumerate the valid strings $s$ in the hash map $\textit{dict}$, and count the number of occurrences of characters from $`0’$ to $`9’$ in $s$, and store the counts in the array $\textit{cnt}$. According to $\textit{cnt}$, calculate the number of different combinations that $s$ can form, that is, the number of **good integers** that $s$ can form. Add this to the result $\textit{ans}$, and return the final result.

> The permutation and combination proof is as follows:

Since there are $n$ positions to place $n$ characters, first consider the character $'0'$, as it cannot be placed at the first position, it can only be chosen from the last $n-1$ positions to place $c_0$ of them, at this time there are $\binom{n-1}{c_0}$ ways. Next consider the character $'1'$, at this time it can be chosen from $n-c_0$ positions to place $c_1$ of them, at this time there are $\binom{n-c_0}{c_1}$ ways. Similarly, the number of ways for $'2',\cdots,'9'$ can be derived. Therefore, the total number of ways is:
$$S = \binom{n-1}{c_0}\binom{n-c_0}{c_1}\cdots\binom{n-c_0-c_1\cdots-c_8}{c_9}$$ 
The expansion of the above formula is as follows:
$$S = \dfrac{(n-1)!}{c_0!(n-1-c_0)!} \cdot \dfrac{(n-c_0)!}{c_1!(n-c_0-c_1)!}\cdots\dfrac{(n-c_0-c_1-\cdots-c_8)!}{c_9!(n-c0-c_1-\cdots-c_9)!}$$ 
By simplifying the above expression, we can obtain:
$$S = \dfrac{(n-c_0) \cdot (n-1)!}{c_0!c_1!\cdots c_9!0!} = \dfrac{(n-c_0) \cdot (n-1)!}{\prod_{i=0}^{9}c_i!}$$

#### Implementation

<iframe src="https://leetcode.com/playground/9eKvLikm/shared" frameBorder="0" width="100%" height="500" name="9eKvLikm"></iframe>

#### Complexity Analysis

Let $n$ be the given number, $m = \lfloor \dfrac{n+1}{2} \rfloor$.

- Time complexity: $O(n \log n \times 10^m)$.

Since there can be at most $10^m$ **k-palindromic** integers, it takes $O(10^m)$ time to enumerate all **k-palindromic** integers. Each **k-palindromic** integer has $n$ digits, and the digits need to be sorted, which takes $O(n \log n)$ time. Calculating the factorial of $n$ takes $O(n)$ time, so the overall time complexity is $O(n \log n \times 10^m)$.

- Space complexity: $O(n \times 10^m)$.

We need to enumerate all possible **k-palindromic** integers, there can be at most $10^m$ **k-palindromic** integers, each palindrome has $n$ digits, the space required in the hash map is $O(n)$, therefore, the required space is $O(n \times 10^m)$.