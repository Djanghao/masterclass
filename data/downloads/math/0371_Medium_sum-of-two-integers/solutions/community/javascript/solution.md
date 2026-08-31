# Javascript: Very detailed explanation with two code versions.  Enjoy!

**Author:** paultman
**Votes:** 104
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/606544/](https://leetcode.com/problems/sum-of-two-integers/solutions/606544/)

---

Easier to understand version.  See below for explanation
```
var getSum = function(a, b) {
      let carry;
      while((a & b) !== 0){
          carry = (a & b) << 1;
          a = a ^ b;
          b = carry;
      }
      return a ^ b;
};
```

Ok, so we all know that numbers represented on computers are groups of 1's and 0's (binary, two states).  Like in decimal, what we are all familar with (base 10), when we add numbers and they exceed the base (10), we add to the next column left.  

For example adding 5+6 (both numbers using "units" place), and get 1 (tens place) and 1 (units place).  The point is, that adding numbers will fill the "units" bucket, and overflow to the next one as needed.  So, what's important?  Add the numbers to the "units" bucket, and keep track of the overflow.

in binary, xor or ^ will add digits (but doesn't care about overflow). XOR/exclusive or, works like or, but if both are positive, it switches to negative, 

so 4+3
100
011

111 (because 1 or 0 is 1 in xor) 
this makes sense because in binary, 3+4 also equals 7

what about 5+1?
101
001

100, that's 4, but 5+1 = 6, not four.  That's because we have a carry.  The rightmost 1's should carry to the next place, so that's where the next part of the process comes, the &. The AND will only return 1 when both are 1 so, so 001+001 = 001, and we shift it left with << 1, so it becomes 010 or 2, so it's 4(100)+2(010) which equals 6 (110)

So, for this to work we need to add the numbers with xOR ^, and also add the carry that comes from AND &.

When we do that, it's possible that again, we have a carry, so we would need to repeat.  think about  binary of 3+7.
011 (3)
111 (7)
XOR
100 (4)

AND 
011 (3)   since it is the carry, we shift <<1, so it becomes 110 or 6.  now we add using ^, but that gets us

100
110
XOR
010 or 2, but we also still have a new carry which is 100 & 110 or 100 and shifted <<1 is 1000.  add that to the 010 and we have 1010 or 10.  

So the point of the second example is that you keep having to run the operation whenever there is a carry.  In my first example I did it with the loop, below with recursion.

Recursive with syntactic sugar 
```
var getSum = function(a, b) {
    return b ? getSum(a ^ b, (a & b) << 1) : a;
};
```

I hope this example helped to understand how the binary operations actually happen, if it helped you, maybe you could upvote it so others might notice it.

Btw, it's called a half adder and is physically used in building physical memory/computer systems.  I learned in at UMD, College Park in CS311 computer architecture a long time ago, happy to see that it was useful :-)

If this post helped, please upvote it so others can notice and read it.  thanks!