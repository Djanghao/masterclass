# Typescript, inorder traversal, find closest index, sliding windows

**Author:** Jmcfad
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/2085018/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/2085018/)

---

Edit:
The first version is faster than 85% and uses as simple brute-force approach to finding the closest value to the target and sliding windows to populate results of k length.

Added Binary search solution below.  In reality, the binary search solution is slower, but theoretically it should be faster.

```
function closestKValues(root: TreeNode | null, target: number, k: number): number[] {
    var orderedVals = [];
    var result = [];
    var closest = root.val;
    let closestIdx;
    
    //populate orderedVals with DFS ordered function:
    inOrder(root);

    //exit early
    if (orderedVals.length <= k) {
        return orderedVals;
    }
    //find the closest val and index
    for (var i=0; i<orderedVals.length; i++) {
        closest = (Math.abs(orderedVals[i]-target) < Math.abs(closest-target)) ? orderedVals[i] : closest;
        if (closest === target) {
            closestIdx = i;
            break;
        }
        if (closest === orderedVals[i]) {
            closestIdx = i;
        }
    }
    //push closest val
    result.push(orderedVals[closestIdx]);

    //use sliding windows to populate the rest of the result array
    var l = closestIdx-1;
    var r = closestIdx+1;
    while (l>=0 && r<orderedVals.length && result.length < k) {
        var leftDiff = Math.abs(orderedVals[l]-target);
        var rightDiff = Math.abs(orderedVals[r]-target);
        if (leftDiff < rightDiff) {
            result.push(orderedVals[l]);
            l--;
        } else {
            result.push(orderedVals[r]);
            r++;
        }
    }
    while (l>=0 && result.length < k) {
        result.push(orderedVals[l]);
        l--;
    }
    while (r<orderedVals.length && result.length < k) {
        result.push(orderedVals[r]);
        r++;
    }
    return result;
    
    function inOrder(root: TreeNode | null) {
        if (!root) return;
        inOrder(root.left);
        orderedVals.push(root.val);
        inOrder(root.right);
    }
};
```

Binary Search Solution:
```
function closestKValues(root: TreeNode | null, target: number, k: number): number[] {
    var nums = [];
    var result = [];
    
    //populate sorted nums with inorder traversal
    inOrder(root);
    
    //use binary search to find index of val closest to target, offset by k
    var l = 0;
    var r = nums.length-1;
    while (l < r) {
        var mid = Math.floor(l+(r-l)/2);
        if (target-nums[mid] > nums[mid+k] - target) {
            l = mid+1;
        } else {
            r = mid;
        }
    }
    //use index l to populate results with k closest elements
    for (var i=0; i<k; i++) {
        result.push(nums[l+i]);
    }
    
    return result;
    
    function inOrder(root: TreeNode | null) {
        if (!root) return;
        inOrder(root.left);
        nums.push(root.val);
        inOrder(root.right);
    }
};
```