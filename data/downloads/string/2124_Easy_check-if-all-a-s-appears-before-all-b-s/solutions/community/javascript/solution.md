# Easy to Read JavaScript Solution

**Author:** sronin
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/2017465/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/2017465/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
var checkString = function(s) {
    if(!s.includes('b')) return true
    let firstB = s.indexOf('b');
	
    for(let i = firstB; i < s.length; i++){
        if(s[i] === 'a') return false
    }
    
    return true;
};
```