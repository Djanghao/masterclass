# Detailed Explanation with Diagrams. A Collection of Ideas from Multiple Posts. [Python3]

**Author:** chaudhary1337
**Votes:** 57
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/1368125/](https://leetcode.com/problems/beautiful-array/solutions/1368125/)

---

## 0. Introduction
This post is a collection of all the posts, comments and discussions of the LeetCode community. References mentioned at the bottom! I've attempted to explain things in detail, with diagrams to help understand the intuitions as well.

## 1. Naive Solution
The first thing anyone can think of is using `permutations(array)` to enumerate all the permutations in `O(N!)` time. This is bad in itself, but it gets worse. We still need to check the validity of the resultant array. We can do this in `O(N^3)` time, iterative over every possible combination of `i`, `j` and `k`.

Below is the code for it.
```
from itertools import permutations
class Solution:
    def invalid(self, x):
        n = len(x)
        flag = False
        for i in range(n):
            if flag: break
            for j in range(i+2, n):
                if flag: break
                for k in range(i+1, j):
                    if 2*x[k] == x[i]+x[j]: flag = True; break
        return flag
        
    def beautifulArray(self, n: int) -> List[int]:
        for perm in permutations(range(1, n+1)):
            if not self.invalid(perm):
                return perm
```

This is clearly a dead end. The time complexity is enormous and impractical. But, what to do?

## 2. Thinking in Terms of Bits
**Whenever stuck, think in terms of bits.**

It always helps to think in terms of bits, so let's do that. Reformulating the problem, `nums[i]+nums[j] = 2*nums[k]` is not allowed.

In terms of bits, we can start with thinking what would happen if `nums[i]` or `nums[j]` is odd or even.


| nums[i] | nums[j] |   nums[k]    |
| ------- | ------- |:------------:|
| even    | even    |   even/odd   |
| odd     | odd     |   even/odd   |
| even    | odd     | non-existent |
| odd     | even    | non-existent |

**Clearly, it looks like we want to focus on the last two cases. Ensuring that will ensure the validity of the solution.**

## 3. Finding Recursion
We know splitting the array into odds and evens is beneficial. The trivial case is `[odd numbers here] [even numbers here]`, or the opposite `[even numbers here] [odd numbers here]`. Both will work. For convenience, I'll take the first one.

example: `n = 7`
`1 2 3 4 5 6 7` -> `1 3 5 7 | 2 4 6`

This clearly won't work since `1 3 5 7` and `2 4 6` are troublesome in themselves, but if `i` is pointing to `1 3 5 7` and `j` to `2 4 6`, we can stay safe.

Now, what if ... we break the `1 3 5 7` into two again? How? Just do a right-shift operation. (this is one of those problems whose solutions make sense once you know them lmao)

This makes the problem: `0 1 2 3`. Doesn't this look eerily similar to the orignial problem? We can break this down as `1 3 | 0 2`. This will work for `evens` as well (think why). **We have found a recursion!** 

The below diagram should explain it better.

![](https://i.imgur.com/sxoCWG0.png)

Note that the right shifting is done for explaination reasons, the goal is to actually just consider alternate elements. 

## 4. Code for Recursive Solution
```
class Solution:
    def recurse(self, nums):
        if len(nums) <= 2: return nums
        return self.recurse(nums[::2]) + self.recurse(nums[1::2])
    
    def beautifulArray(self, n: int) -> List[int]:
        return self.recurse([i for i in range(1, n+1)])
```

## 5. One-liner Solution
The final one-liner solution is based on a very interesting observation. Recall how we worked with the trees, where each following height involved right-shifting the binary representation by one. Alternatively, think like this: What happened in the grand scheme? We considered the 0th bit first, then the 1st, then the 2nd and so on.

![](https://i.imgur.com/r2w55ie.png)

If you note, this is equivalent to a sorting problem! The only difference is that we are considering the number in reverse, in binary. This brings us to the godly one liner solution by lee215.

```
class Solution:
    def beautifulArray(self, n: int) -> List[int]:
        return sorted(range(1, n+1), key=lambda x: bin(x)[:1:-1])
```

## 6. References
- https://leetcode.com/r0bertz/ 's post https://leetcode.com/problems/beautiful-array/discuss/644612/Python3-solution-with-detailed-explanation-Beautiful-Array
- https://leetcode.com/lee215/ 's post https://leetcode.com/problems/beautiful-array/discuss/186680/Python-Three-1-line-Solutions
- https://leetcode.com/lee215/ 's post https://leetcode.com/problems/beautiful-array/discuss/186679/Odd-%2B-Even-Pattern-O(N)


If you want another look at the problem in a different format, here's my video explanation.
https://www.youtube.com/watch?v=jHHdiMIJcr0.

Feel free to ask any questions! Criticisms and comments are most welcome. If this helps you, upvote! It gives me motivation to be better :D