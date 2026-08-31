# Official Solution

**Link:** [https://leetcode.com/problems/confusing-number/solution/](https://leetcode.com/problems/confusing-number/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/824223297" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview


Take the following picture as an example.

![img](../Figures/1056/1.png)

- `868` is a confusing number, since the rotated number (`898`) is still valid and is not equal to `868`.


- `1691` is not a confusing number, since the rotated number is still `1691`.


- `345` is not a confusing number, since some digits become invalid after the rotation.


---

### Approach 1: Invert and Reverse

#### Intuition   

By looking at the above examples, we can see that after rotating a string, not only is each digit inverted, but also the mutual position of the digits is reversed. Specifically, the first digit of `n` is inverted and is moved to the last digit, the second digit of `n` is inverted and is moved to the second last digit, and so on. 

Therefore, we can split the process into two separate steps, that is, invert each digit and reverse the entire number of inverted digits.

We would convert integer `n` into a string which is iterable and contains every digit in the same order. Note that some of the digits become invalid after rotation, so if we encounter one of these digits, we can return `false` as in example 3 in the picture above. After inverting all the valid digits, we need to reverse the string and compare it with the string representation of `n`. If they are the same, then it's not a confusing number, otherwise, it is a confusing number.




![img](../Figures/1056/2.png)


<br>

#### Algorithm

1) Initialize a hashmap `invertMap` that converts each valid digit to its inverted digit, and an empty string `rotatedNumber`.

2) Iterate over each digit `res` of `n`. If `res` is not in `invertMap`, return `false`. 
    Otherwise, find the inverted digit of `res` and append it to the end of `rotatedNumber` by setting `rotatedNumber += invertMap[res]`.
3) Reverse `rotatedNumber`.
3) Check if `rotatedNumber` equals the string representation of `n`, return `true` if not.

#### Implementation

<iframe src="https://leetcode.com/playground/hUBkXA7X/shared" frameBorder="0" width="100%" height="500" name="hUBkXA7X"></iframe>


#### Complexity Analysis

Let $L$ be the maximum number of digits `n` can have ($L = \log_{10} n$).


* Time complexity: $O(L)$

    - Since the input number `n` has $L$ digits, it requires $O(L)$ time to iterate over and convert each digit of `n`, then $O(L)$ again to reverse the result. Note that string is **immutable** in python, so we add each digit to a list, and convert the final list of digits to the string, which is a process that costs $O(L)$.


    

* Space complexity: $O(L)$
    - We create an object of length $L$, same as the number of digits of `n`.

<br/>



---

### Approach 2: Use the remainder

#### Intuition   

In the previous approach, we converted the integer `n` to a string for traversal. As `n` is an integer, we have a mathematical way to iterate over each digit without needing to convert it to a string.


We get the last digit (which we call `res`) of number `n` by taking the remainder of `n` after dividing by `10` (`n % 10`, where `%` is the [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation)). How about the second last digit? We take the floor division of `n` with `10`, so the original second last digit now becomes the last digit. For each last digit `res`, we invert it according to `invert_map` and append it to the end of `rotated_number`. Note the order of how we make up `rotated_number`: we get the digits of `n` from back to front, but attach them to `rotated_number` from front to back! This LIFO (Last-In-First-Out)-like pattern reverses all digits so we don't need to reverse `rotated_number` ourselves at the end! Once `n` becomes `0`, it means we are done iterating and we just need to compare whether `rotated_number` is equal to `n`, and the job is done!


![img](../Figures/1056/3.png)

As shown in the picture above, we start with `n = 166908`:
- The remainder of `n` to `10` is `8`, so we append `inv_map[8]` to `rotated_number`. Then we move on to the second last digit of `n`, by taking the floor division of `n` to `10`.

- The remainder of `n` to `10` is `0`, so we append `inv_map[0]` to `rotated_number`. Then we move on to the next last digit of `n`, by taking the floor division of `n` to `10`.


- and so on.


<br>

#### Algorithm

1) Initialize a hashmap `invertMap` that converts each valid digit to its inverted digit, set `rotatedNumber = 0`.

2) Keep getting the last digit `res` of `n` by taking the modulo of `n` to `10`: 

    - If `res` is not in `invertMap`, return `false`. 
    - Otherwise, append `res` to the end of `rotatedNumber` by setting `rotatedNumber = rotatedNumber * 10 + invertMap[res]`. When we multiply `rotatedNumber` by `10`, that is equivalent to adding a `0` to the end. Then, adding `invertMap[res]` will set the last digit.


- Move to the next digit by floor dividing `n` by 10, then repeat from step 2 until `n = 0`.

3) Check if `rotatedNumber` equals `n`, return `true` if not.


#### Implementation

<iframe src="https://leetcode.com/playground/JGEWkxUY/shared" frameBorder="0" width="100%" height="500" name="JGEWkxUY"></iframe>


#### Complexity Analysis

Let $L$ be the maximum number of digits `n` can have.


* Time complexity: $O(L)$

    - Since the input number `n` has $L$ digits, it requires $O(L)$ floor divisions and modulo operations, and a floor division/modulo operation of `n` to `10` takes constant time.


    - To sum up, the overall time complexity is $O(L)$.
    

* Space complexity: $O(L)$
    - We create a new integer which will have the same number of digits as `n`. In memory, the number of bits needed to store this integer is logarithmic with `n`. Since we defined $L = \log_{10} n$, the space complexity is $O(L)$, because all logarithms are related by a constant factor.


<br/>