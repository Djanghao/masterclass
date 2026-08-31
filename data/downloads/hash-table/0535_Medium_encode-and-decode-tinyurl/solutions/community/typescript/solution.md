# Easy Typescript Solution using Hashmap with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/5342090/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/5342090/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$ The time complexity of the encode function is O(1) because generating a random number and setting a key-value pair in the map both have constant time complexity. The time complexity of the decode function is also O(1) because retrieving a value from a map has constant time complexity.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ The space complexity of the encode function is O(1) as well because we are only storing one key-value pair in the map for each URL. The space complexity of the decode function is O(1) because we are not creating any additional data structures.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// initialize Empty Hashmap for storing tinyurl value
let map: Map<string, string> = new Map();

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    // encode the tinyurl using Math.floor() and Math.random()
    let encodedUrl: string = `http://tinyurl.com/${Math.floor(Math.random() * 1000000)}`

    // set the encodedUrl as key and longUrl as value in map
    map.set(encodedUrl, longUrl);

    // return encodeUrl 
    return encodedUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    // return the map value for shortUrl
    return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
```