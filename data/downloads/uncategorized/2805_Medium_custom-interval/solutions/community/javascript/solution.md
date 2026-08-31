# Fake interval id

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/custom-interval/solutions/3857062/](https://leetcode.com/problems/custom-interval/solutions/3857062/)

---

# Intuition
Just return 0, 1, 2, 3...(array indices) as interval ids. Save all the timer ids inside array with the same index.

And we can call setTimeout recursively updating the delay time inside callback. Also, 



# Code
```
/**
 * @param {Function} fn
 * @param {number} delay
 * @param {number} period
 * @return {number} id
 */

const ids = []
function customInterval(fn, delay, period){
 let len = ids.length
 let p = 0;
  
  function executeFn() {
    fn();
    p += period
    ids[len - 1] = setTimeout(executeFn, p + delay);
  }
  
  ids[len - 1] = setTimeout(executeFn, delay);

  return len - 1; // Return the intervalId directly
}

/**
 * @param {number} id
 */
function customClearInterval(id) {
  clearTimeout(ids[id]);
    
}
```