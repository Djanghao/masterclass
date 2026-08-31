# Beginners Friendly Solution

**Author:** venkatesh2100
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5968205/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/5968205/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. usehashMap hashMap to Scan the numbers 
2. Now chceck wheter previous element is small or not
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function areNumbersAscending(s: string): boolean {
    //? usehashMap hashMap to Scan the numbers 
    let val=s.match(/\\d+/g)?.map(Number)||[];

    //?Now chceck wheter previous element is small or not
    for(let i=0;i<val.length;i++){
        if(val[i]>=val[i+1]){
            return false;
        }
    }
    return true;
    };

```