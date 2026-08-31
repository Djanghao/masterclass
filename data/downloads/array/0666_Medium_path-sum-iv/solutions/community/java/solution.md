# Java | O(n) 100% | With Explanation

**Author:** zell_dev
**Votes:** 8
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/4525758/](https://leetcode.com/problems/path-sum-iv/solutions/4525758/)

---

**Step 1: Initialize the Binary Tree Representation**
Determine the depth of the binary tree from the last element of the nums array. The depth is the hundreds digit of the last element.
Create an integer array bst representing the binary tree with a size of 2^(depth), as each level of a binary tree can have twice as many elements as the previous level.
Initialize all elements in bst to -1 to indicate unpopulated or non-existent nodes.

**Step 2: Populate the Tree**
Iterate through each element in nums. For each element, extract the depth (d), position (p), and value (v) from the hundreds, tens, and units digits respectively.
Calculate the index in the bst array using 2^(d - 1) + (p - 1) and set the value at that index to v. This index calculation positions each node correctly in the binary tree array representation.

**Step 3: Compute the Path Sum**
Call the recursive function getSum starting from the root of the tree (index 1) with an initial sum of 0.
In getSum, check if the current index is within bounds and if the node exists (bst[idx] != -1). If not, return the current sum.
Add the value of the current node to the sum.
Determine if the current node has left and/or right children by checking the existence of nodes at indices idx * 2 and idx * 2 + 1.
If the node is a leaf (no children), return the sum. Otherwise, recursively calculate the sum for left and right children and return their sum.

**Step 4: Return the Total Path Sum**
The result of the getSum function gives the total sum of all paths from the root to the leaves in the binary tree. 

```
class Solution {
    public int pathSum(int[] nums) {
        // Get the depth, create an array based on depth -> 2^(d-1)
        int depth = (nums[nums.length - 1] / 100);
        int[] bst = new int[(int)Math.pow(2, depth)];
        Arrays.fill(bst, -1);
        
        // Fill up the array based on 2 ^ (d - 1) + (P - 1)
        for (int i = 0; i < nums.length; i++){
            int d = nums[i] / 100;
            int p = (nums[i] / 10) % 10;
            int v = nums[i] % 10;
            
            int idx = (int)Math.pow(2, d - 1) + (p - 1);
            bst[idx] = v;
        }
        
        // Sum up using recursive method
        int sum = getSum(bst, 1, 0);
        return sum;
    }
    
    private int getSum(int[] bst, int idx, int sum){
        if(idx >= bst.length || bst[idx] == -1) {
            return sum;
        }
        
        sum += bst[idx];
        boolean hasLeft = idx * 2 < bst.length && bst[idx * 2] > -1;
        boolean hasRight = (idx * 2) + 1 < bst.length && bst[(idx * 2) + 1] > -1;
        if(!hasLeft && !hasRight) return sum;
        if(hasLeft && hasRight) return getSum(bst, idx * 2, sum) + getSum(bst, idx * 2 + 1, sum); 
        if(hasLeft) return getSum(bst, idx * 2, sum);
        else return getSum(bst, idx * 2 + 1, sum); 
    }
}
```

If you found it helpful, please consider giving it an upvote! It'll motivate me to share more solutions in the future. If you have any questions or suggestions, please let me know. Happy coding!