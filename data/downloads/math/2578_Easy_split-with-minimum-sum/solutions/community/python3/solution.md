# [Java/Python 3] Greedy: Sort then concatenate digits @ even and odd indices.

**Author:** rock
**Votes:** 28
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3256119/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3256119/)

---

**Intuition:**

We want to make the most significant digits (MSD) as small as possible in order to split `num` into `2` smallest numbers, say, `a` and `b`.

Therefore, 
1. We have to choose the smallest digit as the  MSD of `a`; then
2.  Choose the second  smallest digit as the MSD of `b`;
3.  Choose the third smallest digit as the 2nd MSD of `a`;
4.  Choose the fourth smallest digit as the 2nd MSD of `b`;
5.  ....

The pattern is: choose the sorted digits alternatively for the `2` numbers, `a` & `b`.

----

Convert `num` to char[] (or list), sort it, then concatenate the digits at even and odd indices repectively. By this way, we can get the smallest `2` numbers to sum.

```java
    public int splitNum(int num) {
        char[] ca = Integer.toString(num).toCharArray();
        Arrays.sort(ca);
        int a = 0, b = 0;
        for (int i = 0; i < ca.length; ++i) {
            int digit = ca[i] - '0';
            if (i % 2 == 0) {
                a *= 10;
                a += digit;
            }else {
                b *= 10;
                b += digit;
            }
        }
        return a + b;
    }
```
or
```java
    public int splitNum(int num) {
        char[] ca = Integer.toString(num).toCharArray();
        Arrays.sort(ca);
        int[] arr = {0, 0};
        for (int i = 0; i < ca.length; ++i) {
            arr[i % 2] *= 10;
            arr[i % 2] += ca[i] - '0';
        }
        return arr[0] + arr[1];
    }
```

```python
    def splitNum(self, num: int) -> int:
        a, b = [], []
        for i, c in enumerate(sorted(str(num))):
            (a if i % 2 == 0 else b).append(c)
        return int(''.join(a)) + int(''.join(b))
```
or 
```python
    def splitNum(self, num: int) -> int:
        num = ''.join(sorted(str(num)))
        return sum(map(int, (num[::2], num[1::2])))
```

**Analysis:**

Since there are `log(num)` digits in `num`, 

Time: `O(dlogd)`  space: `O(d)`, where `d = log(num)`.

----

**Q & A:** - credit to **@prakhar432**

*Q1:*  Why is there -> log(num) digits in num?

*A1:*  Note: The base for the logarithm is 10 everywhere in the answer.

I will try to give an intuitive idea without a mathematical proof for this. Suppose we have the number 10000, which can be written as 10^5.
If we write N = 10^5, and then take log with base 10 on both sides, then we will get-
log N = 5*log 10 = 5*1 = 5. So we can see that it takes 5 digits to represent 10^5. Or, we can say that it takes log(N) = log(10^5) number of digits to represent a number N.

To get a better idea, consider we have k number of digits in a number. Then, we can see that the range of the number will be between 10^(k-1) and 10^k - 1.
So, for k number of digits, range is - [10^(k-1), 10^k - 1]
Now, if we take log on both sides, then-
we need log(k) number of digits for the range of - [k-1, log(10^k -1], which is approximately [k-1,k].
Hence, we can see that it takes nearly log(N) digits to represent a number N.
With precision, a number N requires [log(N)] + 1.

**End of Q & A**