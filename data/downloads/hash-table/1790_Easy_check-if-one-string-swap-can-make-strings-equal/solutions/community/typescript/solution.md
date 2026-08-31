# Beginner friendly, beats 100% runtimes

**Author:** AthenaCode
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/2909024/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/2909024/)

---


# Code
```
function areAlmostEqual(s1: string, s2: string): boolean {
     if(s1 === s2){
        return true;
    }
    
    let sortedS1: string = s1.split('').sort().join();
    let sortedS2: string = s2.split('').sort().join();

    if(sortedS1 !== sortedS2){
        return false;
    }
    
    let counter = 0;
    
    for(let i = 0; i < s1.length; i++){
        if(s1[i]!== s2[i]){
            counter ++;
        }
        if(counter > 2){
            return false;
        }
    }
    return true;
    
};
```