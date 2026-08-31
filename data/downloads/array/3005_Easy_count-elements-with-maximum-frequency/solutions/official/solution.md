# Official Solution

**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solution/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array, `nums`, of positive integers.

> The **frequency** of an element is the number of occurrences of that element in the array.

To solve the problem, we need to determine the element with the maximum frequency. Then, we need to find the sum of the number of occurrences of all elements that have the maximum frequency.

We can break this problem down into three main steps:

1. Find the frequency of each element in `nums`.
2. Determine the maximum frequency.
3. Calculate the total frequencies of elements with the maximum frequency.

---

### Approach 1: Count Frequency and Max Frequency

#### Intuition

##### 1. Find the frequency of each element in `nums`.

The frequency of an element is the count of occurrences of that element. We can find the frequency of each element in `nums` by counting the number of occurrences of each element. We can create a map `frequencies` to store the frequency of each element. The key is the element, and the value is its frequency. To calculate the frequencies, we iterate through `nums`, incrementing the frequency of each number in `nums` by `1`.

##### 2. Determine the maximum frequency.

To find the maximum frequency, we iterate over `frequencies`, comparing each frequency to `maxFrequency` and updating `maxFrequency` each time we find a larger frequency.

##### 3. Calculate the total frequencies of elements with the maximum frequency.

To find total frequencies, we can count the number of elements that have the maximum frequency. We can store the running count in the variable `frequencyOfMaxFrequency`.

To find `frequencyOfMaxFrequency`, we iterate over `frequencies`, incrementing `frequencyOfMaxFrequency` by `1` for all elements with the frequency `maxFrequency`.

We multiply `frequencyOfMaxFrequency` by `maxFrequency` to calculate the total frequencies of elements with the maximum frequency.

###### Example:

> **Input:** nums = [1, 2, 2, 3, 1, 4]
>
> **Step 1**   
> Frequency Map: 
> | Element   | 1 | 2 | 3 | 4 |
> | --------- | - | - | - | - |
> | Frequency | 2 | 2 | 1 | 1 |
>
> **Step 2**   
> `maxFrequency = 2`
>
> **Step 3**   
> `frequencyOfMaxFrequency = 2`  
> `frequencyOfMaxFrequency * maxFrequency = 2 * 2 = 4`

#### Algorithm

1. Initialize a map `frequencies` to store the frequency of each element. The key is the element, and the value is its frequency.
2. For each number in `nums`:
    1. Increment its frequency by `1` for each occurrence.
3. Initialize a variable `maxFrequency` to `0`.
4. For each `frequency` in `frequencies`:
    1. Calculate the maximum between the `frequency` and `maxFrequency`, updating `maxFrequency` when we find a larger frequency.
5. Initialize a variable `frequencyOfMaxFrequency` to `0`.
6. For each frequency in `frequencies`:
    1. If `frequency` equals `maxFrequency`:
        1. Increment `frequencyOfMaxFrequency` by `1`.
7. Return `frequencyOfMaxFrequency * maxFrequency`.

#### Implementation

<iframe src="https://leetcode.com/playground/h6Jbtdmx/shared" frameBorder="0" width="100%" height="480" name="h6Jbtdmx"></iframe>

#### Complexity Analysis

Let $n$ be the length of `nums`.

* Time complexity: $$O(n)$$

    Calculating the frequency of each element in `nums` takes $O(n)$.

    Finding the maximum frequency takes $O(e)$ where $e$ is the number of distinct elements in `nums`. At worst, there can be $n$ distinct elements, so this step takes $O(n)$.

    Calculating total frequencies takes $O(e)$ where $e$ is the number of distinct elements in `nums`. At worst, there can be $n$ distinct elements, so this step takes $O(n)$.

    The total time complexity will be $O(3n)$, which we can simplify to $O(n)$.


* Space complexity: $$O(n)$$

    We use a few variables and the map `frequencies`, which is size $O(e)$ where $e$ is the number of distinct elements in `nums`. At worst, there can be $n$ distinct elements, so the space complexity is $O(n)$.

---

### Approach 2: Sort Frequencies and Sum Max Frequencies

#### Intuition

##### 1. Find the frequency of each element in `nums`.

We can find the frequency of each element in `nums` by counting the number of occurrences of each element. An alternative to using a map is an array `frequencies` to store the frequency of each element. The frequency of an element is stored at `frequency[element - 1]`. 

Since the array is zero-indexed, the frequency of `1` is stored at `frequencies[0]`, the frequency of `2` is stored at `frequencies[1]`, and the frequency of `100` is stored at `frequencies[99]`. We will initialize `frequencies` to size `100`, because the maximum element in nums is guaranteed to be between `1` and `100` inclusive according to the constraints. To calculate the frequencies, we iterate through `nums`, incrementing the frequency of the current element by `1`. 

**Note:**

Using an array for frequency counting has a constant time complexity for both insertion and retrieval operations, which can be faster than the average case time complexity of hashmap operations. However, this advantage comes with a trade-off—arrays are only suitable when the range of values is relatively small and can be mapped directly to array indices.

If your input values can be negative or have a very large range, using a hashmap might be a more flexible and efficient option. Hashmaps generally have an average-case time complexity of $O(1)$ for insertion and retrieval operations, but they may have a higher constant factor compared to array operations.

##### 2. Determine the maximum frequency.

To find the maximum frequency, we sort `frequencies`, which will group all of the elements occurring `maxFrequency` times towards the end of the array. 

The last index of `frequencies` contains the element with the maximum frequency.

**Note:** Once `frequencies` have been sorted, the index of a particular element no longer corresponds to the frequency of that element. The array essentially becomes an array of frequencies. The final answer only concerns frequencies and not the values of the elements, so this does not cause an issue.

##### 3. Calculate the total frequencies of elements with the maximum frequency.

To find `totalFrequencies`, we iterate over `frequencies`, starting with the last index. We traverse over frequencies from right to left, adding the frequency of all elements with the frequency `maxFrequency` to `totalFrequencies`. Once we reach a frequency less than `maxFrequency`, we return `totalFrequencies`; no other elements will have `maxFrequency`, since the frequencies are sorted.

##### Example:

> **Input:** nums = [1, 2, 2, 3, 1, 4]
>
> **Step 1**   
> Frequency Array:
> | Index     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | ... |  99 |
> | --------- | - | - | - | - | - | - | - | --- | --- |
> | Element   | 1 | 2 | 3 | 4 | 5 | 6 | 7 | ... | 100 |
> | Frequency | 2 | 2 | 1 | 1 | 0 | 0 | 0 | ... |  0  |
>
> **Step 2**   
> Frequency Array Sorted:
> | Frequency | 0 | 0 | 0 | ... | 0 | 1 | 1 | 2 | 2 |
> | --------- | - | - | - | --- | - | - | - | - | - |
>
> `totalFrequencies = 2` // Initialized to the maximum frequency
>
> **Step 3**   
> `totalFrequencies = 2 + 2 = 4`

#### Algorithm

1. Initialize an array `frequencies` of size `100` to store the frequency of each element. The frequency of an element is stored at `frequency[element - 1]`
2. For each number in `nums`:
    1. Increment its frequency by `1` for each occurrence.
3. Sort `frequencies`. 
4. Initialize a variable `maxFreqIndex` to the last index of `frequencies`, where the maximum frequency is stored.
5. Initialize a variable `totalFrequencies` to `frequencies[maxFreqIndex]`, which is the maximum frequency.
6. Iterate through `frequencies`, starting from `maxFreqIndex`and traversing right to left. While `frequency` equals `maxFrequency`:
    1. Add `frequency` to `totalFrequencies`.
    2. Decrement `maxFreqIndex` by `1`.
7. When we break from the loop, return `totalFrequencies`, because if the current frequency isn't the max frequency, none of the following will be either, since the array is sorted.       


#### Implementation

<iframe src="https://leetcode.com/playground/GvAFYwyj/shared" frameBorder="0" width="100%" height="446" name="GvAFYwyj"></iframe>

#### Complexity Analysis

Let $n$ be the length of `nums`. Let $m$ be the maximum value in `nums`.

* Time complexity: $$O(n + m \log m)$$

    Calculating the frequency of each element in `nums` takes $O(n)$.

    `frequencies` is of size $m$, so sorting `frequencies` takes $O(m \log m)$. 

    Calculating total frequencies takes $O(m)$ in the worst case when each element occurs the same number of times.

    The total time complexity will be $O(n + m \log m + m)$, which we can simplify to $O(n + m \log m)$.


* Space complexity: $$O(m)$$

    We use a few variables and the array `frequencies`, which is size $O(m)$

    Note that some extra space is used when we sort `frequencies` in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the `sort` method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(m)$ additional space. Additionally, Tim Sort is designed to be a stable algorithm.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log m)$ for sorting an array.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log m )$.

    The dominating term is $O(m)$.

---

### Approach 3: One-Pass Sum Max Frequencies

#### Intuition

The above approaches both iterate through `nums` once and through an array or map `frequencies` at least once. 

> Is it possible to solve this problem in just one pass?

##### 1. Find the frequency of each element in `nums`.

We must iterate through `nums` to determine the frequency of each element. In this approach, saving the frequencies in an additional data structure, an array or map `frequencies` is still useful.

##### 2. Determine the maximum frequency.

> Can we determine the maximum frequency during the same pass as finding the frequencies of the elements? 

We just need to update `maxFrequency` each time we find a frequency that is larger than the current `maxFrequency`.

##### 3. Calculate the total frequencies of elements with the maximum frequency.

> Can we calculate the total frequencies during the same pass as finding the frequencies of the elements?

> What if we discover an element with the same frequency as the maximum frequency?

Each time we find an element with a frequency that equals the max frequency, we can add the frequency of that element to `totalFrequency`.

> What if we discover a higher-frequency element? 

We will update `maxFrequency` as stated above. We can also re-set `totalFrequencies` to the element's frequency, because when we discover a new `maxFrequency`, there is only one element so far with that frequency, and all previous elements with the previous `maxFrequency` are no longer relevant. 

After iterating through `nums` once, we will have calculated `totalFrequencies` accurately and can return.

The algorithm is visualized below:

!?!../Documents/3005/3005_slideshow.json:960,540!?!


#### Algorithm

1. Initialize a map `frequencies` to store the frequency of each element. The key is the element, and the value is its frequency.
2. Initialize a variable `maxFrequency` to `0`.
3. Initialize a variable `totalFrequencies` to `0`.
4. For each number in `nums`:
    1. Increment its frequency by `1` for each occurrence.
    2. Initialize a variable `frequency` storing the current element's frequency.
    3. If `frequency` is greater than `maxFrequency`:
        1. Update `maxFrequency` with `frequency`.
        2. Set `totalFrequencies` to `frequency`. This will reset the sum to the current highest frequency since any previous highest frequencies are no longer the max.
    4. Else if `frequency` equals `maxFrequency`:
        1. Add `frequency` to `totalFrequencies`.
5. Return `totalFrequencies`.

#### Implementation

<iframe src="https://leetcode.com/playground/6txG2r4t/shared" frameBorder="0" width="100%" height="500" name="6txG2r4t"></iframe>

#### Complexity Analysis

Let $n$ be the length of `nums`.

* Time complexity: $$O(n)$$

    We iterate over `nums` once and perform $O(1)$ work with each operation, so the time complexity is $O(n)$.



* Space complexity: $$O(n)$$

    We use a few variables and the map `frequencies`, which is size $O(e)$ where $e$ is the number of distinct elements in `nums`. At worst, there can be $n$ distinct elements, so the space complexity is $O(n)$.