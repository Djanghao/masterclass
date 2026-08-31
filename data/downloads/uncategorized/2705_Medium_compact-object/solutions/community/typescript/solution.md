# O(n) TypeScript.  recursion approach

**Author:** aramfilak
**Votes:** 4
**Link:** [https://leetcode.com/problems/compact-object/solutions/4979942/](https://leetcode.com/problems/compact-object/solutions/4979942/)

---

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```TypeScript []
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(val => {
        if (typeof val === 'object') {
          return compactObject(val);
        }
        return val;
      })
     
  }

  for (const [key,val] of Object.entries(obj)) {

    if (!val) {
      delete obj[key];
      continue;
    }
    
    if (typeof val === 'object') {
      obj[key] = compactObject(val);
    }
  }

  return obj;

}

```
 
```javascript []
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

function compactObject(obj) {

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(val => {
        if (typeof val === 'object') {
          return compactObject(val);
        }
        return val;
      })
     
  }

  for (const [key,val] of Object.entries(obj)) {

    if (!val) {
      delete obj[key];
      continue;
    }
    
    if (typeof val === 'object') {
      obj[key] = compactObject(val);
    }
  }

  return obj;

}

```
