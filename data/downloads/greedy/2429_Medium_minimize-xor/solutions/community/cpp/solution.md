# Deep explanation and solution for someone who isn't good at bit problems.

**Author:** CODEX47
**Votes:** 48
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/2650706/](https://leetcode.com/problems/minimize-xor/solutions/2650706/)

---

# Intuition

*For the sake of simplicity I m gonna assume nums1 to be x and nums2 to be y*

*I am assuming ideal solution to be 0 as that's the minimum ans you can get*

- First Step of the problem is pretty staight forward i.e. to count
the number of 1's in x and 1's in y.

- For example purpose let's assume `x = 9` `y = 7`

- Binary representation of 7 is `0111`. Number of set bits (1's) in y is `3`. You just have to convert the number in binary and count 1's in it.

- Similary Binary representation of 9 is `1001`. Number of set bits (1's) is `2`;

- Now according to the problem you have to find a integer ( assume `A`) such that `A` XOR `x` is minimum.

- We all know xor of similar bits is 0 and different is 1.
    - 1 ^ 1 = 0
    - 1 ^ 0 = 1
    - 0 ^ 1 = 1
    - 0 ^ 0 = 0 

So the minimum value of `A ^ x` can only be 0 not less than that. The only way to achieve that is to have `A = x`.

- Now in our example where `x is 9` we only have `2` bits set and number of bits we have to set is `3`. So the bits we have to set is more than bits we require to achieve ideal solution of `0`.

- In this case we have to think about where should we set that remaining 1 bit as to achieve minimum xor value.
    - X - `1 0 0 1`
    - A -  `1 0 0 1`  first set two bits like this to have 0 xor value
    - The remaining 1 can either be set on right side or left side.
    - If I were to set the remaining bit on right side - 
        - it will become `1 1 0 1`.
        - `1 1 0 1` XOR `1 0 0 1` will be `0 1 0 0` (decimal 4)
    - If I were to set the remaining bit on left side - 
        - it will become `1 0 1 1`
        - `1 0 1 1` XOR `1 0 0 1` will be `0 0 1 0` (decimal 2)
- You can see from the above example of `x = 9` and `y = 7` that - 
    *If you have excess 1's i.e. more than required, you should always set it on left side as it will make the xor smaller*

- Similary if we take example of `x = 9` and `y = 1`.  Binary representation of 1 will be `1`. So the number of 1's we have at our disposal is `1` and number of `1's` we require is `2`(check binary representation of `9`).

- In this case we clearly have less `1` than required to achieve ideal solution of `0`. So -
    - We can either set that one bit on left side or right side and get zero in that bit position after xor.
    - If on Right Side - 
        - `1 0 0 0` ^ `1 0 0 1` will be `0 0 0 1` (decimal 1);
    - If on Left Side
        - `0 0 0 1` ^ `1 0 0 1` will be `1 0 0 0` (decimal 8);
- You can see from the above example of `x = 9` and `y = 1` that - 
    *If you have less 1's i.e. less than required, you should always set it on right side as it will make the xor smaller*

# Approach

So first count the set bits in x and y. To do that you can either use some function in your language google it or read from other posts.

So first step is to know where in x 1's are. If u remember that's what we were doing in intuition.

To do that you can do something like this -
- Run a loop from `31 ... 0`.
- Then left shift `1` i times and then do the `&` of it with `x` i.e `(x & (1 << i))`.

    - let value of `i` be `3` so here `1 << 3` will be `1 0 0 0` and to know whether there's a `1` in `ith` position we can simply multiply it with `x` which is `1 0 0 1`.
    - Multiplication operation is `&`.


Now you know how to find the position of `1's` in `x`. Next step is to set that `1` in that same position in `A`.

It's a pretty common bitwise operation to set bit at any position.

Here how you can do it - `A |= (1 << i)`. The way this works is -
- I know i have to set bit at `(1 << i)` in A. Let `i = 3`.
- Assuming `A is initially 0`. I am just adding `0000` with `1000` that will result in `1000`.
    - I saw many posts using `XOR` for this which will also gives the same output.


Now after all of the above operations. The value of `A` should be equal to value of `x`.

*But as you know that we actually have to set same amount of bits as there are in y*. So we will - 

- Run another loop for that `(0 ... 31)`
- Let's call remaining bits to set `R`.
- In this loop check for unset position's in `A` and start setting it to `1`. Continue this `R` times as it those are the remaining bits.
- If you remember the point from intuition we should set the excess bit from right to left and that's all we are doing.
- Stop the loop when `R = 0` as it is pointless to keep it running.

# Code

Here's the C++ code on above approach.

```
class Solution 
{
public:
    int minimizeXor(int x, int y) 
    {
        int b = __builtin_popcount(y), A = 0;

        for(int i = 31; i >= 0 && b; i--)
            if(x & (1 << i))
                b--, A |= (1 << i);
        
        for(int i = 0; i <= 31 && b; i++)
            if((A & (1 << i)) == 0)
                b--, A |= (1 << i);

        return A;
    }
};
```


# Note
If someone thinks the above code is pretty verbose (You are right). You can checkout an elegant and concise way of implementing this same approach by this legendary leetcoder @lee215. [Java/C++/Python Bit Count \uD83D\uDD25](https://leetcode.com/problems/minimize-xor/solutions/2648723/java-c-python-bit-count/);

Thank you so much for reading this long long explanation. See Ya.