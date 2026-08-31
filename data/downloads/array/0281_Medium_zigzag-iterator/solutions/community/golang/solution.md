# GO

**Author:** phsujmBdXd
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/6038847/](https://leetcode.com/problems/zigzag-iterator/solutions/6038847/)

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
```golang []
type ZigzagIterator struct {
    	v1        []int
	v2        []int
	position1 int
	position2 int
}

func Constructor(v1, v2 []int) *ZigzagIterator {
    return &ZigzagIterator{v1, v2, 0, 0}
}

func (this *ZigzagIterator) next() int {
    	out := 0
	if this.position1 <= this.position2 {
		if len(this.v1) > this.position1 {
			out = this.v1[this.position1]
			this.position1++
		} else {
			if len(this.v2) > this.position2 {
				out = this.v2[this.position2]
				this.position2++
			}
		}
	} else {
		if len(this.v2) > this.position2 {
			out = this.v2[this.position2]
			this.position2++
		} else {
			if len(this.v1) > this.position1 {
				out = this.v1[this.position1]
				this.position1++
			}
		}
	}

	return out
}

func (this *ZigzagIterator) hasNext() bool {
	return len(this.v1) > this.position1 || len(this.v2) > this.position2
}

/**
 * Your ZigzagIterator object will be instantiated and called as such:
 * obj := Constructor(param_1, param_2);
 * for obj.hasNext() {
 *	 ans = append(ans, obj.next())
 * }
 */
```