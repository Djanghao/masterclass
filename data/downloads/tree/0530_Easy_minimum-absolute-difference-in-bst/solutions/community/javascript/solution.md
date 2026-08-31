# Easy-to-Understand | Commented | Simple | Recursive | JavaScript Solution

**Author:** Mrmagician
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/423994/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/423994/)

---

**Please do upvote, this motivates me write more posts**

```
var getMinimumDifference = function(root) {
//     Converting tree to an sorted array
    const arr = toArray(root);
    let out = Infinity;
    let i = 1;
//     Now, simply finding the difference
    while(i<arr.length){
        let diff = Math.abs(arr[i-1]- arr[i]);
        if(diff<out) out = diff;
        i++;
    }
    return out;
};

function toArray(root, out=[]){
    if(root){
        toArray(root.left, out);
        out.push(root.val);
        toArray(root.right, out);
        return out;
    }
}
```