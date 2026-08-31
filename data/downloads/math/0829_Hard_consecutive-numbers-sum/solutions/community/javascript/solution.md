# javascript, js solution, full explained, easy understand, beat 100% time complexity

**Author:** ylinsde
**Votes:** 2
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/1724943/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/1724943/)

---

"
"
First thing we can observe, if number n can be divided into different number of consecutive integers, then the every possible of combination is only one. For example, 15 can be divided to 5 numbers, and can only be [1,2,3,4,5]. No second possiblility.  If 15 is divided into 3 numbers, it can only be [4,5,6].

The second point is that if the number can be divided into odd number of integers, such as [1,2,3,4,5] or [3,4,5,6,7]. You can find that the middle one is the average of the sequence sum (the average of the number  n ).

And if the number can be divided into even number of integers, such as [1,2,3,4] or [3,4,5,6,7,8]. We will know that the average of the sequence sum is some integer plus 0.5 
(For Example:  for number 15.  It can be divided by 3, the result is 5, and the following sequence is [4,5,6] (5 is the middle of the sequence),  is an answer; it can be divided by 5, the result is 3,  and the following sequence is [1,2,3,4,5] ( 3 is the middle of the sequence), is another answer. If it is divided by 2, the answer is 7.5, and the sequence is [7,8], is another answer. But if it is divided by 4, the result is 3.75, is not possible to form a consecutive sequence)

Because the sum of the sequence is the number  n   itself, so we can iterate the interger   i   from number 2 to n, and do the following calculation.  If   i   is odd, and the module of   n   divide   i   is  0; or if   i   is even , and if the module of   n   divide   i  is 0.5 , then this is the one of the answers we are looking for.
(The actual calculations need to be modified to fit the program)
(The number itself is an answer, we don't need to calculate the number   n  divide 1.  So we iterate   i  from 2.  And set the result initially to be 1)

And last thing is we don't need to iterate the divisor up to n, such as 15 to form [1,2,3,4,5], is the last possible answer. If we divide 15 into more numbers,  the result could be less than 1, that is a wrong answer. So we can find out the terminate situation is the quotient of number  n  and the divisor i (for example the number 3 in sequence [1,2,3,4,5] from number 15) (need to be floor down) minus the half of the length(  i   /  2, floor down) is less than 1, then we break the iteration.

This is how I implement the code. I also notice some guys have more effiencient solutions, I can't figure out at the first glance. But I think this approach is easy to understand, so I post it. This approach beat 100% time complexity :)

```
var consecutiveNumbersSum = function(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        if (n / i < Math.floor((i + 1) / 2)) break;
        if (i % 2) {
            if (n % i === 0) result++;
        } else {
            if ((n / i) * 10 - Math.floor(n / i) * 10 === 5) result++;
        }
    }
    return result;
};
```