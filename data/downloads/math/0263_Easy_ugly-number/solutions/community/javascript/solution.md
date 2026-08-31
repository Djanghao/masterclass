# Short JavaScript Solution

**Author:** sronin
**Votes:** 23
**Link:** [https://leetcode.com/problems/ugly-number/solutions/2279296/](https://leetcode.com/problems/ugly-number/solutions/2279296/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
var isUgly = function (n) {
    if(n <= 0) return false

    while (n != 1) {
        if (n % 2 === 0) {
            n /= 2
        } else if (n % 3 === 0) {
            n /= 3
        } else if (n % 5 === 0) {
            n /= 5
        } else {
            return false
        }
    }

    return true
};
```