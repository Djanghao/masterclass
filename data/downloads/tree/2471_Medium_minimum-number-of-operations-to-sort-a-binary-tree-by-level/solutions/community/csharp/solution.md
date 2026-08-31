# Level Order Traversal && Selection Sort

**Author:** bhishmas
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2808797/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2808797/)

---

```
public class Solution {
    public int MinimumOperations(TreeNode root) {
        var queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        
        int minOps = 0;
        while (queue.Count > 0) {
            int size = queue.Count;
            int[] arr = new int[size];
            int index = 0;
            for (int i = 0; i < size; i++) {
                var currNode = queue.Dequeue();
                arr[index++] = currNode.val;
                
                if (currNode.left != null)
                    queue.Enqueue(currNode.left);
                
                if (currNode.right != null)
                    queue.Enqueue(currNode.right);
            }
            
            minOps += this.SelectionSort(arr);
        }
        
        return minOps;
    }
    
    private int SelectionSort(int[] arr) {
        int swapsCount = 0;
        
        for (int i = 0; i < arr.Length - 1; i++) {
            int minIndex = i;
            
            for (int j = i + 1; j < arr.Length; j++) {
                if (arr[j] < arr[minIndex])
                    minIndex = j;
            }
            
            if (minIndex != i) {
                int temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
                
                swapsCount++;
            }
        }
        
        return swapsCount;
    }
}
```