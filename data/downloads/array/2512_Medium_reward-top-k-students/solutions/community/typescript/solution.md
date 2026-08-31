# Method chain and two sets

**Author:** supernes
**Votes:** 0
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/3163908/](https://leetcode.com/problems/reward-top-k-students/solutions/3163908/)

---

# Approach
Create two sets for positive and negative feedback words to speed up checking. 

Define a scoring function that assigns a numeric value from a `report` entry.

Iteratively transform the `student_id` array by attaching the score, sorting, slicing and selecting the final id ordering.

# Code
```
function topStudents(
    positive_feedback: string[],
    negative_feedback: string[],
    report: string[],
    student_id: number[],
    k: number,
): number[] {
    const pset = new Set(positive_feedback),
        nset = new Set(negative_feedback),
        calcScore = (six: number) =>
            report[six]
                .split(" ")
                .reduce((score, word) =>
                    score + (pset.has(word) ? 3 : nset.has(word) ? -1 : 0), 0);

    return student_id
        .map((sid, six) => [sid, calcScore(six)])
        .sort((a, b) => (a[1] !== b[1] ? b[1] - a[1] : a[0] - b[0]))
        .slice(0, k)
        .map((r) => r[0]);
}
```