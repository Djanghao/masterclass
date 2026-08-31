# [Javascript] AVL tree + Fenwick tree

**Author:** bnlvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-iii/solutions/5642898/](https://leetcode.com/problems/alternating-groups-iii/solutions/5642898/)

---


```
/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */

class TreeNode {
    constructor(key, value, left=null, right=null, height=1) {
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = height;
    }
}


class AVLTree {
    /*The AVL tree, named after its inventors Georgy Adelson-Velsky and
    Evgenii Landis, in their 1962 paper \u201CAn algorithm for the organization of
    information\u201D, is a self-balancing Binary Search Tree (BST) where the
    difference between heights of left and right subtrees for any node cannot be
    more than one.*/
    constructor() {
        this.root = null;
        this.size = 0;
    }

    balance(node) {
        if (!node) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    /*Returns a key-value mapping associated with the least key greater than or
    equal to the given key, or null if there is no such key.*/
    ceilingEntry(key) {
        let ans = null;
        let node = this.root;
        while (node)
            if (node.key < key) node = node.right;
            else {
                ans = node;
                node = node.left;
            }
        return ans;
    }

    firstEntry() {
        return this.#firstEntry(this.root);
    }

    /*Returns a key-value mapping associated with the greatest key less than or
    equal to the given key, or null if there is no such key.*/
    floorEntry(key) {
        let ans = null;
        let node = this.root;
        while (node)
            if (key < node.key) node = node.left;
            else {
                ans = node;
                node = node.right;
            }
        return ans;
    }

    get(key) {
        return this.#get(this.root, key);
    }

    height(node) {
        if (!node) return 0;
        return node.height;
    }

    put(key, value=0) {
        this.root = this.#put(this.root, key, value);
    }

    remove(key) {
        this.root = this.#remove(this.root, key);
    }

    #firstEntry(node) {
        while (node && node.left) node = node.left;
        return node;
    }

    #get(node, key) {
        if (!node) return null;
        if (node.key === key) return node.value;
        if (node.key < key) return this.#get(node.right, key);
        return this.#get(node.left, key);
    }

    #put(node, key, value) {
        if (!node) {
            ++this.size;
            return new TreeNode(key, value);
        } else if (key < node.key) node.left = this.#put(node.left, key, value);
        else if (key > node.key) node.right = this.#put(node.right, key, value);
        else {
            node.value = value;
            return node;
        }
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        let bal = this.balance(node);
        if (bal > 1 && key < node.left.key)
            return this.right_rotate(node);
        if (bal < -1 && key > node.right.key)
            return this.left_rotate(node);
        if (bal > 1 && key > node.left.key) {
            node.left = this.left_rotate(node.left);
            return this.right_rotate(node);
        }
        if (bal < -1 && key < node.right.key) {
            node.right = this.right_rotate(node.right);
            return this.left_rotate(node);
        }
        return node;
    }

    #remove(node, key) {
        if (!node) return node;
        if (key < node.key) node.left = this.#remove(node.left, key);
        else if (key > node.key) node.right = this.#remove(node.right, key);
        else {
            if (!node.left) {
                let temp = node.right;
                node = null;
                --this.size;
                return temp;
            }
            if (!node.right) {
                let temp = node.left;
                node = null;
                --this.size;
                return temp;
            }
            let temp = this.#firstEntry(node.right);
            node.key = temp.key;
            node.value = temp.value; 
            node.right = this.#remove(node.right, temp.key);
        }
        if (!node) return node;
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        let bal = this.balance(node);
        if (bal > 1 && this.balance(node.left) > 0)
            return this.right_rotate(node);
        if (bal < -1 && this.balance(node.right) < 0)
            return this.left_rotate(node);
        if (bal > 1 && this.balance(node.left) < 0) {
            node.left = this.left_rotate(node.left);
            return this.right_rotate(node);
        }
        if (bal < -1 && this.balance(node.right) > 0) {
            node.right = this.right_rotate(node.right);
            return this.left_rotate(node);
        }
        return node;
    }

    left_rotate(node) {
        let y = node.right, T2 = y.left;
        y.left = node;
        node.right = T2;
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        return y;
    }

    right_rotate(node) {
        let y = node.left, T3 = y.right;
        y.right = node;
        node.left = T3;
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
        return y;
    }

    entrySet() {
        return this.traverse().map(x => [x.key, x.value]);
    }

    toString() {
        return "{" + this.traverse().map(x => x.key + " : " + x.value).join(", ") + "}";
    }

    traverse() {
        const ans = [], stack = [];
        let node = this.root;
        while (stack.length || node)
            if (node) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                ans.push(node);
                node = node.right;
            }
        return ans;
    }
}

class Fenwick {
    constructor(n) {
        this.cnts = Array(n+1).fill(0); 
        this.vals = Array(n+1).fill(0); 
    }
    
    add(k, v) {
        for (let i = k+1; i < this.cnts.length; i += i & -i) {
            this.cnts[i] += v; 
            this.vals[i] += v*k; 
        }
    }
    
    query(k, v) {
        let ans = 0; 
        for (let i = k+1; i; i -= i & -i) 
            ans += this.vals[i] - v*this.cnts[i]; 
        return ans; 
    }
}


var numberOfAlternatingGroups = function(colors, queries) {
    const n = colors.length; 
    const groups = new AVLTree(); 
    for (let i = 0, j = 0; i < n; i = j+1) {
        for (j = i; j < i+n-1 && colors[j%n] != colors[(j+1)%n]; ++j); 
        groups.put(j%n, i); 
    }
    const fen = new Fenwick(n+1); 
    
    var dist = (lo, hi) => lo <= hi ? hi-lo+1 : n+hi-lo+1; 
    
    var add = function(lo, hi) {
        groups.put(hi, lo); 
        fen.add(dist(lo, hi), 1); 
    }; 
    
    var remove = function(i) {
        let hi = groups.ceilingEntry(i); 
        if (hi == null) hi = groups.firstEntry().key; 
        else hi = hi.key; 
        const lo = groups.get(hi); 
        groups.remove(hi); 
        fen.add(dist(lo, hi), -1); 
        return [lo, hi]; 
    }; 
    
    for (const [j, i] of groups.entrySet()) {
        add(i, j); 
    }
    const ans = []; 
    for (const q of queries) {
        if (q[0] === 1) {
            if (groups.size == 1 && colors[groups.firstEntry().key] != colors[groups.firstEntry().value]) ans.push(n); 
            else {
                const sz = q[1]; 
                ans.push(fen.query(n, sz-1) - fen.query(sz-1, sz-1)); 
            }
        } else {
            const i = q[1], c = q[2]; 
            if (colors[i] != c) {
                colors[i] = c; 
                let [lo, hi] = remove(i); 
                if (lo == hi) {
                    if (colors[(i-1+n)%n] != colors[i]) lo = remove((i-1+n)%n)[0]; 
                    if (colors[i] != colors[(i+1)%n] && groups.size) hi = remove((i+1)%n)[1]; 
                    add(lo, hi); 
                } else if (lo == i) {
                    add((i+1)%n, hi); 
                    if (colors[(i-1+n)%n] != colors[i]) lo = remove((i-1+n)%n)[0]; 
                    add(lo, i); 
                } else if (i == hi) {
                    add(lo, (i-1+n)%n); 
                    if (colors[i] != colors[(i+1)%n]) hi = remove((i+1)%n)[1]; 
                    add(i, hi); 
                } else {
                    const i0 = (i-1+n)%n, i1 = (i+1)%n; 
                    if (dist(lo, hi) == n && colors[lo] != colors[hi]) add(i1, i0); 
                    else {
                        add(lo, i0); 
                        add(i1, hi); 
                    }
                    add(i, i); 
                }
            }
        }
    }
    return ans; 
};
```