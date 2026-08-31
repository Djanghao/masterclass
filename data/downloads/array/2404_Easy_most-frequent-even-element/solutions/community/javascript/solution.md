# JavaScript Solution Using a Map Object

**Author:** sronin
**Votes:** 6
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/2562939/](https://leetcode.com/problems/most-frequent-even-element/solutions/2562939/)

---

Found this solution helpful? Consider showing support by upvoting this post.
Have a question? Kindly leave a comment below.
Thank you and happy hacking!
```
var mostFrequentEven = function (nums) {
    let evenNumMap = new Map()
    let max = 0
	
	//Popuates evenNumMap and finds the most frequent even number.
    for (let num of nums) {
        if (!evenNumMap.has(num) && num % 2 === 0) {
            evenNumMap.set(num, 1)
        } else if (evenNumMap.has(num) && num % 2 === 0) {
            evenNumMap.set(num, evenNumMap.get(num) + 1)
        }

        if (evenNumMap.get(num) > max) max = evenNumMap.get(num)
    }

    let smallestMaxKey = Infinity
	
	//Finds the smallest key with the value max.
    for (let [num, count] of evenNumMap) {
        if (count === max && num < smallestMaxKey) smallestMaxKey = num
    }

    return smallestMaxKey === Infinity ? -1 : smallestMaxKey
};
```