# JAVA UNIQUE RECURSION SOLUTION!

**Author:** dani_danielsOO
**Votes:** 25
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/625874/](https://leetcode.com/problems/integer-replacement/solutions/625874/)

---

ok! lets do this!
first of all
what does the question ask!
**WE NEED TO GO FROM A NUMBER "N" TO 1 IN MINIMUM NUMBER OF STEPS!**
we are allowed to 
1> replace n by n/2 if n is even
2>replace n by n+1 or n-1 when n is odd

# INTUITION -1(correct)
BY intuition what comes to mind is  we need to maximise the number of times we  reach an even number because then we are able to reduce the number by half of the original number

# INTUITION -2 (incorrect)
we need   to reach 1 hence its better if we reduce the number everytime rather than increasing it  when we get to odd number !

intuition 1 is absolutely correct

but there is a problem with intuition 2 for numbers of the form
a=2^i - 1 (for i>3)

let me explain:
if i=4
then a =15

we have two choices:

15->14->7->6->3->2->1 (7 steps)

15-16->8>4>2->1 (6 steps)

wow!
what a weird behaviour!!

anyways this is the main ascpect of the question, that its not always beneficial to reduce the number by 1.


# Solution:

```
class Solution {
    public int integerReplacement(int n) {
    return replace((long)n);
    }
    
    int replace(long n)
    {
       int ans=0;
        if(n<=1)
        {
            return 0;
        }
        
        if(n%2==0)
        {
            ans=1+replace(n/2);
        }
        else
        {
            ans=1+Math.min(replace(n+1),replace(n-1));
        }
        return ans;
        
}
}
```

explanation:
so basically we are using recursion to find out whether it is beneficial to use n+1 or n-1 to make our decision!



P.S
I SEE A LOT OF PEOPLE DOING VERY COMPLEX BIT MANIPULATIONS AND USING BIT COUNT LIBRARIES!
I PERSONALLY FEEL MY APPROACH IS MORE INTUITIVE AND EASY TO UNDERSTAND!

HOPE IT HELPS:
PLEASE UPVOTE IF THIS POST HELPED YOU!