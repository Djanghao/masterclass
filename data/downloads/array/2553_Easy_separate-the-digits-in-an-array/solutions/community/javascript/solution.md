# One-Liner JavaScript Solution

**Author:** sronin
**Votes:** 14
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3143150/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3143150/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
const separateDigits = nums => {
    return Array.from(nums.join(''), Number)
};
```