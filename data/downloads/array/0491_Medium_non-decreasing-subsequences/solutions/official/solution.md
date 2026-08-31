# Official Solution

**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solution/](https://leetcode.com/problems/non-decreasing-subsequences/solution/)

---

[TOC]

## Solution

--- 

### Overview

One of the first things you should always do is look at the
constraints. Often you can figure out what
approach needs to be taken simply by looking at the input size.
In an interview, asking your interviewer about the constraints
will also show your attention to detail – on top of giving you information.

In this particular problem, the length of the input is small,
`1 <= nums.length <= 15`. With such small input sizes, we can
safely assume that a brute-force solution that generates
all subsequences of increasing numbers will be accepted.

---

### Approach 1: Backtracking

#### Intuition

Whenever you have a problem where you need to check the
subsequences/combinations/permutations of some group of letters/numbers, the
first thought you should have is backtracking. If you are new to
backtracking, check out our
[backtracking explore card](https://leetcode.com/explore/featured/card/recursion-ii/472/backtracking/).
Backtracking algorithms can often keep the space complexity
linear with the input size.

There are not any tricks needed for this problem – the hard
part is just figuring out how to generate all possible
increasing subsequences, and to do this using a standard
backtracking algorithm template.

**Example**. $nums = [1, 5, 2, 4, 8, 5, 4, 7, 9]$. Consider
the first $7$ elements of the array $nums$ and the
subsequence $[1, 2, 4, 4]$. Then we look at the next element
$nums[7] = 7$. We have two options: either append this element to
the sequence and obtain a new sequence $[1, 2, 4, 4, 7]$ or
skip it and proceed with the original sequence. By skipping it, at the next element, we can create a new subsequence $[1, 2, 4, 4, 9]$. By taking it, we can create $[1, 2, 4, 4, 7, 9]$ as well, so we should try both options.

And what if $nums[7]$ is $3$ instead of $7$? Then we do not have an
option to append because the sequence $[1, 2, 4, 4, 3]$ is not
increasing. In this case, we must skip the element.

Each time we have two options: add the current element to the sequence
(if it is possible) or not.

Note that there might be duplicates among the found subsequences,
and we do not want to include the same subsequence more than once. We can achieve this by
maintaining them in a set.

#### Algorithm

The easiest way to implement this algorithm is to use recursion.
Our algorithm will be as follows:

Use a backtracking function $backtrack$ to generate all possible
subsequences.

* The function takes the (0-based) $index$ we are
currently checking and the current increasing $sequence$.

* The base case is $index = nums.length$, i.e. we have run out of
elements. If the length of the current subsequence is at least $2$,
add it to the answer.

* Otherwise, try to append $nums[index]$ to the $sequence$ if it
remains increasing after this. If we appended the element, call
$backtrack(index + 1)$ recursively and delete $nums[index]$ from the end of the
$sequence$ after that (backtrack). We should always recursively call $backtrack(index + 1)$ without
appending the element (the second option).

#### Implementation


<iframe src="https://leetcode.com/playground/3yqZLusc/shared" frameBorder="0" width="100%" height="500" name="3yqZLusc"></iframe>


#### Complexity Analysis

Let $n = nums.length$.

* Time complexity: $O(2^n \cdot n^2)$ or $O(2^n \cdot n)$ depending on which
implementation of a set we use.

	The total number of subsequences (including the empty
	one) of an array $nums$ is $2^n$. In the worst case, we may
	check all of them.
	
	If we use Java `HashSet` or Python `set` (which are
	implemented as hash sets under the hood), the total time
	complexity is $O(2^n \cdot n)$ because we add to the hash set
	$O(2^n)$ sequences each having a length of $O(n)$.
	
	However, if we use C++ `set` (which is a 
	red-black tree under the hood), the complexity is
	$O(2^n \cdot n^2)$. Do not worry if you do not know what a
	red-black tree is. It suffices to know that the complexity
	of insertion into it is logarithmic in the number of
	elements in the set. Here we have a factor of
	$O(\log 2^n) = O(n)$ for insertion into the set.

* Space complexity: $O(2^n \cdot n)$.
	
	The answer contains $O(2^n)$ sequences, each having a
	length of $O(n)$. If we do not count the answer as part of the space complexity, then the space complexity is $O(n)$ for the recursion call stack and space needed to build each sequence.

---

### Approach 2: Bitmasks

#### Intuition

Another approach to iterate over all subsequences of an array is
by using bitmasks. This approach is common when we have to
generate all subsets of a set because bitmasks give you an easy way
to represent a set with an integer.

How exactly do we associate a set and an integer?
Look at the binary representation of the integer. If the $i$-th
bit in it is $1$, then element $i$ belongs to the set
otherwise, it does not.

For example, consider a bitmask
$101111_2=2^0+2^1+2^2+2^3+2^5=47$. It represents the
set $\{0, 1, 2, 3, 5\}$. The bitmask $1001010_2=2^1+2^3+2^6=74$
represents the set $\{1, 3, 6\}$.

In this problem, we use bitmasks to represent sets of (0-based)
indices of the array $nums$.

For example, let $nums=[4, 6, 7, 7]$. The set of indices $\{0, 1, 3\}$
corresponds to the subsequence $[4, 6, 7]$. The bitmask
$11=1+2+8=2^0+2^1+2^3=1011_2$ represents this set.

Let `n = nums.length`. The bitmask $2^0+2^1+\dots+2^{n-1}=2^n-1$
represents the set of all indices $\{0, 1, \dots, n-1\}$.
The bitmasks between $1$ and $2^n-1$ represent all its non-empty subsets.
Therefore, one can iterate over all integers between $1$ and
$2^n-1$ to iterate over all possible non-empty subsets of indices.

When we consider a particular bitmask, we know the subset of
indices it represents and the corresponding subsequence of the
array. If the subsequence is increasing, add it to the answer.

As in the previous approach, we maintain unique subsequences in a set.

#### Algorithm

* Iterate over bitmasks from $1$ to $2^n-1$.

* For each bitmask, build the subsequence that corresponds to this bitmask. Here we
iterate over bits from $0$ to $n-1$ and check whether the
current bit is $1$ in the bitmask. We can get the value of a
particular bit in a number with bitwise operations.

>*Right shift*. In C++, Java and Python, syntax is `bitmask >> i`.
The right-shift operator shifts the bit pattern in the $bitmask$
to the right by the number of positions specified by $i$.
The bit positions vacated by the shift operation are zero-filled.
For example, let $a=128=10000000_2$. Then $a >> 1=64=01000000_2$,
$a >> 7=1=00000001_2$.
<br /><br />
*Bitwise AND*. The bitwise AND operator (`&`) compares each bit of the first
operand to the corresponding bit of the second operand. If both
bits are $1$, the corresponding result bit is $1$. Otherwise,
the corresponding result bit is $0$.
For example, let $a=1100_2, b=1010_2$. Then $a \& b = 1000_2$.
<br /><br />
The value of the $i$-th bit in $bitmask$ is $(bitmask >> i) \space \& \space 1$.
For example, let $bitmask=11= 1011_2$, and we want to test its
1st bit (0-indexed). First, calculate $bitmask >> 1 = 0101_2$ to put the 1st
bit in the rightmost position. Then perform bitwise AND of this
number with $1$. $(bitmask >> 1) \space \& \space 1 = 101_2 \space \& \space 001_2=001_2=1$.
To test the $2$-nd bit, we compute
$(bitmask >> 2) \space \& \space 1 = 010_2 \space \& \space 001_2=000_2=0$.
<br /><br />
As you can see, the $i^{th}$ bit is $1$ if $(bitmask >> i) \space \& \space 1$ is non-zero. The CPU performs bitwise operations extremely fast, making this an efficient approach.

* If the length of the sequence is at least 2, and it is increasing,
add it to the answer.

#### Implementation


<iframe src="https://leetcode.com/playground/d8wZ6fH6/shared" frameBorder="0" width="100%" height="500" name="d8wZ6fH6"></iframe>


#### Complexity Analysis

* Time complexity: $O(2^n \cdot n^2)$ or $O(2^n \cdot n)$.

	We check $O(2^n)$ bitmasks. For each bitmask, finding the subsequence and verifying it costs $O(n)$. The complexity of
	inserting into the set is the same as in the previous
	approach.

* Space complexity: $O(2^n \cdot n)$.

	The answer contains $O(2^n)$ sequences, each having a
	length of $O(n)$. If we do not count the output as part of the space complexity, then the space complexity is $O(n)$ to build the subsequences.