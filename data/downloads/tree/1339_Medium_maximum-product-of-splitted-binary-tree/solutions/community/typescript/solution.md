# Typescript Solution using BFS and DP

**Author:** akshatkhosya
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2896744/](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/solutions/2896744/)

---

# Intuition
I applied brute force that I will traversal every node and then check for multiplication of sub Tree from that node and left tree.
While directly applying BFS will give TLE at some test case.
Using DP we can optimsed this solution.

# Approach
1. We made a function sumOfAllNodes which will calculate sum of all nodes using dfs and will store sum of given sumTree in HashMap (for dp purpose).
2. we will check if root is null then return 0.
3. After that we will apply BFS on Tree and get the value of sum of subTree from HashMap.
4. After trversal the all nodes we are able to get maxmimum product value.

# Complexity
- Time complexity:
  O(n)

- Space complexity:
  O(n)

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
var map = new Map<TreeNode | null,number>();
var mod = 1000000007;
function maxProduct(root: TreeNode | null): number {
    let max = 0;
    
    if(root===null){
        return 0;
    }
    var sum = sumOfAllNodes(root);
    const stack = new StackM<TreeNode>();
    stack.push(root);
    while(stack.size()>0){
        let temp = stack.pop();
        let tempSum = map.get(temp);
        max = Math.max(tempSum*(sum-tempSum), max);
        if(temp.left!==null){
            stack.push(temp.left);
        }
        if(temp.right!==null){
            stack.push(temp.right);
        }
    }
    return max%mod;
};

function sumOfAllNodes(root:TreeNode | null):number{
    if(root===null){
        map.set(root,0);
        return 0;
    }
    let sum = root.val+sumOfAllNodes(root.left)+sumOfAllNodes(root.right);
    sum=sum%mod;
    map.set(root,sum);
    return sum;
}

interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class StackM<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}


```