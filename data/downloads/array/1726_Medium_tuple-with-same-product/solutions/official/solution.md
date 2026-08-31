# Official Solution

**Link:** [https://leetcode.com/problems/tuple-with-same-product/solution/](https://leetcode.com/problems/tuple-with-same-product/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array `nums` containing `n` **distinct** positive integers. The goal is to find the number of tuples `(a, b, c, d)` such that:

-   `a`, `b`, `c`, and `d` are distinct elements of the `nums` array, and
-   The condition `a * b == c * d` is satisfied.

Note, that a tuple refers to an ordered list of 4 elements. This means the tuples `(2, 3, 1, 6)` and `(3, 2, 1, 6)` are considered distinct and counted separately. 

In fact, if we have two pairs of numbers `{a, b}` and `{c, d}` that satisfy `a * b == c * d`, we can generate multiple distinct tuples by varying the order of the elements and the pairs:

-   `(a, b, c, d)`
-   `(b, a, c, d)`
-   `(a, b, d, c)`
-   `(b, a, d, c)`
-   `(c, d, a, b)`
-   `(c, d, b, a)`
-   `(d, c, a, b)`
-   `(d, c, b, a)`

To understand this, observe that for every two pairs of distinct numbers `{a, b}` and `{c, d}`, there are three independent ways to reorder the elements and pairs:

1. Within each pair:

-   The order of elements in `{a, b}` can be `(a, b)` or `(b, a)` (2 options).
-   Similarly, the order in `{c, d}` can be `(c, d)` or `(d, c)` (2 options).

2. Between the pairs:

-   The order of the two pairs can be `({a, b}, {c, d})` or `({c, d}, {a, b})` (2 options).

Since these choices are independent, the total number of distinct tuples is the product of these options: $2 \times 2 \times 2 = 8$.

---

### Approach 1: Optimized Brute Force

#### Intuition

A straightforward way to solve the problem is to test all possible combinations of values for `a`, `b`, `c`, and `d` and count how many satisfy the condition. This approach can be implemented using 4 nested `for` loops, with each loop assigning a value to one of `a`, `b`, `c`, or `d`. However, this method has a time complexity of $O(n^4)$, which is inefficient for the given constraints.

To optimize this approach, we can make the following observations:

1. If `a` and `b` are both greater (or both smaller) than `c` and `d`, then the condition `a * b == c * d` cannot be true because the first product will be strictly greater than (or strictly smaller than) the second. To address this, we will sort the array to ensure that the selected values for `c` and `d` always lie between the values of `a` and `b`.
2. If `a * b` is not a multiple of `c` for some fixed values of `a`, `b`, and `c`, the condition cannot be satisfied for any integer value of `d`. For cases where the condition can be satisfied, the value of `d` is already determined as `d = a * b / c`. Instead of searching the entire array to find a matching value for `d`, we can store all possible values in a hash map and efficiently check if the required value exists. As we process each potential value of `c` that could form a tuple (i.e., values that divide the product `a * b`), we add them to a hash map, `possibleDValues`, ensuring they are readily available for efficient lookups when needed.

For example, consider the array `[1, 2, 3, 4, 8]`. Let `a = 1` and `b = 8`. Their product is `8`. If we choose `c = 4`, then `d` must be `8 / 4 = 2` to satisfy the condition. Number `2` exists in the array so the tuple `(1, 8, 4, 2)` is a valid one. However, for `c = 3`, `c` is not a divisor of `a * b`, so the condition cannot be satisfied for any value of `d` and therefore this combination won't lead to any valid tuple. 

> For a more comprehensive understanding of hash tables, check out the [Hash Table Explore Card 🔗](https://leetcode.com/explore/learn/card/hash-table/). This resource provides an in-depth look at hash tables, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

-   Initialize `numsLength` to the length of the `nums` array.
-   Sort the array in increasing order.
-   Initialize `totalNumberOfTuples` to `0`.
-   Iterate over `nums` to try out all possible values of `a` with `aIndex` from `0` to `numsLength - 1`. 
    -   Iterate over the rest values of `nums` to try all possible values for `b` with `bIndex` from `numsLength - 1` to `aIndex + 1`.
        -   Define `product` as `nums[aIndex] * nums[bIndex]`.
        -   Initialize a hash map `possibleDValues`.
            -   Iterate over `nums` with `cIndex` from `aIndex + 1` to `bIndex - 1`:
                -   If the condition can be satisfied for some integer value of `d`, i.e. if `product % nums[cIndex] == 0`:
                    -   Define the desired value of `d` as `dValue =  product / nums[cIndex]`.
                    -   If `dValue` is in `possibleDValues` then add `8` (all possible tuples) to `totalNumberOfTuples`.
                    -   Add `nums[cindex]` to the `possibleDValues`.
-   Return `totalNumberOfTuples`.
                        
#### Implementation

> This solution results in a TLE (Time Limit Exceeded) error for the `Python3` implementation.

<iframe src="https://leetcode.com/playground/GMSAz8vi/shared" frameBorder="0" width="100%" height="500" name="GMSAz8vi"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `nums` array.

-   Time complexity: $O(n^3)$

    First, we sort the array in $O(n \log n)$ time. Next, we use 3 nested loops to fix the values of `a`, `b`, and `c`, and for each combination, we check whether the required value of `d` exists in the array. Using a hash set allows us to perform both insertion and lookup operations in constant time on average. Thus, the operations within the innermost loop take constant time. As a result, the overall time complexity of the algorithm is $O(n^3)$.

-   Space complexity: $O(n)$

    We create a hash set to store the possible values variable `d` can take. This hash set can grow up to $O(n)$ in size, so the algorithm requires $O(n)$ extra space.

---

### Approach 2: Count Product Frequency

#### Intuition

In this approach, instead of directly finding the number of *tuples* in `nums` that meet the condition, we first create an array of all possible products of two numbers from `nums`. Then, we count how many times each product appears and from that, we calculate the number of *pairs* of products that are equal.

This simplified version of the problem is equivalent to the original because the distinctness of the numbers in `nums` ensures that if two products are the same, they must come from two different pairs of numbers. From each of these pairs, we can create `8` valid tuples, as explained in the overview.

Let's take a look at an example, where `nums = [2, 3, 4, 6]`. 
First, we will calculate the pairwise products of the elements in `nums`, and store them in a new array: `pairProducts = [6, 8, 12, 12, 18, 24]`.
We notice that only one pair of equal products exists: `(12, 12)`. Based on the observation above, each of these `12`'s is formed by two distinct numbers in `nums` (`2` and `6`, `3` and `4`), which can create `8` tuples. Therefore, the answer here is `8`.

To count the number of times each product value occurs, we will sort the `pairProducts` array and process it from left to right. If the current value is equal to the last one seen, then we'll increment a counter. Otherwise, we will calculate the number of tuples for the previous product value and then update it to the current one.

#### Algorithm

-   Initialize
    - `numsLength` to the length of the `nums` array.
    -  an array, `pairProducts`, to store the pairwise products of the elements.
    - `totalNumberOfTuples` to `0`.
-   Iterate over `nums` with `firstIndex` from `0` to `numsLength - 1`:
    -   Iterate over `nums` with `secondindex` from `firstIndex + 1` to `numsLength - 1`:
        -   Add the product `nums[firstIndex] * nums[secondindex]` to the `pairProducts` list.
-   Sort `pairProducts` in increasing order.
-   Initialize `lastProductSeen` to `-1` and `sameProductCount` to `0`.
-   Iterate over `pairProducts` with `productIndex` from `0` to `pairProducts.size - 1`:
    -   If the current product is equal to the last seen:
        -   Increment `sameProductCount` by `1`.
    -   Otherwise:
        -   Calculate the number of pairs of products with value `lastProductSeen`: `pairsOfEqualProduct = (sameProductCount - 1) * sameProductCount / 2`.
        -   Add all possible tuples for that product value to the total: increment `totalNumberOfTuples` by `8 * pairsOfEqualProduct`.
        -   Set `lastProductSeen` to the `pairProducts[productIndex]` and `sameProductCount` to `1`.
-   Handle the last group of products: 
    -   Calculate the number of pairs of products with value `lastProductSeen`: `pairsOfEqualProduct = (sameProductCount - 1) * sameProductCount / 2`.
    -   Add all possible tuples for that product value to the total: increment `totalNumberOfTuples` by `8 * pairsOfEqualProduct`.
-   Return `totalNumberOfTuples`.
                        
#### Implementation

<iframe src="https://leetcode.com/playground/EYewLEL4/shared" frameBorder="0" width="100%" height="500" name="EYewLEL4"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `nums` array.

-   Time complexity: $O(n^2 \log{n})$

    We iterate over the array with a nested loop to calculate all pairwise products, which takes $O(n^2)$. Sorting the `pairProducts` array requires $O(n^2 \log{n^2}) = O(2n^2 \log{n}) = O(n^2 \log{n})$ time, as the length of the array is $O(n^2)$. Then, we perform a final pass over the `pairProducts` array to count the frequency of each product and update the total number of tuples. Each iteration only involves constant-time operations, and therefore this step costs $O(n^2)$ time. Overall, the time complexity of the algorithm is $O(n^2 + n^2 \log{n} + n^2) = O(n^2 \log{n})$.

-   Space complexity: $O(n^2)$

    The `pairProducts` array contains the products of all pairs of elements in `nums`. Since there exist $\frac{n \times (n - 1)}{2} = O(n^2)$ pairs of $n$ elements, the `pairProducts` array requires $O(n^2)$ space.

---

### Approach 3: Product Frequency Hash Map

#### Intuition

In the previous approach, we identified a bottleneck caused by sorting the `pairProducts` array to calculate the frequency of each element. To address this, instead of storing each pair product in a new array, we will directly update the frequency of each product using a hash map. Then, following the same approach as before, we will count the number of pairs of products with the same value and calculate how many tuples can be formed from them.

> For a more comprehensive understanding of hash tables, check out the [Hash Table Explore Card 🔗](https://leetcode.com/explore/learn/card/hash-table/). This resource provides an in-depth look at hash tables, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

-   Initialize 
    -   `numsLength` to the length of the `nums` array.
    -   a hash map, `pairProductsFrequency`.
    -   `totalNumberOfTuples` to `0`.
-   Iterate over `nums` with `firstIndex` from `0` to `numsLength - 1`:
    -   Iterate over `nums` with `secondindex` from `firstIndex + 1` to `numsLength - 1`:
        -   Increment the frequency of the product: `nums[firstIndex] * nums[secondindex]` by `1`.
-   For each element `[productValue, productFrequency]` of `pairProductsFrequency`:
    -   Calculate the number of pairs of products with value `productValue`: `pairsOfEqualProduct = (productFrequency - 1) * productFrequency / 2`.
    -   Add all possible tuples for that product value to the total: increment `totalNumberOfTuples` by `8 * pairsOfEqualProduct`.
-   Return `totalNumberOfTuples`.
                        
#### Implementation

<iframe src="https://leetcode.com/playground/BtU79MJh/shared" frameBorder="0" width="100%" height="500" name="BtU79MJh"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `nums` array.

-   Time complexity: $O(n^2)$

    We begin by calculating all pairwise products in $O(n^2)$ time. Next, for each of these product values, we find the number of pairs of products of this value and then the number of tuples that can be formed. These calculations require constant time and therefore this part of the algorithm also takes $O(n^2)$ in the worst-case (when all product values are distinct). Therefore, the total time complexity of the algorithm is $O(n^2)$.

-   Space complexity: $O(n^2)$

    The `pairProductsFrequency` can grow up to $\frac{n \times (n - 1)}{2} = O(n^2)$ in size (when all pair products are different) and thus the algorithm requires $O(n^2)$ extra space.

---