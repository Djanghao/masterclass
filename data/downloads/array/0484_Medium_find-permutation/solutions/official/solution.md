# Official Solution

**Link:** [https://leetcode.com/problems/find-permutation/solution/](https://leetcode.com/problems/find-permutation/solution/)

---

[TOC]

## Solution

---
### Approach #1 Using Stack [Accepted]

Let's revisit the important points of the given problem statement. For a given $$n$$, we need to use all the integers in the range $$(1,n)$$ to generate a lexicographically smallest permutation of these $$n$$ numbers which satsfies the pattern given in the string $$s$$.

Firstly, we note that the lexicographically smallest permutation that can be generated(irrelevant of the given pattern $$s$$) using the $$n$$ integers from $$(1,n)$$ is $$[1, 2, 3,.., n]$$(say $$min$$). Thus, while generating the required permutation, we can surely say that the permutation generated should be as close as possible to $$min$$.

Now, we can also note that the number generated will be the smallest possible only if the digits lying towards the most significant positions are as small as possible while satisfying the given pattern. Now, to understand how these observations help in providing the solution of the given problem, we'll look at a simple example.

Say, the given pattern $$s$$ is `"DDIIIID"`. This corresponds to $$n=8$$. Thus, the $$min$$ permutation possible will be `[1, 2, 3, 4, 5, 6, 7, 8]`. Now, to satisfy the first two `"DD"` pattern, we can observe that the best course of action to generate the smallest arrangement will be to rearrange only `1, 2, 3`, because these are the smallest numbers that can be placed at the three most significant positions to generate the smallest arrangement satisfying the given pattern till now, leading to the formation of `[3, 2, 1, 4, 5, 6, 7, 8]` till now. We can note that placing any number larger than 3 at any of these positions will lead to the generation of a lexicographically larger arrangement as discussed above.

We can also note that irrespective of how we rearrange the first three `1, 2, 3`, the relationship of the last number among them with the  next number always satisfies the criteria required for satisfying the first `I` in $$s$$. Further, note that, the pattern generated till now already satisfies the subpattern `"IIII"` in $$s$$. This will always be satisfied since the $$min$$ number considered originally always satisfies the increasing criteria.

Now, when we find the last `"D"` in the pattern $$s$$, we again need to make rearrangements in the last two positions only and we need to use only the numbers `7, 8` in such rearrangements at those positions. This is because, again, we would like to keep the larger number towards the least significant possible as much as possible to generate the lexicographically smallest arrangement. Thus, to satisfy the last `"D"` the best arrangement of the last two numbers is `8, 7` leading to the generation of `[3, 2, 1, 4, 5, 6, 8, 7]` as the required output.

Based on the above example, we can summarize that, to generate the required arrangement, we can start off with the $$min$$ number that can be formed for the given $$n$$. Then, to satisfy the given pattern $$s$$, we need to reverse only those subsections of the $$min$$ array which have a `D` in the pattern at their corresponding positions.

To perform these operations, we need not necessarily create the $$min$$ array first, because it simply consists of numbers from $$1$$ to $$n$$ in ascending order. 

To perform the operations discussed above, we can make use of a $$stack$$. We can start considering the numbers $$i$$ from $$1$$ to $$n$$. For every current number, whenver we find a `D` in the pattern $$s$$, we just push that number onto the $$stack$$. This is done so that, later on, when we find the next `I`, we can pop off these numbers from the stack leading to the formation of a reversed (descending) subpattern of those numbers corrresponding to the `D`'s in $$s$$(as discussed above). 

When we encounter an `I` in the pattern, as discussed above, we push the current number as well onto the $$stack$$ and then pop-off all the numbers on the $$stack$$ and append these numbers to the resultant pattern formed till now.

Now, we could reach the end of the pattern $$s$$ with a trail of `D`'s at the end. In this case, we won't find an ending `I` to pop-off the numbers on the $$stack$$. Thus, at the end, we push the value $$n$$ on the stack and then pop all the values on the $$stack$$ and append them to the resultant pattern formed till now. Now, if the second last character in $$s$$ was an `I`, $$n$$ will be appended at the end of the resultant arrangement correctly. If the second last character was a `D`, the reversed pattern appended at the end of the resultant arrangement will be reversed including the last number $$n$$. In both the cases, the resultant arrangement turns out to be correct. 

The following animation better illustrates the process.

!?!../Documents/484_Find_Permutation_1.json:1000,563!?!

Below code is inpired by [@horseno](http://leetcode.com/horseno)

<iframe src="https://leetcode.com/playground/oQngSEVg/shared" frameBorder="0" name="oQngSEVg" width="100%" height="394"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. $$n$$ numbers will be pushed and popped from the $$stack$$. Here, $$n$$ refers to the number of elements in the resultant arrangement.

* Space complexity : $$O(n)$$. The $$stack$$ can grow upto a depth of $$n$$ in the worst case.

---
### Approach #2 Reversing the subarray [Accepted]

**Algorithm**

In order to reverse the subsections of the $$min$$ array, as discussed in the last approach, we can also start by initializing the resultant arrangement $$res$$ with the $$min$$ array i.e. by filling with elements $$(1,n)$$ in ascending order. Then, while traversing the pattern $$s$$, we can keep a track of the starting and ending indices in $$res$$ corresponding to the `D`'s in the pattern $$s$$, and reverse the portions of the sub-arrays in $$res$$ corresponding to these indices. The reasoning behind this remains the same as discussed in the last approach.

The following animation illustrates the process.

!?!../Documents/484_Find_Permutation_Reverse.json:1000,563!?!

<iframe src="https://leetcode.com/playground/JWJKE7wc/shared" frameBorder="0" name="JWJKE7wc" width="100%" height="462"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. The resultant array of size $$n$$ is traversed at most three times, in the worst case e.g. "DDDDDD"

* Space complexity : $$O(1)$$. Constant extra space is used.

---
### Approach #3 Two pointers [Accepted]

**Algorithm**

Instead of initializing the $$res$$ array once with ascending numbers, we can save one iteration over $$res$$ if we fill it on the fly. To do this, we can keep on filling the numbers in ascending order in $$res$$ for `I`'s found in the pattern $$s$$. Whenever we find a `D` in the pattern $$s$$, we can store the current position(counting from 1) being filled in the $$res$$ array in a pointer $$j$$. Now, whenever we find the first `I` following this last consecutive set of `D`'s, say at the $$i^{th}$$ position(counting from 1) in $$res$$, we know, that the elements from $$j^{th}$$ position to the $$i^{th}$$ position in $$res$$ need to be filled with the numbers from $$j$$ to $$i$$ in reverse order. Thus, we can fill the numbers in $$res$$ array starting from the $$j^{th}$$ position, with $$i$$ being the number filled at that position and continue the filling in descending order till reaching the $$i^{th}$$ position. In this way, we can generate the required arrangement without initializing $$res$$.

<iframe src="https://leetcode.com/playground/XWhYV6uZ/shared" frameBorder="0" name="XWhYV6uZ" width="100%" height="428"></iframe>
**Complexity Analysis**

* Time complexity : $$O(n)$$. The resultant array of size $$n$$ is traversed at most two times, in the worst case e.g. "DDDDDD"

* Space complexity : $$O(1)$$. Constant extra space is used.