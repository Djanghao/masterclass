# Typescript quartered search

**Author:** Itope84
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/3643379/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/3643379/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Sea {
 *      hasShips(topRight: number[], bottomLeft: number[]): boolean {}
 * }
 */

//  type Sea = {
//    hasShips: (tr: number[], bl: number[]) => boolean
//  }

const getPerimeter = (topRight: number[], bottomLeft: number[]) => {
  const height = topRight[1] - bottomLeft[1]
  const width = topRight[0] - bottomLeft[0]
  return 2 * (height + width)
}

function countShips(sea: Sea, topRight: number[], bottomLeft: number[]): number {
  // We know the topRight goes to a max of 1000, and there is a max of 10 ships in total
  // So we can easily do a sort of binary search through this, split the difference (between top and bottom) into 4 relatively equal parts (because it's a rectangle). and check if there are any ships in each part
  // Recursively do this until the size of each sector is <= 1
  // This is log(n) iterations and will not yield up to 400 calls to sea as long as we skip the branches that already have 0 number of ships

  if(getPerimeter(topRight, bottomLeft) === 0) {
    return sea.hasShips(topRight, bottomLeft) ? 1 : 0
  }
  // split into 4 quadrants:

  const width = topRight[0] - bottomLeft[0]
  const height = topRight[1] - bottomLeft[1]
  const x1 = Math.floor(width / 2) + bottomLeft[0]
  // In case the difference is 0, then we can't create a gap
  const x2 = x1 + (x1 < topRight[0] ? 1 : 0)
  const y1 = Math.floor(height / 2) + bottomLeft[1]
  const y2 = y1 + (y1 < topRight[1] ? 1 : 0)

  // sector 1 is [bottomLeft, [x1, y1]], sector 4 is [[x2, y2] topRight]
  // sector 2 is [[bottomLeft[0], y2], [x1, topRight[1]]], sector 3 is [[x2, bottomLeft[1]], [topRight[0], y1]]

  const sector1 = [bottomLeft, [x1, y1]]

  const sector4 = [[x2, y2], topRight]
  const isStraightLine = !(topRight[0] - bottomLeft[0]) || !(topRight[1] - bottomLeft[1])
  const sector2 = [[bottomLeft[0], y2], [x1, topRight[1]]]
  const sector3 = [[x2, bottomLeft[1]], [topRight[0], y1]]

  const sector1Ships = sea.hasShips(sector1[1], sector1[0]) ? countShips(sea, sector1[1], sector1[0]) : 0
  const sector4Ships = sea.hasShips(sector4[1], sector4[0]) ? countShips(sea, sector4[1], sector4[0]) : 0
  // sectors 1 and 4 are the bottom left and top right quadrants. For the edge case where we're given points that lie on a line, we will ignore sector 2 and 3 as they will be duplicates
  const sector2Ships = !isStraightLine && sea.hasShips(sector2[1], sector2[0]) ? countShips(sea, sector2[1], sector2[0]) : 0
  const sector3Ships = !isStraightLine && sea.hasShips(sector3[1], sector3[0]) ? countShips(sea, sector3[1], sector3[0]) : 0

  console.log(sea)

  return sector1Ships + sector2Ships + sector3Ships + sector4Ships
};
```