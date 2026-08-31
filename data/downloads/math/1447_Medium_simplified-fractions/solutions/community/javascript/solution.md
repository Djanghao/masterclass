# JavaScript Solution Without Finding GCD

**Author:** sronin
**Votes:** 3
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/2211809/](https://leetcode.com/problems/simplified-fractions/solutions/2211809/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
const simplifiedFractions = n => {
    let decimalSet = new Set();
    let result = [];

    for (let i = 1; i <= n - 1; i++) {
        for (let j = 2; j <= n; j++) {
            if (i != j && j > i) {
                if (!decimalSet.has(i / j)) {
                    decimalSet.add(i / j)
                    result.push(`${i}/${j}`)
                }
            }
        }
    }
	
	decimalSet.clear() //Used to improve space complexity
    return result
};
```