# Short JavaScript Solution

**Author:** sronin
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2039542/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2039542/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
var divisorSubstrings = (num, k) => {
    let numToString = num.toString()
    let count = 0;

    for (let i = 0; i <= numToString.length - k; i++) {
        let subNum = parseInt(numToString.slice(i, k + i))
        if (num % subNum === 0) count++
    }

    return count
};
```