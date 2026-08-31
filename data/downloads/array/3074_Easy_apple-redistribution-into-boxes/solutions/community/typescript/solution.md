# Begineer Friendly Code in Ts.

**Author:** khalifaanil84
**Votes:** 1
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5182265/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/5182265/)

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
function minimumBoxes(apple: number[], capacity: number[]): number {
    let totalNumberOfApple: number = 0;
    capacity.sort((a, b) => b - a);
    for (let a:number = 0; a < apple.length ; a++){
        totalNumberOfApple += apple[a];
    }
     let count:number = 0;
     let totalNum:number = 0;
      for(let i:number = 0; i < capacity.length; i++){
        totalNum += capacity[i]
        count++;
        if(totalNumberOfApple <= totalNum){
           break;
        }
    }
    return count;
};
```