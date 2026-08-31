# Standard skip list implementation, original research paper based

**Author:** Maristie
**Votes:** 9
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/1221253/](https://leetcode.com/problems/design-skiplist/solutions/1221253/)

---

There have been many implementations in discussion. However, some major deviations from standard probabilistic skip lists in those solutions include
1. Deterministically deciding level instead of nondeterministically
2. Maintenance of multiple nodes for each level of the same search key
3. Maintenance of multiple nodes for each appearance of the same search key

I implemented a standard version of skip list based on [Skip Lists: A Probabilistic Alternative to Balanced Trees](https://15721.courses.cs.cmu.edu/spring2018/papers/08-oltpindexes1/pugh-skiplists-cacm1990.pdf) by William Pugh, adopting the technique of *fix the dice* in the paper as well. There is no manual memory deallocation in Java, so I omitted the `free(x)` statement. C++ users should feel free to release the unused memory.

```java
class Skiplist {
    static final int MAX_LEVEL = 16;
    static final double P = 0.5;
    static final Node sentinel = new Node(0, Integer.MAX_VALUE);
    
    static class Node {
        Node[] forward; // 0-indexed level-wise pointer array
        int key;
        int value;
        
        Node(int level, int key) {
            forward = new Node[level];
            this.key = key;
            this.value = 1;
        }
    }
    
    Node header;
    int listLevel;

    public Skiplist() {
        header = new Node(MAX_LEVEL, -1);
        Arrays.fill(header.forward, sentinel);
        listLevel = 1;
    }
    
    public boolean search(int target) {
        Node cur = header;
        for (int i = listLevel - 1; i >= 0; --i) {
            while (cur.forward[i].key < target) {
                cur = cur.forward[i];
            }
        }
        return cur.forward[0].key == target;
    }
    
    public void add(int num) {
        Node[] update = getPredecessors(num);
        Node cur = update[0].forward[0];
        
        if (cur.key == num) {
            ++cur.value;
        } else {
            int level = randomLevel();
            if (level > listLevel) {
                for (int i = listLevel; i < level; ++i) {
                    update[i] = header;
                }
                listLevel = level;
            }
            cur = new Node(level, num);
            for (int i = 0; i < level; ++i) {
                cur.forward[i] = update[i].forward[i];
                update[i].forward[i] = cur;
            }
        }
    }
    
    public boolean erase(int num) {
        Node[] update = getPredecessors(num);
        Node cur = update[0].forward[0];
        if (cur.key != num) {
            return false;
        } else {
            if (cur.value > 1) {
                --cur.value;
            } else {
                for (int i = 0; i < listLevel; ++i) {
                    if (update[i].forward[i] != cur) {
                        break;
                    }
                    update[i].forward[i] = cur.forward[i];
                }
                while (listLevel > 1 && header.forward[listLevel - 1] == sentinel) {
                    --listLevel;
                }
            }
            return true;
        }
    }
    
    private Node[] getPredecessors(int target) {
        Node[] update = new Node[MAX_LEVEL];
        Node cur = header;
        for (int i = listLevel - 1; i >= 0; --i) {
            while (cur.forward[i].key < target) {
                cur = cur.forward[i];
            }
            update[i] = cur;
        }
        return update;
    }
    
    private int randomLevel() {
        int level = 1;
        while (Math.random() < P && level < Math.min(MAX_LEVEL, listLevel + 1)) {
            ++level;
        }
        return level;
    }
}
```