# check-completeness-of-a-binary-tree - TypeScript Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/5894363/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/5894363/)

---



# Code
```typescript []
function isCompleteTree(root: TreeNode | null): boolean {
    let queue = [root];
    let shouldHaveChild = true;
    while(queue.length > 0){
        let el = queue.shift()!;

        if(el.left){
            if(!shouldHaveChild) return false
            queue.push(el.left);
        }else{
            shouldHaveChild = false
        }

        if(el.right){
            if(!shouldHaveChild) return false
            queue.push(el.right);
        }else{
            shouldHaveChild = false
        }
    }
    return true;   
};
```