# ✅ Non -ve Integers without Consecutive 1s || Java || Explaination

**Author:** varunsharma-codes
**Votes:** 31
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361796/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361796/)

---

**Intuition**
The tricky fact here is to see how the problem can be reduced to fibonacci sequence
Lets see a few cases for numbers with `k` bits.

*Assumption*: The solution for `k=0` is `1`. Since the number with 0 bits is not possible as any number will have `1` bit we have taken the assumption that if there was a number with `0` bit, it wont have consecutive `1`.

`k=1`
The number with `1` bit has `2` solutions. i.e `0` and `1`

`k=2`
The possible numbers are:
```
00
01
----
10   = A
~~~
11   = B
```
In the above we can se that this can be represented as the sum of the solutions for `k=0` and `k=1`. The reason behind this is if we divide the above in the mid, `0` and `1` are appended to the solution of previous bit (i.e. `k=1`). Now the above half has `0` appended so it wont affect the solution of `k=1`. For below half we can again divide into two parts say `A` & `B`. The half `B` will always have dublicate `1` so we will not have our solution as part of it. The part A will be the result of `k=0`

This wil be more clear for `k=3`

`k=3`

```
000
001
010
011
------
100    = A
101
~~~~~ 
110    = B
111
```

So for `k=3`, `F(k) = F(2)+F(1)`

Now that we have the above sorted lets move into the approach.

* We first need to determine the total bits (`k`) for the number `n`.
* Then we calculate the fibonacci sequence for all `k`
* Then the part is how do we calculate the solution till `n`
* For this we calculate the solutions for `bit=k-1`. Why we do so is because we have the full result available till the `k-1` bit.
Eg: Lets say the number was `10101`. This has `k=5` bits. The first `1` is at the 5th bit from right. so we can divide the solution to `0000` to `1111` which is `F(k=4)`. Then we find the next bit which has `1`. This would be 3rd bit from right. So we can add this to solution and so on.
* If any any time we have 2 consecutive `1` there is no point in checking more. So we return the answer `res`.
* By the end if we have not returned the answer then we can return `res+1` to include the number itself.

```
class Solution {
    public int findIntegers(int n) {
        String binary = Integer.toBinaryString(n);
        int k = binary.length();

        int[] fib = new int[k+1];
        fib[0] = 1;
        fib[1] = 2;
        for(int i=2;i<=k;i++){
            fib[i] = fib[i-1]+fib[i-2];
        }
        
        boolean isLastBitOne = false;
        int res=0;
        int bit = k-1;
        while(bit>=0){
            if((n & (1<<bit))==0){
                isLastBitOne=false;
            } else {
                res+=fib[bit];
                if(isLastBitOne){
                    return res;
                }
                isLastBitOne=true;
            }
            bit--;
        }
        
        return res+1; // Since we started from one lesser bit, we add one to include 'n' itself
    }
}
```
Please upvote if you like this so that it can reach others.