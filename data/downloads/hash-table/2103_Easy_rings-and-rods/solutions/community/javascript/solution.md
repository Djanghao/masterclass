# Javascript✅✅✅ || Simple & Understandable || Explained

**Author:** a-fr0stbite
**Votes:** 19
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/2184222/](https://leetcode.com/problems/rings-and-rods/solutions/2184222/)

---

```
var countPoints = function(rings) {
    let rods = '0123456789';
    let count = 0;
    for (let rod of rods) { // looping over the variable, rods
        if (rings.includes(`R${rod}`) && 
          rings.includes(`G${rod}`) && 
          rings.includes(`B${rod}`)) count++; // checking if rings includes
			// R, G, & B on that rod
			// if so, add to count
    } return count;
};
```