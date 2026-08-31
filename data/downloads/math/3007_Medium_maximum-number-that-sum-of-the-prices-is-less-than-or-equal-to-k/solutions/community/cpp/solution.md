# C++ Solution || Bit manipulation || Binary Search || Comprehensive visualization || ✅✅

**Author:** akramshafeek
**Votes:** 150
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4563689/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4563689/)

---

This is a comprehensive yet simple solution. The solution is divided into 2 parts. Please read through both the parts to get a strong understanding of the solution.

---


# Part 1
The ultimate goal of **Part 1** is to calculate the number of set bits at `ith` bit in the numbers ranging from `0 to num`

Consider the `num` to be `14`
Our goal is to calculate the number of set bits in each column (i.e each bit) in all numbers from
`0 to 14`

<!-- Describe your first thoughts on how to solve this problem. -->
Bit manipulation is all about observing bit patterns
Let us count the numbers from 0 to 15 in binary

           4   3   2   1   --> bits
         +---+---+---+---+
         | 0 | 0 | 0 | 0 | --> 0
         +---+---+---+---+
         | 0 | 0 | 0 | 1 | --> 1
         +---+---+---+---+ 
         | 0 | 0 | 1 | 0 | --> 2
         +---+---+---+---+ 
         | 0 | 0 | 1 | 1 | --> 3
         +---+---+---+---+ 
         | 0 | 1 | 0 | 0 | --> 4
         +---+---+---+---+
         | 0 | 1 | 0 | 1 | --> 5
         +---+---+---+---+ 
         | 0 | 1 | 1 | 0 | --> 6
         +---+---+---+---+ 
         | 0 | 1 | 1 | 1 | --> 7
         +---+---+---+---+ 
         | 1 | 0 | 0 | 0 | --> 8
         +---+---+---+---+ 
         | 1 | 0 | 0 | 1 | --> 9
         +---+---+---+---+ 
         | 1 | 0 | 1 | 0 | --> 10
         +---+---+---+---+ 
         | 1 | 0 | 1 | 1 | --> 11
         +---+---+---+---+ 
         | 1 | 1 | 0 | 0 | --> 12
         +---+---+---+---+
         | 1 | 1 | 0 | 1 | --> 13         
       +-------------------+
       | +---+---+---+---+ |
       | | 1 | 1 | 1 | 0 | | --> 14
       | +---+---+---+---+ |
       +-------------------+
         | 1 | 1 | 1 | 1 | --> 15
         +---+---+---+---+

**Note:** We will be referring the `ith bit` as `ith column` and each `number` as `rows` for easier understanding.

As we can observe some patterns in each column, let's list them down

- In the `1st column` the bit toggles after every `1` row
- In the `2nd column` the bit toggles after every `2` rows
- In the `3rd column` the bit toggles after every `4` rows
- In the `4th column` the bit toggles after every `8` rows

We can generalize it as in every `ith column` The bit toggles after every $2^{i-1}$ rows.

**Important Observation**:
- In each column `i` we can group a block of $2^i$ number of bits from the beginning where in each group there will be $2^{i-1}$ number of `0s` followed by $2^{i-1}$ number of `1s`.
- The above observation will help us count the number of `1s` in a given column `i`.

**Example:**

    - From the above table of binary numbers, consider the 2nd column.
    - The rows extend upto the number 14.
    - The bits alternate after every 2 rows.
    - The bits in this column can be grouped into a group of 4 items.
    - Each group contains 2 number of 1s

    @ i = 2       --> column
    @ 2^i = 4     --> group size
    @ 2^(i-1) = 2 --> number of 1s in each group

        --------------------------------------------------

        +---+ 
        | 0 |
        +---+
        | 0 |
        +---+  ---> group which contains two 1's
        | 1 |
        +---+
        | 1 |
        +---+   
        
        +---+ 
        | 0 |
        +---+
        | 0 |
        +---+  ---> group which contains two 1's
        | 1 |
        +---+
        | 1 |
        +---+ 

        +---+ 
        | 0 |
        +---+
        | 0 |
        +---+  ---> group which contains two 1's
        | 1 |
        +---+
        | 1 |
        +---+ 

        --------------------------------------------------

        +---+
        | 0 |
        +---+  
        | 0 |  ---> remainder group
        +---+    
        | 1 |
        +---+              

Now it is easy to calculate the number of `1s` in a given column `i` upto a number `num`.
    
    number of ones = (num / 2^i) * 2^(i-1)

What about the remaining number of `1s` in the remainder group? 
- If the remainder is greater than $2^{i-1}$ then the number of `1s` is the left over after subtracting $2^{i-1}$ number of `0s` from the total remainder.
- If the remainder is less than $2^{i-1}$, then the number of `1s` is zero.

```
remaining ones = max(0, (num % 2^i) - 2^(i-1))
```
**Note:** `num` has to be incremented by `1` before using in the formula because, for a given number the number of rows used to represent the `num` will be counted from `0` which will add to the number of rows `(Eg: 15 -> has 16 rows)`

Now that we have deduced a formula for calculating the number of `1s` in a given column `i` upto a given `num`, it is only a matter of including or excluding a column in the `price` depending upon the `x` value given.


---
# Part 2

Now the question arises. How to use the above method to calculate the answer to the question?
The answer is `Binary search`
But why? It's simply because of the following logic

    Greater number -> Greater price
    Lesser number -> Lesser price

We can use Binary search in the range `1` to `1e15`. 
- If a current number gives a price `lesser` than or equal to `k` we continue searching on the `right side` of the current number
- Else if the price is `greater` than `k` we search on the `left side` of the current number.


# Code
```
class Solution {
public:
    // utility function to calculate the number of bits in a number
    int countBits(long long n) {
        int count = 0;
        while(n) {
            count++;
            n = n >> 1;
        }        
        return count;
    }        
    // utility function to quickly get power of 2 using bit manipulation
    long long powerOf2(int i) {
        return 1LL << i;
    }
    long long calc(long long n, int x) {
        // get the leftmost bit
        int i = countBits(n);        
        long long price = 0;         

        // increment n to account 0th row in the count of groups
        n++;                
        while(i) {
            // if current column is valid, calculate the number of 1s in the column
            if(i % x == 0)
                price += (n / powerOf2(i)) * (powerOf2(i - 1)) + max(0LL, (n % powerOf2(i)) - powerOf2(i - 1));
             
            // move to the next column           
            i--;
        }        

        return price;
    }
    long long findMaximumNumber(long long k, int x) {
        long long low = 1;
        long long high = 1e15;

        // binary search
        while(low <= high) {
            long long mid = (high - low) / 2 + low;
            long long res = calc(mid, x);            
            if(res <= k)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return high;
    }
};
```