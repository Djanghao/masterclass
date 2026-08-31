# Simple JS/TS Solution

**Author:** jamauss
**Votes:** 1
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3694952/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3694952/)

---

Just some simple math to figure out the solution

# Code
```
const categorizeBox = (length: number, width: number, height: number, mass: number): string => {

    var isHeavy = false;
    var isBulky = false;
    
    const TenToFourth = Math.pow(10,4);
    const TenToNinth = Math.pow(10, 9);

    if(length >= TenToFourth || width >= TenToFourth || height >= TenToFourth || length*width*height >= TenToNinth) isBulky = true;
    if(mass >= 100) isHeavy = true;
    
    if(isBulky && isHeavy) return 'Both';
    if(isBulky && !isHeavy) return 'Bulky';
    if(!isBulky && isHeavy) return 'Heavy';
    
    return 'Neither';

};
```
See more `TypeScript`/`JavaScript` (and other language) LeetCode solutions at https://github.com/jasonmauss/LeetCode