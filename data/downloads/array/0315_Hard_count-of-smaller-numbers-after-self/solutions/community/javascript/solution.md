# 💡JavaScript Solution ( Binary Search | Binary Search Tree | Merge Sort )

**Author:** AminiCK
**Votes:** 31
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/424456/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/424456/)

---

#### The Idea - Binary Search
1. Iterate the array from last to first, count the number of elements that is smaller than current
2. Use `binary insertion sort` insert the current number, the index equals to how many numbers are smaller up to the current index (because it's sorted)
``` javascript
var countSmallerBinarySearch = function(nums) {
    let sorted = [], result = [];
    for (let i=nums.length-1;i>=0;i--) {
        let left = 0, right = sorted.length;
        while(left < right) {
            let mid = left + Math.floor((right-left)/2);
            if (nums[i] > sorted[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result.unshift(left);
        sorted.splice(left, 0, nums[i]);
    }
    return result;
}
```

#### The Idea - Binary Search Tree
1. Build a BST from behind and return `smaller` elements found during insertion
2. Use `node.count` to mark the # of elements in the left subtree
2. If go left, update `node.count++` 
3. If go right,  update `smaller+=node.count+1` 
4. If duplicate, subtract and update `node.dup`

``` javascript
var countSmaller = function(nums) {
    var Node = function(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 0;
        this.dup = 0;
    }

    var insert = function(val) {
        let root = bst;
        let newNode = new Node(val);

        // initialize node
        if (!root) {
            bst = newNode;
            return 0;
        }

        var smaller = 0;
        while(root) {
            if (val < root.val) { // go left
                root.count++; // add 1 to root since it has 1 more element in its left subtree
                if (!root.left) {
                    root.left = newNode;
                    return smaller;
                } else {
                    root = root.left
                }
            } else if (val > root.val){ // go to right
                smaller+=root.count+1; // update total smaller numbers
                if (!root.right) {
                    root.right = newNode;
                    return smaller;
                } else {
                    root = root.right;
                }
            } else {
                // add up the current total smaller numbers and remove duplicate numbers
                return smaller+(root.count++)-(root.dup++);
            }
        }
    }

    let bst = null, count = [];
    for (let i=nums.length-1;i>=0;i--) {
        count[i] = insert(nums[i]);
    }

    return count;
}
```

#### The Idea - Merge Sort (Inversion Search)
1. Apply merge sort
2. During backtracking(merging) stage, count and update inversions found
``` javascript
var countSmallerMergeSort = function(nums) {
    if (nums.length == 0 || !nums) return nums;

    let inversion = new Array(nums.length).fill(0);
    let map = nums.map((val, index)=>{
        return {'val':val, 'index':index}
    })

    var merge = function(arr) {
        if (arr.length == 1) {
            return arr
        }
        let mid = Math.floor(arr.length/2)
        let left = merge(arr.slice(0,mid));
        let right = merge(arr.slice(mid));
        
        let li = 0, ri = 0, inversionCount = 0, sorted = [];
        // compare numbers from left part to right part
        while (li < left.length ) {
            if (right[ri] && left[li].val > right[ri].val) {
                // inversion found
                inversionCount++;
                sorted.push(right[ri++]);
            } else {
                // no inversions for this number (or right is exhausted)
                // update its inversion count up to the current stack
                inversion[left[li].index]+=inversionCount;
                sorted.push(left[li++]);
            }
        }

        // deal with left over right values and return
        return [...sorted, ...right.slice(ri)];        
    }

    merge(map);
    return inversion;
}
```