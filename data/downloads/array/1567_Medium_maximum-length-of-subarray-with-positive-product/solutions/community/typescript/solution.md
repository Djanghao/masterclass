# Typescript O(1) Space O(n) Time

**Author:** Sameer177
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/1503453/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/1503453/)

---

```
function getMaxLen(nums: number[]): number {
	// pp == POSITIVE PRODUCT
	// np == NEGATIVE PRODUCT
	// pl == POSITIVE LENGTH
	// nl == NEGATIVE LENGTH
    let [pp,pl,np,nl] = [1,0,null,0];
    let maxLength = 0;
    for(let i = 0;i  < nums.length; i++) {
        let num = nums[i];
        if(num == 0) {
            [pp,pl,np,nl] = [1,0,null,0];
            continue;
        }
        pp *= num;
        pl++;
        if(np) {
            np *= num;
            nl++
        }
        if(pp < 0) {
            [pp,pl,np,nl] = np ? [np,nl,pp,pl] : [1,0,pp,pl];
        }
        maxLength = Math.max(maxLength,pl);
    }
    return maxLength;
};