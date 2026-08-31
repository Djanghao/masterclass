# O(n^2 log(n)) solution explained with comments

**Author:** 495
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1256153/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1256153/)

---

* Approach is explained in comments below

### Python implementation
```
    def minWastedSpace(self, packages: List[int], suppliers: List[List[int]]) -> int:        
        M = 10**9+7
        # prepare the packages and boxes for binary search
        packages.sort()
        for sup in suppliers: sup.sort()

        # remove the suppliers which do not have a large enough box to fit the biggest package
        maxP = packages[-1]
        suppliers = [sup for sup in suppliers if maxP <= sup[-1]]

        # if no suppliers left, you can't fit all packages
        if not suppliers: return -1
                
        # space to be taken by the packages
        packageSpace = sum(packages)
        
        # find the space taken by the boxes
        
        # track minimum space taken starting with infinity
        minTotal = math.inf
        
        # go over all the supplier boxes
        for boxes in suppliers:
            
            # track space taken by the boxes 
            totalSpace = 0
            # track how many packages are counted
            p,pp = 0,0
            
            # go over each box
            for box in boxes:
                
                # split packages into which can be fitted in this box using bisect
                # all packages to the left of the split can be fitted in the box
                p = bisect.bisect_right(packages,box)
                
                # these boxes would take p*box space
                # but we already counted pp boxes in the previous iteration
                totalSpace += (p-pp)*box
                
                # remember how many packages are already boxed
                pp = p
                
            # if this set of boxes takes less space to fit all packages, update minTotal
            if totalSpace < minTotal:
                minTotal = totalSpace
                    
        # finally subtract space taken by packages from minTotal to get the minimum wasted space
        return (minTotal-packageSpace)%M
```

### Performance
* Given `m=n` the time complexity is `O(n^2 log(n))`
* Space complexity is `O(1)` assuming sorting is also `O(1)`

*Note*
If you binary search for a box in packages, you will find a box that fits more than one package, and you can compute the total space taken by the boxes that will be needed for all those packages (minus the ones you already accounted for previously) just by one multiplication operation.
If you binary search for a package in boxes, you will find the one right box that this package will go into, which means you will have to do a lot more +/- operations to arrive at the wasted space.
So although both the approaches are O(n^2 log n) given m=n, in practice, one approach allows for the kind of optimizations that the other approach doesn't.
(copied from my reply posted in another comment)
