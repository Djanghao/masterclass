# Python 3 | Simple Math | Explanation

**Author:** idontknoooo
**Votes:** 36
**Link:** [https://leetcode.com/problems/sum-game/solutions/1330360/](https://leetcode.com/problems/sum-game/solutions/1330360/)

---

### Explanation
- Intuition: Starting with the three examples, you will soon realize that this is essentially a Math problem.
- Our goal is to see if left sum can equal to right sum, that is, `left_sum - right_sum == 0`. 
- To make it easier to understand, we can move digits to one side and `?` mark to the other side, for example, `?3295???`
	- Can be represented as `?329=5???` -> `3+2+9-5=???-?` -> `9=??`
	- Now, the original question becomes: Given `9=??`  and Alice plays first, can we get this left & right not equal to each other?
	- The answer is NO. It doesn't matter what number `x` Alice gives, Bob only need to provide `9-x` to make sure the left equals to right.
- Let's try out some other examples, based on the previous observation.
	- `8=??`, can Alice win? 
		- Yes, if Alice plays 9 first
	- `9=???`, can Alice win?
		- Yes, since Alice can play 1 time more than Bob
	- `9=????`, can Alice win?
		- Yes, if the sum of Alice's 2 plays is greater than 9
	- `18=????`, can Alice win?
		- No, ame as `9=??`, doesn't matter what `x` Alice plays, Bob just need to play `9-x`
	- `18=??`, can Alice win?
		- Yes, unless Alice & Bob both play 9 (not optimal play, against the game rule)
- I think now you should get the idea of the game. Let's say, for left side & right side, we move the smaller sum to the other side of the equal sign (we call the result `digit_sum`); for question mark, we move it to the opposite direction (we call the result `?_count`. After doing something Math, the only situation that Bob can win is that:
	- `?_count % 2 == 0 and digit_sum == ?_count // 2 * 9`. This basically saying that:
		- `?_count` has to be an even number
		- `digit_sum` is a multiple of 9
		- Half number of plays (or `?`) * 9 equals to `digit_sum`
- In the following implementation:
	- `q_cnt_1`: **Q**uestion mark **c**ou**nt** for the **1**st half of `num`
	- `q_cnt_2`: **Q**uestion mark **c**ou**nt** for the **2**nd half of `num`
	- `s1`: **S**um of digits for the **1**st half of `num`
	- `s2`: **S**um of digits for the **2**nd half of `num`
	- `s_diff`: **S**um difference (we take the greater sum - the smaller sum)
	- `q_diff`: **Q**uestion mark difference (opposite direction to the digit sum move)


### Implementation
```
class Solution:
    def sumGame(self, num: str) -> bool:
        n = len(num)
        q_cnt_1 = s1 = 0
        for i in range(n//2):    # get digit sum and question mark count for the first half of `num`
            if num[i] == '?':
                q_cnt_1 += 1
            else:    
                s1 += int(num[i])
        q_cnt_2 = s2 = 0				
        for i in range(n//2, n): # get digit sum and question mark count for the second half of `num`
            if num[i] == '?':
                q_cnt_2 += 1
            else:    
                s2 += int(num[i])
        s_diff = s1 - s2         # calculate sum difference and question mark difference
        q_diff = q_cnt_2 - q_cnt_1
        return not (q_diff % 2 == 0 and q_diff // 2 * 9 == s_diff) # When Bob can't win, Alice wins
```