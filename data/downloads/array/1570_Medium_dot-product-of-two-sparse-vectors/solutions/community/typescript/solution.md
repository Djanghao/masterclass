# JavaScript/TypeScript Simple Solution using Map

**Author:** kloctm
**Votes:** 2
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/1582223/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/1582223/)

---

```
class SparseVector {
    // create map to hold the index and value
    private map = new Map();
    
    constructor(nums: number[]) {
        // loop through the array
		for(let i = 0; i < nums.length; i++) {
            // check if value isn't 0
            if(nums[i]) {
                // insert index and value into map
                this.map.set(i, nums[i])
            }
        }
    }

	// Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
        let dp = 0;
        // make sure you are running in the smallest map for efficiency
        if(vec.map.size < this.map.size) return vec.dotProduct(this);
        // iterate through each key, value pair in the map
        for(const [key,value] of this.map) {
            // compute the product if the key exists in the other map
            if(vec.map.get(key)) dp += vec.map.get(key) * value;
        }
        return dp;
    }
}
```