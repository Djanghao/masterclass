# JavaScript / TypeScript Solution | Beats 100% on Space | DFS

**Author:** vnikolov98
**Votes:** 3
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4616479/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4616479/)

---

# Explanation
1. We make a `map` that contains the number of ocurrances for each number.
2. For each node in the tree: 
	2.1 we update the `map`
	2.2 we traverse `left` and `right` if they exist
	2.3 we check the if the node is leaf (doesnt have children) and if it is we check if the amounts of `map` for are eligible for a palindrome permutation and if so increment the value of `amount` by 1.
	The logic is that if we have **only even** amounts of numbers and **at most 1 odd** amount (1 or 0) we can make a palindrome.
3. Return the value of `amount`.

**Time Complexity:** ***O(N)***
**Space Complexity:** ***O(H)***

**N** - amount of nodes in the tree
**H** - height of the tree
```
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function pseudoPalindromicPaths (root: TreeNode | null): number {
    let amount = 0;
    
    const map = new Map<number, number>();
    
    for(let i = 1; i <= 9; i++) {
        map.set(i, 0);
    }
    
    function dfs(currentNode: TreeNode) {
        map.set(currentNode.val, map.get(currentNode.val) + 1);
        
        if(currentNode.left) {
            dfs(currentNode.left);
        }
        
        if(currentNode.right) {
            dfs(currentNode.right);
        }
        
        if(!currentNode.left && !currentNode.right) {
            let odd = 0;
            for(let i = 1; i <= 9; i++) {
                if(map.get(i) % 2 === 1) {
                    odd++;
                }
            }   
            
            if(odd < 2) {
                amount++;
            }
        }
        
        map.set(currentNode.val, map.get(currentNode.val) - 1);
    }
    
    dfs(root);
    
    return amount;
};
```