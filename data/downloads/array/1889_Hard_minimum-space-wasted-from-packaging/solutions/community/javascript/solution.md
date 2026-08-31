# [JavaScript] BinarySearch w/Explanation 2 Solutions

**Author:** stevenkinouye
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1254314/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/1254314/)

---

Credit to: [@Bakerston](https://leetcode.com/problems/minimum-space-wasted-from-packaging/discuss/1253948/Python-3-Binary-Search-%2B-pre-sum-explanation-with-picture.)

```javascript
var minWastedSpace = function(packages, boxSuppliers) {
    packages.sort((a, b) => a - b);
    const largestPackage = packages[packages.length - 1];
    
    // create a prefix sum array so we can calculate the total
    // size of packages from any 2 indices in constant time
    const packagesPrefixSum = [...packages];
    for (let i = 1; i < packagesPrefixSum.length; i++) {
        packagesPrefixSum[i] += packagesPrefixSum[i - 1];
    }

    // create a helper function to binary search for the largest
    // package that can fit in a box
    const indexOfLargestFittingPakage = (boxSize) => {
        let lo = -1;
        let hi = packages.length - 1;
        while (lo < hi) {
            const mid = Math.ceil((lo + hi) / 2);
            if (packages[mid] <= boxSize) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    let minimumWastedSpace = Infinity;
    for (const boxSupplier of boxSuppliers) {
        boxSupplier.sort((a, b) => a - b);

        // if we can't fit the largest package into the biggest box
        // we can skip calculating the supplier's wasted space
        if (boxSupplier[boxSupplier.length - 1] < largestPackage) continue;

        // iterate through the sorted boxes while keeping track of the
        // total wasted space and the last index we used.
        let lastFttngPkgIndex = -1;
        let totalWastedSpace = 0;
		
        for (const boxSize of boxSupplier) {
		    // get the index of the largest fitting box
            const lrgstFttngPkgIndex = indexOfLargestFittingPakage(boxSize);
			// calculate the number of packages to box
            const numPackagesToBox = lrgstFttngPkgIndex - lastFttngPkgIndex;
            if (numPackagesToBox === 0) continue;

            const totalBoxSize = boxSize * numPackagesToBox;

            // get the total size of the boxes already packaged
            const totalPackagedBoxesSize = lastFttngPkgIndex === -1 ? 0 : packagesPrefixSum[lastFttngPkgIndex];

            // the total package size from (exclusize)(lastFttngPkgIndex..lrgstFttngPkgIndex](inclusive)
            const totalPackagesSize = packagesPrefixSum[lrgstFttngPkgIndex] - totalPackagedBoxesSize;
            
			// add to the total wasted space for this box supplier
            totalWastedSpace += totalBoxSize - totalPackagesSize;
            
            // update the lastFttngPkgIndex so we know what boxes have already been boxed
            lastFttngPkgIndex = lrgstFttngPkgIndex;
        }
        
        // update the minimum wasted space
        minimumWastedSpace = Math.min(minimumWastedSpace, totalWastedSpace);
    }
    return (minimumWastedSpace < Infinity ? minimumWastedSpace : -1) % 1000000007;
};
```

Credit to [@lee215](https://leetcode.com/problems/minimum-space-wasted-from-packaging/discuss/1254116/JavaC%2B%2BPython-Binary-Search-should-not-use-prefix-sum)

```javascript
/////////////////////////////////////////////////////////////////////////////////////////////////

var minWastedSpace = function(packages, boxSuppliers) {
    packages.sort((a, b) => a - b);
    const largestPackage = packages[packages.length - 1];

    // create a helper function to binary search for the largest
    // package that can fit in a box
    const indexOfLargestFittingPakage = (boxSize) => {
        let lo = -1;
        let hi = packages.length - 1;
        while (lo < hi) {
            const mid = Math.ceil((lo + hi) / 2);
            if (packages[mid] <= boxSize) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    let minTotalSupplierBoxSize = Infinity;
    for (const boxSupplier of boxSuppliers) {
        boxSupplier.sort((a, b) => a - b);

        // if we can't fit the largest package into the biggest box
        // we can skip calculating the supplier's wasted space
        if (boxSupplier[boxSupplier.length - 1] < largestPackage) continue;

        // iterate through the sorted boxes while keeping track of the
        // total wasted space and the last index we used.
        let lastFttngPkgIndex = -1;
        let totalSupplierBoxSize = 0;
        for (const boxSize of boxSupplier) {
            const lrgstFttngPkgIndex = indexOfLargestFittingPakage(boxSize);
            const numPackagesToBox = lrgstFttngPkgIndex - lastFttngPkgIndex;
            totalSupplierBoxSize += boxSize * numPackagesToBox;
            
            // update the lastFttngPkgIndex so we know what boxes have already been boxed
            lastFttngPkgIndex = lrgstFttngPkgIndex;
        }
        
        // update the minimum wasted space
        minTotalSupplierBoxSize = Math.min(minTotalSupplierBoxSize, totalSupplierBoxSize);
    }
    if (minTotalSupplierBoxSize === Infinity) return -1;
    
    // get sum of all packages
    const totalPackagesSize = packages.reduce((sum, packageSize) => sum + packageSize);
    return (minTotalSupplierBoxSize - totalPackagesSize) % 1000000007;
};
```