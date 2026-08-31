# Short JavaScript Solution

**Author:** sronin
**Votes:** 6
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/2431802/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/2431802/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
const trimMean = arr => {
    arr.sort((a, b) => a - b)

    let fpl = arr.length * 0.05 //Abbreviates five percent of length
    let sum = 0;

    for (let i = fpl; i < arr.length - fpl; i++) sum += arr[i]

    return sum / (arr.length - (fpl * 2))
	//fpl * 2 represents the number of elements removed
};
```