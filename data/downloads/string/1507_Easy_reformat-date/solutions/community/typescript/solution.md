# reformat-date - TypeScript Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-date/solutions/5867965/](https://leetcode.com/problems/reformat-date/solutions/5867965/)

---


# Code
```typescript []
function reformatDate(date: string): string {
    return new Date(date.replace(/th|nd|rd|st/, "")).toLocaleDateString('fr-CA');
};
```