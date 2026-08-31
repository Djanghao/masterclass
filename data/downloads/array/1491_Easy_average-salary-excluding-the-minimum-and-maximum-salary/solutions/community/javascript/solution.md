# Easy to Read JavaScript Solution

**Author:** sronin
**Votes:** 29
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/1878110/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/1878110/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Got a question? Kindly leave a comment below.
Thank you and happy hacking!
```
const average = salary => {

    let max = Math.max(...salary)
    let min = Math.min(...salary)
    let sum = salary.reduce((a,b) => a + b)
    
    sum -= max
    sum -= min
    
    return sum / (salary.length - 2)
   
};
```