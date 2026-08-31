# [Python3] Official Solution Explained Simply with Diagrams

**Author:** chaudhary1337
**Votes:** 116
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361794/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361794/)

---

## 0. Introduction
The problem is hard, but looks deceptively easy. The solution is easy, but hard to understand. I'll attempt to explain the [official solution](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solution/) with diagrams.

## 1. The World of Bits
The single constraint given to us is of **no consecutive set bits**. Set bits meaning bits with value of 1. Since the question is in terms of bits, let's think in terms of bits.

Say we have two bits worth of space, `xx`. What all are the valid combinations? `00, 01, 10`. 

![](https://i.imgur.com/RFk9py4.png)

Similarly, for 3 bits as `xxx`:

![](https://i.imgur.com/CGjOjSD.png)

The paths reaching till the end with green are counted as valid.

## 2. Observations
- One thing is glaringly obvious: Only a sequence of `0` and `10` is able to produce both `0, 1` as the output, giving us full freedom over what to pick next. This is marked as yellow.
- Note how the trees are similar. Take the case of 4 bits as: `xxxx`.
![](https://i.imgur.com/oNmGylR.png)

That's right, its a fibonacci sequence! This is the core of the solution.

## 3. Examples
Now we know that its a world of bits with `0` and `10` as the minimum viable sequences giving us fibonacci numbers as the answer. 

Since all the numbers can be formed using 1s and 0s, let's take a look at some of the samples.

input: n = "1010"
output: In this case we can think of "1010" as "1000+10". We add the answers of "1000" and "10", which can be given by `f[3]+f[1]+1`. We add the additional 1 because "1010" itself is a valid number!

input: n = "1110"
output: Something intersting happends here. Consider "1110 = 1000+110". Answer for "1000" is `f[3]`.
What about "110"? Can we break it down as "110 = 100+10"? Not so fast! 
The issue is, "110" has a hidden 1 behind it. Meaning, we can consider numbers **upto** "100", sure (*not* inlcuding "100"), but any number beyond that is simply invalid by the condition. So, we only consider "1110 as 1000+100". The answer is thus `f[3]+f[2]`. Note how we didn't do `+1` because "1100" is an invalid number.

input: n = "101 1010"
output: "101 1010 = 100 0000 + 1 0000 + 1000" => `f[6]+f[4]+f[3]`. The rest would become invalid. If you are confued, reread! This combines elements of both of the above.

## 4. Code
This code is a direct translation of the official solution, but this time, it should make sense!

```
class Solution:
    def findIntegers(self, n: int) -> int:
        # f stores the fibonacci numbers
        f = [1, 2]
        for i in range(2, 30):
            f.append(f[-1]+f[-2])
        
        # last_seen tells us if there was a one right before. 
        # If that is the case, we are done then and there!
        # ans is the answer
        ans, last_seen = 0, 0
        for i in reversed(range(30)):
            if (1 << i) & n: # is the ith bit set?
                ans += f[i]
                if last_seen: 
                    ans -= 1
                    break
                last_seen = 1
            else:
                last_seen = 0
        return ans+1
```

Any questions? Ask! Any comments/criticisms? I'm happy to hear! An upvote let's me know it was helpful for you :D
