# Typescript / Javascript. Easy to understand. Clean.

**Author:** vugar005code
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/2475200/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/2475200/)

---

```
const SEARCH_CRITERIA = {
    "type": 0,
    "color": 1,
    "name": 2
};

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const criteriaIndex = SEARCH_CRITERIA[ruleKey];
  const foundItems = items.filter((item) => item[criteriaIndex] === ruleValue);
  return foundItems?.length;
};

```