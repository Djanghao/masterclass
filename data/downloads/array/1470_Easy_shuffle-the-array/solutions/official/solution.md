# Official Solution

**Link:** [https://leetcode.com/problems/shuffle-the-array/solution/](https://leetcode.com/problems/shuffle-the-array/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given an array $nums$ with $2 * n$ elements, $[ x_1, \space x_2, \space ... \space , \space x_n, \space y_1 \space, \space y_2 , \space ... \space , \space y_n ]$.             
We need to rearrange the original array as, $[ x_1, \space y_1, \space x_2, \space y_2, \space ...... \space, \space x_n, \space y_n ]$.         

![show_using_image](../Figures/1470/Slide1.PNG)

--- 

### Approach 1: Simple Iteration

#### Intuition

Let us start by trying to identify some patterns in the original array,
The elements from $x_1$ to $x_n$ exist from indices $0$ to $n - 1$ and elements from $y_1$ to $y_n$ from indices $n$ to $2 * n - 1$.
The elements of $x$ should be placed at indices `0, 2, 4, ...`. At `nums[i]` we have element $x_{i + 1}$, we should place it at index $2 * i$ for all $0 \le i \lt n$.

The elements of $y$ should be placed at indices `1, 3, 5, ...`. At `nums[n + i]` we have element $y_{i + 1}$, we should place it at index $2 * i + 1$ for all $0 \le i \lt n$. Notice that it is the same formula as the previous one but with a `+1`, indicating that elements of $y$ come after elements of $x$.

![places](../Figures/1470/Slide2.PNG)

One of the intuitive ways to solve this is to have an extra array $\text{result}$ of size $2 * n$, then iterate over $\text{nums}$ and place each of its elements at the respective positions in $\text{result}$.

#### Algorithm

1. Build an array `result` of size `2 * n`.
2. Iterate over the `nums` array ranging from indices `0` to `n - 1`:
    - Store the element $x_{i + 1}$ , that is, `nums[i]` at index `2 * i`,    
    and element $y_{i + 1}$ , that is, `nums[i + n]` at index `2 * i + 1` in `result`.
3. Return the `result` array.

#### Implementation


<iframe src="https://leetcode.com/playground/meWNyXiP/shared" frameBorder="0" width="100%" height="242" name="meWNyXiP"></iframe>


#### Complexity Analysis

Here, $2 * n$ is the number of elements in the `nums` array.

* Time complexity: $O(n)$.          
  - We iterate on $n$ elements of the `nums` array, which takes us $O(n)$ time.
  - Initializing the `result` array will take $O(2n)$ time.
  - Thus, overall we take $O(n + 2n) = O(n)$ time.
* Space complexity: $O(1)$.
  - We are not using any additional space other than the output array.

<br />

---

### Approach 2: In-place Filling

#### Intuition

The previous approach is optimal and sufficient for most interviews.
But sometimes the interviewer might come up with a follow-up to perform the changes in-place in the input array without using an output array.

> This approach is much more difficult than the previous one and is included for completeness. Don't be discouraged if you aren't able to come up with it yourself.

So, we can't store the numbers in some additional space. Additionally, rewriting a number will erase the previous value. Hence, here the interviewer would like to check our understanding of bit manipulation.

<details>
    <summary>
        <b> &ensp; If you are not aware of bit manipulation first, let's get a brief idea about it and look at some basic bitwise operators. (click to expand) </b>
    </summary>

<br />

Bit manipulation is the act of manipulating bits, like changing bits of an integer.      
At the heart of bit manipulation are the bit-wise operators:     

**NOT (~):** Bitwise NOT is a unary operator that flips the bits of the number i.e., if the current bit is $0$, it will change it to $1$ and vice versa. 
```text
N = 5 = 101 (in binary)
~N = ~(101) = 010 = 2 (in decimal)
```

**AND (&):** In bitwise AND if both bits in the compared position of the bit patterns are $1$, the bit in the resulting bit pattern is $1$, otherwise $0$.
```text
A = 5 = 101 (in binary) 
B = 1 = 001 (in binary) 
A & B = 101 & 001 = 001 = 1 (in decimal)
```

**OR ( | ):** Bitwise OR is also similar to bitwise AND. If both bits in the compared position of the bit patterns are $0$, the bit in the resulting bit pattern is $0$, otherwise $1$.
```text
A = 5 = 101 (in binary) 
B = 1 = 001 (in binary) 
A | B = 101 | 001 = 101 = 5 (in decimal)
```

**XOR (^):** In bitwise XOR if both bits are $0$ or $1$, the result will be $0$, otherwise $1$.
```text
A = 5 = 101 (in binary) 
B = 1 = 001 (in binary) 
A ^ B = 101 ^ 001 = 100 = 4 (in decimal)
```

**Left Shift (<<):** Left shift operator is a binary operator which shifts some number of bits to the left and appends $0$ at the end. One left shift is equivalent to multiplying the bit pattern with $2$.
```text
A = 1 = 001 (in binary) 
A << 1 = 001 << 1 = 010 = 2 (in decimal)
A << 2 = 001 << 2 = 100 = 4 (in decimal)

B = 5 = 00101 (in binary)
B << 1 = 00101 << 1 = 01010 = 10 (in decimal)
B << 2 = 00101 << 2 = 10100 = 20 (in decimal)
```

**Right Shift (>>):** Right shift operator is a binary operator which shifts some number of bits to the right and appends $0$ at the left side. One right shift is equivalent to dividing the bit pattern with $2$.
```text
A = 4 = 100 (in binary) 
A >> 1 = 100 >> 1 = 010 = 2 (in decimal)
A >> 2 = 100 >> 2 = 001 = 1 (in decimal)
A >> 3 = 100 >> 3 = 000 = 0 (in decimal)

B = 5 = 00101 (in binary)
B >> 1 = 00101 >> 1 = 00010 = 2 (in decimal)
```
</details>

<br /> 

Now coming back to our problem, we can see that the maximum possible value of an element of the $nums$ array is $10^3$ which is $1111101000$ in binary.     
Thus each element will take at most $10$-bits in a $32$-bit integer and the remaining bits are $0$ and not used. 

This suggests the idea that in the remaining empty unused bits we can store some extra information.
One possible solution is storing two numbers together (the first number in the first ten bits and the second in the next ten bits) without using additional space.

![together](../Figures/1470/Slide3.PNG)

We will store the last $n$ numbers with the first $n$ numbers of the $nums$ array. Thus, $x_i$ and $y_i$ are stored at $i^{th}$ index.

And then we can store the numbers at their respective positions after starting iteration on the stored pairs from index $(n - 1)$ to index $0$.    
We would like to move in this direction (right to left) because, even if the right side elements are overwritten, we will not use those overwritten elements again because the current index ($i$) having a number pair will always be less or equal to the updated cells ($i <= 2 * i$ and $2 * i + 1$).  
Thus, the overwritten elements would have already been placed at their correct positions earlier.

![map_array](../Figures/1470/Slide4.PNG)


**Storing two numbers together:**      
   
$a$ is the first number, $b$ is the second number.  
  
We can left shift $b$ by $10$ bits and take its bitwise-OR with $a$.     
When we take any bit's bitwise-OR with $0$, it results in the same bit, and $1$ results in $1$.      

The first $10$ bits in $b_{new}$ are $0$. So, when we take its bitwise-OR with $a$, the result's first $10$ bits will have $a$'s $10$ bits, and the next $10$ bits of $a$ are $0$, so the result's next $10$ will store $b$'s $10$ bits there.     
Thus the final result has bits of both $a$ and $b$.

![store](../Figures/1470/Slide5.PNG)

**Extracting both numbers:**       
  
$\text{result}$ is the number having both numbers, $a$ (first number) and, $b$ (second number).    

$\text{result}$'s first $10$ bits contain $a$. Thus, we can retrieve it by taking bitwise-AND with $0000000000 \space 1111111111$ ($1023$ in decimal).     
When we take a bit's AND with $1$ it results in the same bit and with $0$ results in $0$.  
    
$\text{result}$'s next $10$ bits contain $b$, thus we can retrieve it by right shifting it by $10$ bits.

![extract](../Figures/1470/Slide6.PNG)


#### Algorithm

1. Iterate on the `nums` array from index `i = n` to `2 * n - 1`:
    - Store the element $y_{i + 1}$, that is, `nums[i]` with $x_{i + 1}$ at index `(i - n)`, using bit manipulation as discussed previously.
2. Iterate from index `n - 1` to `0`, and at each index `i`:
    - Extract both `firstNumber` and `secondNumber` using bit manipulation and store them at their respective indices `2 * i` and `2 * i + 1` in the `nums` array.
3. Return the `nums` array.

#### Implementation


<iframe src="https://leetcode.com/playground/iYTUkbNy/shared" frameBorder="0" width="100%" height="463" name="iYTUkbNy"></iframe>


#### Complexity Analysis

Here, $2 * n$ is the number of elements in the `nums` array.

* Time complexity: $O(n)$.          
  - We only iterate on the $n$ elements of the `nums` array twice, which takes us $O(n)$ time.
* Space complexity: $O(1)$.
  - We are not using any additional space.

<br />

---