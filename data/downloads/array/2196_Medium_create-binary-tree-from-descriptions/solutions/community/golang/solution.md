# [HashMap + Tree Tutorial] Create Binary Tree From Descriptions

**Author:** never_get_piped
**Votes:** 42
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5478129/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5478129/)

---

**Topic** :  Tree + HashMap
___

## Solution
The solution can be divided into three steps:
1. Iterate through the `descriptions` array initially to create all required tree nodes, which are subsequently stored in a hash table for later use in connections.
2.  Iterate through the `descriptions` array a second time to establish connections between each node and its respective parent. Utilize the hash table to retrieve the corresponding nodes for linking purposes.
3. Find the root node, which is defined as the node without a parent, and return it.


<br/><br/>

```c++ []
class Solution {
public:
    TreeNode* createBinaryTree(vector<vector<int>>& descriptions) {
        unordered_map<int, TreeNode*> mp;
        unordered_set<int> hasParent;
        for(int i = 0; i < descriptions.size(); i++) {
            if(mp.find(descriptions[i][0]) == mp.end())
                mp[descriptions[i][0]] = new TreeNode(descriptions[i][0]);
            if(mp.find(descriptions[i][1]) == mp.end())
                mp[descriptions[i][1]] = new TreeNode(descriptions[i][1]);
            hasParent.insert(descriptions[i][1]);
        }
        
        TreeNode* root;
        for(int i = 0; i < descriptions.size(); i++) {
            if(descriptions[i][2]) { //left
                mp[descriptions[i][0]] -> left = mp[descriptions[i][1]];
            } else { //right
                mp[descriptions[i][0]] -> right = mp[descriptions[i][1]];
            }
            if(hasParent.find(descriptions[i][0]) == hasParent.end()) {
                root = mp[descriptions[i][0]];
            }
        }
        return root;
    }
};
```
```Java []
class Solution {
    public TreeNode createBinaryTree(int[][] descriptions) {
        Map<Integer, TreeNode> mp = new HashMap<>();
        Set<Integer> hasParent = new HashSet<>();
        
        for (int i = 0; i < descriptions.length; i++) {
            if (!mp.containsKey(descriptions[i][0]))
                mp.put(descriptions[i][0], new TreeNode(descriptions[i][0]));
            if (!mp.containsKey(descriptions[i][1]))
                mp.put(descriptions[i][1], new TreeNode(descriptions[i][1]));
            hasParent.add(descriptions[i][1]);
        }
        
        TreeNode root = null;
        for (int i = 0; i < descriptions.length; i++) {
            if (descriptions[i][2] == 1) { // left
                mp.get(descriptions[i][0]).left = mp.get(descriptions[i][1]);
            } else { // right
                mp.get(descriptions[i][0]).right = mp.get(descriptions[i][1]);
            }
            if (!hasParent.contains(descriptions[i][0])) {
                root = mp.get(descriptions[i][0]);
            }
        }
        return root;
    }
}
```
```Python []
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        mp = {}
        hasParent = set()

        for desc in descriptions:
            if desc[0] not in mp:
                mp[desc[0]] = TreeNode(desc[0])
            if desc[1] not in mp:
                mp[desc[1]] = TreeNode(desc[1])
            hasParent.add(desc[1])

        root = None
        for desc in descriptions:
            if desc[2] == 1:  # left
                mp[desc[0]].left = mp[desc[1]]
            else:  # right
                mp[desc[0]].right = mp[desc[1]]
            if desc[0] not in hasParent:
                root = mp[desc[0]]

        return root
```
```Go []
func createBinaryTree(descriptions [][]int) *TreeNode {
    mp := make(map[int]*TreeNode)
	hasParent := make(map[int]bool)

	for i := 0; i < len(descriptions); i++ {
		if _, ok := mp[descriptions[i][0]]; !ok {
			mp[descriptions[i][0]] = &TreeNode{Val: descriptions[i][0]}
		}
		if _, ok := mp[descriptions[i][1]]; !ok {
			mp[descriptions[i][1]] = &TreeNode{Val: descriptions[i][1]}
		}
		hasParent[descriptions[i][1]] = true
	}

	var root *TreeNode
	for i := 0; i < len(descriptions); i++ {
		if descriptions[i][2] == 1 { // left
			mp[descriptions[i][0]].Left = mp[descriptions[i][1]]
		} else { // right
			mp[descriptions[i][0]].Right = mp[descriptions[i][1]]
		}
		if !hasParent[descriptions[i][0]] {
			root = mp[descriptions[i][0]]
		}
	}
	return root
}
```
```PHP []
class Solution {

    /**
     * @param Integer[][] $descriptions
     * @return TreeNode
     */
    function createBinaryTree($descriptions) {
        $mp = [];
        $hasParent = [];

        foreach ($descriptions as $desc) {
            if (!isset($mp[$desc[0]])) {
                $mp[$desc[0]] = new TreeNode($desc[0]);
            }
            if (!isset($mp[$desc[1]])) {
                $mp[$desc[1]] = new TreeNode($desc[1]);
            }
            $hasParent[$desc[1]] = true;
        }

        $root = null;
        foreach ($descriptions as $desc) {
            if ($desc[2] == 1) { // left
                $mp[$desc[0]]->left = $mp[$desc[1]];
            } else { // right
                $mp[$desc[0]]->right = $mp[$desc[1]];
            }
            if (!isset($hasParent[$desc[0]])) {
                $root = $mp[$desc[0]];
            }
        }

        return $root;
    }
}
```
```Javascrip []
var createBinaryTree = function(descriptions) {
    let mp = {};
    let hasParent = new Set();

    for (let desc of descriptions) {
        if (!mp.hasOwnProperty(desc[0])) {
            mp[desc[0]] = new TreeNode(desc[0]);
        }
        if (!mp.hasOwnProperty(desc[1])) {
            mp[desc[1]] = new TreeNode(desc[1]);
        }
        hasParent.add(desc[1]);
    }

    let root = null;
    for (let desc of descriptions) {
        if (desc[2] === 1) { // left
            mp[desc[0]].left = mp[desc[1]];
        } else { // right
            mp[desc[0]].right = mp[desc[1]];
        }
        if (!hasParent.has(desc[0])) {
            root = mp[desc[0]];
        }
    }

    return root;
};
```


**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**