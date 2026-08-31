# Short JavaScript Solution Using a Set Object

**Author:** sronin
**Votes:** 2
**Link:** [https://leetcode.com/problems/counting-elements/solutions/1831790/](https://leetcode.com/problems/counting-elements/solutions/1831790/)

---

Found this solution helpful? 
Consider showing support by upvoting this post. 
If there are any questions, kindly leave a comment below. Thank you and happy hacking!
```
const countElements = arr => {
    let uniqueNums = new Set(arr);
    let count = 0;
	
    arr.forEach(num => {
        if (uniqueNums.has(num + 1)) count++
    })
	
    return count
};
```