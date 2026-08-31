# [Javascript] SMALLEST Rectangle that All Circles Cover (Without Set & 200 points)

**Author:** Lynn19950915
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/2051452/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/2051452/)

---

> If you're finding something special, never miss this!

My solution uses neither set nor 200-points. 

Instead, I find the `minX/maxX`&`minY/maxY` first. These 4 points determine the **MINIMUM AREA that all circles may cover**.
We just have to count lattice points **within that rectangle**!

This method saves both time and space :)
```
var countLatticePoints = function(circles) {
    let minX=minY=Infinity, maxX=maxY=-Infinity;
    for(let i=0; i<circles.length; i++){
        minX=Math.min(minX, circles[i][0]-circles[i][2]); maxX=Math.max(maxX, circles[i][0]+circles[i][2]);
        minY=Math.min(minY, circles[i][1]-circles[i][2]); maxY=Math.max(maxY, circles[i][1]+circles[i][2]);
    }
	
    let count=0;
    for(let i=minX; i<=maxX; i++){
        for(let j=minY; j<=maxY; j++){
            let find=false;
            for(let k=0; k<circles.length; k++){
                if(((i-circles[k][0])**2+(j-circles[k][1])**2)<=circles[k][2]**2){
                    find=true; break;
                }
            }
            if(find){count++};
        }
    }
    return count;
};
```

Thanks for your reading and **up-voting** :)

**\u2B50 Check [HERE](https://github.com/Lynn19950915/LeetCode_King) for my full Leetcode Notes ~**
