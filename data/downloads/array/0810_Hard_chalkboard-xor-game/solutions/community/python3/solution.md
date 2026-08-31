# The Clever Math Solution Explained - Allows an O(1) Solution if N%2==0

**Author:** BiggestChungus
**Votes:** 2
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/3892903/](https://leetcode.com/problems/chalkboard-xor-game/solutions/3892903/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

I have no intuition for deriving this :(

# Approach

There are three cases:
1. the xor of all the numbers is 0 => Alice wins because the problem says so
2. the xor is nonzero, and `len(nums)` is even
3. the xor is nonzero, and `len(nums)` is odd

Why would we look at even-vs-odd lengths in the first place? No idea. But once you do, the solution can be derived.

Let's look at case 2. Here are the order of plays:
1. since the xor is nonzero, not all the numbers can be the same, otherwise the xor would be 0. Therefore there are at least two unique values. That means at least one is NOT the xor value. Therefore Alice can pick one of the numbers not equal to the xor. The result is an odd number of remaining numbers, and a nonzero xor. Thereofore Alice always has a valid play the length is even.
2. then Bob plays. Bob is faced with two possibilities
  i. Bob has no good plays: the remaining number(s) all equal the xor. He loses, so Alice wins
  ii. Bob has a good play: he can erase a number and leave the xor nonzero. So he does that and gives it back to Alice: xor nonzero, and an even length array.
3. Now Alice is back to (1). So she makes a valid play and hands it back to Bob.
4. Alice always has a valid play. So as the remaining numbers dwindle, Bob is eventually forced to to do (2)(ii).

The game can't go on forever because there are a finite number of numbers. The game can't end on Alice's turn because she always has a valid play. So the game must end on Bob's turn.


Now let's look at case 3:
1. Alice has a nonzero xor and an odd number of numbers. This is the same as case 2 play (2) - she's in the same situation as Bob!
2. Then Bob gets back a nonzero xor with an even length array. We showed in case 1's step (1) that he will will always have a valid play. He's playing as Alice!

So this is the same as case 2, but with Alice and Bob flipped. So Bob wins.


Therefore the code is just
* check for xor == 0
* then return True if the array's length is even, else return False


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def xorGame(self, nums: List[int]) -> bool:
        # Idea is something like this for the nontrivial xor != 0 case:
        #   if length is even: not all the numbers are the same, otherwise xor would be zero.
        #      in addition: two+ unique numbers, so one+ is != xor. So Alice can delete that number without setting xor to zero
        #      Therefore Alice has a guaranteed play if N % 2 == 0 and xor != 0
        #    Then Bob faces a couple of cases:
        #       1. if each unique number he picks results in xor == 0, he loses
        #       2. if Bob picks a safe number, then he passes it back to Alice with xor != 0 and an even number
        #           we know that Alice always has a safe play from here. She does that safe play: goto (1)

        xor = 0
        for n in nums:
            xor ^= n

        return xor == 0 or len(nums) % 2 == 0
```