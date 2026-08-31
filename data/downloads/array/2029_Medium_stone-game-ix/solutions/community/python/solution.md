# [python] Intuitive mathematical solution (O(n) time (essentially O(1)))

**Author:** ilocmvs
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/2085378/](https://leetcode.com/problems/stone-game-ix/solutions/2085378/)

---

The first thing you need to know is that, essentially, there are three types of numbers, namely: u (num % 3 == 1), d (% 3 == 2), t (num % 3 == 0).
Then, to make the problem easier, let's talk about the case where t == 0 first (that is there are only u and d numbers).
Above all, let's say that Alice pick a u number, then Bob must also pick a u number. Then, Alice must pick a d number, and Bob must pick a u number...
Similarly, if Alice starts with a d number, the following sequence is also very much fixed.
To sum up, if there is no t number, the sequence must go like one of the following two for the game to continue:
uududududud....
or
ddududududu....

From observation of this, the only difference between u and d is that in the beginning, there is an extra u or d if it is picked first, and the following sequece is just u and d coming intertwined. That is, the biggest difference comes after picking the initial two numbers, and their difference becomes 2.
It's intuitively to think of, from here, that, if the difference between u and d number are larger than 2, then Alice will have the absolute control of the game by just pick **the type that has smaller amount** in the beginning, because in this way, she will start picking the other type starting the 3rd time, and she will always run up later than Bob so that in this way Bob has no way to win no matter what. Even if there are t numbers, Alice just need to play the other way around accordingly. Let's call this the default situation.
Next, we talk about the case when Alice does not have complete control. Basically, these are the cases when there is no such a **smaller-amount number**. 
There are case when either player doesn't have choice at all and let's talk bout them first.
**Situation 1**: **part 1**: If there is no u or no d number, then the game is pretty much determined from the begining. Let's say there are only [2,2,2] or [2,2,2,2], then Alice doesn't have a choice but to lose. But if there are t numbers, the result will be reversed based on whether the amount of t numbers are odd or even. **Part 2**: notice that, based on the rule, if it's [2] or [2,2], in both case Alice loses.
**Situation 2**: if u and d have the same amount, there is also no choice for either players, and the result can be deducted easily.
**Situation 3**: lastly, the most difficult part is that, u > 0 and d > 0 and the difference between u and d is smaller than 2. Then, though there seem to be choices for Alice, actually there isn't. The easiest way to explain is that, no matter how, one of u and d must come to zero first compared to the other one, and, depending on who picked last, this situation is partly coming back to situation 1. Partly means the result also depends on who picked lastly before this. If it is Bobs, it is the same with sitation 1. If it is Alice, it's on the contrary.
```
class Solution:
    def stoneGameIX(self, stones: List[int]) -> bool:
        u, d, t = 0, 0, 0
        for stone in stones:
            if stone % 3 == 1:
                u += 1
            elif stone % 3 == 2:
                d += 1
            else:
                t += 1
        if not u and d <= 2 or u <= 2 and not d: #situation 1 part 2
            return False
        if not u and d > 2 or u > 2 and not d: #situation 1 part 1
            if not t % 2:
                return False
            else:
                return True
        if u == d or abs(u - d) <= 2: #situation 2 and situation 3
            if t % 2:
                return False
            else:
                return True
        return True #default situation