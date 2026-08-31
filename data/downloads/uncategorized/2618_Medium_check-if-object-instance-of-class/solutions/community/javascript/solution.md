# Basic JavaScript Solution || Easy to understand || beginner friendly

**Author:** AvineshPandey
**Votes:** 146
**Link:** [https://leetcode.com/problems/check-if-object-instance-of-class/solutions/3406546/](https://leetcode.com/problems/check-if-object-instance-of-class/solutions/3406546/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In Javascript, inheritance is achieved with the prototype chain.We can get the prototype of an object with the
   ```    Object.getPrototypeOf(obj)``` 
using this compare class prototype with objects prortotype.

# Approach
<!-- Describe your approach to solving the problem. -->
We will Traverse the entire prototype chain until we find a match or else return False.

# Complexity
- Time complexity: $$O(n)$$
The time complexity of the function depends on the depth of the prototype chain of the object being checked. 
In the worst case, when the prototype chain is very deep, the function may take O(n) time, where n is the depth of the prototype chain. 

<!-- Add your time complexity here, e.g.  -->

- Space complexity:$$O(1)$$
The space complexity of the function is constant, as it does not use any additional data structures that grow with the size of the input.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    while(obj!=null)
    {
        if(obj.constructor === classFunction)
        {
            return true;
        }

        obj = Object.getPrototypeOf(obj);

    }

    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
```

Do upvote if this was helpful!!