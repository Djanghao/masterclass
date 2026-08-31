# 👍Runtime 312 ms Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/5242937/](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/5242937/)

---

# Code
```

type Solution struct {
	graph          [][][2]int
	parentOf       []int
	depthLevel     []int
	wtFreq         [][]int
	parentOfMatrix [][]int
}

func minOperationsQueries(n int, edges [][]int, queries [][]int) []int {
	s := &Solution{
		graph:      make([][][2]int, n),
		parentOf:   make([]int, n),
		depthLevel: make([]int, n),
		wtFreq:     make([][]int, n),
	}
	for i := range s.wtFreq {
		s.wtFreq[i] = make([]int, 27)
	}

	for _, edge := range edges {
		s.graph[edge[0]] = append(s.graph[edge[0]], [2]int{edge[1], edge[2]})
		s.graph[edge[1]] = append(s.graph[edge[1]], [2]int{edge[0], edge[2]})
	}

	s.populateData(0, -1, 1, make([]int, 27))
	s.parentOf[0] = 0
	s.parentOfMatrix = s.buildParentOfMatrix()

	results := make([]int, len(queries))

	for q, query := range queries {
		u, v := query[0], query[1]
		lca := s.lcaUsingBinaryLifting(u, v)

		maxFreqUV, totalWtFreqUV := 0, 0

		for wtVal := 1; wtVal <= 26; wtVal++ {
			freq := s.wtFreq[lca][wtVal]
			freqU := s.wtFreq[u][wtVal]
			freqV := s.wtFreq[v][wtVal]

			totalWtFreqUV += freqU + freqV - 2*freq

			if freqU+freqV-2*freq > maxFreqUV {
				maxFreqUV = freqU + freqV - 2*freq
			}
		}

		results[q] = totalWtFreqUV - maxFreqUV
	}

	return results
}

func (s *Solution) lcaUsingBinaryLifting(u, v int) int {
	if s.depthLevel[u] > s.depthLevel[v] {
		return s.lcaUsingBinaryLifting(v, u)
	}

	depthLevelDiff := s.depthLevel[v] - s.depthLevel[u]

	for bitPos := 0; bitPos < 31; bitPos++ {
		if (depthLevelDiff & (1 << bitPos)) != 0 {
			v = s.parentOfMatrix[bitPos][v]
		}
	}

	if u == v {
		return v
	}

	for bitPos := 30; bitPos >= 0; bitPos-- {
		if s.parentOfMatrix[bitPos][u] != s.parentOfMatrix[bitPos][v] {
			u = s.parentOfMatrix[bitPos][u]
			v = s.parentOfMatrix[bitPos][v]
		}
	}

	return s.parentOfMatrix[0][v]
}

func (s *Solution) populateData(node, par, level int, wts []int) {
	s.depthLevel[node] = level
	s.parentOf[node] = par

	copy(s.wtFreq[node], wts)

	for _, child := range s.graph[node] {
		if child[0] == par {
			continue
		}

		wts[child[1]]++
		s.populateData(child[0], node, level+1, wts)
		wts[child[1]]--
	}
}

func (s *Solution) buildParentOfMatrix() [][]int {
	n, limit := len(s.parentOf), 31
	parMat := make([][]int, limit)
	for i := range parMat {
		parMat[i] = make([]int, n)
	}

	copy(parMat[0], s.parentOf)

	for bitPos := 1; bitPos < limit; bitPos++ {
		for indx := 0; indx < n; indx++ {
			prevParent := parMat[bitPos-1][indx]
			parMat[bitPos][indx] = parMat[bitPos-1][prevParent]
		}
	}

	return parMat
}
```