# Optimal solution with generic digit - Interview process - Full explanation

**Author:** gahfy
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-9/solutions/1907438/](https://leetcode.com/problems/remove-9/solutions/1907438/)

---

# Optimal solution first

The optimal solution, provided by leetcode, is just to have the number in base 9. Once you got it, it's pretty easy to implement:

```
public int newInteger(int n) {
    int result = 0;
    int tenIndex = 1;
    while(n > 0) {
        currentDigit = (n%9);
        result += currentDigit*tenIndex;
        tenIndex *= 10;
        n /= 9;
    }
    return result;
}
```

We just keep this somewhere in our mind, just to be sure that we can come up to that solution later.

# Generic approach

## Generic problem

Let's consider the generic problem

*Start from an integer `i`, remove all integers that contains `m`, for example, if `m=2`, remove all numbers 2, 12, 20, 21, 22, ...*

*Given an integer `n`, return the `nth` **(one indexed)** number of the new sequence*.

## Naive solution: brute force

### Logic and code

Just go through all the number, and pass the ones that contains the given digit:

```
class Solution {
    public int newInteger(int n) {
        return newInteger(n, 9);
    }
    
    public int newInteger(int i, int m) {
        int result = 0;
        int count = 0;
        while(count < i) {
            result++;
            count++;
            while(containsM(result, m)) {
                result++;
            }
        }
        return result;
    }
    
    public boolean containsM(int i, int m) {
        while(i > 0) {
            if(i%10 == m) {
                return true;
            }
            i /= 10;
        }
        return false;
    }
}
```

### Complexity analysis

**Time complexity: `O(nlogn)`**

We look approximately n times in the `while(count < i)` loop. We do a `containsM` inside which has a complexity of `log(n)`.

Note for time complexity, it's an inaccuracy to say the time complexity of `containsM` method is `log10(n)`. Actually, `log10(n) = log(n) / log(10)`. As `1 / log(10)` is a constant, we can simplify to `log(n)`.

**Space complexity: `O(1)`**

We just store some variables, no array or anything like that which would be related to the number provided.

### Result

Of course, this program will end to a Time Limit Exceeded.

## Start large, and go smaller

How much 9 do we have between 0 and 10. Only 1. This means, we have 9 numbers between 0(incl) and 10 (excl).

How much 9 between 0(incl) and 100(excl) now? So we have the 10 ones in the form `x9` and the 10 ones in the form `x9`. Here, 99 is counted twice, so we can remove one from our count. So we have 19 numbers containing a 9 between 0(incl) and 100(excl). This means that we have 100-19 = 81 numbers between 0(incl) and 100(excl).

Can we be more generic about counting the number of `9` between `0`(incl) and `100`(incl). It's just the number of digits between `0`(incl) and `10`(excl), multiplied by 10, which gives us `90`. But in this count, we counted all the numbers in the form of `9x`, so we need to remove those numbers. And there are exactly 9 (number of numbers between 0 and 10). So we did (numberOfPreviousStep)*(10-1), so it is (numberOfPreviousStep)*(9).

I let you convince yourself that this pattern is always true, whatever the chosen digit is, and whatever step we are.

And we can conclude that there is exactly :

* `9^1=9` numbers between `0` and `10`
* `9^2=81` numbers between `0` and `100`
* `9^3=729` numbers between `0` and `1000`

Now, what if I ask you the 234th number of the sequence, excluding all `1s`?

Well, we know it's between 100 and 1000, because the rank we look for is between 81 and 729. We know that the number we are looking for contains 3 digits.

Let's try to find the first digit. Let's start our count to 81: `count=81`. Because the count is `<=` than the number we are looking for, we continue.
Then, we  start with all `100` numbers, as it starts with a `1`, there is no solution here. `count=81`. Because `count` is less than the number we look for, we continue.
Then we start with all `200` numbers. We have 81 of them, so `count=162`. As `count <= 234` we continue.
Then `300`, We have 81 of them, so `count=243`. As `count > 234` we stop here, and we have our first digit, it's a `3`.

What about the 2 last digits ? Well it's the number at the rank `234 - previousCount = 234-162 = 72`.

So if we call our method recursively, then we will have our solution.

### Time to optimize

OK, how did we end up with first digit being `3`? We just removed `81` step by step. Maybe we can make a division to make it faster : `234/81=2`. As `2>=m` (m being the number we are looking for), we increment it, so the first digit is `2+1 = 3`.

And for the `72` we got at the end, it's just `234%81=72`.

We can continue the process, `72/9 = 8`, and as `8` is higher or equal than `1`, we get `9`.

Then, the last one is `72%9`, which is `0`, so the last digit is `0`, and as `0` is lower than `m`, then we can keep it.

So the number at the `234th` rank, if we remove all digits containing a `1`, is 390.

### Think backyard

The problem in our previous algorithm is that we have to store somewhere all the powers of 9, to get the number of digits first. Maybe we can get rid of this by thinking backyard.

We initialize the result as `0`.

What is the last digit ? Well it's `234%9`, which is `0`. We add `0` to the result. And then we keep `234/9` which is `26`.

Same, we do `26%9`, which is `8`. As digit is `>=1`, we add `8+1=9`*`10` to the result (which is now `90`), and then we keep `26/9` which is `2`.

Same, we do `2%9`, which is `2`. As digit is `>=1`, we add `2+1=3`*`100` to the result (which is now `390`), and then we keep `2/9` which is `0`.

As the number we keep is `0`, we stop here, and we can return the result which is `390`.

### The code

Time to implement our solution:

```
class Solution {
    public int newInteger(int n) {
        return newInteger(n, 9);
    }
    
    public int newInteger(int n, int m) {
        int result = 0;
        int tenIndex = 1;
        while(n > 0) {
            int currentDigit = (n%9);
            if(currentDigit >= m) {
                currentDigit++;
            }
            result += currentDigit*tenIndex;
            tenIndex *= 10;
            n /= 9;
        }
        return result;
    }
}
```

Let's now focus on the add part of our code:

```
if(currentDigit >= m) {
    currentDigit++;
}
```

`currentDigit` is the result of a `%9` operation. So if `m=9`, which is the case in the example of leetcode, then this condition will never be met (a number modulo 9 will always be strictly lower than 9).

And if you remove that condition from the code, you will see that we have exactly the code of the optimal solution (which is number written in base 9).

### Complexity analysis

**Time complexity: `O(logn)`**

Here, we make a loop in which we divide the number by 9 step by step. So the complexity is `log9(n)`, and as written before, it is equal to `log(n) / log(9)`, which can be simplified to `log(n)`.

**Space complexity: `O(1) or O(logn)`**

Here, we save the `tenIndex`. It's correct to consider it as an integer, and then say that the space complexity is `O(1)`.

You can also think that as it will increase as the `log9(n)`. For example, if `n` is a `long`, then you will need a long to store `tenIndex`. And same, if `n = 3*9^101`, then you will need to store `101` digits for the number `tenIndex`. Following that logic, you can consider that time complexity is `O(logn)`.

Both approaches will be considered correct