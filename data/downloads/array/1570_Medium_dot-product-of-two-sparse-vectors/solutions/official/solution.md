# Official Solution

**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solution/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solution/)

---

[TOC]

## Solution

A sparse vector is a vector that has mostly zero values, while a dense vector is a vector where most of the elements are non-zero. It is inefficient to store a sparse vector as a one-dimensional array (Approach 1). Instead, we can store the non-zero values and their corresponding indices in a dictionary, with the index being the key (Approach 2). Alternatively, we can represent elements of a sparse vector as an array of pairs for each non-zero value. Each pair has an integer index and a numerical value (Approach 3).

A related question is [LeetCode 311. Sparse Matrix Multiplication](https://leetcode.com/problems/sparse-matrix-multiplication/).

---

### Approach 1: Non-efficient Array Approach

#### Intuition

We ignore the sparsity of the array and store the original array.

#### Algorithm

<iframe src="https://leetcode.com/playground/e6zKv8fG/shared" frameBorder="0" width="100%" height="344" name="e6zKv8fG"></iframe>

#### Complexity Analysis

Let $$n$$ be the length of the input array.

* Time complexity: $$O(n)$$ for both constructing the sparse vector and calculating the dot product.

* Space complexity: $$O(1)$$ for constructing the sparse vector as we simply save a reference to the input array and $$O(1)$$ for calculating the dot product.

---

### Approach 2: Hash Table

#### Intuition

Store the non-zero values and their corresponding indices in a dictionary, with the index being the key. Any index that is not present corresponds to a value 0 in the input array.

#### Algorithm

<iframe src="https://leetcode.com/playground/KqZCp4s3/shared" frameBorder="0" width="100%" height="497" name="KqZCp4s3"></iframe>

#### Complexity Analysis

Let $$n$$ be the length of the input array and $$L$$ be the number of non-zero elements.

* Time complexity: $$O(n)$$ for creating the Hash Map; $$O(L)$$ for calculating the dot product.

* Space complexity: $$O(L)$$ for creating the Hash Map, as we only store elements that are non-zero. $$O(1)$$ for calculating the dot product.

---

### Approach 3: Index-Value Pairs

#### Intuition

We can also represent elements of a sparse vector as a list of <index, value> pairs. We use two pointers to iterate through the two vectors to calculate the dot product.

#### Algorithm

<iframe src="https://leetcode.com/playground/YKoYiLwj/shared" frameBorder="0" width="100%" height="500" name="YKoYiLwj"></iframe>

#### Complexity Analysis

Let $$n$$ be the length of the input array and $$L$$ and $$L_{2}$$ be the number of non-zero elements for the two vectors.

* Time complexity: $$O(n)$$ for creating the <index, value> pair for non-zero values; $$O(L+L_{2})$$ for calculating the dot product.

* Space complexity: $$O(L)$$ for creating the <index, value> pairs for non-zero values. $$O(1)$$ for calculating the dot product.