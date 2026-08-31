# Win Win

**Author:** WillYao666888
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/5797026/](https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/5797026/)

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
```javascript []
/**
 * @param {number[][]} peaks
 * @return {number}
 */
var visibleMountains = function(peaks) {
    //the key here, is the start point of this problem, you should start from the bottom line points!

    let array=peaks.map(([x,y])=>([x-y,x+y]))

    array.sort((a,b)=>{
        if(a[0]!=b[0]){
            //do not forget the return here!
            return a[0]-b[0]
        }else{
            return b[1]-a[1]
        }
    })

    let count=0;
    let rightMost=-Infinity;

    for(let i=0;i<array.length;i++){
        let mount=array[i];
        if(mount[1]>rightMost){
            count++;
            rightMost=mount[1];
            continue;
        }

        if(mount[1]<rightMost){
            continue;
        }

        if(array[i-2]){
            if(mount.toString()==array[i-2].toString()){
            continue;
        }
        }
       
        if(array[i-1]){}
        if(mount.toString()==array[i-1].toString()){
            count--
        }
    }

    return count
};
```