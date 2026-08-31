# JavaScript Solution O(n) Beats 92%R and 100%M using map, easy to understand

**Author:** congweibai
**Votes:** 10
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/415255/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/415255/)

---

	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number}
	 */
	var findPairs = function(nums, k) {
		if(nums.length === 0 || k < 0) return 0
		let myMap = new Map(),
			count = 0
		//Get wordcount
		for(num of nums){
			myMap.set(num,(myMap.get(num)+1) || 1)
		}
		
		//search solutions
		myMap.forEach((value,key) =>{
			if(k === 0){
				if(value > 1) count++
			}
			else{
				if(myMap.has(key+k)) count++
			}
		})

		return count
	};