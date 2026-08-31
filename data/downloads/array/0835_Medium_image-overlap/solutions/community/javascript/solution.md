# JS easy understanding use Set

**Author:** kunkka1996
**Votes:** 7
**Link:** [https://leetcode.com/problems/image-overlap/solutions/2747960/](https://leetcode.com/problems/image-overlap/solutions/2747960/)

---

```
var largestOverlap = function(img1, img2) {
    const setImg1 = new Set();
    const setImg2 = new Set();
    for (let i = 0; i < img1.length; i++) {
        for (let j = 0; j < img1.length; j++) {
            if (img1[i][j]) setImg1.add(`${i}_${j}`);
            if (img2[i][j]) setImg2.add(`${i}_${j}`);
        }
    }
    let output = 0;
    
    for (let i = -(img1.length - 1); i < img1.length; i++) {
        for (let j = -(img1.length - 1); j < img1.length; j++) {
            let count = 0;
            setImg1.forEach(key => {
                const [x, y] = key.split('_');
                if (setImg2.has(`${Number(x) + i}_${Number(y) + j}`)) count++;
            })
            output = Math.max(output, count);
        }
    }
    
    return output;
};
```