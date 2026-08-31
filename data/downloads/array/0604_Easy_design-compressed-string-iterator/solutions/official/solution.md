# Official Solution

**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solution/](https://leetcode.com/problems/design-compressed-string-iterator/solution/)

---

[TOC]


## Solution

### Approach #1 Uncompressing the String [Time Limit Exceeded]

**Algorithm**

In this approach, we make use of precomputation. We already form the uncompressed string and append the uncompressed letters for each compressed letter in the $$compressedString$$ to the $$res$$ stringbuilder. To find the uncompressed strings to be stored in $$res$$, we traverse over the given $$compressedString$$. Whenver we find an alphabet, we find the number following it by making use of decimal mathematics. Thus, we get the two elements(alphabet and the count) required for forming the current constituent of the uncompressed string.

Now, we'll look at how the `next()` and `hasNext()` operations are performed:

1. `next()`: We start off by checking if the compressed string has more uncompressed letters pending. If not, `hasNext()` returns a False value and `next()` returns a ' '. Otherwise, we return the letter pointed by $$ptr$$, which indicates the next letter to be returned. Before returning the letter, we also update the $$ptr$$ to point to the next letter in $$res$$.

2. `hasNext()`: If the pointer $$ptr$$ reaches beyond the end of $$res$$ array, it indicates that no more uncompressed letters are left beyond the current index pointed by $$ptr$$. Thus, we return a False in this case. Otherwise, we return a True value.


<iframe src="https://leetcode.com/playground/fddFPkFm/shared" frameBorder="0" name="fddFPkFm" width="100%" height="479"></iframe>

**Performance Analysis**

* We precompute the elements of the uncompressed string. Thus, the space required in this case is $$O(m)$$, where $$m$$ refers to the length of the uncompressed string.

* The time required for precomputation is $$O(m)$$ since we need to generate the uncompressed string of length $$m$$.

* Once the precomputation has been done, the time required for performing `next()` and `hasNext()` is $$O(1)$$ for both.

* This approach can be easily extended to include `previous()`, `last()` and `find()` operations. All these operations require the use an index only and thus, take $$O(1)$$ time. Operations like `hasPrevious()` can also be easily included.

* Since, once the precomputation has been done, `next()` requires $$O(1)$$ time, this approach is useful if `next()` operation needs to be performed a large number of times. However, if `hasNext()` is performed most of the times, this approach isn't much advantageous since precomputation needs to be done anyhow.

* A potential problem with this approach could arise if the length of the uncompressed string is very large. In such a case, the size of the complete uncompressed string could become so large that it can't fit in the memory limits, leading to memory overflow.

---

### Approach #2  Pre-Computation [Accepted]

**Algorithm**

In this approach, firstly, we split the given $$compressedString$$ based on  numbers(0-9) and store the values(alphabets) obtained in $$chars$$ array. We also split the $$compressedString$$ based on the alphabets(a-z, A-Z) and store the numbers(in the form of a string) in a $$nums$$ array(after converting the strings obtained into integers). We do the splitting by making use of regular expression matching.

A regular expression is a special sequence of letters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern. They can be used to search, edit, or manipulate text and data.

This splitting using regex is done as a precomputation step. Now we'll look at how the `next()` and `hasNext()` operations are implemented.

1. `next()`: Every time the `next()` operation is performed, firstly we check if there are any more letters to be uncompressed. We check it by making use of `hasNext()` function. If there aren't any more letters left, we return a ' '. We make use of a pointer $$ptr$$ to keep a track of the letter in the $$compressedString$$ that needs to be returned next. If there are more letters left in the uncompressed string, we return the current letter pointed to by $$ptr$$. But, before returning this letter, we also decrement the $$nums[ptr]$$ entry to indicate that the current letter is pending in the uncompressed string by one lesser count. On decrementing this entry, if it becomes zero, it indicates that no more instances of the current letter exist in the uncompressed string. Thus, we update the pointer $$ptr$$ to point to the next letter.

2. `hasNext()`: For performing `hasNext()` operation, we simply need to check if the $$ptr$$ has already reached beyong the end of $$chars$$ array. If so, it indicates that no more compressed letters exist in the $$compressedString$$. Hence, we return a False value in this case. Otherwise, more compressed letters exist. Hence, we return a True value in this case.


<iframe src="https://leetcode.com/playground/rRUsHDy3/shared" frameBorder="0" name="rRUsHDy3" width="100%" height="428"></iframe>

**Performance Analysis**

* The space required for storing the results of the precomputation is $$O(n)$$, where $$n$$ refers to the length of the compressed string. The $$nums$$ and $$chars$$ array contain a total of $$n$$ elements.

* The precomputation step requires $$O(n)$$ time. Thus, if `hasNext()` operation is performed most of the times, this precomputation turns out to be non-advantageous.

* Once the precomputation has been done, `hasNext()` and `next()` requires $$O(1)$$ time. 

* This approach can be extended to include the `previous()` and  `hasPrevious()` operations, but that would require making some simple modifications to the current implementation.

---

### Approach #3  Demand-Computation [Accepted]

**Algorithm**

In this approach, we don't make use of regex for finding the individual components of the given $$compressedString$$. We do not perform any form of precomputation. Whenever an operation needs to be performed, the required results are generated from the scratch. Thus, the operations are performed only on demand.

Let's look at the implementation of the required operations:

1. `next()`: We make use of a global pointer $$ptr$$ to keep a track of which compressed letter in the $$compressedString$$ needs to be processed next. We also make use of a global variable $$num$$ to keep a track of the number of instances of the current letter which are still pending. Whenever `next()` operation needs to be performed, firstly, we check if there are more uncompressed letters left in the $$compressedString$$. If not, we return a ' '. Otherwise, we check if there are more instances of the current letter still pending. If so, we directly decrement the count of instances indicated by $$nums$$ and return the current letter. But, if there aren't more instances pending for the current letter, we update the $$ptr$$ to point to the next letter in the $$compressedString$$. We also update the $$num$$ by obtaining the count for the next letter from the $$compressedString$$. This number is obtained by making use of decimal arithmetic.

2. `hasNext()`: If the pointer $$ptr$$ has reached beyond the last index of the $$compressedString$$ and $$num$$ becomes, it indicates that no more uncompressed letters exist in the compressed string. Hence, we return a False in this case. Otherwise, a True value is returned indicating that more compressed letters exist in the $$compressedString$$.

<iframe src="https://leetcode.com/playground/nto5MsQu/shared" frameBorder="0" name="nto5MsQu" width="100%" height="479"></iframe>
**Performance Analysis**

* Since no precomputation is done, constant space is required in this case.

* The time required to perform `next()` operation is $$O(1)$$.

* The time required for `hasNext()` operation is $$O(1)$$.

* Since no precomputations are done, and `hasNext()` requires only $$O(1)$$ time, this solution is advantageous if `hasNext()` operation is performed most of the times.

* This approach can be extended to include `previous()` and `hasPrevious()` operationsm, but this will require the use of some additional variables.