# beats 100%

**Author:** shyamkumar1729
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-modular-exponentiation/solutions/4384653/](https://leetcode.com/problems/double-modular-exponentiation/solutions/4384653/)

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
function getGoodIndices(variables: number[][], target: number): number[] {
    let ans=[];
    for(let i=0;i<variables.length;i++){
        let p1=variables[i];
        let p2=pow(p1[0],p1[1],10);
         if(p1[3]==0){
            continue;
        }
        let p3=pow(p2,p1[2],p1[3])
        
        if(p3==target){
            ans.push(i);
        }
        
    }
    return ans;
};


function pow(a,b,c){
    let ans=1;
    for(let i=0;i<b;i++){
        ans=(ans*a)%c
    }
    return ans
}
```