# rust one line solution with explaination

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/5051950/](https://leetcode.com/problems/chalkboard-xor-game/solutions/5051950/)

---

# Intuition
The statement of the question is wrong. If at the very beginning the XOR is 0, Alice will win. The statement shall be, who takes the turn when XOR of all number wins.

Define that there are two ways to win. The natural way is that all number is removed. If there are odd numbers, Alice loses. Otherwise, Alice win.

There is only one unnatural way to win or loss. If I have $2*k+1$ same number $x$, on matter which number I remove, it is the same $x$, that leaves $2*k$ of $x$ and I lose. Note that in this case I have odd number of numbers, I will lose anyway. The analyze can stop here. Little detailed analyze is below.

To generate such situation to the other, I must have $(2*k+1)[x]+[y]$ at hand where $x\
eq y$ and remove the $y$. I can't have $(2*k+2)[x]$ for that makes me lose.

Now if I have $(2*k+1)[x]+[y]$, I win. to form such situation, the other must have $(2*k+1)[x]+[y]+[y']$. If $y' = y$ or $y'=x$, I already win. Otherwise, the optimal way for the other is to remove an $x$, then I will also remove an $x$ and remains the structure. If $x$ is exhausted, it is still a natural way to win.

So there is no unnatural way to win. The only one criterion of win of lose is whether I got even numbers.

# Complexity
- Time complexity:
 $$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn xor_game(nums: Vec<i32>) -> bool {
        nums.len()%2==0||nums.iter().fold(0, |acc, x| acc^x)==0
    }
}
```