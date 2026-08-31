# Least characters Javascript solution (35 characters of code)

**Author:** KennyMcGeoch
**Votes:** 1
**Link:** [https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/4870455/](https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/4870455/)

---

I figured for fun I'd try to get a working solution using the least characters possible. This is what I've got so far. I think I've optimised it but would naturally welcome suggestions from any better coders!

Looking for the shortest code on other solutions posted here have
```
var nthPersonGetsNthSeat = function(n) {
    return n == 1 ? 1:0.5    
};
```

That has 73 characters that's probably a good baseline. However if wanting to further optimise it you can replace the ternary operator with an OR to save 1 extra character giving the following 72 character solution:

```
var nthPersonGetsNthSeat = function(n) {
    return n == 1 || 0.5    
};
```

However we can then go further and change the default code to use arrow functions to give this 47 character solution:
```
var nthPersonGetsNthSeat = (n) => n == 1 || 0.5
```

We can then save an extra 4 characters and not declare the var to get us down to 43 characters with:
```
nthPersonGetsNthSeat = (n) => n == 1 || 0.5
```
I can then further eliminate all the spaces to get us down to 35 characters with:
```
nthPersonGetsNthSeat=(n)=>n==1||0.5
```
This looks a bit ugly aesthetically but I don't think it's possible to trim off any more characters. If anyone can beat this I'd definitely be interested to see it!