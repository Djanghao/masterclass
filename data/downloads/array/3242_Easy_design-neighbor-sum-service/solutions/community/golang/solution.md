# easiest solution w/o extra space

**Author:** zkhrg
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5725384/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5725384/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```golang []
type NeighborSum struct {
	pGrid *[][]int
	n     int
}

func Constructor(grid [][]int) NeighborSum {
	return NeighborSum{pGrid: &grid, n: len(grid)}
}

func (this *NeighborSum) AdjacentSum(value int) int {
	sum := 0
	for i := 0; i < this.n; i++ {
		for j := 0; j < this.n; j++ {
			if (*this.pGrid)[i][j] == value {
				if i-1 >= 0 {
					sum += (*this.pGrid)[i-1][j]
				}
				if i+1 < this.n {
					sum += (*this.pGrid)[i+1][j]
				}
				if j-1 >= 0 {
					sum += (*this.pGrid)[i][j-1]
				}
				if j+1 < this.n {
					sum += (*this.pGrid)[i][j+1]
				}
			}
		}
	}
	return sum
}

func (this *NeighborSum) DiagonalSum(value int) int {
	sum := 0
	for i := 0; i < this.n; i++ {
		for j := 0; j < this.n; j++ {
			if (*this.pGrid)[i][j] == value {
				if i-1 >= 0 {
					if j - 1 >= 0 {
                        sum += (*this.pGrid)[i-1][j-1] 
                    }
                    if j + 1 < this.n {
                        sum += (*this.pGrid)[i-1][j+1] 
                    }
				}
				if i+1 < this.n {
					if j - 1 >= 0 {
                        sum += (*this.pGrid)[i+1][j-1] 
                    }
                    if j + 1 < this.n {
                        sum += (*this.pGrid)[i+1][j+1] 
                    }
				}
			}
		}
	}
	return sum
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * obj := Constructor(grid);
 * param_1 := obj.AdjacentSum(value);
 * param_2 := obj.DiagonalSum(value);
 */
```