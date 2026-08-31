# Swift top down Bitmask DP - O(n^2*2^n)

**Author:** cjcoax
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/962605/](https://leetcode.com/problems/minimum-incompatibility/solutions/962605/)

---

	class Solution {
		var arr: [Int]!, n = 0, size = 0, total = 0, starts: [Int]!
		var dp = [[[[Int]]]](repeating:
								[[[Int]]](repeating:
											[[Int]] (repeating:
														[Int](repeating: -1, count: 17),
													 count: 8),
										  count: 1<<16),
							 count: 16)
		let inf = 10000000000

		func minimumIncompatibility(_ nums: [Int], _ k: Int) -> Int {
			guard k != 1 else {
				let set = Set(nums)
				if set.count == nums.count {
					return nums.max()!-nums.min()!
				}
				return -1
			}
			guard nums.count != k else {
				return 0
			}
			arr = nums.sorted()
			starts = [0] + arr
			n = arr.count
			total = (1<<n)-1
			size = n/k

			let res = dfs(0,0,0,0)
			return res == inf ? -1 : res
		}

		/**
		 cur is the element we need to start scanning from
															  01234567
		 mask is used to track which elemnents are used, e.g. 01100011 means 1st, 2nd, 6th and 7th elements are used
		 gsize tracks the size of this group, each group is arr.count/k elements
		 start tracks the starting point of this group, it's used to find the min element of this group, since we are sorting the array, starting point is minimum element. It's 1-based index. so if array size is n, start will go from, 1 to n instead of 0 to n-1.
		 */
		func dfs(_ cur: Int,
				 _ mask: Int,
				 _ gsize: Int,
				 _ start: Int) -> Int {

			if mask == total {
				return 0
			}

			guard dp[cur][mask][gsize][start] == -1 else {
				return dp[cur][mask][gsize][start]
			}

			var res = inf

			// start = 0 means this is a new group
			if start == 0 {
				var i = 0, j = 0
				//for new group we first find the first element in the group
				while i < n {
					j = 1<<i
					guard j&mask == 0 else {
						i += 1
						continue
					}
					break
				}
				let mc = mask|j

				for k in stride(from: i+1, to: n, by: 1) {
					//find next eligible element
					guard arr[i] != arr[k] else {
						continue
					}
					//start array is 1 based so we add 1 to i
					res = min(res, dfs(k, mc, 1, i + 1))
				}
			} else {
				for i in stride(from: cur, to: n, by: 1) {
					let j = 1<<i
					guard mask&j == 0 else {
						continue
					}
					// if this is the last item in the group, we need to finx max-min and add it to result
					if gsize == size-1 {
						let mn = starts[start]
						let mx = arr[i]
						//because this group has ended, next cur will start from 0, next group size will be 0 and start will be unavailable (0 means unavailable and start array is 1 based)
						res = min(res, mx-mn + dfs(0, mask|j, 0, 0))
					} else {
						var next = i+1
						while next < n && (arr[i] == arr[next]) {
							next += 1
						}
						//find next item in group
						if next < n {
							res = min(res, dfs(next, mask|j, gsize + 1, start))
						}
					}
				}
			}
			dp[cur][mask][gsize][start] = res

			return res
		}
	}
