# Official Solution

**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solution/](https://leetcode.com/problems/longest-duplicate-substring/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Binary Search + Rabin-Karp

**String Searching Algorithms**

The problem is a follow-up of [Longest Repeating Substring](https://leetcode.com/problems/longest-repeating-substring/), and is typically used to check if you're comfortable with [string searching algortihms](https://en.wikipedia.org/wiki/String-searching_algorithm#Single-pattern_algorithms).

Best algorithms have a linear execution time on average. The most popular ones are [Aho-Corasick](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm),
[KMP](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm) and [Rabin-Karp](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm): Aho-Corasick is used by [fgrep](https://en.wikipedia.org/wiki/Grep#Variations), KMP is used for [chinese string searching](https://www.aclweb.org/anthology/C96-2200), and Rabin-Karp is used for plagiarism detection and in bioinformatics to look for similarities in two or more proteins.

The first two are optimized for a single pattern search, and Rabin-Karp for a multiple pattern search, that is exactly the case here.

**Split into two subtasks**

Here we have a "two in one" problem:

1. Perform a search by a substring length in the interval from 1 to N.

2. Check if there is a duplicate substring of a given length L.

**Subtask one: Binary search**

A naive solution would be to check all possible string lengths one by one starting from N - 1: if there is a duplicate substring of length N - 1, then of length N - 2, etc. Note that if there is a duplicate substring of length k, it means that there is a duplicate substring of length k - 1. Hence one could use a binary search by string length here, and have the first problem solved in $$O(\log N)$$ time.

![fig](../Figures/1044/binary.png)

**Subtask two: Rabin-Karp**

Subtask two, to check if there is a duplicate substring of a given length, is a multiple pattern search. Let's use the Rabin-Karp algorithm to solve it in a linear time. 

The idea is very simple: 

- Move a sliding window of length L along the string of length N.
 
- Check if the string in the sliding window
is in the hash set of already-seen strings. 

    - If yes, the duplicate substring is right here.
    
    - If not, save the string in the sliding window in the hash set.
    
!?!../Documents/1044_LIS.json:1000,411!?!

The linear time implementation of this idea is a bit
tricky because of two technical problems:

1. [How to implement a string slice in a constant time?](https://stackoverflow.com/questions/35180377/time-complexity-of-string-slice) 

2. Hashset memory consumption could be huge for very long strings. 
One could keep the string hash instead of the string itself but hash generation costs $$O(L)$$ for the string of length L, and the complexity of the algorithm would be $$O((N - L)L)$$, N - L for the slice and L for the hash generation. Therefore, we should think about how to generate a hash in a constant time.

Let's now address these problems.

**String slice in a constant time**

That's a very language-dependent problem. For the moment for Java and Python there is no straightforward solution, and to move the sliding window in a constant time one has to convert the string to another data structure. 

Python is already providing [memoryview](https://docs.python.org/3/library/stdtypes.html#memoryview), which is known to be surprisingly slow, and there is a lot of discussion about [strview](https://mail.python.org/pipermail/python-ideas/2011-December/012993.html).

The simplest solution both for Java and Python is to convert string to an integer array of ASCII values.

**Rolling hash: hash generation in a constant time**

To generate a hash of an array of length L, one needs $$O(L)$$ time.

> How to have the constant time of hash generation? Use the advantage of slice: only one integer in, and only one - out. 

That's the idea of [rolling hash](https://en.wikipedia.org/wiki/Rolling_hash). Here we'll implement the simplest one, polynomial rolling hash. Beware that's polynomial rolling hash is NOT the [Rabin fingerprint](https://en.wikipedia.org/wiki/Rolling_hash#Rabin_fingerprint).

Since one deals here with lowercase English letters, all values in the integer array are between 0 and 25:

`arr[i] = (int)S.charAt(i) - (int)'a'`

So one could consider string `abcd` -> `[0, 1, 2, 3]` as a number in a [numeral system](https://en.wikipedia.org/wiki/Numeral_system) with the base 26. Hence `abcd` -> `[0, 1, 2, 3]` could be hashed as 

$$
h_0 = 0 \times 26^3 + 1 \times 26^2 + 2 \times 26^1 + 3 \times 26^0
$$

Let's write the same formula in a generalized way, where $$c_i$$ is an integer array element and $$a = 26$$ is a system base.

$$
h_0 = c_0 a^{L - 1} + c_1 a^{L - 2} + ... + c_i a^{L - 1 - i} + ... + c_{L - 1} a^1 + c_L a^0
$$

$$
h_0 = \sum_{i = 0}^{L - 1}{c_i a^{L - 1 - i}}
$$

Now let's consider the slice `abcd` -> `bcde`. For int arrays that means `[0, 1, 2, 3]` -> `[1, 2, 3, 4]`, to remove the number 0 and to add the number 4.

$$
h_1 = (h_0 - 0 \times 26^3) \times 26 + 4 \times 26^0
$$

Let's look at what changed piece by piece. First, we subtracted $$0 \times 26^3$$ from $$h_0$$; this removed the contribution of the first element in the array from the hash. Then we multiplied the remaining hash value by $$26$$, which increased the power of the base value for each of the elements remaining in the array (i.e., $$2 \times 26^1) \times 26 = 2 \times 26^2$$).  Finally, we add the contribution of the new element (`e`) to the hash. This results in:

$$
h_1 = 1 \times 26^3 + 2 \times 26^2 + 3 \times 26^1 + 4 \times 26^0
$$

Thus after applying a constant amount of operations to the hash for `abcd`, we have obtained the hash for the next substring, `bcde`.

In general form:

$$
h_1 = (h_0 a - c_0 a^L) + c_{L + 1}
$$

Now hash regeneration is perfect and fits in a constant time. There is one more issue to address: the possible overflow problem. 

**How to avoid overflow:**

$$a^L$$ could be a large number and hence the idea is to set limits to avoid the overflow. To set limits means to limit a hash by a modulus and instead of using the hash itself, we will use `h % modulus`.

We should select a modulus that is large enough for our purpose, but how large is that? [You can read more about the topic here.](https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use)

We must use caution when using a rolling hash to assess the equality of two substrings. The modulus can be thought of as the number of bins that we will use to store the starting index of seen substrings. So there is a higher probability of having two different substrings being stored in the same bin (`h % modulus`) when the modulus is small. 

When two **different** strings have the same hash value, we call this a collision. In an ideal setting, where every test case is known, this issue could be resolved by adjusting the modulus to avoid collisions. However, in a real-world setting, whenever two substrings have the same hash, we must verify that the substrings are truly equal. This leads to a Rabin-Karp time complexity of $$O(L(N - L))$$ in the worst case when many substring hashes collide. 

Fortunately, we can reduce the probability of collisions by selecting a good value for our modulus.

Generally speaking, a good modulus will have two traits:
1. The modulus is not too big and not too small. That is to say, it is large, which helps reduce the probability of collisions, but it is still small enough to fit in a 32-bit integer.
2. It is prime. This helps increase the uniformity of our hash values after taking `h % modulus`, which in turn decreases the probability of collisions occurring. If you would like to know more about why this is, you can read about it [here](https://stackoverflow.com/questions/1145217/why-should-hash-functions-use-a-prime-number-modulus).

Here, we will use our favorite modulus, $$10^9 + 7$$, which satisfies both of these conditions.

One last note, there is another overflow issue here that is purely Java-related. While in Python, the hash regeneration goes perfectly fine, in Java, the same thing is better to rewrite to avoid long overflow. Check [here](https://leetcode.com/problems/longest-duplicate-substring/discuss/292982/Java-version-with-comment) the nice explanation by @[hqt](https://leetcode.com/hqt/).

<iframe src="https://leetcode.com/playground/FonxNynL/shared" frameBorder="0" width="100%" height="89" name="FonxNynL"></iframe>

**Binary search algorithm**

- Use binary search by a substring length to check lengths from 1 to N
`left = 1, right = N`. While left != right:

    - L = left + (right - left) / 2
    
    - If search(L) != -1 (i.e. there is a duplicate substring), left = L + 1
    
    - Otherwise (no duplicate substring), right = L. 
    
- Return a duplicate string of length `left - 1`, or an empty string if 
there is no such a string.

**Rabin-Karp algorithm**
    
- Compute the hash of the substring consisting of the first `L` characters of string `S`. 

- We will initialize the hash map of already seen substrings with this hash value as a key and a list containing the starting index of the substring (`0`) as the value.  

  The reason we store the first index of the substring is so that if we see this hash value again, we can compare the current substring to each substring that has the same hash value to see if the two strings actually match or if this is a hash collision.  
  
  Every time we compare two strings will cost $$O(L)$$ time. If we designed a very poor hash function or picked a very weak modulus value (like 1), we could potentially spend $$O(L \cdot (N - L)^2)$$ time comparing each substring of length `L` to all previous substrings of length `L` on each call to `search`. 

  Fortunately, the hash function we are using guarantees that there will not be any collisions between hash values that are less than `MOD` (before taking the modulus). Furthermore, selecting a large, prime modulus helps create a more uniform distribution of the hash values that are greater than `MOD`. So the probability of two hash values colliding is very small, and on average, we expect the number of collisions to be negligible. Therefore, we can expect the `search` function to take $$O(N)$$ time on average.
        
- Iterate over the start position of each substring in `S` from $$1$$ to $$N - L$$. Note we already initialized our hashmap with the substring starting at index zero.
        
    - Compute the rolling hash based on the previous hash value.
    
    - If the hash is in t

**Implementation**

<iframe src="https://leetcode.com/playground/VwSebXYU/shared" frameBorder="0" width="100%" height="500" name="VwSebXYU"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of input `S`.

* Time complexity: $$O(N \log N)$$. 

  Performing a binary search requires $$O(\log N)$$ iterations. At each iteration, we spend on average $$O(N)$$ time for the Rabin-Karp algorithm. Note that the worst-case scenario for the Rabin-Karp algorithm is when every substring of length $$L$$ has the same hash value and there are no duplicate substrings of length $$L$$. This would require $$O(L \cdot (N - L) / 2)$$ time to compare each of the $$O(N - L)$$ substrings to all previous substrings resulting in $$O(L \cdot (N - L)^{2})$$.
  
  However, because of the problem constraints, there can be at most $$30,000$$ substrings and because we have $$10^9 + 7$$ bins, the probability of a collision occurring between two different substrings is small. It is quite possible that there will be some collisions, but the probability of there being many collisions (on the order of $$N - L$$ collisions) is extraordinarily small. So the average time complexity of the Rabin-Karp algorithm will be $$O(N - L)$$ which simplifies to $$O(N)$$.
  
* Space complexity: $$O(N)$$ 

  We use a hashmap `seen` to store the starting index and hash value for each substring. This will contain at most $$N$$ key-value pairs.