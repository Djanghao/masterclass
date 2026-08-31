# Without built-in HashMap/Dictionary | C# | +97% efficient

**Author:** Baymax_
**Votes:** 8
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/3644135/](https://leetcode.com/problems/design-hashmap/solutions/3644135/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
***Since we should not use any built in map data structures, we'll use simple array approach.
Since it is a easy level question, will be avoiding building/usage of any Hash functions.***

We'll simply create an array of size 1000001, as that is the constraint for the given question and perform operations similar to a HashMap in O(1)

![Screenshot 2023-06-16 115743.png](./images/0.png)


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1) - as we perform all operations in constant time

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - as we use constant amount of memory (1000001) for all inputs
*This will be bad design for smaller inputs*

## Please upvote if you like the approach

# Code
```
public class MyHashMap {
    int[] map;

    public MyHashMap() {
        //0 is treated as no key present
        //hence while adding/storing the value, we'll add 1 to it
        //and remove 1 from the value before returning it
        map = new int[1000001];
    }
    
    public void Put(int key, int value) {
        map[key] = value + 1;
    }
    
    public int Get(int key) {
        return map[key] - 1;
    }
    
    public void Remove(int key) {
        map[key] = 0;
    }
}
```

## Please upvote if you like the approach