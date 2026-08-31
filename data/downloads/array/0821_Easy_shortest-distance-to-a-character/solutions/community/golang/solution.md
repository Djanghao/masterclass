# Any language | Two pass | O(n), 0ms | Very easy with detailed explanation | Example on Golang

**Author:** el777
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/1055141/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/1055141/)

---

How to find a minimal distance? We need to take into consideration only distance from closest letters from left and right side. No need to count distance from far remote letters.


Next, when we see a part of a string like here and suppose we want to calculate distance from `o` to closest `e`'s.
```
leetcode
     ^
```
Let's split a task into 2 symmetrical ones: distance from left letter and distance from right letter.

How to calculate and store distance from left `e`? Just walk through the string and check - if we see letter `e` then its distance is 0, and with any another letter distance increments by 1.

So distances between letters `e` will be (I've added extra space between letters for readibility):

```
l    e      e      t       c       o       d      e
                                   ^
		    0      1       2       3       4      5
```

Next, go from right with the same distance calculation. But this time check if there's a closer letter `e` from another side.

We may code this using any language only with standard operators and arrays. 
Here's an example on Golang.

```golang
func shortestToChar(s string, c byte) []int {
	// cache string length
    var lens = len(s)
	// prepare a storage for the result 
	// slice (or array, vector) with length equal to len(s) initialized with zeros
    var res = make([]int, lens)
    
    // current distance from last seen letter `c`
    // we start with increadibly high value to show it's invalid
    var dist = lens + 100
    
    // scan from left to right, increase distance from last seen letter
    // flush distance to zero at every new seen required letter
    for i := 0; i < lens; i++ {
        if s[i] == c {
            dist = 0
        }
        res[i] = dist
        dist++
    }
    
    // the same backwards 
    // but also check if we have less distance from opposite letter
    for i := lens-1; i >=0; i-- {
        if s[i] == c {
            dist = 0
        }
        if dist < res[i] {
            res[i] = dist
        }
        dist++
    }
    
    return res
}
```