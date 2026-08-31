# Very easy solution, beats 98%.

**Author:** amaltscaria
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5259080/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5259080/)

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
function duplicateNumbersXOR(nums: number[]): number {
    const obj = new Map();
    for(const num of nums) {
        if(obj.has(num)){
            obj.set(num, obj.get(num)+1);
        }else {
            obj.set(num, 1);
        }
    }
    let binary = 0;
    for(const num of nums){
        if(obj.get(num) === 2){
            binary ^= num;
            obj.set(num, 0);
        }
    }
    return binary;
};
```