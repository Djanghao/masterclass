# 8ms 100%

**Author:** Veltis
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/1867078/](https://leetcode.com/problems/binary-tree-paths/solutions/1867078/)

---

```
    function binaryTreePaths($root) {
        $result = [];
        if(!is_null($root->left)){
            $result = array_merge($result,$this->binaryTreePaths($root->left));
        }
        if(!is_null($root->right)){
            $result = array_merge($result,$this->binaryTreePaths($root->right));
        }
        if(count($result)){
            for($i = 0; $i < count($result); $i++){
                $result[$i] = strval($root->val)."->".$result[$i];
            }
        }else{
            $result[] = strval($root->val);
        }
        return $result;
    }
```