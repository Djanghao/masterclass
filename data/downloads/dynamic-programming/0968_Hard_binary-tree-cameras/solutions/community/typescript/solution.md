# easy peasy dfs, beats 100%, 1ms runtime

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/5962920/](https://leetcode.com/problems/binary-tree-cameras/solutions/5962920/)

---

# Complexity
- Time complexity:
$$O(N)$$

- Space complexity:
$$O(N)$$

![2024-10-24_15-02.png](./images/0.png)

# Code
```typescript []
enum CameraMode {
  None = 0,
  Watched = 1,
  Installed = 2
}
function minCameraCover(root: TreeNode | null): number {
    let counter = 0;
    const dfs = (node: TreeNode): CameraMode => {
        let result: CameraMode = CameraMode.None;
        if (node.left != null) {
            const resultCurrent = dfs(node.left);
            if (resultCurrent === CameraMode.None) 
                result = CameraMode.Installed;
            else if (resultCurrent === CameraMode.Installed)
                result = CameraMode.Watched;
        }
        if (node.right != null) {
            const resultCurrent = dfs(node.right);
            if (result !== CameraMode.Installed) {
                if (resultCurrent === CameraMode.None) 
                    result = CameraMode.Installed;
                else if (resultCurrent === CameraMode.Installed)
                    result = CameraMode.Watched;
            }
        }
        counter += (result === CameraMode.Installed ? 1 : 0);
        return result;
    }
    if (root == null) {
        return 0;
    }
    else {
        return (dfs(root) === CameraMode.None ? 1 : 0) + counter;
    }
};
```