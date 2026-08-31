# [Python] One-liner solution with mathematical proof and explanation

**Author:** triveni18
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1404170/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1404170/)

---

To calculate the minimum non-zero product we always have to change the value such as it will provide the minimum multiplication value -

i.e  
n = 3
1 - 001
2 - 010
3 - 011
4 - 100
5 - 101
6 - 110
7 - 111

Here we convert all the value **i** to **1** and **pow(2, n)-i-1** to **pow(2, n)-2**  *(where i<pow(2, n-1))*

Basically we convert the first half of the occurances to 1 which in return provide us minimum multiplication value.

The above explanation will lead us to the following deduction as -
1 - 001
2 - 001 (swapped with 5)
3 - 001 (swapped with 4)
4 - 110
5 - 110
6 - 110
7 - 111


...................................................................................................................................................................................................................................
**Mathematical proof :**

Suppose n = 3, it will have 2^3-1 = 7 non-zero occurances.
Now we have  
2+5 = 7

let x = 2, y = 5, z = 7

so, x+y = z        -----------------------**{1}**
x * y>x+y  (if x>1 and y>1)
x * y>x+y
x * y > z --------------**(using {1})**
**x * y > (z-1) * (1)**
Hence we can use this to formulate the minimum multiplication value.

We can do transition between the elements so that **upper half** become **1** and **lower half** become **2^n-2**. Also **last element can't be transformed as we are neglecting the zero valued element so we multiply it as it is**.




--------------------------------------------------------------------------------------------------------------------------------


Another way to understand it as we push one element to attain minimum possible value (which is 1 here) and their counter part will increase accordingly.

Now for 3, pairing it as (1, 6) (2, 5) (3, 4) (7).
we decrease the minimum value (suppose k) to 1 and increase the other value (suppose m) to m+k-1

So now the pairs are (1, 6) (1, 6) (1, 6) (7) which will give us minimum multiplication value.


Now take n = 4, 
we have pairs as (1, 14) (2, 13) (3, 12) (4, 11) (5, 10) (6, 9) (7, 8) (15) 
which we can reform as (1, 14) (1, 14) (1, 14) (1, 14) (1, 14) (1, 14) (1, 14) (15)


Hope you understand the approach. Queries are welcomed.

**The code goes as -**


```
def minNonZeroProduct(self, p: int) -> int:
    return (pow(2**p-2, (2**p-2)//2, 1000000007)*(2**p-1))%1000000007