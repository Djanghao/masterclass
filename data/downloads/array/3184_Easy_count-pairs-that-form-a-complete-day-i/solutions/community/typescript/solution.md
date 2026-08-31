# 2 loops

**Author:** AllSee1ng
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5863918/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5863918/)

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
function countCompleteDayPairs(hours: number[]): number {
    let count = 0

    for(let i = 0; i < hours.length; i++){
        for(let j = i+1; j < hours.length; j++ ){
            if((hours[i] + hours[j]) % 24 == 0) {
                count += 1
            }
        }
    }

    return count
};
```