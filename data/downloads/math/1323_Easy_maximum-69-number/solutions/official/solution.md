# Official Solution

**Link:** [https://leetcode.com/problems/maximum-69-number/solution/](https://leetcode.com/problems/maximum-69-number/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we are given an integer `num` where every digit is either `6` or `9`, we can change up to 1 digit (from `6` to `9` or vice versa).

The task is to return the largest integer we can get.

After observation, we can get these conclusions as follows:

- We can only increment `num` by converting a digit `6` to `9`. 
- We should always convert the **highest** digit `6`. Suppose `num = 669`, it has multiple digits `6`, we must convert the first one to make it `969` rather than `699`. 
- If every digit of `num` is `9`, we only need to return `num` since it already stands for the largest integer.

More examples:

![img](../Figures/1323/1323-1.png)

Hence, the task equals finding the highest digit `6` (if it exists) and replacing it with `9`.

---

### Approach 1: Convert the integer to an iterable object

#### Intuition   

The most intuitive method to find the first digit `6` is to traverse through each digit of `num` from high to low, as we discussed in the overview section. 

However, we can't traverse over an integer in C++, Java, or Python, nor can we modify it. Hence, we can first convert it to an iterable and mutable object, such as a string in C++, a string builder in Java, or a list in Python, and traverse over the object to locate the first occurrence of `6`.


<br>

#### Algorithm

1) Convert the input integer `num` to an iterable and mutable object `num_obj`.
2) Iterate over `num_obj`, if we find a digit `6`, replace it with `9` and stop the iteration.
3) Return the integer converted from the modified `num_obj`.

#### Implementation

<iframe src="https://leetcode.com/playground/hsg2jXrL/shared" frameBorder="0" width="100%" height="378" name="hsg2jXrL"></iframe>


#### Complexity Analysis

Let $$L$$ be the maximum number of digits `nums` can have ($$L = 4$$ in this problem).

* Time complexity: $$O(L)$$

    - Since the input number `num` has up to most $$L$$ digits, it requires $$O(L)$$ time to convert it to an equivalent object and vice versa.
    - To sum up, the time complexity is $$O(L)$$.
    

* Space complexity: $$O(L)$$
    - We create an object of length $$L$$.

<br/>



---

### Approach 2: Use built-in function

#### Intuition   

Similar to the previous approach, but with some built-in features. We don't need to manually traverse through the converted object. 

Although this solution is concise, it is not necessarily the best approach for interviews.

<br>

#### Algorithm

- Convert the input number `num` to the string `num_string`.
- Use the built-in function to replace the first `6` to `9` if it exists.
- Return the integer converted from the modified `num_string`.

#### Implementation

<iframe src="https://leetcode.com/playground/4QZWhKKZ/shared" frameBorder="0" width="100%" height="225" name="4QZWhKKZ"></iframe>


#### Complexity Analysis

Let $$L$$ be the maximum number of digits `nums` can have ($$L = 4$$ in this problem).

* Time complexity: $$O(L)$$
    - We need to look for the first occurrence of digit `6` and make at most one replacement, which takes $$O(L)$$ time.

* Space complexity: $$O(L)$$
    - We convert `num` to a string of length $$L$$, therefore, the space complexity is $$O(L)$$.

<br/>



---

### Approach 3: Check the remainder

#### Intuition   

Can we locate the highest digit of `6` without converting `num` to string? The answer is Yes! 

We can always get the last digit of a non-negative integer by taking the remainder of `num` divided by $$10$$, for example, to get the last digit of `613`: 

$$613\ \%\ 10 = 3$$

How about the second last digit? We can 'remove' the last digit by taking the quotient of `num` and $$10$$.

$$613\ /\ 10 = 61$$


Therefore, we can check every digit of `num` from low to high and record the highest digit `6`. Assume that it is the `k-th` digit (`0` based), 'converting' this digit from `6` to `9` equals adding $$3 \cdot 10^{k}$$ to the original integer `num`! As shown in the picture below, we find the highest `6` is the **2nd** digit and increment `9669` by $$3\ \cdot \ 10^{2}$$ to make the answer `9969`!

![img](../Figures/1323/1323-2.png)

Take the picture below as an example.

![img](../Figures/1323/1323-3.png)

<br>

#### Algorithm

1) Initialize an integer `num_copy = num` for checking digits.
2) Get the remainder of `num_copy` and $$10$$.
3) If the remainder is $$6$$, record the current digit as the first (highest) digit of `6`.
4) Divide `num_copy` by $$10$$ using integer division.
    - If `num_copy = 0`, go to step 5.
    - Otherwise, repeat step 2.
5) If we find the first digit of `6`, let's say `index_first_six`, increment `num` by $$3 \cdot 10^{index\_first\_six}$$ and return `num`. Otherwise, just return `num`. 


#### Implementation

<iframe src="https://leetcode.com/playground/g5R2LR8K/shared" frameBorder="0" width="100%" height="497" name="g5R2LR8K"></iframe>


#### Complexity Analysis

Let $$L$$ be the maximum number of digits `nums` can have ($$L = 4$$ in this problem).

* Time complexity: $$O(L)$$
    - We need to make at most $$L$$ time of integer divisions, which takes $$O(L)$$ time.

* Space complexity: $$O(1)$$
    - We only need to update several variables, which takes $$O(1)$$ space.



<br/>