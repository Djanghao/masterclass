# Commented | Recursive | Simple | JavaScript Solution

**Author:** Mrmagician
**Votes:** 8
**Link:** [https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/423908/](https://leetcode.com/problems/convert-bst-to-greater-tree/solutions/423908/)

---

**Please do upvote, it motivates me to write better code and solution here**

Problem specific solution : 
```

var convertBST = function(root) {
    let sum = 0, prev = 0;
    function rec(root){
        if(root){
            rec(root.right);
            sum += root.val;
            root.val += prev;
            prev = sum;
            rec(root.left);
        }
    }
    
    rec(root);
    return root;
}
```

*This is not a binary search tree specific approach, it will work on every binary tree \u2705*

```
var convertBST = function(root) {
    if(!root) return root;
    
//     arr = sumarr in this functions
    function rec(root, arr){
        if(root){
            rec(root.right, arr);
            root.val+= arr.pop();
            rec(root.left, arr);
            
        }    
    }
    
//     converting tree to a sorted array
    let arr = toarray(root);
    let sumarr = new Array(arr.length);
    let prev = 0;
//     forming a special type of sum array needed
    for(let i = arr.length-1; i>=0; i--){
        sumarr[i] = prev;
        prev+= arr[i];
    }
    
    
    
    // calling the recursive function to modify the value at each instant
    rec(root, sumarr);
    
    return root;
    
};

function toarray(root, arr=[]){
    if(root){
        toarray(root.left, arr);
        arr.push(root.val);
        toarray(root.right, arr);
        return arr;
    }
}
```