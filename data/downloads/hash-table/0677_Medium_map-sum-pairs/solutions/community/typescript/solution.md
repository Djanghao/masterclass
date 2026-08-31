# Typescript: clean Trie solution (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/3539521/](https://leetcode.com/problems/map-sum-pairs/solutions/3539521/)

---


There are N keys and the maximum length of a key is M.

Time complexity:
O(M)

Space complexity:
O(M * N)
# Code
```
class TrieNode {
    weight: number;
    children: Map<string, TrieNode>
    
    constructor(weight: number = 0) {
        this.weight = weight;
        this.children = new Map<string, TrieNode>()
    }
}

class MapSum {
    root: TrieNode;
    map: Map<string, number>
    
    constructor() {
        this.root = new TrieNode();
        this.map = new Map<string, number>();
    }

    insert(key: string, val: number): void {
        let currentNode: TrieNode = this.root;
        let substractVal: number = this.map.get(key) ?? 0;
        this.map.set(key, val);
      
        for (let letter of key) {
            if (! currentNode.children.has(letter)) {
              currentNode.children.set(letter, new TrieNode(0));
            }
            currentNode = currentNode.children.get(letter);
            currentNode.weight -= substractVal;
            currentNode.weight += val;
        }
    }

    sum(prefix: string): number {
        let currentNode: TrieNode = this.root;
        for (let letter of prefix) {
            if (! currentNode.children.has(letter)) return 0;
            currentNode = currentNode.children.get(letter);
        }
        
        return currentNode.weight;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
```