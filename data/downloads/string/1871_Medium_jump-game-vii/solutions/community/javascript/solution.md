# ❇ jump-game-viiy👌 🏆O(N)❤️ Javascript🎯 Memory👀 80.77%🕕 ++Explanation✍️ 🔴🔥 ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/5201769/](https://leetcode.com/problems/jump-game-vii/solutions/5201769/)

---

Time Complexity: O(N)
Space Complexity: O(N)

```
var canReach = function (str, minJump, maxJump) {
    const queue = [0];
    for (let index = 1; index < str.length; index++) {
        if (str[index] === '1') {
            continue;
        }
        while (queue.length && index - queue[0] > maxJump) {
            queue.shift();
        }
        if (queue.length === 0) {
            return false;
        }
        if (index - queue[0] < minJump) {
            continue;
        }
        queue.push(index);
        if (index === str.length - 1) {
            return true;
        }
    }
    return false;
};
```
![image](./images/0.png)
