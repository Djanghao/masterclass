# JavaScript Intuitive Solution

**Author:** Tayomide
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-game/solutions/5451341/](https://leetcode.com/problems/sum-game/solutions/5451341/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I split the number into two halves and then consider the edge cases of both

# Approach
<!-- Describe your approach to solving the problem. -->
`leftSum` is the sum of the numbers at the left half of num
`rightSum` is the sum of the numbers at the left half of num
`Aleft` is the sum of the question marks at the left half of num for Alice
`Bleft` is the sum of the question marks at the left half of num for Bob
`Aright` is the sum of the question marks at the right half of num for Alice
`Bright` is the sum of the question marks at the right half of num for Bob
`maxLeft` is the maximum value the left side can have if Alice replaces all her `?` at the left side with 9
`maxRight` is the maximum value the right side can have if Alice replaces all her `?` at the right side with 9

The first part is to get the values of this variables
I will skip this part because it's boring. The [code](#code) could be found below

## What happens if `Alice` has the last move in the game?

We can all agree that if `Alice` gets the last play then `Bob` will never win because if `Bob` needs `Alice` to place 5 all `Alice` has to do is place any other number than 5 to win the game

We can now consider only cases where `Bob` always ends the game or `Alice` and `Bob` has the same amount of moves(`?`) (It's worded differently but it's the same thing)

## Case 1: maxLeft
If `Alice` goes all in with 9's on the left side and 0's on the right side and `Bob` goes all in with 0's on the left side there are two cases where Alice would win

### If `maxLeft` is still less than the normal `rightSum`
In this case no matter how many substitutes Bob makes on the right it will only increase `rightSum` so there is no way for Bob to make a balance

### If Bob does not have the capacity for `rightSum` - `maxLeft`
In this case `Bob` can not go higher to make up for the gap as they're already at their limit - 9 accross the board

### Edge Case
You might wondering why can't `Bob` change their `?` at the left from `0` to make up for the balance?

`Bob` can't change the one's at the left because if they do `Alice` could either reduce their `9`'s at the left or increase their `0`'s at the right to make up for the difference and since there is an equal amount of moves(`?`) for both of them no matter how far `Bob` goes `Alice` can match it

## Case 2: maxRight

If `Alice` goes all in with 0's on the left side and 9's on the right side and `Bob` goes all in with 0's on the right side there are two cases where Alice would win

The remaining proof is similar to Case 1

Anything less than the extremes provided in the two cases would lead to lesser gap making it easier for `Bob` to balance hence since `Alice` is playing optimally we can assume without loss of generality this are the moves they would make.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
  let leftSum = 0, rightSum = 0, Aleft = 0, Bleft = 0, Aright = 0, Bright = 0, flip = 0, assign = 0
  for(let i = 0; i < num.length; i++){
    if(i === num.length/2)flip = 1
    if(num[i] === "?"){
      if(flip){
        if(assign)Bright++
        else Aright++
      }else{
        if(assign) Bleft++
        else Aleft++
      }
      assign ^= 1
    }else{
      if(flip)rightSum += num[i] | 0
      else leftSum += num[i] | 0
    }
  }
  if((Aleft + Bleft + Aright + Bright) % 2 === 1)return true

  const maxLeft = leftSum + Aleft*9, maxRight = rightSum + Aright*9
  if(maxLeft < rightSum)return true
  if(maxLeft - rightSum > 0){
    if(Bright === 0 || (maxLeft - rightSum)/Bright > 9)return true
  }

  if(maxRight < leftSum)return true

  if(maxRight - leftSum > 0){
    if(Bleft === 0 || (maxRight - leftSum)/Bleft > 9)return true
  }

  return false
};
```