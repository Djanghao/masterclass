# ⭐JS | Simple & Explained | Objects => Hashset

**Author:** shinchliffe
**Votes:** 28
**Link:** [https://leetcode.com/problems/design-hashset/solutions/1969810/](https://leetcode.com/problems/design-hashset/solutions/1969810/)

---

# 705. Design HashSet \uD83D\uDE80
***
### Solution Developed In:
![JavaScript](./images/0.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Explaining The Question

If you understand HashSet's you should have no issues solving this problem intuitively. The issues with this questions come up when we don't know what a ***hashset*** is or how to use one. The other major issue that I've seen is that people are creating inefficient ***hashset*** implementations. Normally creating them already using a ***hashset*** / ***hashmap*** or people are creating solutions that run in linear time and space. 

This is certainly no issue at all. But it isn't how they're implemented in most programming languages. The way we're going to do it is going to be taking advantage of Objects in Javascript. The reason we're going to do this is because Objects in Javascript have constant insertion time, constant lookup time, and constant removal time. This is a very efficient data structure. So we're going to take advantage of this. 

The created solution pretty much explains itself. 

***

##  Recommended Knowledge
1. [Hashsets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
2. [Hashmaps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
3. [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
4. [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation)
5. [Object Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming)


## What do we know?
1. We have a HashSet that we need to create with multiple functions. These function include:
    1. `add(key)`
    2. `remove(key)`
    3. `contains(key)`
2. We can implement these in mostly ***constant time*** and ***constant space***. 
3. We need to have a good idea of what a Hashset is

## Leetcode Results:

See Submission Link: 

* Runtime:  147 ms faster than ***97.54%*** of JavaScript online submissions for Design HashSet
* Memory Usage: 51.8 MB, less than ***77.45%*** of JavaScript online submissions for Design HashSet

[![LeetCode](./images/1.png)](https://leetcode.com/submissions/detail/684786106/)


***

# The Solution
```
var MyHashSet = function() {
  
    // Really you should just 
    // Make your own object, but instead
    // we have attached ourself to the 
    // `this` object which then becomes our hashmap.
    
    // What you should instead do is this:
    // this.hash_map = {}
    // And then update our following functions
};

MyHashSet.prototype.add = function(key) {
    
    // Constant Time
    // Linear Space | To the size of the input key
    // You can access objects using array notation

    this[key] = null;
};

MyHashSet.prototype.remove = function(key) {
    
    // Constant Time
    // Constant Space
    // You can access objects using array notation
    // Here we use the delete keyword.

    delete this[key]
};

MyHashSet.prototype.contains = function(key) {
    
    // Constant Time
    // Constant Space
    // This just asks if the property exists

    return this.hasOwnProperty(key)
};
```