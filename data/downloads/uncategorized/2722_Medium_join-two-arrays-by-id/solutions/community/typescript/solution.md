# TypeScript - Beats 98%

**Author:** solomonbush
**Votes:** 2
**Link:** [https://leetcode.com/problems/join-two-arrays-by-id/solutions/5876107/](https://leetcode.com/problems/join-two-arrays-by-id/solutions/5876107/)

---

# Approach
- Create a hashmap object
- Join both arrays using `concat`
- Iterate through each `item` in the array
- Check if hashmap has an entry with key = `item.id` 
- If exists > update entry value using `Object.assign`
- Else > add new entry `{[item.id]: item}`

# Notes

To make this fast I used `Object.assign` to mutate the value in memory.

This is much faster than using the spread (`...`) operator.


# Code
```typescript []\xCF

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {

    const hash = {}

    arr1.concat(arr2).forEach(item => {
        if (hash[item.id]) {
            Object.assign(hash[item.id], item)
        } else {
            hash[item.id] = item
        }
    })

    return Object.values(hash)



};
```