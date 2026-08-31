# Step-by-Step Guide to Find Duplicates in an Array with Easy Code

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5826851/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5826851/)

---

# Intuition
My first thought was to keep track of all the numbers that appear as we iterate through the array. When we encounter a number that has already been seen, we know it's one of the sneaky numbers. By maintaining a simple structure to track these numbers, we can find both sneaky numbers efficiently.

# Approach
I used a Set to keep track of numbers we've already encountered. As we iterate through the array:

1. If a number is already in the Set, it's a sneaky number, so we add it to the result.

2. If the number is not in the Set, we add it to the Set to mark it as seen.

3. Once we find two sneaky numbers, we return them

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function getSneakyNumbers(nums: number[]): number[] {

    const seen   = new Set<number>();
    const result:number[] = [];

    for(const num of nums){

        if(seen.has(num)){
            result.push(num)
        }else{
            seen.add(num)
        }

        if(result.length === 2) break;
    } 

    return result;
    
};
```