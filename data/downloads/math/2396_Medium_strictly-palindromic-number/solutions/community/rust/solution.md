# (All languages) Use neurons not CPU - also Hint 2 is wrong

**Author:** mattihito
**Votes:** 3
**Link:** [https://leetcode.com/problems/strictly-palindromic-number/solutions/2525594/](https://leetcode.com/problems/strictly-palindromic-number/solutions/2525594/)

---

I said in a reply to @lee215's [post](https://leetcode.com/problems/strictly-palindromic-number/discuss/2524702/return-false) (which already had a good explanation of the problem), that I did not need to post a solution.  Then I read Hint 2, which is so bad, it made me feel like I needed to post something.

First things first, the solution to the problem is given away entirely in Hint 2, which reads (as of September 3, 2022):

> The number n in base (n - 2) is always 12, which is not palindromic.

So, Hint 2 is telling us the answer to the problem is `return false` or whatever variant that is in your language of choice.  This produces the correct result as we'll see later, and renders the problem and any solution post completely irrelevant.  But to make matters worse, Hint 2 is not just telling you the answer directly -- it is _actually wrong_ (it gives the right answer for the wrong reason).  Let's think it through from the beginning, as if we didn't have any hints, and we'll see why.

**Thought Process**: If we didn't look at the hints, the first thing we might notice is that the range of bases the problem asks for are surprising.  We are asked to check base 2 through base _n - 2_.  I would have expected 2 through base _n - 1_.  Let's start there; why did we skip n - 1?  Well, n is always 11 in base n - 1 for n > 2 which covers the problem's bounds for n.  This is because 1 is congruent to n mod n - 1.  So n in base n - 1 is always palindromic -- maybe that's why they did not include n - 1 in the range of bases.  But what about n in base n - 2?  We know 2 is congruent to n mod n-2 so maybe our answer is 12?  But wait, we can't have 12 in base 2.  Is that a concern for our range of n?  Well, n >=4 and when n is exactly 4, we have base 2.  So we have one special case to check out - we have 4 as 100 in binary.  (This is what is incorrect about Hint 2 - it misses this special case).  However, this does not change our result, since neither 12 nor 100 are palindromic, and now we have (correctly) proven that n is never palindromic in base n - 2.  That is, the answer is _always false_, and the solution in your language of choice is probably one of:

    return false;
	return false
    return False
	false
	RETURN .FALSE.
	RETURN 0
	MOVE 0 TO RETURN CODE
	
etc.  If it's the last of the above, I'm really sorry.  I'm even more sorry if the last one looks like your language but isn't right.  (See: https://stackoverflow.com/a/69667849 for an entire post on how to return true, and an answer that demonstrates enough reason to be thankful if you never had to work in COBOL - you know it's bad when need stack overflow to figure out how to return true or false because there are implementation differences).

**Request for Action**: Hint 2 as quoted above is a bad hint.  Not only is it wrong, it directly gives away the answer.  I think Hint 2 should read "Think about base n - 2 first, before you write any code." or something else which is neither incorrect nor entirely gives away the solution.  I submitted feedback to this effect, and if you agree, I'd ask you to do the same (after checking whether it has been fixed yet).