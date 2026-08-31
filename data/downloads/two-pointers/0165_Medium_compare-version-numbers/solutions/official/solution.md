# Official Solution

**Link:** [https://leetcode.com/problems/compare-version-numbers/solution/](https://leetcode.com/problems/compare-version-numbers/solution/)

---

[TOC]

## Solution

---

### Approach 1: Split + Parse, Two Pass

**Intuition**

The first idea is to split both strings by dot character into chunks and then compare the chunks one by one.

![traversal](../Figures/165/yoyo3.png)

That works fine if the number of chunks is the same for both versions. If not, we need to pad the shorter string by adding `.0` at the end of the string with fewer chunks one or several times, so that the number of chunks will be the same.

![traversal](../Figures/165/diff3.png)

**Algorithm**

- Split both strings by dot character into two arrays.

- Iterate over the longest array and compare chunks one by one. If one of the arrays is over, virtually add as many zeros as needed to continue the comparison with the longer array.

    - If two chunks are not equal, return 1 or -1.

- If we're here, the versions are equal. Return 0.

**Implementation**

<iframe src="https://leetcode.com/playground/byW63Sqx/shared" frameBorder="0" width="100%" height="480" name="byW63Sqx"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N + M)$$, where $$N$$ and $$M$$ are lengths of input strings.

* Space complexity : $$\mathcal{O}(N + M)$$ to store arrays `nums1` and `nums2`.

---

### Approach 2: Two Pointers, One Pass

**Intuition**

Rather than splitting the string all at once with the `split()` function, we could also split the string **_on the fly_**, through which we only need to iterate through the revisions once.

>The idea is that we split the string _chunk by chunk_, _i.e._ each trunk represents a revision in the version number. The moment we retrieve a trunk from each string, we then compare them.

In this way, one could move along both strings in parallel, and retrieve and compare corresponding chunks. Once both strings are parsed, the comparison is done as well.

As a result, the process can be done in a **single** pass.

**Algorithm**

First, we define a function named `get_next_chunk(version, n, p)`, which is to retrieve the next chunk in the string.

This function takes three arguments: the input string `version`, its length `n`, and a pointer `p` set to the first character of the chunk to retrieve. It returns an integer chunk in between the pointer `p` and the next dot. To help with the iteration, it returns a pointer set to the first character of the next chunk.

Here is how one could solve the problem using this function:

- Set a pointer `p1` pointed to the beginning of string `version1` and a pointer `p2` to the beginning of string `version2`: `p1 = p2 = 0`.

- Iterate over both strings in parallel. While `p1 < n1 or p2 < n2`:

    - Retrieve the next chunk `i1` from string `version1` and next chunk `i2` from string `version2` using the above-defined `get_next_chunk` function.

    - Compare `i1` and `i2`. If they are not equal, return 1 or -1.

- If we're here, the versions are equal. Return 0.

Now let's implement our `get_next_chunk(version, n, p)` function:

- The beginning of the chunk is marked by the pointer `p`. If `p` is set to the end of the string, the string is already parsed. To continue the comparison, let's add a virtual `.0` at the end of this string by returning 0.

- If `p` is not at the end of the string, move the pointer `p_end` along the string to find the end of the chunk.

- Return the chunk `version.substring(p, p_end)`.

**Implementation**

!?!../Documents/165_LIS.json:1000,357!?!

<iframe src="https://leetcode.com/playground/ds3bfkG5/shared" frameBorder="0" width="100%" height="500" name="ds3bfkG5"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(\max(N, M))$$, where $$N$$ and $$M$$ are the lengths of the input strings respectively. It's a one-pass solution.

* Space complexity : $$\mathcal{O}(\max(N, M))$$.
  - Despite the fact that we did not keep arrays of revision numbers, we still need some additional space to store a substring of the input string for integer conversion.
  In the worst case, the substring could be of the original string as well.


---