# Short JavaScript Solution

**Author:** sronin
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-divisors/solutions/2229235/](https://leetcode.com/problems/three-divisors/solutions/2229235/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
var isThree = function (n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (count <= 3) {
            if (n % i === 0) count++
        } else {
            return false
        }
    }

    return count === 3
};
```