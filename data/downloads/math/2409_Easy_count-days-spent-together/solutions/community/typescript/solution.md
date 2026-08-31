# Best js way

**Author:** lGoryXt8fZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/5951530/](https://leetcode.com/problems/count-days-spent-together/solutions/5951530/)

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
```typescript []
function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    const msInDay = 1000 * 60 * 60 * 24;
    let sweetheartWasTogetherDay = 0;

    const arriveAliceDate = Number(new Date('1970-' + arriveAlice));
    const leaveAliceDate = Number(new Date('1970-' + leaveAlice));
    const arriveBobDate = Number(new Date('1970-' + arriveBob));
    const leaveBobDate = Number(new Date('1970-' + leaveBob));

    const daysAliceInCity = (leaveAliceDate - arriveAliceDate) / msInDay;

    for (let i = 0; i <= daysAliceInCity; i++) {
        const currentAliceDay = arriveAliceDate + i * msInDay;
        
        if (currentAliceDay >= arriveBobDate && currentAliceDay <= leaveBobDate) {
            sweetheartWasTogetherDay += 1;
        }
    }

    return sweetheartWasTogetherDay;
};
```