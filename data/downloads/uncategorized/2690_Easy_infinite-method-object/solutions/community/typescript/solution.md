# Proxy Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 1
**Link:** [https://leetcode.com/problems/infinite-method-object/solutions/4262195/](https://leetcode.com/problems/infinite-method-object/solutions/4262195/)

---

# Intuition
we will use proxy to solve this problem
# Approach
we crraeate new proxy in which we catch get calls on proxy object and return function that when called return property name.
# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)
# Code
```
function createInfiniteObject(): Record<string, () => string> {
    // instanciate new proxy and return it
	return new Proxy({}, {
        // override get call of returned object:
        get: function(_, property) {
            // on each acess to property, return function which when called returns property name
            return () => {
                // return property name
                return property
            }
        }
    })
};

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */
```