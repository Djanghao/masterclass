# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278549/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278549/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. The code implements a Trie data structure to efficiently compute the maximum XOR of a pair of numbers in a given array.
1. The Trie is designed to represent the binary representation of the numbers, with each level corresponding to a bit.
1. The `add` function inserts a number into the Trie, updating the count of elements in each node's subtree.
1. The `maxxor` function finds the maximum XOR by traversing the Trie based on the bits of a given number.
1. The `erase` function removes a number from the Trie, updating the count of elements in each node's subtree.
1. The `maximumStrongPairXor` function uses the Trie to find the maximum XOR of pairs where one element is at least twice the other in the sorted array.
1. The numbers are sorted in reverse order to efficiently process the array and find the maximum XOR for each element.
1. The Trie is updated by adding elements and erasing elements based on the conditions specified in the problem.
1. The maximum XOR result is updated during the process, and the final result is returned.


# Complexity
- *Time complexity:*
   $$O(NlognM)$$
    

- *Space complexity:*
   $$O(NlogM)$$
    


# Code
```C++ []

struct Trie {
    vector<int> v, lt, rt; // v stores the count of elements in the subtree rooted at the current node, lt stores the index of the left child, and rt stores the index of the right child.
    int id = 0; // id is used to assign a unique identifier to each node in the Trie.

    Trie() : v(1, 0), lt(1, -1), rt(1, -1) {} // Constructor initializes the Trie with a single node representing the root.

    void create() {
        v.emplace_back(0); // Create a new node and initialize its count to 0.
        lt.emplace_back(-1); // Initialize left child index to -1.
        rt.emplace_back(-1); // Initialize right child index to -1.
        ++id; // Increment the id for the newly created node.
    }

    void add(int x) {
        int node = 0; // Start from the root.
        for (int bit = 30; bit >= 0; --bit) { // Traverse each bit of the number from the most significant bit to the least significant bit.
            int b = x & (1 << bit); // Extract the bit at the current position.

            ++v[node]; // Increment the count of elements in the current node's subtree.

            if (b == 0) { // If the bit is 0, move to the left child.
                if (lt[node] == -1) {
                    create(); // Create a new node if the left child doesn't exist.
                    lt[node] = id; // Update the left child index.
                }
                node = lt[node];
            } else { // If the bit is 1, move to the right child.
                if (rt[node] == -1) {
                    create(); // Create a new node if the right child doesn't exist.
                    rt[node] = id; // Update the right child index.
                }
                node = rt[node];
            }
        }
        ++v[node]; // Increment the count for the leaf node corresponding to the inserted number.
    }

    int maxxor(int x) {
        int node = 0, ret = 0; // Start from the root, ret stores the result of the XOR operation.
        for (int bit = 30; bit >= 0; --bit) {
            int b = (x >> bit) & 1; // Extract the bit at the current position.

            if (b == 0) {
                if (rt[node] != -1 and v[rt[node]] > 0) { // If right child exists and has elements, update ret and move to the right child.
                    ret += 1 << bit;
                    node = rt[node];
                } else
                    node = lt[node]; // Move to the left child.
            } else {
                if (lt[node] != -1 and v[lt[node]] > 0) { // If left child exists and has elements, update ret and move to the left child.
                    ret += 1 << bit;
                    node = lt[node];
                } else
                    node = rt[node]; // Move to the right child.
            }
        }
        return ret;
    }

    void erase(int x) { // Assumes x exists
        int node = 0;
        for (int bit = 30; bit >= 0; --bit) {
            int b = x & (1 << bit);
            --v[node]; // Decrement the count of elements in the current node's subtree.

            if (b == 0)
                node = lt[node]; // Move to the left child.
            else
                node = rt[node]; // Move to the right child.
        }
        --v[node]; // Decrement the count for the leaf node corresponding to the erased number.
    }
};

class Solution {
public:
    int maximumStrongPairXor(vector<int>& nums) {
        Trie T;
        sort(nums.rbegin(), nums.rend()); // Sort the numbers in reverse order.
        int ans = 0;
        int ptr = 0;
        for (auto x : nums) {
            T.add(x); // Insert the current number into the Trie.
            while (ptr < nums.size() and nums[ptr] > 2 * x) {
                T.erase(nums[ptr]); // Erase numbers that are greater than 2*x.
                ++ptr;
            }
            ans = max(ans, T.maxxor(x)); // Update the maximum XOR result.
        }
        return ans;
    }
};

```

```C []

struct Trie {
    int *v, *lt, *rt; // v stores the count of elements in the subtree rooted at the current node, lt stores the index of the left child, and rt stores the index of the right child.
    int id;
};

void create(struct Trie *trie) {
    trie->v = realloc(trie->v, (trie->id + 2) * sizeof(int));
    trie->lt = realloc(trie->lt, (trie->id + 2) * sizeof(int));
    trie->rt = realloc(trie->rt, (trie->id + 2) * sizeof(int));

    trie->v[trie->id + 1] = 0; // Create a new node and initialize its count to 0.
    trie->lt[trie->id + 1] = -1; // Initialize left child index to -1.
    trie->rt[trie->id + 1] = -1; // Initialize right child index to -1.
    ++trie->id; // Increment the id for the newly created node.
}

void add(struct Trie *trie, int x) {
    int node = 0; // Start from the root.
    for (int bit = 30; bit >= 0; --bit) { // Traverse each bit of the number from the most significant bit to the least significant bit.
        int b = x & (1 << bit); // Extract the bit at the current position.

        ++trie->v[node]; // Increment the count of elements in the current node's subtree.

        if (b == 0) { // If the bit is 0, move to the left child.
            if (trie->lt[node] == -1) {
                create(trie); // Create a new node if the left child doesn't exist.
                trie->lt[node] = trie->id; // Update the left child index.
            }
            node = trie->lt[node];
        } else { // If the bit is 1, move to the right child.
            if (trie->rt[node] == -1) {
                create(trie); // Create a new node if the right child doesn't exist.
                trie->rt[node] = trie->id; // Update the right child index.
            }
            node = trie->rt[node];
        }
    }
    ++trie->v[node]; // Increment the count for the leaf node corresponding to the inserted number.
}

int maxxor(struct Trie *trie, int x) {
    int node = 0, ret = 0; // Start from the root, ret stores the result of the XOR operation.
    for (int bit = 30; bit >= 0; --bit) {
        int b = (x >> bit) & 1; // Extract the bit at the current position.

        if (b == 0) {
            if (trie->rt[node] != -1 && trie->v[trie->rt[node]] > 0) { // If right child exists and has elements, update ret and move to the right child.
                ret += 1 << bit;
                node = trie->rt[node];
            } else
                node = trie->lt[node]; // Move to the left child.
        } else {
            if (trie->lt[node] != -1 && trie->v[trie->lt[node]] > 0) { // If left child exists and has elements, update ret and move to the left child.
                ret += 1 << bit;
                node = trie->lt[node];
            } else
                node = trie->rt[node]; // Move to the right child.
        }
    }
    return ret;
}

void erase(struct Trie *trie, int x) { // Assumes x exists
    int node = 0;
    for (int bit = 30; bit >= 0; --bit) {
        int b = x & (1 << bit);
        --trie->v[node]; // Decrement the count of elements in the current node's subtree.

        if (b == 0)
            node = trie->lt[node]; // Move to the left child.
        else
            node = trie->rt[node]; // Move to the right child.
    }
    --trie->v[node]; // Decrement the count for the leaf node corresponding to the erased number.
}

struct Solution {
    struct Trie T;
};

int maximumStrongPairXor(struct Solution *solution, int *nums, int numsSize) {
    int ans = 0;
    int ptr = 0;

    for (int i = 0; i < numsSize; ++i) {
        add(&solution->T, nums[i]); // Insert the current number into the Trie.
        while (ptr < numsSize && nums[ptr] > 2 * nums[i]) {
            erase(&solution->T, nums[ptr]); // Erase numbers that are greater than 2*x.
            ++ptr;
        }
        ans = ans > maxxor(&solution->T, nums[i]) ? ans : maxxor(&solution->T, nums[i]); // Update the maximum XOR result.
    }

    return ans;
}


```
```Java []

import java.util.Arrays;

class Trie {
    int[] v, lt, rt;
    int id = 0;

    Trie() {
        v = new int[]{0};
        lt = new int[]{-1};
        rt = new int[]{-1};
    }

    void create() {
        int n = v.length;
        v = Arrays.copyOf(v, n + 1);
        lt = Arrays.copyOf(lt, n + 1);
        rt = Arrays.copyOf(rt, n + 1);
        v[n] = 0;
        lt[n] = -1;
        rt[n] = -1;
        ++id;
    }

    void add(int x) {
        int node = 0;
        for (int bit = 30; bit >= 0; --bit) {
            int b = (x & (1 << bit));
            ++v[node];

            if (b == 0) {
                if (lt[node] == -1) {
                    create();
                    lt[node] = id;
                }
                node = lt[node];
            } else {
                if (rt[node] == -1) {
                    create();
                    rt[node] = id;
                }
                node = rt[node];
            }
        }
        ++v[node];
    }

    int maxxor(int x) {
        int node = 0, ret = 0;
        for (int bit = 30; bit >= 0; --bit) {
            int b = (x >> bit) & 1;

            if (b == 0) {
                if (rt[node] != -1 && v[rt[node]] > 0) {
                    ret += 1 << bit;
                    node = rt[node];
                } else {
                    node = lt[node];
                }
            } else {
                if (lt[node] != -1 && v[lt[node]] > 0) {
                    ret += 1 << bit;
                    node = lt[node];
                } else {
                    node = rt[node];
                }
            }
        }
        return ret;
    }

    void erase(int x) {
        int node = 0;
        for (int bit = 30; bit >= 0; --bit) {
            int b = (x & (1 << bit));
            --v[node];

            if (b == 0)
                node = lt[node];
            else
                node = rt[node];
        }
        --v[node];
    }
}

public class Solution {
    public int maximumStrongPairXor(int[] nums) {
        Trie T = new Trie();
        Arrays.sort(nums);
        int ans = 0;
        int ptr = 0;
        for (int x : nums) {
            T.add(x);
            while (ptr < nums.length && nums[ptr] > 2 * x) {
                T.erase(nums[ptr]);
                ++ptr;
            }
            ans = Math.max(ans, T.maxxor(x));
        }
        return ans;
    }
}


```
```python3 []

class Trie:
    def __init__(self):
        self.v = [0]
        self.lt = [-1]
        self.rt = [-1]
        self.id = 0

    def create(self):
        self.v.append(0)
        self.lt.append(-1)
        self.rt.append(-1)
        self.id += 1

    def add(self, x):
        node = 0
        for bit in range(30, -1, -1):
            b = x & (1 << bit)
            self.v[node] += 1

            if b == 0:
                if self.lt[node] == -1:
                    self.create()
                    self.lt[node] = self.id
                node = self.lt[node]
            else:
                if self.rt[node] == -1:
                    self.create()
                    self.rt[node] = self.id
                node = self.rt[node]
        self.v[node] += 1

    def maxxor(self, x):
        node = 0
        ret = 0
        for bit in range(30, -1, -1):
            b = (x >> bit) & 1

            if b == 0:
                if self.rt[node] != -1 and self.v[self.rt[node]] > 0:
                    ret += 1 << bit
                    node = self.rt[node]
                else:
                    node = self.lt[node]
            else:
                if self.lt[node] != -1 and self.v[self.lt[node]] > 0:
                    ret += 1 << bit
                    node = self.lt[node]
                else:
                    node = self.rt[node]
        return ret

    def erase(self, x):
        node = 0
        for bit in range(30, -1, -1):
            b = x & (1 << bit)
            self.v[node] -= 1

            if b == 0:
                node = self.lt[node]
            else:
                node = self.rt[node]
        self.v[node] -= 1


class Solution:
    def maximumStrongPairXor(self, nums):
        T = Trie()
        nums.sort(reverse=True)
        ans = 0
        ptr = 0
        for x in nums:
            T.add(x)
            while ptr < len(nums) and nums[ptr] > 2 * x:
                T.erase(nums[ptr])
                ptr += 1
            ans = max(ans, T.maxxor(x))
        return ans

```

```javascript []

class Trie {
    constructor() {
        this.v = [0];
        this.lt = [-1];
        this.rt = [-1];
        this.id = 0;
    }

    create() {
        this.v.push(0);
        this.lt.push(-1);
        this.rt.push(-1);
        this.id++;
    }

    add(x) {
        let node = 0;
        for (let bit = 30; bit >= 0; bit--) {
            const b = x & (1 << bit);
            this.v[node]++;

            if (b === 0) {
                if (this.lt[node] === -1) {
                    this.create();
                    this.lt[node] = this.id;
                }
                node = this.lt[node];
            } else {
                if (this.rt[node] === -1) {
                    this.create();
                    this.rt[node] = this.id;
                }
                node = this.rt[node];
            }
        }
        this.v[node]++;
    }

    maxxor(x) {
        let node = 0;
        let ret = 0;
        for (let bit = 30; bit >= 0; bit--) {
            const b = (x >> bit) & 1;

            if (b === 0) {
                if (this.rt[node] !== -1 && this.v[this.rt[node]] > 0) {
                    ret += 1 << bit;
                    node = this.rt[node];
                } else {
                    node = this.lt[node];
                }
            } else {
                if (this.lt[node] !== -1 && this.v[this.lt[node]] > 0) {
                    ret += 1 << bit;
                    node = this.lt[node];
                } else {
                    node = this.rt[node];
                }
            }
        }
        return ret;
    }

    erase(x) {
        let node = 0;
        for (let bit = 30; bit >= 0; bit--) {
            const b = x & (1 << bit);
            this.v[node]--;

            if (b === 0) {
                node = this.lt[node];
            } else {
                node = this.rt[node];
            }
        }
        this.v[node]--;
    }
}

class Solution {
    maximumStrongPairXor(nums) {
        const T = new Trie();
        nums.sort((a, b) => b - a);
        let ans = 0;
        let ptr = 0;
        for (const x of nums) {
            T.add(x);
            while (ptr < nums.length && nums[ptr] > 2 * x) {
                T.erase(nums[ptr]);
                ptr++;
            }
            ans = Math.max(ans, T.maxxor(x));
        }
        return ans;
    }
}

```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---