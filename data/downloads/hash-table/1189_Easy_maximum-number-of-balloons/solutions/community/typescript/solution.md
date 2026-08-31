# Very Simple TS/JS solution using Object or Hashmap. Best Solution

**Author:** gouravojha4321
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/3669220/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/3669220/)

---

# Request
<!-- Describe your first thoughts on how to solve this problem. -->
If you like my approach please upvote and show some love.
Have a nice day.
# Approach
<!-- Describe your approach to solving the problem. -->
First create a object with all the letters in the word balloon.
hash = {
        'b' : 0,
        'a' : 0,
        'o' : 0,
        'l' : 0,
        'n' : 0
}.
Now, loop over the text and calculate the frequency of all the letters in balloon that appears in the text.
You will obverse that to create the word 'balloon' the count of "l" and "o" must be double than that of other letters. 
So we declar a "min" variable with a maximum value say Infinity. Now, we iterate over our object and take the count and compare it with min variable, if count is less we update the min to count
**Important** - While taking the count we have to check if we encounter letter "l" or "o" we have to update the count to half of their original count.By dividing the count of 'l' and 'o' by 2, we effectively account for the fact that each "balloon" word requires two 'l's and two 'o's. This adjustment ensures that we don't form more instances of "balloon" than the available count of 'l's and 'o's permits. 
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxNumberOfBalloons(text: string): number {
    let min = text.length
    let hash = {
        'b' : 0,
        'a' : 0,
        'o' : 0,
        'l' : 0,
        'n' : 0
    }
    for(let i of text){
        if("balloon".includes(i)){
            if(hash[i] !== undefined){
                hash[i] = hash[i] + 1
            }else{
                hash[i] = 1
            }
        }
    }

    for(let letter in hash){
        let count = hash[letter]
        if(letter == 'l' || letter == 'o'){
            count = Math.floor(count / 2)
        }
        if(count < min){
            min = count
        }
    }

    return min
};
```