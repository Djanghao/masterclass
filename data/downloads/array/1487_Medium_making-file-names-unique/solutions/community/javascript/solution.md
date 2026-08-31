# JavaScript + comments | Map

**Author:** zhang1pr
**Votes:** 8
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/697894/](https://leetcode.com/problems/making-file-names-unique/solutions/697894/)

---

This solution uses a map to keep track of file names.

In the case of a collision, we need to find next available number for the file name, and update both old name as in input and new name with suffix `()` in the map.

```
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  const map = new Map();
    
  for (const name of names) {
    if (!map.has(name)) {
	  // Store the next available number 1
      map.set(name, 1);
    } else {
      let count = map.get(name);
      let newName = `${name}(${count})`;  
	  
      // Find the next available number because the new file name with () may have already been taken
	  // e.g. map = {target: 1, target(1): 1}, name = target
      while (map.has(newName)) {
        count++;
        newName = `${name}(${count})`;
      }
      
	  // Update both old name and new name in the map
      map.set(name, count + 1);
      map.set(newName, 1);
    }
  }  
    
  // ES6 Map is LinkedHashMap so name keys are ordered when iterated 
  return [...map.keys()];
};