# JavaScript Solution

**Author:** sronin
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1924690/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1924690/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
const convertTime = (current, correct) => {
    if (current === correct) return 0
	
    let count = 0
    let currentInMins = parseInt(current.slice(3)) + parseInt(current.slice(0, 2)) * 60
    let correcttInMins = parseInt(correct.slice(3)) + parseInt(correct.slice(0, 2)) * 60
    let minuteDifference = correcttInMins - currentInMins

    while (minuteDifference !== 0) {
        if (minuteDifference % 60 === 0) {
            minuteDifference -= 60
            count++
        }
        else if (minuteDifference % 15 === 0) {
            minuteDifference -= 15
            count++
        }
        else if (minuteDifference % 5 === 0) {
            minuteDifference -= 5
            count++
        }
        else{
            minuteDifference -= 1
            count++
        }
    }

    return count
};
```