# [GO]  90 % Faster Solution| | SPEED: 10 ms || MEMORY: 4.1 mb | |

**Author:** blessingman
**Votes:** 3
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/2307709/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/2307709/)

---

# **Hey,mate! This is my quick solution**
	func divideArray(nums []int)(bool) {
		sort.Ints(nums)
		res := true
		for i := 0 ; i < len(nums); i+=2{
			if nums[i]!=nums[i+1] {
				return false
			}
		}
		return res
	}

# **if you like it ,please, push arrow to lift up solution to the top ,thanks!**