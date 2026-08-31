# JAVASCRIPT ||Effective Solution || Easy To Understand || With Explanation ||Beginner Friendly||

**Author:** VaishnaviRachakonda
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/1860608/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/1860608/)

---

```
var removeDuplicateLetters = function(s) {
    let stk = []; // Create a stack ie, an array
    for(let i = 0; i < s.length; i++){ //loop through the string
        let letter = s[i]; 
        if(stk.includes(letter))  //if the stk already contains the letter skip 
            continue;
        while(stk[stk.length-1] > letter && s.substring(i).includes(stk[stk.length-1]))  
		{
		/*peek stack and check if the top letter has higher order than incoming letter and
		the top letter must be present in the remaining sub-sting. */
            stk.pop(); //pop all such elements
		}
        stk.push(letter); //push the letter
    }
    return stk.join(''); //convert the stk into a string and return it.
};
```

Its okay if you did not get the solution in the first try, don't give up!
Please do UPVOTE if you find it helpfull.... I know this is not the best solution to this problem but this is what I came up with.
Have fun Coding!! Cheers!