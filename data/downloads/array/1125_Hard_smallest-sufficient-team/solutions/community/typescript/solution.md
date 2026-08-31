# Readable TS

**Author:** ohasi
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3775254/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3775254/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const memory: Record<string, number[]> = {};
let requiredSkills: string[] = [];
let allPeople: string[][] = [];

function smallestSufficientTeam(req_skills: string[], people: string[][]) {
    allPeople = people;
    requiredSkills = req_skills;
    return smallestSufficientTeamRecursive([], req_skills);
}

function smallestSufficientTeamRecursive(
    bestPeople: number[],
    req_skills: string[]
): number[] {
    if (req_skills.length === 0) return bestPeople;
    const key = getKey(req_skills, bestPeople);
    const cached = memory[key];
    if (cached) {
        return cached;
    }
    const relevantPeople = getRelevantPeople(req_skills);
    const result = getBestResultFromResults(
        relevantPeople,
        bestPeople,
        req_skills
    );
    memory[key] = result;
    return result;
}

function getBestResultFromResults(
    relevantPeople: number[],
    bestPeople: number[],
    req_skills: string[]
) {
    return relevantPeople
        .map(index =>
            smallestSufficientTeamRecursive(
                [...bestPeople, index],
                req_skills.filter(skill => !allPeople[index].includes(skill))
            )
        )
        .sort((p1, p2) => p1.length - p2.length)[0];
}

function getKey(req_skills: string[], bestPeople: number[]) {
    return req_skills.sort().reduce((p, c) => p + c) + bestPeople.length;
}

function getRelevantPeople(req_skills: string[]) {
    return allPeople
        .map(
            (person, index) =>
                [
                    person.filter(skill => req_skills.includes(skill)),
                    index,
                ] as const
        )
        .filter(([person]) => person.length > 0)
        .map(([, index]) => index);
}

```