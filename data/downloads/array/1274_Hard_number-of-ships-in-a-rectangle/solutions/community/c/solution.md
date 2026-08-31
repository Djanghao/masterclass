# C++ recursive divide and conquer solution with explanations

**Author:** LisongSun
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/1124549/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/1124549/)

---

**Key points:**
* Divide the region in half along the longest dimension between x and y.
* Test if one half got any ship, if no ship, skip testing it. Otherwise recursively get ship count from that half.
* If we narrow down to a single point, test to see if we got a ship and get 1 or 0 as return value.
* Be careful with the border line between the two halves. Don't overlap.
* Speed and memory **16 ms	21.6 MB**
```
  int countShips(Sea & sea, const vector<int> & topRight, const vector<int> & bottomLeft) {
    if (topRight == bottomLeft)
      return sea.hasShips(topRight, bottomLeft)?1:0;
    vector<int> halves[2];
    int ret = 0;
    if (topRight[0] - bottomLeft[0] > topRight[1] - bottomLeft[1]) {
      halves[0] = {(topRight[0]+bottomLeft[0]+1)/2, bottomLeft[1]};
      halves[1] = {(topRight[0]+bottomLeft[0]-1)/2, topRight[1]};
    }
    else {
      halves[0] = {bottomLeft[0], (topRight[1]+bottomLeft[1]+1)/2};
      halves[1] = {topRight[0], (topRight[1]+bottomLeft[1]-1)/2};
    }
    if (sea.hasShips(topRight, halves[0]))
      ret += countShips(sea, topRight, halves[0]);
    if (ret == 0 || sea.hasShips(halves[1], bottomLeft))
      ret += countShips(sea, halves[1], bottomLeft);
    return ret;
  }
```