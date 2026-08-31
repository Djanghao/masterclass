# Clear Code Dijkstra Algorithm (C++/Java/Python/Go/PHP)

**Author:** Cosmopolitan
**Votes:** 133
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/324923/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/324923/)

---

BFS Dijkstra algorithm: use a priority queue to choose the next step with the maximum value. Keep track of the mininum value along the path.

**C++:**
```
    int maximumMinimumPath(vector<vector<int>>& A) {
        static constexpr int DIRS[][2] {{0,1},{1,0},{0,-1},{-1,0}};
        priority_queue<tuple<int,int,int>> pq;
        pq.emplace(A[0][0], 0, 0);
        int n = A.size(), m = A[0].size(), maxscore = A[0][0];
        A[0][0] = -1; // visited
        while(!pq.empty()) {
            auto [a, i, j] = pq.top();
            pq.pop();
            maxscore = min(maxscore, a);
            if(i == n - 1 && j == m - 1)
                break;
            for(const auto& d : DIRS)
                if(int newi = d[0] + i, newj = d[1] + j;
                   newi >= 0 && newi < n && newj >= 0 && newj < m && A[newi][newj]>=0){
                    pq.emplace(A[newi][newj], newi, newj);
                    A[newi][newj] = -1;
                }
        }
        return maxscore;
    }
```
**Java:**
```
    public int maximumMinimumPath(int[][] A) {
        final int[][] DIRS = {{0,1},{1,0},{0,-1},{-1,0}};
        Queue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(b[0], a[0]));
        pq.offer(new int[] {A[0][0], 0, 0});
        int maxscore = A[0][0];
        A[0][0] = -1; // visited
        while(!pq.isEmpty()) {
            int[] top = pq.poll();
            int i = top[1], j = top[2], n = A.length, m = A[0].length;
            maxscore = Math.min(maxscore, top[0]);
            if(i == n - 1 && j == m - 1)
                break;
            for(int[] d : DIRS) {
                int newi = d[0] + i, newj = d[1] + j;
                if(newi >= 0 && newi < n && newj >= 0 && newj < m && A[newi][newj]>=0){
                    pq.offer(new int[] {A[newi][newj], newi, newj});
                    A[newi][newj] = -1;
                }
            }
        }
        return maxscore;
    }
```
**Python:**
```
class Solution(object):
    def maximumMinimumPath(self, A):
        """
        :type A: List[List[int]]
        :rtype: int
        """
        DIRS = [[0,1], [1,0], [0,-1], [-1,0]]
        pq = []
        # negate element to simulate max heap
        heappush(pq, (-A[0][0], 0, 0))
        n, m, maxscore = len(A), len(A[0]), A[0][0]
        while len(pq) != 0:
            (a, i, j) = heappop(pq)
            maxscore = min(maxscore, -a)
            if i == n - 1 and j == m - 1:
                break
            for d in DIRS:
                newi, newj = d[0] + i, d[1] + j
                if newi >= 0 and newi < n and newj >= 0 and newj < m and A[newi][newj] >= 0:
                    heappush(pq, (-A[newi][newj], newi, newj))
                    A[newi][newj] = -1;
        return maxscore
```
**Go:**
```
// The minimal implementation of the Priority Queue
type Item struct {
	value int   // The value of the cell.
	row int
	column int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	// Pop returns the greatest
	return pq[i].value > pq[j].value
}

func (pq *PriorityQueue) Push(x interface{}) {
	item := x.(*Item)
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil  // avoid memory leak
	*pq = old[0 : n-1]
	return item
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func Min(x, y int) int {
    if x > y {
        return y
    }
    return x
}

func maximumMinimumPath(A [][]int) int {
    DIRS := [][2]int{{0,1},{1,0},{0,-1},{-1,0}}
    pq := PriorityQueue{}
    heap.Push(&pq, &Item{A[0][0], 0, 0})
    n := len(A)
    m := len(A[0])
    maxscore := A[0][0];
    A[0][0] = -1; // visited
    for pq.Len() > 0 {
        top := heap.Pop(&pq).(*Item)
        maxscore = Min(maxscore, top.value)
        if top.row == n - 1 && top.column == m - 1 {
            break
        }
        for _, d := range DIRS {
            newi := d[0] + top.row
            newj := d[1] + top.column
            if newi >= 0 && newi < n && newj >= 0 && newj < m && A[newi][newj]>=0 {
                heap.Push(&pq, &Item{A[newi][newj], newi, newj});
                A[newi][newj] = -1;
            }
        }
    }
    return maxscore;
}
```
**PHP:**
```
    function maximumMinimumPath($A) {
        $DIRS = [[0,1],[1,0],[0,-1],[-1,0]];
        $pq = new SplPriorityQueue;
        $pq->insert([$A[0][0], 0, 0], $A[0][0]);
        $n = count($A);
        $m = count($A[0]);
        $maxscore = $A[0][0];
        $A[0][0] = -1; // visited
        while (!$pq->isEmpty()) {
            [$a, $i, $j] = $pq->extract();
            $maxscore = min($maxscore, $a);
            if($i == $n - 1 && $j == $m - 1)
                break;
            foreach ($DIRS as $d) {
                $newi = $d[0] + $i;
                $newj = $d[1] + $j;
                if ($newi >= 0 && $newi < $n && $newj >= 0 && $newj < $m && $A[$newi][$newj] >= 0) {
                    $pq->insert([$A[$newi][$newj], $newi, $newj], $A[$newi][$newj]);
                    $A[$newi][$newj] = -1;
                }
            }
        }
        return $maxscore;
    }