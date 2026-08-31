# [Python3, Java, C++] Combinations of Minutes and Seconds O(1)

**Author:** tojuna
**Votes:** 112
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1746988/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1746988/)

---

**Explanation**: 
* The maximum possible minutes are: `targetSeconds` / 60
* Check for all possible minutes from 0 to `maxmins` and the corresponding seconds
* `cost` function returns the cost for given minutes and seconds
* `moveCost` is added to current cost if the finger position is not at the correct number
* `pushCost` is added for each character that is pushed
* Maintain the minimum cost and return it

*Note*: We are multiplying `mins` by 100 to get it into the format of the microwave
Let's say `mins` = 50,`secs` = 20
On the microwave we want 5020
For that we can do: 50 * 100 + 20 = 5020
<iframe src="https://leetcode.com/playground/eJoNqmaV/shared" frameBorder="0" width="780" height="420"></iframe>

On further inspection we can deduce that we only really have 2 cases:
`maxmins`, `secs`
`maxmins - 1`, `secs + 60`
<iframe src="https://leetcode.com/playground/VYzZV9Nh/shared" frameBorder="0" width="780" height="370"></iframe>

Since maximum length of characters displayed on microwave = 4, `Time Complexity =  O(1)`