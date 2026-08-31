# [JavaScript] HashMap with sorting

**Author:** jekatigr
**Votes:** 1
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/3528665/](https://leetcode.com/problems/reward-top-k-students/solutions/3528665/)

---

# Code
```
/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
    const pos = new Set(positive_feedback);
    const neg = new Set(negative_feedback);

    const scores = {};

    for (let i = 0; i < student_id.length; i++) {
        const id = student_id[i];

        if (!scores[id]) {
            scores[id] = 0;
        }

        const reportWords = report[i].split(' ');

        for (const word of reportWords) {
            if (pos.has(word)) {
                scores[id] += 3;

                continue;
            }

            if (neg.has(word)) {
                scores[id] -= 1;
            }
        }
    }

    const scoresArr = Object.entries(scores);
    scoresArr.sort((s1, s2) => {
        if (s1[1] !== s2[1]) { // sort by score
            return s2[1] - s1[1];
        }

        return s1[0] - s2[0]; // by id
    });

    return scoresArr.slice(0, k).map(entry => entry[0]);
};
```