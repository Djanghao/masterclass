/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


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

class Codec {
  	constructor() {
        
    }
    
    // Encodes a tree to a binary tree.
    serialize(root: _Node | null): TreeNode | null {
        
    };
	
    // Decodes your encoded data to tree.
    deserialize(root: TreeNode | null): _Node | null {
        
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));