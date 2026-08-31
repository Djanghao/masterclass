# Short JavaScript Solution

**Author:** sronin
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/2279001/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/2279001/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
var getNoZeroIntegers = function (n) {
    let initCheck = n - 1 //Initial check
	
    if (!initCheck.toString().includes('0')) {
        return [n - 1, 1]
    } else {
        let result = [n, 0];

        while (result[1] !== n) {
            result[0]--
            result[1]++
            if (!result[1].toString().includes('0') && !result[0].toString().includes('0')) {
                return result
            }
        }
    }
};
```