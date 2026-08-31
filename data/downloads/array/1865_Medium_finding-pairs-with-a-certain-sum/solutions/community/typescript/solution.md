# TypeScript with HashMap and sorted array (faster than 100%)

**Author:** hablaba
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1226686/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1226686/)

---

Sort nums1 since we aren't adding values to it so we can break out of nums1 early once it is more than the total we are counting. Add frequency of nums2 to a map so that we can access that frequency with O(1) complexity. Since nums2 is the only array increasing in size, the worst case order of complexity to count is O(n1) (where n1 = nums1.length)
```
class FindSumPairs {
    private map: Map<number, number>;
    constructor(private nums1: number[], private nums2: number[]) {
        nums1.sort((a,b)=> a-b);
        this.map = nums2.reduce((acc, ea) => {
            acc.set(ea, (acc.get(ea) || 0) + 1);
            return acc;
        }, new Map<number, number>());
    }

    add(index: number, val: number): void {
        const numberWas = this.nums2[index];
        this.nums2[index] += val;
        this.map.set(numberWas, this.map.get(numberWas)-1);
        const numberIs = this.nums2[index]
        this.map.set(numberIs, (this.map.get(numberIs) || 0) + 1);
    }

    count(tot: number): number {
        let total = 0;
        for(let num of this.nums1) {
            if(num > tot) {
                return total;
            }
            total += this.map.get(tot-num) || 0;
        }
        return total;
    }
}
```