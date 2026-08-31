# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/5774601/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/5774601/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1387340494?envType=daily-question&envId=2024-09-12
- ***C++ Code -->*** https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1387158655?envType=daily-question&envId=2024-09-12
- ***Python3 Code -->*** https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1387306511?envType=daily-question&envId=2024-09-12
- ***Java Code -->*** https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1171188381?envType=daily-question&envId=2024-09-12
- ***C Code -->*** https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1171191663?envType=daily-question&envId=2024-09-12
- ***Python Code -->*** https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1387311933?envType=daily-question&envId=2024-09-12
- ***C# Code -->*** https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/1387316430?envType=daily-question&envId=2024-09-12
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N * M)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```javascript []
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const arr = Array(26).fill(false);
    for (let w of allowed){
        let idx = w.charCodeAt(0) - '97'
        //console.log(idx)
        arr[idx] = true
    }
    let cnt = 0
    for (let word of words){
        for (let ch of word){
            let idx = ch.charCodeAt(0) - '97'
            if (arr[idx] === false){
                cnt++
                break
            }
        }
    }
    return words.length - cnt
};
```
![th.jpeg](./images/1.jpeg)
