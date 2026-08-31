# Javascript w/ Union Find

**Author:** something_cool
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/1159230/](https://leetcode.com/problems/number-of-islands-ii/solutions/1159230/)

---

Union Find Solution

1. Each time a piece of land is added, we add it as an unconnected piece of land
2. We check all neighboring positions, and if any are land, we perform a union
	* 	If the two positions are already part of the same land, we return
	* 	Otherwise, we join them
3. We return the number of islands

```
const numIslands2 = (m, n, positions) => {
    let islands = [];
    const dsu = new DSU();
    
    // For each position, perform a union if it is adjacent to land
    for(const position of positions) {
        let [row, col] = position;
        // Adds the current position to our DSU
        dsu.add(row, col);
        
        let rowAdj = [0, 1, 0, -1];
        let colAdj = [1, 0, -1, 0];
        for(let i=0; i < 4; i++) {
            let newRow = row + rowAdj[i];
            let newCol = col + colAdj[i];
            if(newRow < 0 || newCol < 0 || newRow >= m || newCol >= n) continue;
            // If the adjacent position is land (exists within our DSU)
            if(dsu.contains(newRow, newCol)) {
                // Perform a union to connect lands if they aren't already connected
                dsu.union(position, [newRow, newCol]);
            }
        }
        islands.push(dsu.getSize());
    }
    
    return islands;
};

class DSU {
    constructor() {
        this.parent = new Map();
        this.size = 0;
    }
    
    // Stores references to all pieces of land
    contains(row, col) {
        let pos = row + ':' + col;
        return this.parent.get(pos);
    }
    
    // Adds the land as unconnected to other land
    add(row, col) {
        let pos = row + ':' + col;
        if(!this.parent.has(pos)) {
            this.parent.set(pos, -1);
            this.size++
        }
    }
    
    // Returns the top parent of a piece of land
    find(row, col) {
        let pos = row + ':' + col;
        let current = pos;
        while(typeof this.parent.get(current) === 'string') {
            current = this.parent.get(current);
        }
        
        // Compresses
        if(pos !== current) this.parent.set(pos, current);
        return current;
    }
    
    // Connects two pieces of land together if they aren't already
    union(pos1, pos2) {
        let [r1, c1] = pos1;
        let [r2, c2] = pos2;
        let pos1Parent = this.find(r1, c1);
        let pos2Parent = this.find(r2, c2);
        if(pos1Parent === pos2Parent) return false;
        
        let pos1Rank = this.parent.get(pos1Parent);
        let pos2Rank = this.parent.get(pos2Parent);
        if(pos1Rank < pos2Rank) {
            this.parent.set(pos1Parent, pos1Rank + pos2Rank);
            this.parent.set(pos2Parent, pos1Parent);
        } else {
            this.parent.set(pos2Parent, pos2Rank + pos1Rank);
            this.parent.set(pos1Parent, pos2Parent);
        }
        this.size--;
        
        return true;
    }
    
    // returns number of unnconnected islands
    getSize() {
        return this.size;
    }
}
```