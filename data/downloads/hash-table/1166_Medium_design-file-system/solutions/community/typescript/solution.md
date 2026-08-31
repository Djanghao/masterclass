# typescript solution with 0(1)

**Author:** sohanb88
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-file-system/solutions/6040736/](https://leetcode.com/problems/design-file-system/solutions/6040736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class FileSystem {
    private pathMap = new Map<string, number>();

    constructor() {
        this.pathMap = new Map<string, number>();
        this.pathMap.set("", 0);
    }

    public createPath(path: string, value: number): boolean
    {
        if(!path || path === "/" || this.pathMap.has(path)) {
            return false; // Invalid path or path already exists
        }

        const parentPath = path.substring(0, path.lastIndexOf("/"));
        if (!this.pathMap.has(parentPath)) {
            return false; // Parent path does not exist
        }
        this.pathMap.set(path, value);
        return true;
        //split by / and iterate over and set the path
    }
    public get(path: string): number
    {
        return this.pathMap.get(path) ?? -1;
    }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
```